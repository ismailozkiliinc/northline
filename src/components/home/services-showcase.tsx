"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import { ServiceVisual } from "@/components/shared/premium-visual";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale, ServiceId } from "@/content/types";

const audience: Record<ServiceId, { tr: string; en: string }> = {
  web: {
    tr: "Kurumsal markalar, KOBİ’ler, profesyonel hizmetler",
    en: "Corporate brands, SMBs, professional services",
  },
  mobile: {
    tr: "Ürün ekipleri, girişimler, operasyonel uygulamalar",
    en: "Product teams, startups, operational apps",
  },
  "ui-ux": {
    tr: "Yeni ürünler ve yeniden tasarım ihtiyacı olan ekipler",
    en: "Teams shipping new products or redesigns",
  },
  saas: {
    tr: "SaaS girişimleri ve iç araç ihtiyacı olan şirketler",
    en: "SaaS startups and companies needing internal tools",
  },
  ecommerce: {
    tr: "DTC markalar ve büyüyen perakende ekipleri",
    en: "DTC brands and growing retail teams",
  },
  ai: {
    tr: "Tekrarlayan iş süreçlerini hızlandırmak isteyen ekipler",
    en: "Teams accelerating repetitive workflows",
  },
  support: {
    tr: "Yayında ürünü olan ve istikrarlı büyüme isteyen ekipler",
    en: "Teams with live products seeking steady growth",
  },
};

const techHints: Record<ServiceId, string> = {
  web: "Next.js · CMS · SEO",
  mobile: "Flutter · iOS · Android",
  "ui-ux": "Figma · Prototyping · DS",
  saas: "Next.js · PostgreSQL · Auth",
  ecommerce: "Headless · Payments · CMS",
  ai: "APIs · Workflows · Human-in-loop",
  support: "Monitoring · QA · Roadmap",
};

export function ServicesShowcase() {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;
  const reduce = useReducedMotion();
  const [active, setActive] = useState<ServiceId>(services[0].id);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const current = services.find((s) => s.id === active) ?? services[0];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    const observers: IntersectionObserver[] = [];
    services.forEach((service) => {
      const el = itemRefs.current[service.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(service.id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="services" className="section-mist border-t border-border-ink py-24 md:py-36">
      <div className="container-page">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
            <h2 className="max-w-[14ch] font-display text-[clamp(2.2rem,4.5vw,4rem)] font-semibold tracking-tight text-ink text-balance">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-muted lg:justify-self-end">
            {t("subtitleStrong")}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[var(--radius-media)] border border-border-ink shadow-[var(--shadow-soft)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="w-full"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ServiceVisual
                      id={active}
                      alt={current.title[locale]}
                      className="w-full"
                    />
                  </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-6 hidden rounded-[var(--radius-card)] border border-border-ink bg-white/70 p-6 lg:block">
              <p className="text-sm leading-relaxed text-ink-muted">{current.description[locale]}</p>
              <p className="mt-4 text-xs text-ink-muted">
                <span className="text-ink">{t("forWhom")}:</span> {audience[active][locale]}
              </p>
              <p className="mt-2 text-xs text-ink-muted">
                <span className="text-ink">{t("tech")}:</span> {techHints[active]}
              </p>
              <Button asChild size="sm" className="mt-5">
                <Link href={current.href}>{t("cta")}</Link>
              </Button>
            </div>
          </div>

          <ul className="space-y-2">
            {services.map((service, i) => {
              const isActive = service.id === active;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    ref={(el) => {
                      itemRefs.current[service.id] = el;
                    }}
                    onClick={() => setActive(service.id)}
                    onMouseEnter={() => {
                      if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
                        setActive(service.id);
                      }
                    }}
                    className={cn(
                      "w-full rounded-[var(--radius-card)] border px-5 py-5 text-left transition-all duration-300 md:px-6 md:py-7",
                      isActive
                        ? "border-accent/30 bg-transparent shadow-[var(--shadow-soft)]"
                        : "border-transparent bg-transparent hover:border-border-ink hover:bg-white/50",
                    )}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-lg font-semibold text-ink md:text-2xl">
                          {service.title[locale]}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                          {service.description[locale]}
                        </p>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={reduce ? false : { height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={reduce ? undefined : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                {service.bullets[locale].map((b) => (
                                  <li
                                    key={b}
                                    className="text-xs text-ink/80 before:mr-2 before:text-accent before:content-['▸']"
                                  >
                                    {b}
                                  </li>
                                ))}
                              </ul>
                              <Link
                                href={service.href}
                                className="mt-4 inline-flex text-sm font-medium text-accent link-underline"
                              >
                                {t("cta")} →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
