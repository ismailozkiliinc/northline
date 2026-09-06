import { defineRouting } from "next-intl/routing";

/**
 * Static export cannot use middleware / pathnames rewrites.
 * Same path segments for every locale; always prefixed (/tr/..., /en/...).
 */
export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/** App pathnames used by typed Link hrefs (no localized rewrites under static export). */
export type Pathnames =
  | "/"
  | "/hizmetler"
  | "/hizmetler/web"
  | "/hizmetler/mobil"
  | "/hizmetler/ui-ux"
  | "/hizmetler/saas"
  | "/hizmetler/e-ticaret"
  | "/hizmetler/ai"
  | "/calismalar"
  | "/calismalar/[slug]"
  | "/surec"
  | "/hakkimizda"
  | "/paketler"
  | "/icgoruler"
  | "/icgoruler/[slug]"
  | "/sss"
  | "/proje-baslat"
  | "/iletisim"
  | "/gizlilik"
  | "/kvkk"
  | "/cerezler"
  | "/kullanim-kosullari";
