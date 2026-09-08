import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { opportunityCategoryLabel } from "@/lib/constants";
import { getOpportunityById } from "@/lib/data/opportunities";
import { toWhatsAppLink } from "@/lib/validate";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { opportunity } = await getOpportunityById(id);
  return { title: opportunity ? `${opportunity.title} — Bubu Foundation` : "Opportunity — Bubu Foundation" };
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { opportunity } = await getOpportunityById(id);

  if (!opportunity) notFound();

  const poster = opportunity.profiles;
  const waLink = poster?.whatsapp_number ? toWhatsAppLink(poster.whatsapp_number) : null;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link href="/collaborate" className="ring-focus text-sm font-medium text-grey hover:text-ink">
        ← Back to collaborate
      </Link>

      <div className="rise mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="brand">{opportunityCategoryLabel(opportunity.category)}</Pill>
          <Pill tone={opportunity.status === "open" ? "solid" : "closed"}>
            {opportunity.status === "open" ? "Open" : "Closed"}
          </Pill>
        </div>

        <h1 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">{opportunity.title}</h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-body">{opportunity.description}</p>

        {opportunity.looking_for ? (
          <div className="mt-6 max-w-xl rounded-input bg-surface px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">Looking for</p>
            <p className="mt-1.5 text-sm text-grey-dark">{opportunity.looking_for}</p>
          </div>
        ) : null}

        {poster ? (
          <div className="mt-10 rounded-card border border-line-lt bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">Posted by</p>
            <Link
              href={`/directory/${poster.id}`}
              className="ring-focus mt-3 flex items-center gap-3 text-ink hover:text-brand-deep"
            >
              <Avatar name={poster.full_name} src={poster.avatar_url} size={44} />
              <span className="font-display text-lg tracking-wide">{poster.full_name}</span>
            </Link>

            <div className="mt-5 flex flex-wrap gap-3">
              {poster.linkedin_url ? (
                <Button
                  href={poster.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
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
        ) : null}
      </div>
    </div>
  );
}
