export const siteConfig = {
  name: "NISCRAFT",
  // Prefer NEXT_PUBLIC_SITE_URL; fallback only for local/dev scaffolding
  url: (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://niscraft.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@niscraft.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
    x: process.env.NEXT_PUBLIC_X ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    behance: process.env.NEXT_PUBLIC_BEHANCE ?? "",
  },
  locales: ["tr", "en"] as const,
  defaultLocale: "tr" as const,
};
