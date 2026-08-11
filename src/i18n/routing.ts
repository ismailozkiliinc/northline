import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/hizmetler": {
      tr: "/hizmetler",
      en: "/services",
    },
    "/hizmetler/web": {
      tr: "/hizmetler/web",
      en: "/services/web",
    },
    "/hizmetler/mobil": {
      tr: "/hizmetler/mobil",
      en: "/services/mobile",
    },
    "/hizmetler/ui-ux": {
      tr: "/hizmetler/ui-ux",
      en: "/services/ui-ux",
    },
    "/hizmetler/saas": {
      tr: "/hizmetler/saas",
      en: "/services/saas",
    },
    "/hizmetler/e-ticaret": {
      tr: "/hizmetler/e-ticaret",
      en: "/services/ecommerce",
    },
    "/hizmetler/ai": {
      tr: "/hizmetler/ai",
      en: "/services/ai",
    },
    "/calismalar": {
      tr: "/calismalar",
      en: "/work",
    },
    "/calismalar/[slug]": {
      tr: "/calismalar/[slug]",
      en: "/work/[slug]",
    },
    "/surec": {
      tr: "/surec",
      en: "/process",
    },
    "/hakkimizda": {
      tr: "/hakkimizda",
      en: "/about",
    },
    "/paketler": {
      tr: "/paketler",
      en: "/packages",
    },
    "/icgoruler": {
      tr: "/icgoruler",
      en: "/insights",
    },
    "/icgoruler/[slug]": {
      tr: "/icgoruler/[slug]",
      en: "/insights/[slug]",
    },
    "/sss": {
      tr: "/sss",
      en: "/faq",
    },
    "/proje-baslat": {
      tr: "/proje-baslat",
      en: "/start-project",
    },
    "/iletisim": {
      tr: "/iletisim",
      en: "/contact",
    },
    "/gizlilik": {
      tr: "/gizlilik",
      en: "/privacy",
    },
    "/kvkk": {
      tr: "/kvkk",
      en: "/kvkk",
    },
    "/cerezler": {
      tr: "/cerezler",
      en: "/cookies",
    },
    "/kullanim-kosullari": {
      tr: "/kullanim-kosullari",
      en: "/terms",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
