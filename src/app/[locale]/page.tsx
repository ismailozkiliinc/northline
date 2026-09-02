import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { HomeServices } from "@/components/home/home-services";
import { ExperienceStories } from "@/components/home/experience-stories";
import { HomeWhy } from "@/components/home/home-why";
import { HomeProcess } from "@/components/home/home-process";
import { PageCta } from "@/components/system/page-cta";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const base = pageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/",
  });

  return {
    ...base,
    title: t("title"),
    openGraph: {
      ...base.openGraph,
      title: t("title"),
      description: t("description"),
      url: locale === "en" ? `${siteConfig.url}/en` : siteConfig.url,
      siteName: siteConfig.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pitch = await getTranslations("homePitch");

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(locale)]} />
      <Hero />
      <HomeServices />
      <ExperienceStories />
      <HomeWhy />
      <HomeProcess />
      <PageCta
        title={pitch("ctaTitle")}
        body={pitch("ctaBody")}
        primary={{ href: "/proje-baslat", label: pitch("ctaPrimary") }}
        secondary={{ href: "/iletisim", label: pitch("ctaSecondary") }}
      />
    </>
  );
}
