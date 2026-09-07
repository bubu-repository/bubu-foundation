-- Bubu Foundation — schema
-- Run this once in the Supabase SQL editor (before seed.sql).

create extension if not exists "pgcrypto";

-- Reference table rather than an enum: categories should be free to grow as
-- the alumni network grows, and Postgres enums can't have values removed.
create table if not exists public.expertise_categories (
  id         uuid primary key default gen_random_uuid(),
  slug       text not null unique,
  label      text not null,
  sort_order smallint not null default 0
);

create table if not exists public.profiles (
  id                     uuid primary key default gen_random_uuid(),
  -- null = seed/placeholder row, not tied to a real signup. Unique when
  -- present so one auth user maps to exactly one profile.
  user_id                uuid unique references auth.users(id) on delete cascade,
  is_seed                boolean not null default false,

  full_name              text not null,
  expertise_category_id  uuid not null references public.expertise_categories(id),
  years_experience       smallint not null check (years_experience between 0 and 60),
  bio                    text,
  avatar_url             text,
  linkedin_url           text,
  whatsapp_number        text,
  portfolio_links        text[] not null default '{}',

  -- City + ISO 3166-1 alpha-2 country code (e.g. "ID"), rendered as a flag
  -- emoji client-side (lib/flag.ts) — cheap, real social signal on cards.
  city                   text,
  country_code           text check (country_code is null or country_code ~ '^[A-Z]{2}$'),
  -- Curator-set badges shown on directory/home cards, distinct from
  -- self-reported profile data.
  is_featured            boolean not null default false,
  is_open_to_collaborate boolean not null default true,

  is_published           boolean not null default true,
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

create index if not exists profiles_category_idx on public.profiles (expertise_category_id);
create index if not exists profiles_published_idx on public.profiles (is_published);

create table if not exists public.opportunities (
  id                     uuid primary key default gen_random_uuid(),
  -- Every opportunity is posted by an alumnus already in the directory —
  -- enforces Register -> Profile -> Collaborate at the database level.
  posted_by_profile_id   uuid not null references public.profiles(id) on delete cascade,
  is_seed                boolean not null default false,

  title                  text not null,
  category               text not null check (category in (
                            'collaboration', 'investment', 'social_project',
                            'freelance', 'mentorship', 'event_speaking'
                          )),
  description            text not null,
  looking_for            text,
  status                 text not null default 'open' check (status in ('open', 'closed')),

  is_published           boolean not null default true,
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

create index if not exists opportunities_category_idx on public.opportunities (category);
create index if not exists opportunities_status_idx on public.opportunities (status);

-- Curated social-proof quotes for the home page. No submission form in v1 —
-- managed via the SQL editor, same pattern as expertise_categories.
create table if not exists public.testimonials (
  id                 uuid primary key default gen_random_uuid(),
  is_seed            boolean not null default false,
  quote              text not null,
  author_name        text not null,
  author_role        text,
  about_profile_id   uuid references public.profiles(id) on delete set null,
  sort_order         smallint not null default 0,
  created_at         timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists opportunities_set_updated_at on public.opportunities;
create trigger opportunities_set_updated_at
  before update on public.opportunities
  for each row execute function public.set_updated_at();

-- Row Level Security -----------------------------------------------------

alter table public.expertise_categories enable row level security;

drop policy if exists "expertise_categories_public_read" on public.expertise_categories;
create policy "expertise_categories_public_read"
  on public.expertise_categories for select using (true);
-- No insert/update/delete policy: with RLS enabled and no policy, every
-- write is denied for anon/authenticated. Manage categories via SQL editor.

alter table public.profiles enable row level security;

drop policy if exists "profiles_public_read" on public.profiles;
create policy "profiles_public_read"
  on public.profiles for select
  using (is_published = true or auth.uid() = user_id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = user_id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "profiles_delete_own" on public.profiles;
create policy "profiles_delete_own"
  on public.profiles for delete
  using (auth.uid() = user_id);

alter table public.opportunities enable row level security;

drop policy if exists "opportunities_public_read" on public.opportunities;
create policy "opportunities_public_read"
  on public.opportunities for select
  using (
    is_published = true
    or exists (
      select 1 from public.profiles p
      where p.id = opportunities.posted_by_profile_id and p.user_id = auth.uid()
    )
  );

drop policy if exists "opportunities_insert_own" on public.opportunities;
create policy "opportunities_insert_own"
  on public.opportunities for insert
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = posted_by_profile_id and p.user_id = auth.uid()
    )
  );

drop policy if exists "opportunities_update_own" on public.opportunities;
create policy "opportunities_update_own"
  on public.opportunities for update
  using (
    exists (select 1 from public.profiles p
      where p.id = posted_by_profile_id and p.user_id = auth.uid())
  )
  with check (
    exists (select 1 from public.profiles p
      where p.id = posted_by_profile_id and p.user_id = auth.uid())
  );

drop policy if exists "opportunities_delete_own" on public.opportunities;
create policy "opportunities_delete_own"
  on public.opportunities for delete
  using (
    exists (select 1 from public.profiles p
      where p.id = posted_by_profile_id and p.user_id = auth.uid())
  );

alter table public.testimonials enable row level security;

drop policy if exists "testimonials_public_read" on public.testimonials;
create policy "testimonials_public_read"
  on public.testimonials for select using (true);
-- No insert/update/delete policy: curator-managed via the SQL editor only.

-- Seed rows have user_id = null. `auth.uid() = null` is never true in SQL,
-- so seed rows are publicly readable (is_published = true) but structurally
-- un-editable through the anon/authenticated API — only via this SQL editor.
-- When real signups arrive, remove the placeholder network with:
--   delete from public.profiles where is_seed = true;
-- (cascades to their seed opportunities via the foreign key.)
