import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Pill } from "@/components/ui/Pill";
import { opportunityCategoryLabel } from "@/lib/constants";
import type { OpportunityWithProfile } from "@/lib/types";

export function OpportunityCard({
  opportunity,
  index = 0,
}: {
  opportunity: OpportunityWithProfile;
  index?: number;
}) {
  const poster = opportunity.profiles;

  return (
    <Link
      href={`/collaborate/${opportunity.id}`}
      className="stagger-item rise card-hover group flex h-full flex-col rounded-card bg-card p-6 shadow-sm"
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-4">
        <Pill tone="brand">{opportunityCategoryLabel(opportunity.category)}</Pill>
        <Pill tone={opportunity.status === "open" ? "solid" : "closed"} className="shrink-0">
          {opportunity.status === "open" ? "Open" : "Closed"}
        </Pill>
      </div>

      <h3 className="mt-3 font-display text-xl tracking-wide text-ink">{opportunity.title}</h3>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body">{opportunity.description}</p>

      {opportunity.looking_for ? (
        <p className="mt-3 line-clamp-2 rounded-input bg-surface px-4 py-3 text-sm text-grey-dark">
          <span className="font-semibold text-ink">Looking for:</span> {opportunity.looking_for}
        </p>
      ) : null}

      {/* mt-auto pins this to the bottom regardless of how much text sits
          above it, so every card in a row ends at the same visual beat. */}
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line-lt pt-4">
        {poster ? (
          <span className="flex items-center gap-2 text-xs font-medium text-grey">
            <Avatar name={poster.full_name} src={poster.avatar_url} size={22} />
            {poster.full_name}
          </span>
        ) : (
          <span />
        )}
        <span className="rounded-pill border border-line px-3 py-1 text-xs font-semibold text-ink transition-colors duration-150 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
          View details
        </span>
      </div>
    </Link>
  );
}
