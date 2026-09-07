import { supabaseServer } from "@/lib/supabase/server";
import { FALLBACK_OPPORTUNITIES } from "@/lib/fallback-data";
import type { OpportunityCategory, OpportunityWithProfile } from "@/lib/types";

const PROFILE_CONTACT_FIELDS = "id, full_name, avatar_url, linkedin_url, whatsapp_number";

export async function getOpportunities(filters: {
  category?: OpportunityCategory;
}): Promise<{ opportunities: OpportunityWithProfile[]; usingFallback: boolean }> {
  const supabase = await supabaseServer();

  if (!supabase) {
    return { opportunities: filterOpportunities(FALLBACK_OPPORTUNITIES, filters), usingFallback: true };
  }

  let request = supabase
    .from("opportunities")
    .select(`*, profiles:posted_by_profile_id (${PROFILE_CONTACT_FIELDS})`)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (filters.category) request = request.eq("category", filters.category);

  const { data, error } = await request;
  if (error || !data) {
    return { opportunities: filterOpportunities(FALLBACK_OPPORTUNITIES, filters), usingFallback: true };
  }

  return { opportunities: data as unknown as OpportunityWithProfile[], usingFallback: false };
}

export async function getOpportunityById(
  id: string
): Promise<{ opportunity: OpportunityWithProfile | null; usingFallback: boolean }> {
  const supabase = await supabaseServer();

  if (!supabase) {
    return { opportunity: FALLBACK_OPPORTUNITIES.find((o) => o.id === id) ?? null, usingFallback: true };
  }

  const { data, error } = await supabase
    .from("opportunities")
    .select(`*, profiles:posted_by_profile_id (${PROFILE_CONTACT_FIELDS})`)
    .eq("id", id)
    .maybeSingle();

  if (error) return { opportunity: null, usingFallback: false };
  return { opportunity: data as unknown as OpportunityWithProfile | null, usingFallback: false };
}

function filterOpportunities(
  opportunities: OpportunityWithProfile[],
  filters: { category?: OpportunityCategory }
): OpportunityWithProfile[] {
  if (!filters.category) return opportunities;
  return opportunities.filter((o) => o.category === filters.category);
}
