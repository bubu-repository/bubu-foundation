import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
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

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link href="/directory" className="ring-focus text-sm font-medium text-grey hover:text-ink">
        ← Back to directory
      </Link>

      <div className="rise mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Avatar name={profile.full_name} src={profile.avatar_url} size={80} />
        <div>
          <h1 className="font-display text-3xl tracking-wide text-ink md:text-4xl">{profile.full_name}</h1>
          <p className="mt-1 text-sm text-grey">{profile.years_experience} years experience</p>
        </div>
      </div>

      {profile.expertise_categories ? (
        <Pill tone="brand" className="mt-6">
          {profile.expertise_categories.label}
        </Pill>
      ) : null}

      {profile.bio ? <p className="mt-6 max-w-xl text-base leading-relaxed text-body">{profile.bio}</p> : null}

      {profile.portfolio_links.length > 0 ? (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">Portfolio</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {profile.portfolio_links.map((link) => (
              <li key={link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-focus text-sm font-medium text-brand-deep hover:underline"
                >
                  {link.replace(/^https?:\/\//, "")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        {profile.linkedin_url ? (
          <Button href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
            Connect on LinkedIn
          </Button>
        ) : null}
        {waLink ? (
          <Button href={waLink} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">
            Message on WhatsApp
          </Button>
        ) : null}
      </div>
    </div>
  );
}
