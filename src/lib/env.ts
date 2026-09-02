/**
 * Production environment guards — server-only.
 * Never import from Client Components.
 */

const PLACEHOLDER_RE = /YOUR_|YOUR-|example\.com|localhost|127\.0\.0\.1|change-me-in-production|onboarding@resend\.dev/i;

export function isProductionRuntime() {
  return process.env.NODE_ENV === "production";
}

function isPlaceholder(value: string | undefined | null) {
  if (!value?.trim()) return true;
  return PLACEHOLDER_RE.test(value);
}

export function requireProdAdminConfig(): { ok: true } | { ok: false; error: string } {
  if (!isProductionRuntime()) return { ok: true };

  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();

  if (!email || isPlaceholder(email) || !password || isPlaceholder(password)) {
    return { ok: false, error: "ADMIN_EMAIL and ADMIN_PASSWORD must be set in production." };
  }
  if (!secret || isPlaceholder(secret) || secret.length < 32) {
    return {
      ok: false,
      error: "ADMIN_SESSION_SECRET must be a strong secret (min 32 chars) in production. Run: openssl rand -hex 32",
    };
  }
  return { ok: true };
}

export function getResendConfig():
  | { ok: true; apiKey: string; from: string; to: string }
  | { ok: false; error: string } {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = (process.env.RESEND_FROM ?? process.env.RESEND_FROM_EMAIL)?.trim();
  const to = (process.env.LEAD_NOTIFY_EMAIL ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL)?.trim();

  if (!apiKey || isPlaceholder(apiKey)) {
    return { ok: false, error: "RESEND_API_KEY is not configured." };
  }
  if (!from || isPlaceholder(from)) {
    return { ok: false, error: "RESEND_FROM is not configured (use a verified domain address)." };
  }
  if (!to || isPlaceholder(to)) {
    return { ok: false, error: "LEAD_NOTIFY_EMAIL is not configured." };
  }

  return { ok: true, apiKey, from, to };
}

/** Returns site URL; logs hard error in production if missing/placeholder. */
export function assertPublicSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (isProductionRuntime() && (!url || isPlaceholder(url) || !/^https:\/\//i.test(url))) {
    console.error(
      "[config] NEXT_PUBLIC_SITE_URL must be your live HTTPS domain in production (e.g. https://niscraft.com).",
    );
  }
  return url && !isPlaceholder(url) ? url.replace(/\/$/, "") : "https://niscraft.com";
}

export type ProdEnvReport = {
  ok: boolean;
  missing: string[];
};

/** Non-throwing production readiness report for boot / scripts. */
export function reportProductionEnv(): ProdEnvReport {
  if (!isProductionRuntime()) return { ok: true, missing: [] };

  const missing: string[] = [];
  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  if (!site || isPlaceholder(site) || !/^https:\/\//i.test(site)) missing.push("NEXT_PUBLIC_SITE_URL");
  if (!contact || isPlaceholder(contact)) missing.push("NEXT_PUBLIC_CONTACT_EMAIL");

  const resend = getResendConfig();
  if (!resend.ok) {
    if (resend.error.includes("RESEND_API_KEY")) missing.push("RESEND_API_KEY");
    if (resend.error.includes("RESEND_FROM")) missing.push("RESEND_FROM");
    if (resend.error.includes("LEAD_NOTIFY")) missing.push("LEAD_NOTIFY_EMAIL");
  }

  const admin = requireProdAdminConfig();
  if (!admin.ok) {
    if (admin.error.includes("ADMIN_EMAIL")) missing.push("ADMIN_EMAIL", "ADMIN_PASSWORD");
    if (admin.error.includes("ADMIN_SESSION_SECRET")) missing.push("ADMIN_SESSION_SECRET");
  }

  return { ok: missing.length === 0, missing: [...new Set(missing)] };
}
