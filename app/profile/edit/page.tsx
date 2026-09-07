import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { MissingSupabaseNotice } from "@/components/ui/MissingSupabaseNotice";
import { supabaseServer } from "@/lib/supabase/server";
import { getExpertiseCategories } from "@/lib/data/categories";
import { getProfileForUser } from "@/lib/data/profiles";

export const metadata = { title: "Your profile — Bubu Foundation" };

export default async function ProfileEditPage({
  searchParams,
}: {
  searchParams: Promise<{ welcome?: string }>;
}) {
  const { welcome } = await searchParams;
  const supabase = await supabaseServer();

  if (!supabase) {
    return (
      <div className="mx-auto max-w-xl px-6 py-20">
        <MissingSupabaseNotice />
      </div>
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/join");

  const [{ categories }, existingProfile] = await Promise.all([
    getExpertiseCategories(),
    getProfileForUser(user.id),
  ]);

  const initialValues = {
    full_name: existingProfile?.full_name ?? "",
    expertise_category_id: existingProfile?.expertise_category_id ?? "",
    years_experience: existingProfile ? String(existingProfile.years_experience) : "",
    bio: existingProfile?.bio ?? "",
    avatar_url: existingProfile?.avatar_url ?? "",
    linkedin_url: existingProfile?.linkedin_url ?? "",
    whatsapp_number: existingProfile?.whatsapp_number ?? "",
    portfolio_links: existingProfile?.portfolio_links ?? [],
  };

  return (
    <div className="mx-auto max-w-xl px-6 py-16 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
        {existingProfile ? "Your profile" : "Build your profile"}
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-wide text-ink">
        {welcome ? "Welcome to Bubu Foundation." : existingProfile ? "Keep it current." : "Tell the network who you are."}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-body">
        This is what other alumni see in the directory — expertise, experience, and how to reach
        you.
      </p>

      <div className="mt-10">
        <ProfileForm categories={categories} initialValues={initialValues} isNew={!existingProfile} />
      </div>
    </div>
  );
}
