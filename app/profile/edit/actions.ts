"use server";

import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { validateProfile, type ProfileFormValues } from "@/lib/validate";

export type UpsertProfileState = {
  errors: Record<string, string>;
  values: ProfileFormValues;
};

export async function upsertProfile(
  _prevState: UpsertProfileState,
  formData: FormData
): Promise<UpsertProfileState> {
  const values: ProfileFormValues = {
    full_name: String(formData.get("full_name") ?? ""),
    expertise_category_id: String(formData.get("expertise_category_id") ?? ""),
    years_experience: String(formData.get("years_experience") ?? ""),
    bio: String(formData.get("bio") ?? ""),
    avatar_url: String(formData.get("avatar_url") ?? ""),
    linkedin_url: String(formData.get("linkedin_url") ?? ""),
    whatsapp_number: String(formData.get("whatsapp_number") ?? ""),
    portfolio_links: formData
      .getAll("portfolio_links")
      .map(String)
      .map((link) => link.trim())
      .filter(Boolean),
  };

  const errors = validateProfile(values);
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

  if (!user) {
    redirect("/join");
  }

  const { error } = await supabase.from("profiles").upsert(
    {
      user_id: user.id,
      full_name: values.full_name.trim(),
      expertise_category_id: values.expertise_category_id,
      years_experience: Number(values.years_experience),
      bio: values.bio.trim() || null,
      avatar_url: values.avatar_url.trim() || null,
      linkedin_url: values.linkedin_url.trim() || null,
      whatsapp_number: values.whatsapp_number.trim() || null,
      portfolio_links: values.portfolio_links,
      is_seed: false,
    },
    { onConflict: "user_id" }
  );

  if (error) {
    return { errors: { form: error.message }, values };
  }

  redirect("/directory");
}
