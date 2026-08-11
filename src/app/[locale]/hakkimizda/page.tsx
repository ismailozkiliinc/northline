import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { PremiumVisual } from "@/components/shared/premium-visual";
import { media } from "@/lib/media";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const sections = [
    {
      title: t("why"),
      body: t("whyBody"),
      src: media.about.materials,
      alt:
        locale === "tr"
          ? "Northline tasarım materyalleri ve craft detayı"
          : "Northline design materials and craft detail",
    },
    {
      title: t("how"),
      body: t("howBody"),
      src: media.about.lounge,
      alt:
        locale === "tr"
          ? "Northline stüdyo toplantı alanı"
          : "Northline studio meeting lounge",
    },
    {
      title: t("approach"),
      body: t("approachBody"),
      src: media.studio.strategy,
      alt:
        locale === "tr"
          ? "Northline strateji ve araştırma masası"
          : "Northline strategy and research table",
    },
    {
      title: t("quality"),
      body: t("qualityBody"),
      src: media.about.craft,
      alt:
        locale === "tr"
          ? "Northline UI design system çalışma alanı"
          : "Northline UI design system workspace",
    },
  ];

  return (
    <>
      <section className="border-b border-white/10 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />
        </div>
      </section>

      <section className="border-b border-white/10 py-10 md:py-14">
        <div className="container-wide">
          <div className="overflow-hidden rounded-[var(--radius-media)] border border-border shadow-[var(--shadow-depth)]">
            <PremiumVisual
              src={media.about.studio}
              alt={
                locale === "tr"
                  ? "Northline stüdyo çalışma alanı"
                  : "Northline studio workspace"
              }
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page space-y-20">
          {sections.map((section, i) => (
            <Reveal
              key={section.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h2 className="font-display text-2xl font-semibold md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              </div>
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]">
                  <PremiumVisual
                    src={section.src}
                    alt={section.alt}
                    className="w-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
