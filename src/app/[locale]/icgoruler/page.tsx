import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { blogPosts } from "@/content/blog";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { PremiumVisual } from "@/components/shared/premium-visual";
import { media } from "@/lib/media";
import { readingTime } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

const INSIGHT_COVERS = [
  media.studio.materials,
  media.studio.lounge,
  media.studio.strategy,
  media.studio.ux,
  media.studio.prototype,
  media.studio.growth,
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return pageMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const loc = (await getLocale()) as "tr" | "en";

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-page">
          <ul className="grid gap-10 md:grid-cols-2">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} as="li" delay={i * 0.03}>
                <Link
                  href={{ pathname: "/icgoruler/[slug]", params: { slug: post.slug } }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[var(--radius-media)] border border-border shadow-[var(--shadow-card)]">
                    <PremiumVisual
                      src={INSIGHT_COVERS[i % INSIGHT_COVERS.length]}
                      alt=""
                      className="w-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <time className="mt-5 block text-xs text-muted" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(loc === "tr" ? "tr-TR" : "en-US")}
                  </time>
                  <h2 className="mt-2 font-display text-xl font-semibold group-hover:text-accent md:text-2xl">
                    {post.title[loc]}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {post.excerpt[loc]}
                  </p>
                  <p className="mt-3 text-xs text-muted">
                    {t("read")}: {readingTime(post.body[loc])} {t("min")}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
