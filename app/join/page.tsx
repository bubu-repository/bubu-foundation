import { JoinForm } from "@/components/join/JoinForm";

export const metadata = { title: "Join — Bubu Foundation" };

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-20 md:py-28">
      <p className="rise text-xs font-semibold uppercase tracking-[0.3em] text-brand">Join the network</p>
      <h1 className="rise mt-4 font-display text-4xl tracking-wide text-ink" style={{ "--rise-delay": "60ms" } as React.CSSProperties}>
        You&apos;re already part of the story.
      </h1>
      <p className="rise mt-4 text-sm leading-relaxed text-body" style={{ "--rise-delay": "100ms" } as React.CSSProperties}>
        Enter the email you&apos;d like to use — we&apos;ll send a link to sign in, then you can build
        your alumni profile.
      </p>

      <div className="rise mt-8" style={{ "--rise-delay": "140ms" } as React.CSSProperties}>
        <JoinForm />
      </div>
    </div>
  );
}
