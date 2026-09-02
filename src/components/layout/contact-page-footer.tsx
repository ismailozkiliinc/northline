"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "behance", label: "Behance", href: siteConfig.social.behance },
].filter((item) => Boolean(item.href));

export function ContactPageFooter() {
  const t = useTranslations("contact");

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0f1a] text-[#f8fafc]">
      <div className="container-page py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.28em] text-white">NISCRAFT</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#64748b]">{t("footerTagline")}</p>
            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#cbd5e1] transition-colors duration-200 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-indigo-400" aria-hidden />
                {siteConfig.email}
              </a>
            ) : null}
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#cbd5e1] transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={scrollToTop}
              className="text-sm font-medium text-[#64748b] transition-colors duration-200 hover:text-white"
            >
              {t("backToTop")}
            </button>
          </div>
        </div>

        <p className="mt-10 border-t border-white/[0.06] pt-6 text-xs text-[#475569]">{t("copyright")}</p>
      </div>
    </footer>
  );
}
