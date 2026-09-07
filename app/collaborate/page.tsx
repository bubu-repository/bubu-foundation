import { CollaborateFilters } from "@/components/collaborate/CollaborateFilters";
import { OpportunityCard } from "@/components/collaborate/OpportunityCard";
import { EmptyState } from "@/components/collaborate/EmptyState";
import { FallbackDataBanner } from "@/components/ui/MissingSupabaseNotice";
import { Button } from "@/components/ui/Button";
import { getOpportunities } from "@/lib/data/opportunities";
import type { OpportunityCategory } from "@/lib/types";

export const metadata = { title: "Collaborate — Bubu Foundation" };

export default async function CollaboratePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const { opportunities, usingFallback } = await getOpportunities({
    category: params.category as OpportunityCategory | undefined,
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Collaborate</p>
          <h1 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
            Projects, investment, and social good
          </h1>
          <p className="mt-4 text-base leading-relaxed text-body">
            Alumni post what they&apos;re building or looking for. Deal-making happens
            person-to-person — this board just makes the introduction.
          </p>
        </div>
        <Button href="/collaborate/new" className="shrink-0">
          Post an opportunity
        </Button>
      </div>

      <div className="mt-12">
        {usingFallback ? <FallbackDataBanner /> : null}
        <CollaborateFilters />

        {opportunities.length === 0 ? (
          <EmptyState basePath="/collaborate" />
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {opportunities.map((opportunity, i) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} index={i % 6} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
