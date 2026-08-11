"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/content/blog";
import { faqItems } from "@/content/faq";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";
import { PremiumVisual } from "@/components/shared/premium-visual";
import { media } from "@/lib/media";
import type { Locale } from "@/content/types";

const industries = [
  { tr: "Otel & turizm", en: "Hospitality", tone: "bg-surface text-[#9fe0d2]" },
  { tr: "Finans & SaaS", en: "Finance & SaaS", tone: "bg-surface text-[#a8b8ff]" },
  { tr: "E-ticaret", en: "E-commerce", tone: "bg-surface text-[#f0b896]" },
  { tr: "Eğitim", en: "Education", tone: "bg-[#e8f2ec] text-[#1f5c40]" },
  { tr: "Sağlık", en: "Healthcare", tone: "bg-[#f4f7fa] text-[#2a4a6a]" },
  { tr: "Gayrimenkul", en: "Real estate", tone: "bg-surface text-[#d0d4dc]" },
  { tr: "Lojistik", en: "Logistics", tone: "bg-surface text-[#c5d4a8]" },
  { tr: "Profesyonel hizmetler", en: "Professional services", tone: "bg-surface text-[#cbb8f0]" },
];

const stack = [
  "Next.js",
  "TypeScript",
  "React Native / Flutter",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Figma",
  "Vercel",
  "Stripe",
  "Resend",
];

export function IndustriesStrip() {
  const t = useTranslations("homeExtras");
  const locale = useLocale() as Locale;

  return (
    <section className="section-paper border-t border-border-ink py-24 md:py-32">
      <div className="container-page">
        <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("industriesEyebrow")}</p>
        <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-ink">
          {t("industriesTitle")}
        </h2>
        <p className="mt-5 max-w-lg text-base text-ink-muted">{t("industriesBody")}</p>
        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <li
              key={item.en}
              className={`rounded-[var(--radius-card)] px-5 py-8 text-sm font-medium tracking-wide ${item.tone}`}
            >
              {item[locale]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TechStack() {
  const t = useTranslations("homeExtras");

  return (
    <section className="section-slate border-t border-border-ink py-24 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("stackEyebrow")}</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-tight text-ink">
            {t("stackTitle")}
          </h2>
          <p className="mt-4 max-w-md text-ink-muted">{t("stackBody")}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border-ink bg-white/60 px-4 py-2 text-sm text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function InsightsTeaser() {
  const t = useTranslations("homeExtras");
  const locale = useLocale() as Locale;
  const posts = blogPosts.slice(0, 3);
  const covers = [
    media.studio.materials,
    media.studio.lounge,
    media.studio.strategy,
  ];

  return (
    <section className="section-mist border-t border-border-ink py-24 md:py-32">
      <div className="container-page">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("insightsEyebrow")}</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-tight text-ink">
              {t("insightsTitle")}
            </h2>
          </div>
          <Link href="/icgoruler" className="text-sm font-medium text-ink link-underline">
            {t("insightsAll")} →
          </Link>
        </div>
        <ul className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={{ pathname: "/icgoruler/[slug]", params: { slug: post.slug } }}
                className="group block"
              >
                <div className="mb-5 overflow-hidden rounded-[var(--radius-card)] border border-border-ink shadow-[var(--shadow-soft)]">
                  <PremiumVisual
                    src={covers[i] ?? media.studio.materials}
                    alt=""
                    className="w-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs tracking-wider text-ink-muted uppercase">{post.category}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink group-hover:text-accent">
                  {post.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{post.excerpt[locale]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeFaq() {
  const t = useTranslations("homeExtras");
  const locale = useLocale() as Locale;
  const items = faqItems.slice(0, 6).map((f) => ({
    id: f.id,
    question: f.question[locale],
    answer: f.answer[locale],
  }));

  return (
    <section className="section-paper border-t border-border-ink py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("faqEyebrow")}</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-tight text-ink">
            {t("faqTitle")}
          </h2>
          <Link href="/sss" className="mt-6 inline-flex text-sm font-medium text-ink link-underline">
            {t("faqAll")} →
          </Link>
        </div>
        <div className="text-ink [&_.divide-border]:divide-border-ink [&_.border-border]:border-border-ink [&_.text-muted]:text-ink-muted">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}

export function DiscoveryBand() {
  const t = useTranslations("homeExtras");

  return (
    <section className="section-dark border-t border-white/10 py-20 md:py-24">
      <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight">
            {t("discoveryTitle")}
          </h2>
          <p className="mt-3 max-w-md text-muted">{t("discoveryBody")}</p>
        </div>
        <Button asChild size="lg">
          <Link href="/proje-baslat">{t("discoveryCta")}</Link>
        </Button>
      </div>
    </section>
  );
}

export function JourneyStrip() {
  const t = useTranslations("homeExtras");
  const steps = t.raw("journey") as { title: string; body: string }[];

  return (
    <section className="section-mist border-t border-border-ink py-24 md:py-28">
      <div className="container-page">
        <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("journeyEyebrow")}</p>
        <h2 className="mb-14 max-w-[16ch] font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-tight text-ink">
          {t("journeyTitle")}
        </h2>
        <ol className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-border-ink pt-6">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
