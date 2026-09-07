import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="px-6 pb-28">
      <div className="rise mx-auto max-w-4xl rounded-card bg-ink px-8 py-16 text-center md:px-16 md:py-20">
        <h2 className="font-display text-3xl tracking-wide text-white md:text-5xl">
          Let&apos;s build the movement.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-grey-lt md:text-base">
          Register in two minutes. Your next collaborator is already in the network.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/join">Join the network</Button>
          <Button href="/collaborate" variant="ghost" className="border-grey-dark text-white hover:border-white">
            See open opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
