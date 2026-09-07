import type { OpportunityCategory } from "@/lib/types";

export const SITE = {
  name: "Bubu Foundation",
  tagline: "It's not about visibility. It's about relevance.",
  vision: "Movements, not moments.",
  belief:
    "BUBU's greatest asset is its people — the alumni network. We can activate them as a movement.",
};

// Kept in sync with the opportunities.category CHECK constraint in
// supabase/schema.sql — this list is fixed (6 values), unlike expertise
// categories which live in their own growable reference table.
export const OPPORTUNITY_CATEGORIES: { value: OpportunityCategory; label: string }[] = [
  { value: "collaboration", label: "Collaboration" },
  { value: "investment", label: "Investment" },
  { value: "social_project", label: "Social Project" },
  { value: "freelance", label: "Freelance" },
  { value: "mentorship", label: "Mentorship" },
  { value: "event_speaking", label: "Event Speaking" },
];

export function opportunityCategoryLabel(value: OpportunityCategory): string {
  return OPPORTUNITY_CATEGORIES.find((c) => c.value === value)?.label ?? value;
}
