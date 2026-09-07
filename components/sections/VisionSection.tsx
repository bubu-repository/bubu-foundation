import { SITE } from "@/lib/constants";

export function VisionSection() {
  return (
    <section className="border-y border-line-lt/60 bg-surface/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="rise text-xs font-semibold uppercase tracking-[0.3em] text-brand">The vision</p>
        <p
          className="rise mt-5 text-balance font-display text-3xl leading-tight tracking-wide text-ink md:text-5xl"
          style={{ "--rise-delay": "60ms" } as React.CSSProperties}
        >
          {SITE.tagline}
        </p>
        <p
          className="rise mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-body"
          style={{ "--rise-delay": "120ms" } as React.CSSProperties}
        >
          Bubu Foundation earns relevance through real impact — a nexus where alumni collaborate,
          invest their expertise, and build lasting social impact together. Not a reunion. A
          working network.
        </p>
      </div>
    </section>
  );
}
