"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site";

export function ContactClosingCta() {
  const t = useTranslations("contact");

  function scrollToForm() {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-page relative z-[1]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#94a3b8] md:text-lg">
              {t("ctaBody")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className="contact-submit group inline-flex min-h-[54px] items-center gap-2 rounded-[14px] bg-white px-7 text-sm font-semibold text-[#111827] shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.32)]"
              >
                {t("ctaPrimary")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-1"
                  aria-hidden
                />
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-medium text-[#cbd5e1] transition-colors duration-200 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
