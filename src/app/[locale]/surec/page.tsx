import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProcessHero } from "@/components/process/process-hero";
import { ProcessTimeline } from "@/components/process/process-timeline";
import {
  ProcessTrust,
  ProcessLifecycle,
  ProcessDeliverables,
  ProcessTech,
  ProcessFinalCta,
} from "@/components/process/process-sections";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "processPage" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDesc"),
    locale,
  });
}

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProcessHero />
      <ProcessTimeline />
      <ProcessTrust />
      <ProcessLifecycle />
      <ProcessDeliverables />
      <ProcessTech />
      <ProcessFinalCta />
    </>
  );
}
