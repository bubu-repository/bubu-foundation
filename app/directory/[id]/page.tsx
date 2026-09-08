import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { flagEmoji } from "@/lib/flag";
import { getProfileById } from "@/lib/data/profiles";
import { toWhatsAppLink } from "@/lib/validate";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { profile } = await getProfileById(id);
  return { title: profile ? `${profile.full_name} — Bubu Foundation` : "Alumni — Bubu Foundation" };
}

export default async function AlumniProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { profile } = await getProfileById(id);

  if (!profile) notFound();

  const waLink = profile.whatsapp_number ? toWhatsAppLink(profile.whatsapp_number) : null;
  const flag = profile.country_code ? flagEmoji(profile.country_code) : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <Link href="/directory" className="ring-focus text-sm font-medium text-grey hover:text-ink">
        ← Back to directory
      </Link>

      <div className="rise mt-6 grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-card bg-surface shadow-sm">
            <Avatar name={profile.full_name} src={profile.avatar_url} size="fill" shape="square" />

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

          <div className="mt-5 flex flex-col gap-2.5">
            {profile.linkedin_url ? (
              <Button
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Connect on LinkedIn
              </Button>
            ) : null}
            {waLink ? (
              <Button href={waLink} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm" className="w-full">
                Message on WhatsApp
              </Button>
            ) : null}
          </div>
        </div>

        <div>
          {profile.expertise_categories ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              {profile.expertise_categories.label}
            </p>
          ) : null}

          <h1 className="mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
            {profile.full_name} {flag ? <span aria-hidden>{flag}</span> : null}
          </h1>

          <p className="mt-2 text-sm text-grey">
            {profile.city ? `${profile.city} · ` : ""}
            {profile.years_experience} years experience
          </p>

          {profile.bio ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-body">{profile.bio}</p>
          ) : null}

          {profile.portfolio_links.length > 0 ? (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">Portfolio</p>
              <div className="mt-3 flex flex-col gap-2">
                {profile.portfolio_links.map((link) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ring-focus card-hover flex items-center justify-between rounded-input border border-line-lt bg-card px-4 py-3 text-sm font-medium text-ink"
                  >
                    {link.replace(/^https?:\/\//, "")}
                    <span className="link-arrow text-brand-deep" aria-hidden>
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
