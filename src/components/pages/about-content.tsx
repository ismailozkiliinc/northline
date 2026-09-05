"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/system/page-hero";
import { PageCta } from "@/components/system/page-cta";
import { SectionLabel } from "@/components/system/section-label";
import { GradientHeading } from "@/components/system/gradient-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProcessStudio } from "@/components/visuals/exclusive-scenes";
import { AboutProcessShowcase } from "@/components/pages/about-process";

export function AboutContent() {
  const t = useTranslations("about");
  const steps = t.raw("approachSteps") as { num: string; title: string; body: string }[];
  const values = t.raw("values") as { title: string; body: string }[];
  const whyItems = t.raw("whyItems") as { title: string; body: string }[];
  const stats = t.raw("whoStats") as { value: string; label: string }[];

  return (
    <>
      <PageHero
        atmosphere="about"
        eyebrow={t("eyebrow")}
        titleBefore={t("heroTitleBefore")}
        titleHighlight={t("heroTitleHighlight")}
        titleAfter={t("heroTitleAfter")}
        subtitle={t("heroBody")}
        primary={{ href: "/proje-baslat", label: t("heroCta") }}
        secondary={{ href: "/hizmetler", label: t("heroSecondary") }}
        visual={<ProcessStudio />}
      />

      <section className="border-t border-white/8 bg-transparent py-20 md:py-28">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("whoEyebrow")}</SectionLabel>
            <GradientHeading as="h2" className="max-w-[14ch] text-[clamp(1.85rem,3.4vw,2.85rem)] leading-[1.1]">
              {t("whoTitle")}
            </GradientHeading>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#98A2B3]">{t("whoBody")}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="rounded-[1.75rem] border border-indigo-100 bg-transparent p-8 shadow-[0_20px_50px_-20px_rgba(79,110,247,0.18)] md:p-10">
              <p className="font-display text-xl font-semibold leading-snug tracking-tight text-[#F7F9FC] md:text-2xl">
                {t("whoQuote")}
              </p>
              <ul className="mt-10 grid grid-cols-3 gap-4 border-t border-white/8 pt-8">
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <p className="font-display text-2xl font-bold text-brand-gradient">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-medium tracking-wide text-[#98A2B3] uppercase">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <AboutProcessShowcase
        eyebrow={t("approachEyebrow")}
        title={t("approachTitle")}
        body={t("approachBody")}
        steps={steps}
      />

      <section className="bg-transparent py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-xl">
            <SectionLabel>{t("valuesEyebrow")}</SectionLabel>
            <GradientHeading as="h2" className="text-[clamp(1.85rem,3.4vw,2.85rem)] leading-[1.1]">
              {t("valuesTitle")}
            </GradientHeading>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.06}
                className={i === 0 ? "lg:col-span-2" : undefined}
              >
                <article
                  className={`h-full rounded-[1.75rem] border border-white bg-transparent p-8 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.08)] ${
                    i === 0 ? "md:p-10" : ""
                  }`}
                >
                  <h3
                    className={`font-display font-bold tracking-tight text-[#F7F9FC] ${
                      i === 0 ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#98A2B3] md:text-base">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-transparent py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{t("whyEyebrow")}</SectionLabel>
            <GradientHeading as="h2" className="max-w-[12ch] text-[clamp(1.85rem,3.4vw,2.85rem)] leading-[1.1]">
              {t("whyTitle")}
            </GradientHeading>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#98A2B3]">{t("whyLead")}</p>
          </Reveal>
          <ul className="space-y-0 divide-y divide-[#eef2f7] border-y border-white/8">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} as="li" className="py-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#F7F9FC]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#98A2B3]">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        title={t("ctaTitle")}
        body={t("ctaBody")}
        primary={{ href: "/proje-baslat", label: t("ctaPrimary") }}
        secondary={{ href: "/iletisim", label: t("ctaSecondary") }}
      />
    </>
  );
}
