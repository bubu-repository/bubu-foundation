import { DirectoryFilters } from "@/components/directory/DirectoryFilters";
import { AlumniCard } from "@/components/directory/AlumniCard";
import { EmptyState } from "@/components/directory/EmptyState";
import { FallbackDataBanner } from "@/components/ui/MissingSupabaseNotice";
import { getExpertiseCategories } from "@/lib/data/categories";
import { getDirectoryProfiles } from "@/lib/data/profiles";

export const metadata = { title: "Directory — Bubu Foundation" };

export default async function DirectoryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const { categories } = await getExpertiseCategories();
  const { profiles, usingFallback } = await getDirectoryProfiles({
    categorySlug: params.category,
    query: params.q,
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Directory</p>
        <h1 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
          The alumni network, by expertise
        </h1>
        <p className="mt-4 text-base leading-relaxed text-body">
          Every profile here is an ex-BUBU person ready to be found — for a project, a
          collaboration, or a conversation.
        </p>
      </div>

      <div className="mt-12">
        {usingFallback ? <FallbackDataBanner /> : null}
        <DirectoryFilters categories={categories} />

        {profiles.length === 0 ? (
          <EmptyState basePath="/directory" />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile, i) => (
              <AlumniCard key={profile.id} profile={profile} index={i % 6} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
