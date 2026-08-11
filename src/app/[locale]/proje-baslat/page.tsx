import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectWizard } from "@/components/forms/project-wizard";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "start" });
  return pageMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
  });
}

export default async function StartProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("start");
  const loc = (await getLocale()) as "tr" | "en";

  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-page">
          <ProjectWizard locale={loc} />
        </div>
      </section>
    </>
  );
}
