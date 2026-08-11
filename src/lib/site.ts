export const siteConfig = {
  name: "Northline",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://northline.studio",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@northline.studio",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
    x: process.env.NEXT_PUBLIC_X ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
  },
  locales: ["tr", "en"] as const,
  defaultLocale: "tr" as const,
};
