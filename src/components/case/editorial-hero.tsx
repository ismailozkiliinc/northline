"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import type { Locale, Project } from "@/content/types";
import { ProjectStoryCover } from "@/components/visuals/project-story-cover";

export function CaseStudyEditorialHero({
  project,
  locale,
  ctaLabel,
}: {
  project: Project;
  locale: Locale;
  ctaLabel: string;
}) {
  return (
    <section className="relative overflow-x-clip border-b border-[#eef2f7] bg-[#f8faff]">
      <div className="container-wide relative grid items-center gap-8 overflow-hidden pt-14 pb-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-10 lg:pt-16 lg:pb-12">
        <div className="relative z-[2] min-w-0 max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-indigo-500 uppercase">
            {project.status === "demo" ? (
              <>
                {locale === "tr" ? "Concept Project" : "Concept Project"}
                <span className="mx-2 text-indigo-300">·</span>
              </>
            ) : null}
            {project.sector[locale]}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,4.4rem)] font-semibold tracking-[-0.04em] text-balance text-[#111827]">
            {project.shortTitle[locale]}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#475569] md:text-base">
            {project.summary[locale]}
          </p>

          <div className="mt-7">
            <p className="mb-2.5 text-[10px] tracking-[0.18em] text-[#94a3b8] uppercase">
              {locale === "tr" ? "Teknoloji" : "Technology"}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tech[locale].slice(0, 5).map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs text-[#475569]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/proje-baslat">{ctaLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#case-story">{locale === "tr" ? "Hikâyeyi oku" : "Read the story"}</a>
            </Button>
          </div>
        </div>
        <div className="project-visual-stage relative h-[240px] min-w-0 overflow-hidden sm:h-[280px] md:h-[340px] lg:h-[400px]">
          <ProjectStoryCover slug={project.slug} />
        </div>
      </div>
    </section>
  );
}
