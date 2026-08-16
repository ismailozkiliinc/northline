"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";
import type { Locale, Project } from "@/content/types";

function Meta({
  project,
  locale,
  t,
  light,
}: {
  project: Project;
  locale: Locale;
  t: ReturnType<typeof useTranslations<"work">>;
  light?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-3 md:gap-4", light ? "text-ink" : "text-fg")}>
      <div className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.16em] uppercase">
        <span className={light ? "text-sky-700" : "text-accent"}>{t("demoLabel")}</span>
        <span className="opacity-40">·</span>
        <span className={light ? "text-ink-muted" : "text-muted"}>{project.sector[locale]}</span>
      </div>
      <h3 className="font-display text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
        {project.shortTitle[locale]}
      </h3>
      <p
        className={cn(
          "max-w-xl text-sm leading-relaxed md:text-base",
          light ? "text-ink-muted" : "text-muted",
        )}
      >
        {project.problem[locale]}
      </p>
      <p
        className={cn(
          "max-w-xl text-sm leading-relaxed md:text-base",
          light ? "text-ink/85" : "text-fg/85",
        )}
      >
        {project.solution[locale]}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.services[locale].map((s) => (
          <span
            key={s}
            className={cn(
              "rounded-full px-3 py-1 text-xs",
              light
                ? "border border-border-ink bg-white/70 text-ink-muted"
                : "border border-border bg-white/5 text-muted",
            )}
          >
            {s}
          </span>
        ))}
      </div>
      <span className="mt-1 inline-flex text-sm font-medium">{t("viewCase")} →</span>
    </div>
  );
}

export function FeaturedWork() {
  const t = useTranslations("work");
  const locale = useLocale() as Locale;

  const bySlug = (slug: string) => projects.find((p) => p.slug === slug)!;
  const harbor = bySlug("harbor-stay");
  const ledger = bySlug("ledger-flow");
  const atelier = bySlug("atelier-shop");
  const care = bySlug("campus-learn");
  const restaurant = projects.find((p) => p.slug === "table-reserve");
  const ai = projects.find((p) => p.slug === "pulse-flow");

  return (
    <section id="work" className="section-work-tint noise relative border-t border-border-ink py-24 md:py-36">
      <div className="container-wide relative z-[1]">
        <div className="mb-16 max-w-3xl md:mb-24">
          <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-semibold tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-lg text-base text-ink-muted md:text-lg">{t("subtitle")}</p>
        </div>

        <CaseLink project={harbor} locale={locale} t={t} layout="hero" />

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <CaseLink project={ledger} locale={locale} t={t} layout="tall" />
          </div>
          <div className="md:col-span-5 md:mt-16">
            <CaseLink project={atelier} locale={locale} t={t} layout="tall" />
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <CaseLink project={care} locale={locale} t={t} layout="banner" light />
        </div>

        {(restaurant || ai) && (
          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
            {restaurant && <CaseLink project={restaurant} locale={locale} t={t} layout="pair" />}
            {ai && <CaseLink project={ai} locale={locale} t={t} layout="pair" />}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Link
            href="/calismalar"
            className="inline-flex h-12 items-center rounded-full border border-border-ink bg-white px-8 text-sm font-medium text-ink shadow-[var(--shadow-card)] transition-all hover:border-accent/30 hover:shadow-[var(--shadow-soft)]"
          >
            {t("all")} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseLink({
  project,
  locale,
  t,
  light,
}: {
  project: Project;
  locale: Locale;
  t: ReturnType<typeof useTranslations<"work">>;
  layout: "hero" | "tall" | "banner" | "pair";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={{ pathname: "/calismalar/[slug]", params: { slug: project.slug } }}
        className={cn(
          "group relative block rounded-[var(--radius-media)] border border-border-ink p-7 transition-[border-color,box-shadow,transform] duration-500 md:p-8",
          "hover:border-accent/20 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1",
          light ? "border-border-ink bg-white" : "bg-white shadow-[var(--shadow-card)]",
        )}
      >
        <Meta project={project} locale={locale} t={t} light={light} />
      </Link>
    </motion.div>
  );
}
