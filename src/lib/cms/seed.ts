import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/lib/site";
import type { HomepageCms, SiteSettingsRecord } from "@/lib/cms/types";
import { fileStore, fileStoreId } from "@/lib/cms/file-utils";

export async function seedCmsIfEmpty(): Promise<void> {
  const existing = await fileStore.readJson<unknown[]>("projects.json", []);
  if (existing.length > 0) return;

  const projectRecords = projects.map((p, i) => ({
    id: fileStoreId(),
    slug: p.slug,
    status: p.status === "live" ? "published" : "draft",
    featured: p.featured,
    sort_order: i,
    cover_tone: p.coverTone,
    presentation: p.presentation,
    gallery: [],
    video_url: "",
    demo_media: {},
    category: p.sector.tr,
    client_name: "",
    project_year: "2025",
    project_url: "",
    cta_label: { tr: "Projeyi incele", en: "View project" },
    cta_url: `/calismalar/${p.slug}`,
    payload: {
      shortTitle: p.shortTitle,
      title: p.title,
      sector: p.sector,
      services: p.services,
      platforms: p.platforms,
      problem: p.problem,
      summary: p.summary,
      goals: p.goals,
      audience: p.audience,
      research: p.research,
      flows: p.flows,
      designSystem: p.designSystem,
      tech: p.tech,
      architecture: p.architecture,
      testing: p.testing,
      results: p.results,
      screens: p.screens,
      solution: p.solution,
    },
    seo_title: { tr: p.title.tr, en: p.title.en },
    seo_description: { tr: p.summary.tr.slice(0, 160), en: p.summary.en.slice(0, 160) },
    created_at: fileStore.now(),
    updated_at: fileStore.now(),
  }));

  const serviceRecords = services.map((s, i) => ({
    id: fileStoreId(),
    service_id: s.id,
    href: s.href,
    icon: s.icon,
    active: true,
    sort_order: i,
    image_url: "",
    animation: {},
    payload: {
      title: s.title,
      description: s.description,
      bullets: s.bullets,
      includes: s.includes,
      processNotes: s.processNotes,
      subtitle: { tr: "", en: "" },
      advantages: { tr: [], en: [] },
      technologies: s.bullets,
      cta: { tr: "Detayları gör", en: "View details" },
    },
    created_at: fileStore.now(),
    updated_at: fileStore.now(),
  }));

  const blogRecords = blogPosts.map((b) => ({
    id: fileStoreId(),
    slug: b.slug,
    status: "published",
    cover_image: "",
    category: b.category,
    tags: [],
    author: b.author,
    published_at: b.publishedAt,
    payload: {
      title: b.title,
      excerpt: b.excerpt,
      body: b.body,
      relatedService: b.relatedService,
    },
    seo_title: b.seoTitle,
    seo_description: b.seoDescription,
    og_image: "",
    created_at: fileStore.now(),
    updated_at: fileStore.now(),
  }));

  const homepage: HomepageCms = {
    hero: {
      eyebrow: { tr: "Dijital ürün stüdyosu", en: "Digital product studio" },
      titleBefore: { tr: "Markanız için ", en: "Premium digital " },
      titleHighlight: { tr: "premium dijital", en: "products" },
      titleAfter: { tr: " ürünler tasarlıyoruz.", en: " for ambitious brands." },
      subtitle: {
        tr: "Web, mobil ve SaaS — stratejiden lansmana tek ekip.",
        en: "Web, mobile, and SaaS — one team from strategy to launch.",
      },
      ctaPrimary: { tr: "Hizmetleri keşfet", en: "Explore services" },
      ctaSecondary: { tr: "Çalışmaları izle", en: "Watch our work" },
    },
    about: {
      title: { tr: "Neden NISCRAFT?", en: "Why NISCRAFT?" },
      description: {
        tr: "Üst segment markalar için tasarım ve mühendislik.",
        en: "Design and engineering for premium brands.",
      },
      stats: [
        { value: "40+", label: { tr: "Proje", en: "Projects" } },
        { value: "98%", label: { tr: "Memnuniyet", en: "Satisfaction" } },
      ],
    },
    cta: {
      title: { tr: "Projenizi konuşalım", en: "Let's talk about your project" },
      description: { tr: "48 saat içinde dönüş.", en: "We respond within 48 hours." },
      buttonText: { tr: "Proje başlat", en: "Start a project" },
      buttonLink: "/proje-baslat",
    },
    featuredProjectSlugs: projects.filter((p) => p.featured).map((p) => p.slug),
    featuredServiceIds: services.slice(0, 6).map((s) => s.id),
  };

  const settings: SiteSettingsRecord = {
    name: siteConfig.name,
    email: siteConfig.email,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    social: siteConfig.social,
    footer: {
      description: {
        tr: "Premium dijital ürün stüdyosu.",
        en: "Premium digital product studio.",
      },
      copyright: { tr: "© NISCRAFT", en: "© NISCRAFT" },
    },
  };

  await fileStore.writeJson("projects.json", projectRecords);
  await fileStore.writeJson("services.json", serviceRecords);
  await fileStore.writeJson("blog.json", blogRecords);
  await fileStore.writeJson("homepage.json", homepage);
  await fileStore.writeJson("settings.json", settings);
  await fileStore.writeJson("leads.json", []);
  await fileStore.writeJson("clients.json", []);
  await fileStore.writeJson("testimonials.json", []);
  await fileStore.writeJson("logos.json", []);
  await fileStore.writeJson("media.json", []);
  await fileStore.writeJson("notifications.json", []);
  await fileStore.writeJson("activity.json", []);
  await fileStore.writeJson("page_views.json", []);
  await fileStore.writeJson("seo.json", []);
  await fileStore.writeJson("users.json", []);
}
