import { siteConfig } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description:
      "Digital product studio for web, mobile, AI, and growth systems.",
  };
}

export function websiteJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: locale === "en" ? `${siteConfig.url}/en` : siteConfig.url,
    inLanguage: locale === "en" ? "en" : "tr",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
