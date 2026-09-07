import { supabaseServer } from "@/lib/supabase/server";
import { FALLBACK_CATEGORIES } from "@/lib/fallback-data";
import type { ExpertiseCategory } from "@/lib/types";

export async function getExpertiseCategories(): Promise<{
  categories: ExpertiseCategory[];
  usingFallback: boolean;
}> {
  const supabase = await supabaseServer();
  if (!supabase) return { categories: FALLBACK_CATEGORIES, usingFallback: true };

  const { data, error } = await supabase
    .from("expertise_categories")
    .select("id, slug, label, sort_order")
    .order("sort_order", { ascending: true });

  if (error || !data) return { categories: FALLBACK_CATEGORIES, usingFallback: true };
  return { categories: data, usingFallback: false };
}
