"use client";

import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Pill } from "@/components/ui/Pill";
import { toWhatsAppLink } from "@/lib/validate";
import type { ProfileWithCategory } from "@/lib/types";

export function AlumniCard({ profile, index = 0 }: { profile: ProfileWithCategory; index?: number }) {
  const waLink = profile.whatsapp_number ? toWhatsAppLink(profile.whatsapp_number) : null;

  return (
    <Link
      href={`/directory/${profile.id}`}
      className="stagger-item rise ring-focus group block rounded-card border border-line-lt bg-card p-6 transition-colors duration-150 hover:border-ink"
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      <div className="flex items-start gap-3.5">
        <Avatar name={profile.full_name} src={profile.avatar_url} size={48} />
        <div className="min-w-0">
          <p className="truncate font-display text-lg tracking-wide text-ink">{profile.full_name}</p>
          <p className="text-xs text-grey">{profile.years_experience} years experience</p>
        </div>
      </div>

      {profile.expertise_categories ? (
        <Pill tone="brand" className="mt-4">
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
