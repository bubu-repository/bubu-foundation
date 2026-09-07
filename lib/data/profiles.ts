import { supabaseServer } from "@/lib/supabase/server";
import { FALLBACK_PROFILES } from "@/lib/fallback-data";
import type { ProfileWithCategory } from "@/lib/types";

export async function getDirectoryProfiles(filters: {
  categorySlug?: string;
  query?: string;
}): Promise<{ profiles: ProfileWithCategory[]; usingFallback: boolean }> {
  const supabase = await supabaseServer();

  if (!supabase) {
    return { profiles: filterProfiles(FALLBACK_PROFILES, filters), usingFallback: true };
  }

  let request = supabase
    .from("profiles")
    .select("*, expertise_categories(id, slug, label)")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (filters.categorySlug) {
    request = request.eq("expertise_categories.slug", filters.categorySlug);
  }
  if (filters.query) {
    request = request.or(`full_name.ilike.%${filters.query}%,bio.ilike.%${filters.query}%`);
  }

  const { data, error } = await request;
  if (error || !data) return { profiles: filterProfiles(FALLBACK_PROFILES, filters), usingFallback: true };

  // Supabase's implicit-join filter above can still return rows whose
  // related category didn't match (left-join semantics) — filter client-side
  // as a safety net so a category filter never leaks unrelated profiles.
  const profiles = filters.categorySlug
    ? (data as ProfileWithCategory[]).filter((p) => p.expertise_categories?.slug === filters.categorySlug)
    : (data as ProfileWithCategory[]);

  return { profiles, usingFallback: false };
}

export async function getProfileById(
  id: string
): Promise<{ profile: ProfileWithCategory | null; usingFallback: boolean }> {
  const supabase = await supabaseServer();

  if (!supabase) {
    return { profile: FALLBACK_PROFILES.find((p) => p.id === id) ?? null, usingFallback: true };
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*, expertise_categories(id, slug, label)")
    .eq("id", id)
    .maybeSingle();

  if (error) return { profile: null, usingFallback: false };
  return { profile: data as ProfileWithCategory | null, usingFallback: false };
}

export async function getProfileForUser(userId: string): Promise<ProfileWithCategory | null> {
  const supabase = await supabaseServer();
  if (!supabase) return null;

  const { data } = await supabase
    .from("profiles")
    .select("*, expertise_categories(id, slug, label)")
    .eq("user_id", userId)
    .maybeSingle();

  return (data as ProfileWithCategory | null) ?? null;
}

function filterProfiles(
  profiles: ProfileWithCategory[],
  filters: { categorySlug?: string; query?: string }
): ProfileWithCategory[] {
  return profiles.filter((p) => {
    if (filters.categorySlug && p.expertise_categories?.slug !== filters.categorySlug) return false;
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const haystack = `${p.full_name} ${p.bio ?? ""}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}
