import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  locale,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  locale: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  const localePath =
    path === undefined
      ? undefined
      : locale === "en"
        ? path === "/"
          ? "/en"
          : `/en${path}`
        : path;

  const canonical = localePath ? absoluteUrl(localePath) : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
    ...(canonical
      ? {
          alternates: {
            canonical,
            languages: path
              ? {
                  tr: absoluteUrl(path === "/" ? "/" : path),
                  en: absoluteUrl(path === "/" ? "/en" : `/en${path}`),
                }
              : undefined,
          },
        }
      : {}),
    openGraph: {
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      url: canonical,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/twitter-image.png"],
    },
  };
}
