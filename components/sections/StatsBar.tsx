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
    <section className="bg-ink px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-6xl tracking-wide text-brand md:text-7xl">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-grey-lt">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
