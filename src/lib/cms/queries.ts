import type { Project, ProjectPresentation, ProjectStatus } from "@/content/types";
import type { CmsProjectRecord } from "@/lib/cms/types";
import { projects as staticProjects } from "@/content/projects";
import { getCmsStore } from "@/lib/cms/store";

function mapCmsProject(record: CmsProjectRecord): Project {
  const p = record.payload as Partial<Project>;
  return {
    slug: record.slug,
    status: (record.status === "published" ? "live" : "demo") as ProjectStatus,
    featured: record.featured,
    coverTone: record.cover_tone ?? p.coverTone ?? "gradient-indigo",
    presentation: (record.presentation ?? p.presentation ?? "cinematic") as ProjectPresentation,
    shortTitle: p.shortTitle ?? { tr: record.slug, en: record.slug },
    solution: p.solution ?? { tr: "", en: "" },
    title: p.title ?? { tr: record.slug, en: record.slug },
    sector: p.sector ?? { tr: record.category ?? "", en: record.category ?? "" },
    services: p.services ?? { tr: [], en: [] },
    platforms: p.platforms ?? { tr: [], en: [] },
    problem: p.problem ?? { tr: "", en: "" },
    summary: p.summary ?? { tr: "", en: "" },
    goals: p.goals ?? { tr: [], en: [] },
    audience: p.audience ?? { tr: "", en: "" },
    research: p.research ?? { tr: "", en: "" },
    flows: p.flows ?? { tr: "", en: "" },
    designSystem: p.designSystem ?? { tr: "", en: "" },
    tech: p.tech ?? { tr: [], en: [] },
    architecture: p.architecture ?? { tr: "", en: "" },
    testing: p.testing ?? { tr: "", en: "" },
    results: p.results ?? { tr: "", en: "" },
    screens: p.screens ?? { tr: [], en: [] },
  };
}

export async function getPublishedProjects(): Promise<Project[]> {
  const store = getCmsStore();
  const records = await store.projects.listPublished();
  if (records.length === 0) return staticProjects;
  return records.map(mapCmsProject);
}

export async function getProjectBySlugFromCms(slug: string): Promise<Project | undefined> {
  const store = getCmsStore();
  const record = await store.projects.getBySlug(slug);
  if (record && record.status === "published") return mapCmsProject(record);
  return staticProjects.find((p) => p.slug === slug);
}

export async function getFeaturedProjectsFromCms(): Promise<Project[]> {
  const all = await getPublishedProjects();
  return all.filter((p) => p.featured);
}

export async function getHomepageCms() {
  const store = getCmsStore();
  return store.homepage.get();
}

export async function getSiteSettingsFromCms() {
  const store = getCmsStore();
  return store.settings.get();
}
