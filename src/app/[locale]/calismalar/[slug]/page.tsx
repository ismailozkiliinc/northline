import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { CaseStudyEditorialHero } from "@/components/case/editorial-hero";
import { CaseVisual } from "@/components/shared/premium-visual";
import { CtaBand } from "@/components/shared/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const loc = locale as "tr" | "en";
  return pageMetadata({
    title: project.title[loc],
    description: project.summary[loc],
    locale,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("work");
  const loc = (await getLocale()) as "tr" | "en";
  const idx = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(idx + 1) % projects.length];
  const isRestaurant = slug === "table-reserve";

  const stages = [
    { id: "problem", title: t("problem"), body: project.problem[loc] },
    {
      id: "research",
      title: loc === "tr" ? "Araştırma" : "Research",
      body: project.research[loc],
    },
    {
      id: "flows",
      title: loc === "tr" ? "Wireframe & akışlar" : "Wireframes & flows",
      body: project.flows[loc],
    },
    {
      id: "ui",
      title: loc === "tr" ? "UI & tasarım sistemi" : "UI & design system",
      body: project.designSystem[loc],
    },
    {
      id: "dev",
      title: loc === "tr" ? "Geliştirme" : "Development",
      body: project.architecture[loc],
    },
    {
      id: "results",
      title: loc === "tr" ? "Sonuçlar" : "Results",
      body: project.results[loc],
    },
  ];

  return (
    <>
      <CaseStudyEditorialHero
        project={project}
        locale={loc}
        demoLabel={t("demoLabel")}
        ctaLabel={loc === "tr" ? "Benzer bir proje başlat" : "Start a similar project"}
      />

      <div id="case-story" className="scroll-mt-24">
        {stages.map((stage, i) => {
          const warm = isRestaurant;
          const even = i % 2 === 0;
          return (
            <section
              key={stage.id}
              className={cn(
                "border-b py-14 md:py-20",
                warm
                  ? even
                    ? "border-[#c4a574]/10 bg-[#120e0c]"
                    : "border-[#c4a574]/10 bg-[#1a1410]"
                  : even
                    ? "border-white/5 bg-bg"
                    : "border-white/5 bg-bg-secondary",
              )}
            >
              <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 lg:items-start">
                <div className="lg:sticky lg:top-28">
                  <p
                    className={cn(
                      "font-mono text-xs",
                      warm ? "text-[#c4a574]" : "text-accent",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold tracking-tight text-[#f4efe8]">
                    {stage.title}
                  </h2>
                </div>
                <div>
                  <p
                    className={cn(
                      "max-w-2xl text-base leading-relaxed md:text-lg",
                      warm ? "text-[#b5a698]" : "text-muted",
                    )}
                  >
                    {stage.body}
                  </p>

                  {stage.id === "problem" && (
                    <ul className="mt-6 space-y-2.5 text-[15px] text-[#efe6da]">
                      {project.goals[loc].map((g) => (
                        <li key={g} className="flex gap-3">
                          <span className={warm ? "text-[#c4a574]" : "text-accent"}>▸</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  )}

                  {stage.id === "ui" && (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="overflow-hidden rounded-2xl border border-border">
                        <CaseVisual
                          slug={project.slug}
                          alt={project.shortTitle[loc]}
                          className="w-full"
                        />
                      </div>
                      <ul
                        className={cn(
                          "space-y-2 self-center text-sm",
                          warm ? "text-[#b5a698]" : "text-muted",
                        )}
                      >
                        {project.screens[loc].map((s) => (
                          <li key={s}>· {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {stage.id === "results" && (
                    <p
                      className={cn(
                        "mt-6 rounded-2xl border p-5 text-sm leading-relaxed",
                        warm
                          ? "border-[#c4a574]/20 bg-[#1a1410] text-[#b5a698]"
                          : "border-border bg-surface/50 text-muted",
                      )}
                    >
                      {project.results[loc]}
                    </p>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Gallery — multi-panel, not one empty rectangle */}
      <section
        className={cn(
          "border-b py-14 md:py-20",
          isRestaurant
            ? "border-[#c4a574]/10 bg-[#1a1612]"
            : "border-white/10 bg-bg",
        )}
      >
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-[#f4efe8] md:text-3xl">
            {loc === "tr" ? "Galeri" : "Gallery"}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="overflow-hidden rounded-2xl border border-border md:col-span-7">
              <CaseVisual
                slug={project.slug}
                alt={project.shortTitle[loc]}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4 md:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-border">
                <CaseVisual
                  slug={project.slug}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#f4efe8]">
                  {loc === "tr" ? "Teknoloji" : "Technology"}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech[loc].map((tech) => (
                    <li
                      key={tech}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs",
                        isRestaurant
                          ? "border border-[#c4a574]/25 bg-[#c4a574]/10 text-[#e8c9a0]"
                          : "border border-white/15 bg-white/5 text-muted",
                      )}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p
                  className={cn(
                    "mt-5 text-sm leading-relaxed",
                    isRestaurant ? "text-[#b5a698]" : "text-muted",
                  )}
                >
                  {project.testing[loc]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-bg py-12 md:py-14">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs tracking-wider text-muted uppercase">{t("next")}</p>
            <Link
              href={{
                pathname: "/calismalar/[slug]",
                params: { slug: nextProject.slug },
              }}
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent md:text-3xl"
            >
              {nextProject.shortTitle[loc]} →
            </Link>
          </div>
          <Button asChild size="lg">
            <Link href="/proje-baslat">
              {loc === "tr" ? "Proje Başlat" : "Start a project"}
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
