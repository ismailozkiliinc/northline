"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";

type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

export function ContactProcess() {
  const t = useTranslations("contact");
  const steps = t.raw("processSteps") as ProcessStep[];

  return (
    <section className="border-t border-white/8 bg-transparent py-16 md:py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-[#F7F9FC]">
            {t("processTitle")}
          </h2>
        </Reveal>

        <div className="relative mt-12 md:mt-14">
          <div
            className="pointer-events-none absolute top-[1.15rem] hidden h-px bg-[#e2e8f0] lg:block"
            style={{ left: "2.5%", right: "2.5%" }}
            aria-hidden
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <Reveal key={step.num} delay={index * 0.06}>
                <li className="relative list-none">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-transparent font-mono text-[0.7rem] font-semibold text-[#6366f1] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                      {step.num}
                    </span>
                    <div className="lg:mt-4">
                      <h3 className="font-display text-base font-bold tracking-tight text-[#F7F9FC]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#98A2B3]">{step.body}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
