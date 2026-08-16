import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { CaseStudyEditorialHero } from "@/components/case/editorial-hero";
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
          const even = i % 2 === 0;
          return (
            <section
              key={stage.id}
              className={cn(
                "border-b border-[#eef2f7] py-14 md:py-20",
                even ? "bg-white" : "bg-[#f8faff]",
              )}
            >
              <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 lg:items-start">
                <div className="lg:sticky lg:top-28">
                  <p className="font-mono text-xs text-indigo-400">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold tracking-tight text-[#111827]">
                    {stage.title}
                  </h2>
                </div>
                <div>
                  <p className="max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
                    {stage.body}
                  </p>

                  {stage.id === "problem" && (
                    <ul className="mt-6 space-y-2.5 text-[15px] text-[#334155]">
                      {project.goals[loc].map((g) => (
                        <li key={g} className="flex gap-3">
                          <span className="text-indigo-500">▸</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  )}

                  {stage.id === "ui" && (
                    <ul className="mt-6 space-y-2 text-sm text-[#475569]">
                      {project.screens[loc].map((s) => (
                        <li key={s}>· {s}</li>
                      ))}
                    </ul>
                  )}

                  {stage.id === "results" && (
                    <p className="mt-6 rounded-2xl border border-indigo-100 bg-white p-5 text-sm leading-relaxed text-[#475569]">
                      {project.results[loc]}
                    </p>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-b border-[#eef2f7] bg-[#f8faff] py-14 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-[#111827] md:text-3xl">
            {loc === "tr" ? "Teknoloji" : "Technology"}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech[loc].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs text-[#475569]"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#64748b]">
              {project.testing[loc]}
            </p>
        </div>
      </section>

      <section className="border-b border-[#eef2f7] bg-white py-12 md:py-14">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs tracking-wider text-[#94a3b8] uppercase">{t("next")}</p>
            <Link
              href={{
                pathname: "/calismalar/[slug]",
                params: { slug: nextProject.slug },
              }}
              className="mt-2 block font-display text-2xl font-semibold text-[#111827] hover:text-indigo-600 md:text-3xl"
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
