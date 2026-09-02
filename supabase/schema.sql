-- NISCRAFT CMS + Admin schema
-- Run in Supabase SQL editor when connecting a project.

create extension if not exists "pgcrypto";

-- ─── Profiles & roles ───────────────────────────────────────────────────────
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'editor'
    check (role in ('super_admin', 'admin', 'editor')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Leads (extended) ───────────────────────────────────────────────────────
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  locale text,
  source text not null default 'wizard',
  source_page text,
  project_type text,
  project_status text,
  features jsonb default '[]'::jsonb,
  budget text,
  timeline text,
  name text not null,
  company text,
  email text not null,
  phone text,
  channel text,
  message text,
  consent boolean not null default false,
  status text not null default 'new'
    check (status in ('new','reviewing','contacted','proposal','won','closed','spam')),
  admin_notes text,
  metadata jsonb default '{}'::jsonb
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);

-- ─── Clients (CRM) ──────────────────────────────────────────────────────────
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  company text,
  email text,
  phone text,
  country text,
  service_interest text,
  project_name text,
  budget text,
  status text not null default 'lead'
    check (status in ('lead','active','completed','archived')),
  notes text,
  last_contact_at timestamptz,
  next_follow_up_at timestamptz,
  lead_id uuid references leads(id) on delete set null
);

-- ─── Projects CMS ───────────────────────────────────────────────────────────
create table if not exists cms_projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  status text not null default 'draft'
    check (status in ('draft','published','archived')),
  featured boolean not null default false,
  sort_order int not null default 0,
  cover_image text,
  cover_tone text,
  presentation text,
  gallery jsonb default '[]'::jsonb,
  video_url text,
  demo_media jsonb default '{}'::jsonb,
  category text,
  client_name text,
  project_year text,
  project_url text,
  cta_label jsonb,
  cta_url text,
  payload jsonb not null default '{}'::jsonb,
  seo_title jsonb,
  seo_description jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists cms_projects_status_idx on cms_projects (status);
create index if not exists cms_projects_sort_idx on cms_projects (sort_order);

-- ─── Services CMS ───────────────────────────────────────────────────────────
create table if not exists cms_services (
  id uuid primary key default gen_random_uuid(),
  service_id text unique not null,
  href text,
  icon text,
  active boolean not null default true,
  sort_order int not null default 0,
  image_url text,
  animation jsonb default '{}'::jsonb,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Testimonials ───────────────────────────────────────────────────────────
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  active boolean not null default true,
  sort_order int not null default 0,
  client_name text not null,
  position text,
  company text,
  avatar_url text,
  logo_url text,
  quote jsonb not null,
  rating int check (rating >= 1 and rating <= 5),
  project_slug text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Client logos ───────────────────────────────────────────────────────────
create table if not exists client_logos (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  url text,
  active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ─── Blog ───────────────────────────────────────────────────────────────────
create table if not exists cms_blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  status text not null default 'draft'
    check (status in ('draft','published','archived')),
  cover_image text,
  category text,
  tags jsonb default '[]'::jsonb,
  author text,
  published_at timestamptz,
  payload jsonb not null default '{}'::jsonb,
  seo_title jsonb,
  seo_description jsonb,
  og_image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Homepage CMS ───────────────────────────────────────────────────────────
create table if not exists cms_homepage (
  id text primary key default 'main',
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- ─── Site settings ──────────────────────────────────────────────────────────
create table if not exists site_settings (
  id text primary key default 'main',
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- ─── SEO pages ──────────────────────────────────────────────────────────────
create table if not exists seo_pages (
  id uuid primary key default gen_random_uuid(),
  path text unique not null,
  locale text not null default 'tr',
  meta_title text,
  meta_description text,
  og_title text,
  og_description text,
  og_image text,
  canonical text,
  indexable boolean not null default true,
  updated_at timestamptz not null default now()
);

-- ─── Media library ──────────────────────────────────────────────────────────
create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  filename text not null,
  original_name text not null,
  mime_type text not null,
  size_bytes int not null default 0,
  url text not null,
  alt text,
  width int,
  height int,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists media_assets_created_idx on media_assets (created_at desc);

-- ─── Notifications ─────────────────────────────────────────────────────────
create table if not exists admin_notifications (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  title text not null,
  body text,
  read boolean not null default false,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists admin_notifications_read_idx on admin_notifications (read, created_at desc);

-- ─── Activity log ───────────────────────────────────────────────────────────
create table if not exists audit_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  actor_id text,
  actor_email text,
  action text not null,
  entity text,
  entity_id text,
  meta jsonb default '{}'::jsonb
);

create index if not exists audit_log_created_idx on audit_log (created_at desc);

-- ─── Analytics ──────────────────────────────────────────────────────────────
create table if not exists page_views (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  path text not null,
  locale text,
  referrer text,
  user_agent text,
  device_type text check (device_type in ('mobile','desktop','tablet','unknown')),
  session_id text
);

create index if not exists page_views_created_idx on page_views (created_at desc);
create index if not exists page_views_path_idx on page_views (path);

-- ─── RLS ────────────────────────────────────────────────────────────────────
alter table profiles enable row level security;
alter table leads enable row level security;
alter table clients enable row level security;
alter table cms_projects enable row level security;
alter table cms_services enable row level security;
alter table testimonials enable row level security;
alter table client_logos enable row level security;
alter table cms_blog_posts enable row level security;
alter table cms_homepage enable row level security;
alter table site_settings enable row level security;
alter table seo_pages enable row level security;
alter table media_assets enable row level security;
alter table admin_notifications enable row level security;
alter table audit_log enable row level security;
alter table page_views enable row level security;

-- Server uses service role; public reads via Next.js server components only.
