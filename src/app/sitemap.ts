import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";
import { routing } from "@/i18n/routing";

const staticPaths = [
  "/",
  "/hizmetler",
  "/hizmetler/web",
  "/hizmetler/mobil",
  "/hizmetler/ui-ux",
  "/hizmetler/saas",
  "/hizmetler/e-ticaret",
  "/hizmetler/ai",
  "/calismalar",
  "/surec",
  "/hakkimizda",
  "/paketler",
  "/icgoruler",
  "/sss",
  "/proje-baslat",
  "/iletisim",
  "/gizlilik",
  "/kvkk",
  "/cerezler",
  "/kullanim-kosullari",
] as const;

function localeUrl(locale: "tr" | "en", pathname: string) {
  const prefix = locale === "tr" ? "" : "/en";
  const path = pathname === "/" ? "" : pathname;
  return `${siteConfig.url}${prefix}${path}`;
}

function localizedPath(
  pathname: (typeof staticPaths)[number],
  locale: "tr" | "en",
): string {
  const entry = routing.pathnames[pathname as keyof typeof routing.pathnames];
  if (!entry) return pathname;
  if (typeof entry === "string") return entry;
  return entry[locale];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      const loc = localizedPath(path, locale);
      entries.push({
        url: localeUrl(locale, loc),
        lastModified: new Date(),
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.7,
      });
    }

    for (const project of projects) {
      const loc =
        locale === "tr"
          ? `/calismalar/${project.slug}`
          : `/work/${project.slug}`;
      entries.push({
        url: localeUrl(locale, loc),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const post of blogPosts) {
      const loc =
        locale === "tr"
          ? `/icgoruler/${post.slug}`
          : `/insights/${post.slug}`;
      entries.push({
        url: localeUrl(locale, loc),
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
