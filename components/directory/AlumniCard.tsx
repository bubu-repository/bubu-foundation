"use client";

import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
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
      className={`stagger-item rise group block ${className ?? ""}`}
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      {/* Photo carries the visual weight — no outer card border, matching a
          photo-forward directory rather than a boxed list. */}
      <div className="relative aspect-square w-full overflow-hidden rounded-card bg-surface shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        <Avatar
          name={profile.full_name}
          src={profile.avatar_url}
          size="fill"
          shape="square"
          className="transition-transform duration-300 ease-out group-hover:scale-105"
        />

        {profile.is_featured ? (
          <span className="absolute left-3 top-3 rounded-pill bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm">
            Top voice
          </span>
        ) : null}

        {profile.is_open_to_collaborate ? (
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-pill bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7cf1a6]" aria-hidden />
            Open to collaborate
          </span>
        ) : null}
      </div>

      <div className="mt-3.5 flex items-baseline justify-between gap-2">
        <p className="truncate font-display text-lg tracking-wide text-ink">
          {profile.full_name} {flag ? <span aria-hidden>{flag}</span> : null}
        </p>
        <p className="shrink-0 text-xs font-medium text-grey">{profile.years_experience} yrs</p>
      </div>

      {profile.expertise_categories ? (
        <p className="mt-0.5 text-sm font-medium text-grey-dark">{profile.expertise_categories.label}</p>
      ) : null}

      {profile.city ? <p className="text-xs text-grey">{profile.city}</p> : null}

      {profile.bio ? (
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-body">{profile.bio}</p>
      ) : null}

      <div className="mt-3 flex items-center justify-between border-t border-line-lt pt-3">
        <div className="flex gap-1.5">
          {profile.linkedin_url ? (
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(profile.linkedin_url!, "_blank", "noopener,noreferrer");
              }}
              className="ring-focus text-xs font-medium text-grey-dark hover:text-brand-deep"
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
              className="ring-focus text-xs font-medium text-grey-dark hover:text-brand-deep"
            >
              · WhatsApp
            </span>
          ) : null}
        </div>
        <span className="rounded-pill border border-line px-3 py-1 text-xs font-semibold text-ink transition-colors duration-150 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
          View profile
        </span>
      </div>
    </Link>
  );
}
