import { getSupabaseAdmin } from "@/lib/supabase";
import { fileStore, fileStoreId } from "@/lib/cms/file-utils";
import { seedCmsIfEmpty } from "@/lib/cms/seed";
import type {
  AuditLogRecord,
  BlogPostRecord,
  ClientLogoRecord,
  ClientRecord,
  CmsProjectRecord,
  CmsServiceRecord,
  DashboardStats,
  HomepageCms,
  LeadRecord,
  LeadStatus,
  MediaAssetRecord,
  NotificationRecord,
  PageViewRecord,
  SeoPageRecord,
  SiteSettingsRecord,
  TestimonialRecord,
} from "@/lib/cms/types";

let seeded = false;

async function ensureSeed() {
  if (!seeded) {
    await seedCmsIfEmpty();
    seeded = true;
  }
}

function resolveSupabaseAdmin() {
  return getSupabaseAdmin();
}

export function getCmsStore() {
  return {
    leads: leadsRepo,
    clients: clientsRepo,
    projects: projectsRepo,
    services: servicesRepo,
    testimonials: testimonialsRepo,
    logos: logosRepo,
    blog: blogRepo,
    homepage: homepageRepo,
    settings: settingsRepo,
    seo: seoRepo,
    media: mediaRepo,
    notifications: notificationsRepo,
    auditLog: auditLogRepo,
    pageViews: pageViewsRepo,
    dashboard: dashboardRepo,
  };
}

const leadsRepo = {
  async list(filters?: { status?: LeadStatus; q?: string }): Promise<LeadRecord[]> {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    if (sb) {
      let q = sb.from("leads").select("*").order("created_at", { ascending: false });
      if (filters?.status) q = q.eq("status", filters.status);
      const { data } = await q;
      let rows = (data ?? []) as LeadRecord[];
      if (filters?.q) {
        const s = filters.q.toLowerCase();
        rows = rows.filter(
          (r) =>
            r.name.toLowerCase().includes(s) ||
            r.email.toLowerCase().includes(s) ||
            (r.company?.toLowerCase().includes(s) ?? false),
        );
      }
      return rows;
    }
    let rows = await fileStore.readJson<LeadRecord[]>("leads.json", []);
    if (filters?.status) rows = rows.filter((r) => r.status === filters.status);
    if (filters?.q) {
      const s = filters.q.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.name.toLowerCase().includes(s) ||
          r.email.toLowerCase().includes(s) ||
          (r.company?.toLowerCase().includes(s) ?? false),
      );
    }
    return rows.sort((a, b) => b.created_at.localeCompare(a.created_at));
  },
  async get(id: string) {
    const all = await this.list();
    return all.find((r) => r.id === id) ?? null;
  },
  async update(id: string, patch: Partial<LeadRecord>) {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    const updated_at = fileStore.now();
    if (sb) {
      await sb.from("leads").update({ ...patch, updated_at }).eq("id", id);
      return this.get(id);
    }
    const rows = await fileStore.readJson<LeadRecord[]>("leads.json", []);
    const idx = rows.findIndex((r) => r.id === id);
    if (idx === -1) return null;
    rows[idx] = { ...rows[idx], ...patch, updated_at };
    await fileStore.writeJson("leads.json", rows);
    return rows[idx];
  },
  async create(data: Omit<LeadRecord, "id" | "created_at" | "updated_at">) {
    await ensureSeed();
    const record: LeadRecord = {
      ...data,
      id: fileStoreId(),
      created_at: fileStore.now(),
      updated_at: fileStore.now(),
    };
    const sb = resolveSupabaseAdmin();
    if (sb) {
      await sb.from("leads").insert(record);
      return record;
    }
    const rows = await fileStore.readJson<LeadRecord[]>("leads.json", []);
    rows.unshift(record);
    await fileStore.writeJson("leads.json", rows);
    return record;
  },
  async remove(id: string) {
    const sb = resolveSupabaseAdmin();
    if (sb) {
      await sb.from("leads").delete().eq("id", id);
      return;
    }
    const rows = await fileStore.readJson<LeadRecord[]>("leads.json", []);
    await fileStore.writeJson(
      "leads.json",
      rows.filter((r) => r.id !== id),
    );
  },
};

function genericFileCrud<T extends { id: string }>(file: string) {
  return {
    async list(): Promise<T[]> {
      await ensureSeed();
      const sb = resolveSupabaseAdmin();
      if (sb) {
        const table = file.replace(".json", "");
        const tableMap: Record<string, string> = {
          projects: "cms_projects",
          services: "cms_services",
          blog: "cms_blog_posts",
          clients: "clients",
          testimonials: "testimonials",
          logos: "client_logos",
          media: "media_assets",
          notifications: "admin_notifications",
          activity: "audit_log",
          seo: "seo_pages",
        };
        const t = tableMap[table];
        if (t) {
          const { data } = await sb.from(t).select("*").order("created_at", { ascending: false });
          return (data ?? []) as T[];
        }
      }
      const rows = await fileStore.readJson<T[]>(file, []);
      return rows;
    },
    async get(id: string) {
      const all = await this.list();
      return all.find((r) => r.id === id) ?? null;
    },
    async create(data: Omit<T, "id"> & Partial<Pick<T, "id">>) {
      await ensureSeed();
      const record = { ...data, id: data.id ?? fileStoreId() } as T;
      const sb = resolveSupabaseAdmin();
      const table = file.replace(".json", "");
      const tableMap: Record<string, string> = {
        projects: "cms_projects",
        services: "cms_services",
        blog: "cms_blog_posts",
        clients: "clients",
        testimonials: "testimonials",
        logos: "client_logos",
        media: "media_assets",
        notifications: "admin_notifications",
        activity: "audit_log",
        seo: "seo_pages",
      };
      if (sb && tableMap[table]) {
        await sb.from(tableMap[table]).insert(record);
        return record;
      }
      const rows = await fileStore.readJson<T[]>(file, []);
      rows.unshift(record);
      await fileStore.writeJson(file, rows);
      return record;
    },
    async update(id: string, patch: Partial<T>) {
      await ensureSeed();
      const sb = resolveSupabaseAdmin();
      const table = file.replace(".json", "");
      const tableMap: Record<string, string> = {
        projects: "cms_projects",
        services: "cms_services",
        blog: "cms_blog_posts",
        clients: "clients",
        testimonials: "testimonials",
        logos: "client_logos",
        media: "media_assets",
        notifications: "admin_notifications",
        activity: "audit_log",
        seo: "seo_pages",
      };
      if (sb && tableMap[table]) {
        await sb.from(tableMap[table]).update(patch as Record<string, unknown>).eq("id", id);
        return this.get(id);
      }
      const rows = await fileStore.readJson<T[]>(file, []);
      const idx = rows.findIndex((r) => r.id === id);
      if (idx === -1) return null;
      rows[idx] = { ...rows[idx], ...patch };
      await fileStore.writeJson(file, rows);
      return rows[idx];
    },
    async remove(id: string) {
      const sb = resolveSupabaseAdmin();
      const table = file.replace(".json", "");
      const tableMap: Record<string, string> = {
        projects: "cms_projects",
        services: "cms_services",
        blog: "cms_blog_posts",
        clients: "clients",
        testimonials: "testimonials",
        logos: "client_logos",
        media: "media_assets",
        notifications: "admin_notifications",
        activity: "audit_log",
        seo: "seo_pages",
      };
      if (sb && tableMap[table]) {
        await sb.from(tableMap[table]).delete().eq("id", id);
        return;
      }
      const rows = await fileStore.readJson<T[]>(file, []);
      await fileStore.writeJson(
        file,
        rows.filter((r) => r.id !== id),
      );
    },
    async reorder(ids: string[]) {
      const rows = await this.list();
      const map = new Map(rows.map((r) => [r.id, r]));
      const reordered = ids
        .map((id, i) => {
          const row = map.get(id);
          if (!row) return null;
          return { ...row, sort_order: i } as T;
        })
        .filter(Boolean) as T[];
      const sb = resolveSupabaseAdmin();
      const table = file.replace(".json", "");
      if (table === "projects" || table === "services" || table === "testimonials" || table === "logos") {
        if (sb) {
          for (const row of reordered) {
            const sort_order = (row as { sort_order?: number }).sort_order;
            await sb
              .from(
                table === "projects"
                  ? "cms_projects"
                  : table === "services"
                    ? "cms_services"
                    : table === "testimonials"
                      ? "testimonials"
                      : "client_logos",
              )
              .update({ sort_order })
              .eq("id", row.id);
          }
          return reordered;
        }
        await fileStore.writeJson(file, reordered);
      }
      return reordered;
    },
  };
}

const projectsRepo = {
  ...genericFileCrud<CmsProjectRecord>("projects.json"),
  async listPublished() {
    const all = await this.list();
    return all
      .filter((p) => p.status === "published")
      .sort((a, b) => a.sort_order - b.sort_order);
  },
  async getBySlug(slug: string) {
    const all = await this.list();
    return all.find((p) => p.slug === slug) ?? null;
  },
};

const servicesRepo = {
  ...genericFileCrud<CmsServiceRecord>("services.json"),
  async listActive() {
    const all = await this.list();
    return all.filter((s) => s.active).sort((a, b) => a.sort_order - b.sort_order);
  },
};

const clientsRepo = genericFileCrud<ClientRecord>("clients.json");
const testimonialsRepo = genericFileCrud<TestimonialRecord>("testimonials.json");
const logosRepo = genericFileCrud<ClientLogoRecord>("logos.json");
const blogRepo = {
  ...genericFileCrud<BlogPostRecord>("blog.json"),
  async listPublished() {
    const all = await this.list();
    return all
      .filter((p) => p.status === "published")
      .sort((a, b) => (b.published_at ?? "").localeCompare(a.published_at ?? ""));
  },
  async getBySlug(slug: string) {
    const all = await this.list();
    return all.find((p) => p.slug === slug) ?? null;
  },
};
const mediaRepo = genericFileCrud<MediaAssetRecord>("media.json");
const notificationsRepo = genericFileCrud<NotificationRecord>("notifications.json");
const auditLogRepo = genericFileCrud<AuditLogRecord>("activity.json");
const seoRepo = genericFileCrud<SeoPageRecord>("seo.json");

const homepageRepo = {
  async get(): Promise<HomepageCms> {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    if (sb) {
      const { data } = await sb.from("cms_homepage").select("payload").eq("id", "main").maybeSingle();
      if (data?.payload) return data.payload as HomepageCms;
    }
    return fileStore.readJson<HomepageCms>("homepage.json", {} as HomepageCms);
  },
  async save(payload: HomepageCms) {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    if (sb) {
      await sb.from("cms_homepage").upsert({ id: "main", payload, updated_at: fileStore.now() });
      return payload;
    }
    await fileStore.writeJson("homepage.json", payload);
    return payload;
  },
};

const settingsRepo = {
  async get(): Promise<SiteSettingsRecord> {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    if (sb) {
      const { data } = await sb.from("site_settings").select("payload").eq("id", "main").maybeSingle();
      if (data?.payload) return data.payload as SiteSettingsRecord;
    }
    return fileStore.readJson<SiteSettingsRecord>("settings.json", {} as SiteSettingsRecord);
  },
  async save(payload: SiteSettingsRecord) {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    if (sb) {
      await sb.from("site_settings").upsert({ id: "main", payload, updated_at: fileStore.now() });
      return payload;
    }
    await fileStore.writeJson("settings.json", payload);
    return payload;
  },
};

const pageViewsRepo = {
  async track(view: Omit<PageViewRecord, "id" | "created_at">) {
    const record: PageViewRecord = {
      ...view,
      id: fileStoreId(),
      created_at: fileStore.now(),
    };
    const sb = resolveSupabaseAdmin();
    if (sb) {
      await sb.from("page_views").insert(record);
      return record;
    }
    const rows = await fileStore.readJson<PageViewRecord[]>("page_views.json", []);
    rows.push(record);
    if (rows.length > 10000) rows.splice(0, rows.length - 10000);
    await fileStore.writeJson("page_views.json", rows);
    return record;
  },
  async list(): Promise<PageViewRecord[]> {
    await ensureSeed();
    const sb = resolveSupabaseAdmin();
    if (sb) {
      const { data } = await sb.from("page_views").select("*").order("created_at", { ascending: false }).limit(5000);
      return (data ?? []) as PageViewRecord[];
    }
    return fileStore.readJson<PageViewRecord[]>("page_views.json", []);
  },
};

const dashboardRepo = {
  async stats(): Promise<DashboardStats> {
    await ensureSeed();
    const store = getCmsStore();
    const [leads, projects, services, views] = await Promise.all([
      store.leads.list(),
      store.projects.list(),
      store.services.list(),
      store.pageViews.list(),
    ]);

    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 86400000);

    const todayVisitors = new Set(
      views.filter((v) => v.created_at.startsWith(today)).map((v) => v.session_id ?? v.id),
    ).size;
    const last30 = views.filter((v) => new Date(v.created_at) >= thirtyDaysAgo);
    const last30Visitors = new Set(last30.map((v) => v.session_id ?? v.id)).size;
    const totalVisitors = new Set(views.map((v) => v.session_id ?? v.id)).size;

    const unreadLeads = leads.filter((l) => l.status === "new").length;
    const published = projects.filter((p) => p.status === "published");
    const conversionRate =
      totalVisitors > 0 ? Math.round((leads.length / totalVisitors) * 1000) / 10 : 0;

    return {
      totalVisitors,
      todayVisitors,
      last30DaysVisitors: last30Visitors,
      totalLeads: leads.length,
      unreadLeads,
      totalProjects: projects.length,
      activeProjects: published.length,
      completedProjects: projects.filter((p) => p.status === "archived").length,
      totalServices: services.filter((s) => s.active).length,
      conversionRate,
    };
  },
};

export async function createNotification(type: string, title: string, body?: string, meta?: Record<string, unknown>) {
  const store = getCmsStore();
  return store.notifications.create({
    type,
    title,
    body,
    read: false,
    meta,
    created_at: fileStore.now(),
  } as NotificationRecord);
}
