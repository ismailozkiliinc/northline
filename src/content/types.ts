export type Locale = "tr" | "en";

export type ServiceHref =
  | "/hizmetler"
  | "/hizmetler/web"
  | "/hizmetler/mobil"
  | "/hizmetler/ui-ux"
  | "/hizmetler/saas"
  | "/hizmetler/e-ticaret"
  | "/hizmetler/ai";

export type Bilingual<T> = Record<Locale, T>;

export type ProjectStatus = "demo" | "live";

export type ServiceId =
  | "web"
  | "mobile"
  | "ui-ux"
  | "saas"
  | "ecommerce"
  | "ai"
  | "support";

export type PackageId =
  | "landing"
  | "corporate"
  | "ecommerce"
  | "mobile-mvp"
  | "custom-app"
  | "uiux"
  | "care";

export type BlogCategory =
  | "web"
  | "mobile"
  | "ecommerce"
  | "product"
  | "strategy";

export type ProjectPresentation =
  | "cinematic"
  | "dashboard"
  | "mobile-strip"
  | "banner";

export interface Project {
  slug: string;
  status: ProjectStatus;
  featured: boolean;
  coverTone: string;
  presentation: ProjectPresentation;
  solution: Bilingual<string>;
  shortTitle: Bilingual<string>;
  title: Bilingual<string>;
  sector: Bilingual<string>;
  services: Bilingual<string[]>;
  platforms: Bilingual<string[]>;
  problem: Bilingual<string>;
  summary: Bilingual<string>;
  goals: Bilingual<string[]>;
  audience: Bilingual<string>;
  research: Bilingual<string>;
  flows: Bilingual<string>;
  designSystem: Bilingual<string>;
  tech: Bilingual<string[]>;
  architecture: Bilingual<string>;
  testing: Bilingual<string>;
  results: Bilingual<string>;
  screens: Bilingual<string[]>;
}

export interface Service {
  id: ServiceId;
  href: ServiceHref;
  icon: string;
  title: Bilingual<string>;
  description: Bilingual<string>;
  bullets: Bilingual<string[]>;
  includes: Bilingual<string[]>;
  processNotes: Bilingual<string>;
}

export interface Package {
  id: PackageId;
  title: Bilingual<string>;
  forWhom: Bilingual<string>;
  includes: Bilingual<string[]>;
  excludes: Bilingual<string[]>;
  timeline: Bilingual<string>;
  priceNote: Bilingual<string>;
}

export interface FaqItem {
  id: string;
  question: Bilingual<string>;
  answer: Bilingual<string>;
}

export interface BlogPost {
  slug: string;
  title: Bilingual<string>;
  excerpt: Bilingual<string>;
  category: BlogCategory;
  seoTitle: Bilingual<string>;
  seoDescription: Bilingual<string>;
  publishedAt: string;
  updatedAt: string;
  author: string;
  relatedService: ServiceId;
  body: Bilingual<string>;
}
