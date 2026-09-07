// Used by app/directory and app/collaborate whenever Supabase env vars are
// absent (see lib/supabase/client.ts::isSupabaseConfigured), so the app is
// fully browsable before a Supabase project exists. Shape mirrors what the
// real Supabase queries return (profile joined with its category / an
// opportunity joined with its poster's profile).

import { SEED_CATEGORIES, SEED_OPPORTUNITIES, SEED_PROFILES } from "@/lib/seed-source";
import type {
  ExpertiseCategory,
  OpportunityWithProfile,
  ProfileWithCategory,
} from "@/lib/types";

const nowIso = new Date().toISOString();

export const FALLBACK_CATEGORIES: ExpertiseCategory[] = SEED_CATEGORIES.map((c) => ({ ...c }));

const categoryById = new Map(FALLBACK_CATEGORIES.map((c) => [c.id, c]));

export const FALLBACK_PROFILES: ProfileWithCategory[] = SEED_PROFILES.map((p) => ({
  ...p,
  user_id: null,
  is_seed: true,
  is_published: true,
  created_at: nowIso,
  updated_at: nowIso,
  portfolio_links: [...p.portfolio_links],
  expertise_categories: categoryById.get(p.expertise_category_id) ?? null,
}));

const profileById = new Map(FALLBACK_PROFILES.map((p) => [p.id, p]));

export const FALLBACK_OPPORTUNITIES: OpportunityWithProfile[] = SEED_OPPORTUNITIES.map((o) => {
  const poster = profileById.get(o.posted_by_profile_id) ?? null;
  return {
    ...o,
    is_seed: true,
    is_published: true,
    created_at: nowIso,
    updated_at: nowIso,
    profiles: poster
      ? {
          id: poster.id,
          full_name: poster.full_name,
          avatar_url: poster.avatar_url,
          linkedin_url: poster.linkedin_url,
          whatsapp_number: poster.whatsapp_number,
        }
      : null,
  };
});
