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
      className="stagger-item rise rounded-card border border-line-lt bg-card p-6"
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Pill tone="brand">{opportunityCategoryLabel(opportunity.category)}</Pill>
          <h3 className="mt-3 font-display text-xl tracking-wide text-ink">{opportunity.title}</h3>
        </div>
        <Pill tone={opportunity.status === "open" ? "open" : "closed"} className="shrink-0">
          {opportunity.status === "open" ? "Open" : "Closed"}
        </Pill>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-body">{opportunity.description}</p>

      {opportunity.looking_for ? (
        <p className="mt-3 text-sm text-grey-dark">
          <span className="font-semibold text-ink">Looking for:</span> {opportunity.looking_for}
        </p>
      ) : null}

      {poster ? (
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line-lt pt-4">
          <Link
            href={`/directory/${poster.id}`}
            className="ring-focus flex items-center gap-2.5 text-sm font-medium text-ink hover:text-brand-deep"
          >
            <Avatar name={poster.full_name} src={poster.avatar_url} size={28} />
            {poster.full_name}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
