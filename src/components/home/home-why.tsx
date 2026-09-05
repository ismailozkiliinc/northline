"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/system/section-label";
import { GradientHeading } from "@/components/system/gradient-heading";

export function HomeWhy() {
  const t = useTranslations("homePitch");
  const items = t.raw("whyItems") as { title: string; hint: string }[];

  return (
    <section className="border-t border-white/8 bg-transparent py-16 md:py-20">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <SectionLabel>{t("whyEyebrow")}</SectionLabel>
          <GradientHeading as="h2" className="text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.1]">
            {t("whyTitle")}
          </GradientHeading>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.05}>
              <p className="font-mono text-[11px] tracking-[0.18em] text-indigo-400">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-[#F7F9FC]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#98A2B3]">{item.hint}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
