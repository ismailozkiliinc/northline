"use client";

import { Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/system/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactHeroVisual } from "@/components/pages/contact-hero-visual";
import { ContactProcess } from "@/components/pages/contact-process";
import { ContactClosingCta } from "@/components/pages/contact-closing-cta";
import { siteConfig } from "@/lib/site";

export function ContactContent() {
  const t = useTranslations("contact");

  return (
    <>
      <PageHero
        visualClassName="!h-[min(400px,88vw)] sm:!h-[440px] md:!h-[480px] lg:!h-[560px] xl:!h-[580px] !overflow-visible"
        eyebrow={t("eyebrow")}
        titleBefore={t("heroTitleBefore")}
        titleHighlight={t("heroTitleHighlight")}
        titleAfter={t("heroTitleAfter")}
        subtitle={t("heroBody")}
        capabilityLine={t("heroCapabilities")}
        visual={<ContactHeroVisual />}
      />

      <section id="contact-form" className="border-t border-[#eef2f7] bg-[#f8faff] py-16 md:py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-500 shadow-[0_4px_16px_rgba(79,110,247,0.08)]">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#94a3b8] uppercase">
                      {t("email")}
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1.5 inline-flex text-base font-medium text-[#111827] transition-colors duration-200 hover:text-[#6366f1]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-500 shadow-[0_4px_16px_rgba(79,110,247,0.08)]">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#94a3b8] uppercase">
                      {t("location")}
                    </p>
                    <p className="mt-1.5 text-base font-medium text-[#111827]">{t("locationValue")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-[#e8ecf4] bg-white p-6 shadow-[0_24px_60px_-28px_rgba(79,110,247,0.18)] md:p-9 lg:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-[1.35rem] font-bold tracking-tight text-[#111827] md:text-2xl">
                    {t("formTitle")}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#64748b]">{t("formLead")}</p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1.5">
                    <span className="contact-status-dot" aria-hidden />
                    <span className="text-xs font-semibold text-[#111827]">{t("statusAvailable")}</span>
                  </div>
                  <p className="mt-2 text-[0.7rem] text-[#94a3b8] sm:text-right">{t("statusResponse")}</p>
                </div>
              </div>
              <div className="mt-9 md:mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactProcess />
      <ContactClosingCta />
    </>
  );
}
