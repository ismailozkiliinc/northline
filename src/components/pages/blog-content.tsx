"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/content/blog";
import { readingTime } from "@/lib/utils";
import { PageHero } from "@/components/system/page-hero";
import { PageCta } from "@/components/system/page-cta";
import { Reveal } from "@/components/motion/reveal";
import { ArticleCover } from "@/components/visuals/article-cover";
import { EditorialMasthead } from "@/components/visuals/exclusive-scenes";
import { cn } from "@/lib/utils";
import type { Locale } from "@/content/types";

export type BlogTopic = "web" | "design" | "ai" | "marketing" | "seo" | "tech";

const TOPIC_BY_SLUG: Record<string, BlogTopic> = {
  "corporate-website-checklist": "web",
  "mobile-app-process": "tech",
  "flutter-vs-native": "tech",
  "ecommerce-essential-features": "marketing",
  "website-pricing-factors": "web",
  "building-an-mvp": "ai",
  "ui-ux-business-value": "design",
};

const FILTERS: Array<"all" | BlogTopic> = [
  "all",
  "web",
  "design",
  "ai",
  "marketing",
  "seo",
  "tech",
];

function topicOf(slug: string): BlogTopic {
  return TOPIC_BY_SLUG[slug] ?? "tech";
}

export function BlogContent() {
  const t = useTranslations("blog");
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");

  const sorted = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  );

  const featured = sorted[0];
  const rest = sorted.slice(1).filter((post) => filter === "all" || topicOf(post.slug) === filter);
  const featuredVisible = filter === "all" || topicOf(featured.slug) === filter;

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        titleBefore={t("heroTitleBefore")}
        titleHighlight={t("heroTitleHighlight")}
        titleAfter={t("heroTitleAfter")}
        subtitle={t("heroBody")}
        visual={<EditorialMasthead />}
      />

      <section className="border-t border-[#eef2f7] bg-[#f8faff] py-16 md:py-24">
        <div className="container-page">
          {featuredVisible && (
            <Reveal>
              <Link
                href={{ pathname: "/icgoruler/[slug]", params: { slug: featured.slug } }}
                className="group grid items-center gap-8 lg:grid-cols-2"
              >
                <div className="relative z-10 max-w-md">
                  <p className="text-xs font-semibold tracking-[0.16em] text-indigo-400 uppercase">
                    {t("featured")} · {t(`topics.${topicOf(featured.slug)}`)}
                  </p>
                  <time
                    className="mt-3 block text-xs text-[#94a3b8]"
                    dateTime={featured.publishedAt}
                  >
                    {new Date(featured.publishedAt).toLocaleDateString(
                      locale === "tr" ? "tr-TR" : "en-US",
                    )}
                  </time>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
                    {featured.title[locale]}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">{featured.excerpt[locale]}</p>
                  <span className="mt-6 text-sm font-semibold text-[#6366f1]">
                    {t("readStory")} →
                  </span>
                </div>
                <ArticleCover
                  slug={featured.slug}
                  title={featured.title[locale]}
                  density="featured"
                />
              </Link>
            </Reveal>
          )}

          <div className="mt-12 flex flex-wrap gap-2">
            {FILTERS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-all",
                  filter === key
                    ? "bg-[#111827] text-white"
                    : "border border-[#e2e8f0] bg-white text-[#64748b] hover:border-indigo-200 hover:text-[#111827]",
                )}
              >
                {t(`topics.${key}`)}
              </button>
            ))}
          </div>

          {rest.length === 0 && !featuredVisible ? (
            <p className="mt-16 text-sm text-[#64748b]">{t("empty")}</p>
          ) : (
            <ul className="mt-10 grid gap-6 md:grid-cols-6">
              {rest.map((post, i) => {
                const span =
                  i === 0 ? "md:col-span-6 lg:col-span-4" : i < 3 ? "md:col-span-3 lg:col-span-2" : "md:col-span-3 lg:col-span-2";
                return (
                  <Reveal key={post.slug} as="li" delay={i * 0.04} className={span}>
                    <Link
                      href={{ pathname: "/icgoruler/[slug]", params: { slug: post.slug } }}
                      className="group flex h-full flex-col"
                    >
                      <ArticleCover
                        slug={post.slug}
                        title={post.title[locale]}
                        density="compact"
                        className="h-[180px] md:h-[200px]"
                      />
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center justify-between gap-3 text-[11px] text-[#94a3b8]">
                          <span className="font-semibold tracking-wider text-indigo-400 uppercase">
                            {t(`topics.${topicOf(post.slug)}`)}
                          </span>
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString(
                              locale === "tr" ? "tr-TR" : "en-US",
                            )}
                          </time>
                        </div>
                        <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-[#111827] group-hover:text-[#4f46e5]">
                          {post.title[locale]}
                        </h3>
                        {i < 3 && (
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#64748b]">
                            {post.excerpt[locale]}
                          </p>
                        )}
                        <p className="mt-auto pt-4 text-xs text-[#94a3b8]">
                          {t("read")}: {readingTime(post.body[locale])} {t("min")}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <PageCta
        title={t("ctaTitle")}
        body={t("ctaBody")}
        primary={{ href: "/proje-baslat", label: t("ctaPrimary") }}
        secondary={{ href: "/iletisim", label: t("ctaSecondary") }}
      />
    </>
  );
}
