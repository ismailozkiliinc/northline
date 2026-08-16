"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProcessTrust() {
  const t = useTranslations("processPage.trust");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section className="border-b border-border-ink bg-mist py-16 md:py-24">
      <div className="container-page">
        <p className="text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
        <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,3rem)] font-semibold tracking-tight text-ink">
          {t("title")}
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.04}>
              <div className="h-full rounded-[1.5rem] border border-border-ink bg-white p-6 shadow-[var(--shadow-soft)] md:p-7">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessLifecycle() {
  const t = useTranslations("processPage.lifecycle");
  const stages = t.raw("stages") as string[];
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border-ink bg-paper py-16 md:py-24">
      <div className="container-page">
        <p className="text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
        <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.9rem,3.5vw,3rem)] font-semibold tracking-tight text-ink">
          {t("title")}
        </h2>

        <div className="relative mt-14 overflow-x-auto pb-4">
          <div className="relative flex min-w-[640px] items-start justify-between gap-2 px-1">
            <motion.div
              className="absolute top-5 right-8 left-8 h-px origin-left bg-linear-to-r from-accent via-accent-2 to-success"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
            {stages.map((stage, i) => (
              <div key={stage} className="relative z-[1] flex w-24 flex-col items-center text-center sm:w-28">
                <motion.span
                  initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-accent bg-paper font-mono text-xs text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <p className="mt-4 font-display text-sm font-semibold text-ink">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessDeliverables() {
  const t = useTranslations("processPage.deliverables");
  const items = t.raw("items") as { title: string; body: string }[];
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 py-20 md:py-28">
      {/* tonal layering — slightly elevated from page navy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(85,123,255,0.08), transparent 55%), linear-gradient(180deg, #1a2638 0%, #192534 45%, #172131 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} aria-hidden />

      <div className="container-page relative z-[1]">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.24em] text-accent uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => {
            return (
              <Reveal key={item.title} as="li" delay={i * 0.05} y={18}>
                <article
                  className={cn(
                    "group flex h-full flex-col overflow-hidden",
                    "rounded-[22px] border border-white/[0.1]",
                    "bg-[#2a3b52]",
                    "shadow-[0_12px_36px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)]",
                    "transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    !reduce &&
                      "hover:-translate-y-1.5 hover:border-white/18 hover:shadow-[0_20px_48px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]",
                  )}
                >
                  <div className="flex flex-col px-4 pt-3.5 pb-4 md:px-5 md:pt-4 md:pb-5">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1.5 font-display text-[1.05rem] font-semibold tracking-tight text-fg md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-snug text-[#A8B4C4]">
                      {item.body}
                    </p>
                    <p className="mt-3 text-[11px] tracking-wide text-white/30 transition-colors group-hover:text-accent/70">
                      {t("handoff")} →
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const TECH = [
  "Next.js",
  "Flutter",
  "Supabase",
  "TypeScript",
  "Node",
  "PostgreSQL",
  "Docker",
  "Vercel",
];

export function ProcessTech() {
  const t = useTranslations("processPage.tech");

  return (
    <section className="border-b border-white/10 bg-bg-secondary py-16 md:py-24">
      <div className="container-page">
        <div>
          <p className="text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-semibold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-md text-muted">{t("body")}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {TECH.map((name) => (
              <li
                key={name}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-fg/85"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ProcessFinalCta() {
  const t = useTranslations("processPage.cta");
  const meeting = siteConfig.calendly;

  return (
    <section className="border-t border-white/10 bg-bg-primary">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="max-w-xl">
          <h2 className="max-w-[12ch] font-display text-[clamp(2.2rem,5vw,4.25rem)] font-semibold tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">{t("body")}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/proje-baslat">{t("primary")}</Link>
            </Button>
            {meeting ? (
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href={meeting} target="_blank" rel="noopener noreferrer">
                  {t("secondary")}
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="/iletisim">{t("secondary")}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
