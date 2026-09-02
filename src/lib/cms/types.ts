import type { AdminRole } from "@/lib/admin/permissions";
import type { BlogCategory, ProjectPresentation, ServiceId } from "@/content/types";

export type LeadStatus =
  | "new"
  | "reviewing"
  | "contacted"
  | "proposal"
  | "won"
  | "closed"
  | "spam";

export type CmsStatus = "draft" | "published" | "archived";

export type BilingualField = { tr: string; en: string };
export type BilingualList = { tr: string[]; en: string[] };

export type LeadRecord = {
  id: string;
  created_at: string;
  updated_at: string;
  locale?: string;
  source: string;
  source_page?: string;
  project_type?: string;
  project_status?: string;
  features?: string[];
  budget?: string;
  timeline?: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  channel?: string;
  message?: string;
  consent: boolean;
  status: LeadStatus;
  admin_notes?: string;
  metadata?: Record<string, unknown>;
};

export type ClientRecord = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  service_interest?: string;
  project_name?: string;
  budget?: string;
  status: "lead" | "active" | "completed" | "archived";
  notes?: string;
  last_contact_at?: string;
  next_follow_up_at?: string;
  lead_id?: string;
};

export type CmsProjectRecord = {
  id: string;
  slug: string;
  status: CmsStatus;
  featured: boolean;
  sort_order: number;
  cover_image?: string;
  cover_tone?: string;
  presentation?: ProjectPresentation;
  gallery?: string[];
  video_url?: string;
  demo_media?: Record<string, unknown>;
  category?: string;
  client_name?: string;
  project_year?: string;
  project_url?: string;
  cta_label?: BilingualField;
  cta_url?: string;
  payload: Record<string, unknown>;
  seo_title?: BilingualField;
  seo_description?: BilingualField;
  created_at: string;
  updated_at: string;
};

export type CmsServiceRecord = {
  id: string;
  service_id: ServiceId | string;
  href?: string;
  icon?: string;
  active: boolean;
  sort_order: number;
  image_url?: string;
  animation?: Record<string, unknown>;
  payload: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

export type TestimonialRecord = {
  id: string;
  active: boolean;
  sort_order: number;
  client_name: string;
  position?: string;
  company?: string;
  avatar_url?: string;
  logo_url?: string;
  quote: BilingualField;
  rating?: number;
  project_slug?: string;
  created_at: string;
  updated_at: string;
};

export type ClientLogoRecord = {
  id: string;
  name: string;
  logo_url: string;
  url?: string;
  active: boolean;
  sort_order: number;
  created_at: string;
};

export type BlogPostRecord = {
  id: string;
  slug: string;
  status: CmsStatus;
  cover_image?: string;
  category?: BlogCategory | string;
  tags?: string[];
  author?: string;
  published_at?: string;
  payload: Record<string, unknown>;
  seo_title?: BilingualField;
  seo_description?: BilingualField;
  og_image?: string;
  created_at: string;
  updated_at: string;
};

export type HomepageCms = {
  hero: {
    eyebrow: BilingualField;
    titleBefore: BilingualField;
    titleHighlight: BilingualField;
    titleAfter: BilingualField;
    subtitle: BilingualField;
    ctaPrimary: BilingualField;
    ctaSecondary: BilingualField;
    badge?: BilingualField;
    mediaUrl?: string;
    mediaType?: "image" | "video";
  };
  about: {
    title: BilingualField;
    description: BilingualField;
    imageUrl?: string;
    stats: { value: string; label: BilingualField }[];
  };
  cta: {
    title: BilingualField;
    description: BilingualField;
    buttonText: BilingualField;
    buttonLink: string;
  };
  featuredProjectSlugs: string[];
  featuredServiceIds: string[];
};

export type SiteSettingsRecord = {
  name: string;
  logoUrl?: string;
  faviconUrl?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: BilingualField;
  social: {
    instagram?: string;
    linkedin?: string;
    x?: string;
    behance?: string;
    dribbble?: string;
    github?: string;
  };
  footer: {
    description: BilingualField;
    copyright: BilingualField;
  };
};

export type SeoPageRecord = {
  id: string;
  path: string;
  locale: string;
  meta_title?: string;
  meta_description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  canonical?: string;
  indexable: boolean;
  updated_at: string;
};

export type MediaAssetRecord = {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size_bytes: number;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  metadata?: Record<string, unknown>;
  created_at: string;
};

export type NotificationRecord = {
  id: string;
  type: string;
  title: string;
  body?: string;
  read: boolean;
  meta?: Record<string, unknown>;
  created_at: string;
};

export type AuditLogRecord = {
  id: string;
  created_at: string;
  actor_id?: string;
  actor_email?: string;
  action: string;
  entity?: string;
  entity_id?: string;
  meta?: Record<string, unknown>;
};

export type PageViewRecord = {
  id: string;
  created_at: string;
  path: string;
  locale?: string;
  referrer?: string;
  user_agent?: string;
  device_type?: "mobile" | "desktop" | "tablet" | "unknown";
  session_id?: string;
};

export type AdminUserRecord = {
  id: string;
  email: string;
  full_name?: string;
  role: AdminRole;
  created_at: string;
};

export type DashboardStats = {
  totalVisitors: number;
  todayVisitors: number;
  last30DaysVisitors: number;
  totalLeads: number;
  unreadLeads: number;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalServices: number;
  conversionRate: number;
};
