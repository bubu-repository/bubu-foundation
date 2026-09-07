"use client";

import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Pill } from "@/components/ui/Pill";
import { flagEmoji } from "@/lib/flag";
import { toWhatsAppLink } from "@/lib/validate";
import type { ProfileWithCategory } from "@/lib/types";

export function AlumniCard({
  profile,
  index = 0,
  className,
}: {
  profile: ProfileWithCategory;
  index?: number;
  className?: string;
}) {
  const waLink = profile.whatsapp_number ? toWhatsAppLink(profile.whatsapp_number) : null;
  const flag = profile.country_code ? flagEmoji(profile.country_code) : null;

  return (
    <Link
      href={`/directory/${profile.id}`}
      className={`stagger-item rise card-hover group block rounded-card border border-line-lt bg-card p-6 ${className ?? ""}`}
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        {profile.is_featured ? <Pill tone="solid">Top voice</Pill> : null}
        {profile.is_open_to_collaborate ? <Pill tone="outline">Open to collaborate</Pill> : null}
      </div>

      <div className="mt-4 flex items-start gap-3.5">
        <Avatar name={profile.full_name} src={profile.avatar_url} size={48} />
        <div className="min-w-0">
          <p className="truncate font-display text-lg tracking-wide text-ink">
            {profile.full_name} {flag ? <span aria-hidden>{flag}</span> : null}
          </p>
          <p className="text-xs text-grey">
            {profile.city ? `${profile.city} · ` : ""}
            {profile.years_experience} years experience
          </p>
        </div>
      </div>

      {profile.expertise_categories ? (
        <Pill tone="neutral" className="mt-4">
          {profile.expertise_categories.label}
        </Pill>
      ) : null}

      {profile.bio ? <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-body">{profile.bio}</p> : null}

      <div className="mt-4 flex gap-2 text-xs font-medium text-grey-dark">
        {profile.linkedin_url ? (
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(profile.linkedin_url!, "_blank", "noopener,noreferrer");
            }}
            className="ring-focus rounded-pill bg-surface px-3 py-1.5 hover:text-brand-deep"
          >
            LinkedIn
          </span>
        ) : null}
        {waLink ? (
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(waLink, "_blank", "noopener,noreferrer");
            }}
            className="ring-focus rounded-pill bg-surface px-3 py-1.5 hover:text-brand-deep"
          >
            WhatsApp
          </span>
        ) : null}
      </div>
    </Link>
  );
}
