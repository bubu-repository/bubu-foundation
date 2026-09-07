import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import type { TestimonialWithProfile } from "@/lib/types";

export function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: TestimonialWithProfile;
  index?: number;
}) {
  const about = testimonial.profiles;

  return (
    <div
      className="stagger-item rise card-hover mb-5 break-inside-avoid rounded-card border border-line-lt bg-card p-6"
      style={{ "--stagger-index": index % 6 } as React.CSSProperties}
    >
      <p className="text-[15px] leading-relaxed text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.author_name}</p>
          {testimonial.author_role ? <p className="text-xs text-grey">{testimonial.author_role}</p> : null}
        </div>
        {about ? (
          <Link
            href={`/directory/${about.id}`}
            className="ring-focus flex shrink-0 items-center gap-2 rounded-pill bg-surface py-1 pl-1 pr-3 text-xs font-medium text-grey-dark hover:text-brand-deep"
          >
            <Avatar name={about.full_name} src={about.avatar_url} size={22} />
            {about.full_name.split(" ")[0]}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
