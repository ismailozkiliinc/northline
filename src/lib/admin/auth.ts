import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import type { AdminRole, AdminUser } from "@/lib/admin/permissions";
import type { AuditLogRecord } from "@/lib/cms/types";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isProductionRuntime, requireProdAdminConfig } from "@/lib/env";

const SESSION_COOKIE = "northline_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const REMEMBER_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  if (secret && secret !== "change-me-in-production" && secret.length >= 16) {
    return secret;
  }
  if (isProductionRuntime()) return "";
  return process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || "dev-only-session-secret";
}

function sign(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

function createDevSessionToken(email: string, role: AdminRole, remember: boolean): string {
  const exp = Date.now() + (remember ? REMEMBER_MAX_AGE : SESSION_MAX_AGE) * 1000;
  const payload = Buffer.from(JSON.stringify({ email, role, exp, v: 1 })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function parseDevSessionToken(token: string): AdminUser | null {
  if (!getSessionSecret()) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = sign(payload);
  try {
    if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as {
      email: string;
      role: AdminRole;
      exp: number;
    };
    if (Date.now() > data.exp) return null;
    return {
      id: `dev-${data.email}`,
      email: data.email,
      fullName: "Admin",
      role: data.role,
    };
  } catch {
    return null;
  }
}

export async function getAdminUser(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const devToken = cookieStore.get(SESSION_COOKIE)?.value;
  if (devToken) {
    const devUser = parseDevSessionToken(devToken);
    if (devUser) return devUser;
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", user.id)
    .maybeSingle();

  const role = (profile?.role as AdminRole | undefined) ?? "admin";
  return {
    id: user.id,
    email: user.email,
    fullName: profile?.full_name ?? null,
    role,
  };
}

export async function requireAdminUser(): Promise<AdminUser> {
  const user = await getAdminUser();
  if (!user) throw new Error("UNAUTHORIZED");
  return user;
}

export async function adminLoginWithCredentials(
  email: string,
  password: string,
  remember = false,
): Promise<{ ok: true; user: AdminUser } | { ok: false; error: string }> {
  if (isProductionRuntime()) {
    const cfg = requireProdAdminConfig();
    if (!cfg.ok) {
      console.error("[admin]", cfg.error);
      return { ok: false, error: "Sunucu yapılandırması eksik. Yönetici ile iletişime geçin." };
    }
  }

  const normalizedEmail = email.trim().toLowerCase();
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase() ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";
  const adminRole = (process.env.ADMIN_ROLE as AdminRole | undefined) ?? "super_admin";

  if (adminEmail && adminPassword && normalizedEmail === adminEmail && password === adminPassword) {
    if (!getSessionSecret()) {
      return { ok: false, error: "Sunucu yapılandırması eksik (ADMIN_SESSION_SECRET)." };
    }
    const token = createDevSessionToken(normalizedEmail, adminRole, remember);
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: isProductionRuntime(),
      sameSite: "lax",
      path: "/",
      maxAge: remember ? REMEMBER_MAX_AGE : SESSION_MAX_AGE,
    });

    return {
      ok: true,
      user: { id: `dev-${normalizedEmail}`, email: normalizedEmail, fullName: "Admin", role: adminRole },
    };
  }

  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });
    if (error) return { ok: false, error: "E-posta veya şifre hatalı." };

    const { data: profile } = await supabase
      .from("profiles")
      .select("role, full_name")
      .eq("id", data.user.id)
      .maybeSingle();

    return {
      ok: true,
      user: {
        id: data.user.id,
        email: data.user.email ?? normalizedEmail,
        fullName: profile?.full_name ?? null,
        role: (profile?.role as AdminRole) ?? "admin",
      },
    };
  }

  return { ok: false, error: "E-posta veya şifre hatalı." };
}

export async function adminLogout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);

  const supabase = await createSupabaseServerClient();
  if (supabase) await supabase.auth.signOut();
}

export async function logActivity(
  user: AdminUser,
  action: string,
  entity?: string,
  entityId?: string,
  meta?: Record<string, unknown>,
): Promise<void> {
  const { getCmsStore } = await import("@/lib/cms/store");
  const store = getCmsStore();
  await store.auditLog.create({
    actor_id: user.id,
    actor_email: user.email,
    action,
    entity,
    entity_id: entityId,
    meta,
    created_at: new Date().toISOString(),
  } as AuditLogRecord);
}

export function generateId(): string {
  return randomBytes(16).toString("hex");
}
