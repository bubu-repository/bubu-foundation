import { CountUp } from "@/components/ui/CountUp";

export function StatsBar({
  alumniCount,
  categoryCount,
  opportunityCount,
}: {
  alumniCount: number;
  categoryCount: number;
  opportunityCount: number;
}) {
  const stats = [
    { value: alumniCount, label: "alumni in the directory" },
    { value: categoryCount, label: "fields of expertise" },
    { value: opportunityCount, suffix: "+", label: "open opportunities" },
  ];

  return (
    <section className="border-y border-line-lt/60 px-6 py-14">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl tracking-wide text-brand md:text-6xl">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-grey-dark">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
