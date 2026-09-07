import { supabaseServer } from "@/lib/supabase/server";
import { FALLBACK_TESTIMONIALS } from "@/lib/fallback-data";
import type { TestimonialWithProfile } from "@/lib/types";

export async function getTestimonials(): Promise<{
  testimonials: TestimonialWithProfile[];
  usingFallback: boolean;
}> {
  const supabase = await supabaseServer();
  if (!supabase) return { testimonials: FALLBACK_TESTIMONIALS, usingFallback: true };

  const { data, error } = await supabase
    .from("testimonials")
    .select("*, profiles:about_profile_id (id, full_name, avatar_url)")
    .order("sort_order", { ascending: true });

  if (error || !data) return { testimonials: FALLBACK_TESTIMONIALS, usingFallback: true };
  return { testimonials: data as unknown as TestimonialWithProfile[], usingFallback: false };
}
