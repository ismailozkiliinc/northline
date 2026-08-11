import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  locale,
}: {
  title: string;
  description: string;
  locale: string;
}): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}
