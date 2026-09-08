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
    <div
      className="stagger-item rise card-hover rounded-card bg-card p-6 shadow-sm"
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      {poster ? (
        <Link
          href={`/directory/${poster.id}`}
          className="ring-focus mb-4 flex items-center gap-2 text-xs font-medium text-grey hover:text-brand-deep"
        >
          <Avatar name={poster.full_name} src={poster.avatar_url} size={22} />
          Posted by {poster.full_name}
        </Link>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <Pill tone="brand">{opportunityCategoryLabel(opportunity.category)}</Pill>
          <h3 className="mt-3 font-display text-xl tracking-wide text-ink">{opportunity.title}</h3>
        </div>
        <Pill tone={opportunity.status === "open" ? "solid" : "closed"} className="shrink-0">
          {opportunity.status === "open" ? "Open" : "Closed"}
        </Pill>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-body">{opportunity.description}</p>

      {opportunity.looking_for ? (
        <p className="mt-3 rounded-input bg-surface px-4 py-3 text-sm text-grey-dark">
          <span className="font-semibold text-ink">Looking for:</span> {opportunity.looking_for}
        </p>
      ) : null}
    </div>
  );
}
