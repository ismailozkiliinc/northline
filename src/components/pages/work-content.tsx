"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/types";
import { PageHero } from "@/components/system/page-hero";
import { PageCta } from "@/components/system/page-cta";
import { VisualSlot } from "@/components/demos/campaign-scene";
import { ProjectStoryCover } from "@/components/visuals/project-story-cover";
import { WorkHeroVisual } from "@/components/pages/work-hero-visual";
import { Reveal } from "@/components/motion/reveal";

export function WorkContent({ projects }: { projects: Project[] }) {
  const t = useTranslations("work");
  const locale = useLocale() as "tr" | "en";

  return (
    <>
      <PageHero
        atmosphere="work"
        eyebrow={t("eyebrow")}
        titleBefore={t("heroTitleBefore")}
        titleHighlight={t("heroTitleHighlight")}
        titleAfter={t("heroTitleAfter")}
        subtitle={t("heroBody")}
        primary={{ href: "/proje-baslat", label: t("heroCta") }}
        secondary={{ href: "/hizmetler", label: t("heroSecondary") }}
        visual={<WorkHeroVisual />}
      />

      <section className="overflow-x-clip bg-transparent py-16 md:py-24">
        <div className="container-wide space-y-12 md:space-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04} variant={i % 2 === 0 ? "rise" : "mask"}>
              <Link
                href={{ pathname: "/calismalar/[slug]", params: { slug: project.slug } }}
                className="project-showcase group gap-8 lg:gap-10"
              >
                <div className="project-copy pr-1 lg:pr-2">
                <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-400 uppercase">
                  {project.status === "demo" ? (
                    <>
                      {t("demoLabel")}
                      <span className="mx-2 text-indigo-200">·</span>
                    </>
                  ) : null}
                  {t("projectLabel")} {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#F7F9FC] transition-transform duration-500 group-hover:translate-x-[3px] md:text-3xl">
                  {project.shortTitle[locale]}
                </h2>
                <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#98A2B3]">
                  <div>
                    <dt className="font-medium text-[#98A2B3] uppercase tracking-wider">{t("sector")}</dt>
                    <dd className="mt-0.5">{project.sector[locale]}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[#98A2B3] uppercase tracking-wider">{t("services")}</dt>
                    <dd className="mt-0.5">{project.services[locale].join(" · ")}</dd>
                  </div>
                </dl>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#98A2B3]">{project.problem[locale]}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#F7F9FC]/80">{project.solution[locale]}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[#6366f1]">
                  {t("viewCase")} →
                </span>
                </div>
                <VisualSlot contained>
                  <ProjectStoryCover slug={project.slug} />
                </VisualSlot>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title={t("ctaTitle")}
        body={t("ctaBody")}
        primary={{ href: "/proje-baslat", label: t("heroCta") }}
        secondary={{ href: "/iletisim", label: t("ctaSecondary") }}
      />
    </>
  );
}
