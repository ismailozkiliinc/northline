"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/system/section-label";
import { GradientHeading } from "@/components/system/gradient-heading";

export function HomeProcess() {
  const t = useTranslations("homePitch");
  const steps = t.raw("processSteps") as { title: string }[];

  return (
    <section className="border-t border-[#eef2f7] bg-[#f8faff] py-16 md:py-20">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <SectionLabel>{t("processEyebrow")}</SectionLabel>
          <GradientHeading as="h2" className="text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.1]">
            {t("processTitle")}
          </GradientHeading>
        </Reveal>
        <ol className="mt-10 grid gap-3 sm:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-2xl border border-[#e8ecf4] bg-white px-4 py-4">
                <span className="font-mono text-[11px] text-indigo-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-base font-bold text-[#111827]">{step.title}</span>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.12} className="mt-8">
          <Link href="/surec" className="text-sm font-semibold text-[#6366f1] hover:text-[#4f6ef7]">
            {t("processLink")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
