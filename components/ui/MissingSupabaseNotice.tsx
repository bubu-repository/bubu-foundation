export function MissingSupabaseNotice({
  title = "Connect Supabase to go live",
  action,
}: {
  title?: string;
  action?: string;
}) {
  return (
    <div className="glass rounded-card p-6 md:p-8">
      <p className="font-display text-2xl tracking-wide text-ink">{title}</p>
      <p className="mt-2 max-w-md text-sm text-body">
        {action ??
          "This part of the site needs a Supabase project to work — set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local, then run supabase/schema.sql and supabase/seed.sql."}
      </p>
    </div>
  );
}

export function FallbackDataBanner() {
  return (
    <div className="mb-8 flex items-center gap-3 rounded-input border border-line-lt bg-surface px-4 py-3 text-sm text-grey-dark">
      <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
      Showing example data — connect Supabase to go live.
    </div>
  );
}
