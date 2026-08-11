import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/shared/cta-band";
import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { Principles } from "@/components/home/principles";
import { ProcessCinema } from "@/components/home/process-cinema";
import {
  IndustriesStrip,
  TechStack,
  InsightsTeaser,
  HomeFaq,
  DiscoveryBand,
  JourneyStrip,
} from "@/components/home/home-extras";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${siteConfig.url}${locale === "en" ? "/en" : ""}`,
      languages: {
        tr: siteConfig.url,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: siteConfig.url,
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

  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesShowcase />
      <Principles />
      <ProcessCinema />
      <IndustriesStrip />
      <JourneyStrip />
      <TechStack />
      <InsightsTeaser />
      <HomeFaq />
      <DiscoveryBand />
      <CtaBand />
    </>
  );
}
