import Link from "next/link";
import { AlumniCard } from "@/components/directory/AlumniCard";
import type { ExpertiseCategory, ProfileWithCategory } from "@/lib/types";

export function BrowseByExpertiseSection({
  categories,
  profiles,
}: {
  categories: ExpertiseCategory[];
  profiles: ProfileWithCategory[];
}) {
  // Feature the categories with the most alumni — the rows adplist calls
  // "Popular in Design" etc. Cap at 3 rows so the home page stays scannable;
  // the full set lives on /directory.
  const rows = categories
    .map((category) => ({
      category,
      members: profiles.filter((p) => p.expertise_category_id === category.id),
    }))
    .filter((row) => row.members.length > 0)
    .sort((a, b) => b.members.length - a.members.length)
    .slice(0, 3);

  if (rows.length === 0) return null;

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Browse the network</p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
            Alumni by expertise
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-14">
          {rows.map(({ category, members }) => (
            <div key={category.id}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl tracking-wide text-ink">{category.label}</h3>
                <Link
                  href={`/directory?category=${category.slug}`}
                  className="ring-focus shrink-0 text-sm font-semibold text-brand-deep hover:underline"
                >
                  Show all <span className="link-arrow">→</span>
                </Link>
              </div>

              <div className="scroll-row mt-5 -mx-6 px-6 pb-2">
                {members.map((profile) => (
                  <AlumniCard key={profile.id} profile={profile} className="w-72 shrink-0" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
