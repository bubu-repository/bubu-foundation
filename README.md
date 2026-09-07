# Bubu Foundation

The alumni network for BUBU, a cultural intelligence agency — a directory of
ex-BUBU expertise, profiles, and a board for collaboration and investment
opportunities. Built with Next.js (App Router), Tailwind CSS, Framer Motion,
and Supabase (Postgres + magic-link auth).

## Local development

```bash
npm install
npm run dev
```

The app runs fully without Supabase configured: Home works as-is, and
Directory/Collaborate show example data with a small banner. Auth-gated
pages (Join, post an opportunity, edit profile) show a "connect Supabase"
notice instead of a form.

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run `supabase/schema.sql`, then `supabase/seed.sql`.
3. Copy `.env.local.example` to `.env.local` and fill in your project's URL
   and anon key (Project Settings → API).
4. In Supabase, go to Authentication → URL Configuration and add
   `http://localhost:3000/auth/callback` to the redirect allow-list (add
   your Vercel URL(s) there too once deployed).
5. Restart `npm run dev` — Directory/Collaborate now show live data, and
   `/join` sends real magic-link emails.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as
   environment variables for Production and Preview.
4. Add the deployed URL(s) to Supabase's Auth redirect allow-list.
5. Deploy.

## Project structure

- `app/` — routes (App Router): home, directory, collaborate, join, profile,
  auth callback.
- `components/` — UI, organized by area (`hero/`, `directory/`,
  `collaborate/`, `profile/`, `join/`, `ui/`).
- `lib/` — Supabase clients, data-fetching (`lib/data/`), types, validation,
  and the seed/fallback content (`lib/seed-source.ts`, `lib/fallback-data.ts`).
- `supabase/` — `schema.sql` and `seed.sql` to run in the Supabase SQL editor.
