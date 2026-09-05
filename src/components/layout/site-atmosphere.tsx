"use client";

import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type AtmosphereId =
  | "home"
  | "web"
  | "mobile"
  | "ai"
  | "work"
  | "about"
  | "contact"
  | "default";

function resolveAtmosphere(pathname: string): AtmosphereId {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p === "/" || p === "") return "home";
  if (p.includes("/hizmetler/web") || p.includes("/services/web")) return "web";
  if (p.includes("/hizmetler/mobil") || p.includes("/services/mobile")) return "mobile";
  if (p.includes("/hizmetler/ai") || p.includes("/services/ai")) return "ai";
  if (p.includes("/calismalar") || p.includes("/work")) return "work";
  if (p.includes("/hakkimizda") || p.includes("/about")) return "about";
  if (p.includes("/iletisim") || p.includes("/contact")) return "contact";
  return "default";
}

/**
 * Fixed, non-WebGL ambient backdrop. Variants keep pages related but not identical.
 */
export function SiteAtmosphere() {
  const pathname = usePathname();
  const id = resolveAtmosphere(pathname);

  return (
    <div
      className={cn("site-atmosphere", `site-atmosphere--${id}`)}
      aria-hidden
    />
  );
}
