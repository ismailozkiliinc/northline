"use client";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/system/page-hero";
import { SectionLabel } from "@/components/system/section-label";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

export function ContactContent() {
  const t = useTranslations("contact");

  const socials = [
    siteConfig.social.linkedin && { href: siteConfig.social.linkedin, label: "LinkedIn" },
    siteConfig.social.x && { href: siteConfig.social.x, label: "X" },
    siteConfig.social.instagram && { href: siteConfig.social.instagram, label: "Instagram" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        titleBefore={t("heroTitleBefore")}
        titleHighlight={t("heroTitleHighlight")}
        titleAfter={t("heroTitleAfter")}
        subtitle={t("heroBody")}
      />

      <section className="border-t border-[#eef2f7] bg-[#f8faff] py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionLabel>{t("infoEyebrow")}</SectionLabel>
            <h2 className="max-w-[14ch] font-display text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[1.12] tracking-tight text-[#111827]">
              {t("infoTitle")}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#475569]">{t("infoBody")}</p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-500">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#94a3b8] uppercase">
                    {t("email")}
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-flex text-sm font-medium text-[#111827] hover:text-[#6366f1]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-500">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#94a3b8] uppercase">
                    {t("location")}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#111827]">{t("locationValue")}</p>
                </div>
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-xs font-semibold text-[#334155] transition-colors hover:border-indigo-200 hover:text-[#111827]"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3" aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-[#e8ecf4] bg-white p-6 shadow-[0_24px_60px_-28px_rgba(79,110,247,0.2)] md:p-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-[#111827]">
                {t("formTitle")}
              </h2>
              <p className="mt-2 text-sm text-[#64748b]">{t("formLead")}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
