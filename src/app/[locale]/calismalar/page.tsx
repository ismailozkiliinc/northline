import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { CaseVisual } from "@/components/shared/premium-visual";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  return pageMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");
  const loc = (await getLocale()) as "tr" | "en";

  return (
    <>
      <section className="section-work-tint border-b border-white/10 py-16 md:py-24">
        <div className="container-page">
          <p className="mb-3 text-xs tracking-[0.2em] text-accent uppercase">{t("eyebrow")}</p>
          <h1 className="max-w-[14ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted">{t("subtitle")}</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.05}
              className={cn(i === 0 && "md:col-span-2")}
            >
              <Link
                href={{
                  pathname: "/calismalar/[slug]",
                  params: { slug: project.slug },
                }}
                className="group block overflow-hidden rounded-[var(--radius-media)] border border-border bg-bg-secondary transition-[border-color,box-shadow] duration-500 hover:border-white/18 hover:shadow-[var(--shadow-soft)]"
              >
                <CaseVisual
                  slug={project.slug}
                  alt={project.shortTitle[loc]}
                  className="w-full"
                  priority={i === 0}
                />
                <div className="p-7 md:p-8">
                  <span className="text-xs tracking-wider text-accent uppercase">
                    {t("demoLabel")} · {project.sector[loc]}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-semibold md:text-2xl">
                    {project.shortTitle[loc]}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    {project.solution[loc]}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-medium">
                    {t("viewCase")} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
