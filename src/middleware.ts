import { createServerClient } from "@supabase/ssr";
import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const ADMIN_PUBLIC = ["/admin/login", "/admin/api/auth"];

function isAdminPublic(pathname: string) {
  return ADMIN_PUBLIC.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

async function hasAdminSession(request: NextRequest, response: NextResponse) {
  const devToken = request.cookies.get("northline_admin_session")?.value;
  if (devToken) return true;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return Boolean(devToken);
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return Boolean(user);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const response = NextResponse.next();

    if (pathname.startsWith("/admin/login")) {
      const loggedIn = await hasAdminSession(request, response);
      if (loggedIn) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return response;
    }

    if (isAdminPublic(pathname)) return response;

    const loggedIn = await hasAdminSession(request, response);
    if (!loggedIn) {
      const login = new URL("/admin/login", request.url);
      login.searchParams.set("next", pathname);
      return NextResponse.redirect(login);
    }
    return response;
  }

  if (pathname.startsWith("/api/admin")) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/admin/:path*", "/api/admin/login", "/api/admin/:path*", "/(tr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
