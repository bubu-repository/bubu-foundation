import { Button } from "@/components/ui/Button";
import { FloatingCard } from "@/components/hero/FloatingCard";
import { AlumniJoinedCard } from "@/components/hero/AlumniJoinedCard";
import { MatchCard } from "@/components/hero/MatchCard";
import { RelevanceBadge } from "@/components/hero/RelevanceBadge";
import { OpportunityMiniCard } from "@/components/hero/OpportunityMiniCard";
import { ContactChannelsCard } from "@/components/hero/ContactChannelsCard";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-20 md:pb-40 md:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="rise text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Cultural Intelligence Agency · Alumni Network
        </p>
        <h1
          className="rise mt-5 font-display text-[56px] leading-[0.95] tracking-wide text-ink md:text-[76px]"
          style={{ "--rise-delay": "60ms" } as React.CSSProperties}
        >
          {SITE.vision}
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-xl text-balance font-body text-lg text-body"
          style={{ "--rise-delay": "120ms" } as React.CSSProperties}
        >
          {SITE.belief} Bubu Foundation is where ex-BUBU people find each other, build on each
          other&apos;s work, and back what comes next.
        </p>
        <div
          className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ "--rise-delay": "180ms" } as React.CSSProperties}
        >
          <Button href="/join">Join the network</Button>
          <Button href="/directory" variant="ghost">
            Browse the directory
          </Button>
        </div>
      </div>

      {/* Colabs/Clapsy-style floating UI cards — decorative, hidden on small screens to avoid crowding the headline. */}
      <div className="pointer-events-none absolute inset-0 hidden select-none md:block" aria-hidden>
        <div className="relative mx-auto h-full max-w-6xl">
          <FloatingCard className="pointer-events-auto absolute left-2 top-12" delay={100} floatDuration={5.2}>
            <AlumniJoinedCard />
          </FloatingCard>

          <FloatingCard
            className="pointer-events-auto absolute right-0 top-6 hidden lg:block"
            delay={220}
            floatDuration={6.4}
          >
            <RelevanceBadge />
          </FloatingCard>

          <FloatingCard className="pointer-events-auto absolute left-8 bottom-4" delay={340} floatDuration={4.8}>
            <MatchCard />
          </FloatingCard>

          <FloatingCard
            className="pointer-events-auto absolute right-4 bottom-16"
            delay={460}
            floatDuration={5.9}
          >
            <OpportunityMiniCard />
          </FloatingCard>

          <FloatingCard
            className="pointer-events-auto absolute right-24 top-1/2 hidden xl:block"
            delay={580}
            floatDuration={7}
          >
            <ContactChannelsCard />
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
