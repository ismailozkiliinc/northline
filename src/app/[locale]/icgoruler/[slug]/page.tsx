import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { getServiceById } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { ArticleBody, extractHeadings } from "@/components/pages/article-body";
import { CtaBand } from "@/components/shared/cta-band";
import { serviceHrefForId } from "@/components/pages/service-detail-content";
import { readingTime } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { ArticleCover } from "@/components/visuals/article-cover";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  const loc = locale as "tr" | "en";
  return pageMetadata({
    title: post.seoTitle[loc],
    description: post.seoDescription[loc],
    locale,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const loc = (await getLocale()) as "tr" | "en";
  const body = post.body[loc];
  const headings = extractHeadings(body);
  const minutes = readingTime(body);
  const service = getServiceById(post.relatedService);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[loc],
    description: post.excerpt[loc],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/icgoruler"
              className="link-underline text-sm text-muted hover:text-fg"
            >
              ← {t("title")}
            </Link>
            <header className="mt-8">
              <time className="text-xs text-muted" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(loc === "tr" ? "tr-TR" : "en-US")}
              </time>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {post.title[loc]}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {post.excerpt[loc]}
              </p>
              <p className="mt-4 text-sm text-muted">
                {t("read")}: {minutes} {t("min")} · {t("updated")}{" "}
                {new Date(post.updatedAt).toLocaleDateString(loc === "tr" ? "tr-TR" : "en-US")}
              </p>
              {service && (
                <p className="mt-2 text-sm">
                  {t("related")}:{" "}
                  <Link
                    href={serviceHrefForId(service.id)}
                    className="text-accent hover:underline"
                  >
                    {service.title[loc]}
                  </Link>
                </p>
              )}
            </header>

            <div className="mt-10 h-[280px] overflow-visible md:h-[360px]">
              <ArticleCover slug={post.slug} title={post.title[loc]} density="featured" />
            </div>

            {headings.length > 1 && (
              <nav aria-label={t("toc")} className="mt-10 rounded-xl border border-border bg-surface/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t("toc")}
                </p>
                <ol className="mt-3 space-y-2 text-sm">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-muted hover:text-accent">
                        {h.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="mt-12">
              <ArticleBody body={body} />
            </div>
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
