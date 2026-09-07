import Link from "next/link";
import { redirect } from "next/navigation";
import { OpportunityForm } from "@/components/collaborate/OpportunityForm";
import { MissingSupabaseNotice } from "@/components/ui/MissingSupabaseNotice";
import { supabaseServer } from "@/lib/supabase/server";

export const metadata = { title: "Post an opportunity — Bubu Foundation" };

export default async function NewOpportunityPage() {
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

  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile) {
    return (
      <div className="mx-auto max-w-xl px-6 py-20 text-center">
        <p className="font-display text-2xl tracking-wide text-ink">Complete your profile first</p>
        <p className="mt-2 text-sm text-body">
          Alumni post opportunities from their own profile, so people know who&apos;s asking.
        </p>
        <Link
          href="/profile/edit"
          className="ring-focus mt-5 inline-block text-sm font-semibold text-brand-deep hover:underline"
        >
          Build your profile <span className="link-arrow">→</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Collaborate</p>
      <h1 className="mt-4 font-display text-4xl tracking-wide text-ink">Post an opportunity</h1>
      <p className="mt-4 text-sm leading-relaxed text-body">
        Tell the network what you&apos;re building or looking for. Your profile&apos;s contact
        details go with it.
      </p>

      <div className="mt-10">
        <OpportunityForm />
      </div>
    </div>
  );
}
