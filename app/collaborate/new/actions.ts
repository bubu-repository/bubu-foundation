"use server";

import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { validateOpportunity, type OpportunityFormValues } from "@/lib/validate";

export type CreateOpportunityState = {
  errors: Record<string, string>;
  values: OpportunityFormValues;
};

export async function createOpportunity(
  _prevState: CreateOpportunityState,
  formData: FormData
): Promise<CreateOpportunityState> {
  const values: OpportunityFormValues = {
    title: String(formData.get("title") ?? ""),
    category: String(formData.get("category") ?? ""),
    description: String(formData.get("description") ?? ""),
    looking_for: String(formData.get("looking_for") ?? ""),
  };

  const errors = validateOpportunity(values);
  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  const supabase = await supabaseServer();
  if (!supabase) {
    return { errors: { form: "Supabase isn't configured yet." }, values };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/join");

  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile) redirect("/profile/edit");

  const { error } = await supabase.from("opportunities").insert({
    posted_by_profile_id: profile.id,
    title: values.title.trim(),
    category: values.category,
    description: values.description.trim(),
    looking_for: values.looking_for.trim() || null,
    is_seed: false,
  });

  if (error) {
    return { errors: { form: error.message }, values };
  }

  redirect("/collaborate");
}
