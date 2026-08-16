import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { HomeServices } from "@/components/home/home-services";
import { ExperienceStories } from "@/components/home/experience-stories";
import { HomeWhy } from "@/components/home/home-why";
import { HomeProcess } from "@/components/home/home-process";
import { PageCta } from "@/components/system/page-cta";
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
  const pitch = await getTranslations("homePitch");

  return (
    <>
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
