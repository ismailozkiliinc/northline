-- Northline Supabase schema
-- Run in Supabase SQL editor when connecting a project.

create extension if not exists "pgcrypto";

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text,
  source text not null default 'wizard', -- wizard | contact
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
    check (status in ('new','contacted','meeting','proposal','won','lost')),
  metadata jsonb default '{}'::jsonb
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);

create table if not exists audit_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  actor text,
  action text not null,
  entity text,
  entity_id text,
  meta jsonb default '{}'::jsonb
);

-- Content tables (optional CMS later)
create table if not exists pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  locale text not null,
  title text,
  body jsonb,
  seo jsonb,
  status text not null default 'draft' check (status in ('draft','published')),
  updated_at timestamptz not null default now()
);

create table if not exists projects_cms (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  locale text not null,
  payload jsonb not null,
  status text not null default 'demo' check (status in ('demo','live','draft')),
  featured boolean default false,
  updated_at timestamptz not null default now()
);

-- Enable RLS; service role bypasses for server writes
alter table leads enable row level security;
alter table audit_log enable row level security;
alter table pages enable row level security;
alter table projects_cms enable row level security;

-- No public anon insert without going through Next.js API (server uses service role)
