const SIZE = 64;
const STROKE = 5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PERCENT = 0.94;

export function RelevanceBadge() {
  return (
    <div className="flex w-52 items-center gap-3.5 p-4">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="shrink-0 -rotate-90">
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="var(--color-line-lt)"
          strokeWidth={STROKE}
        />
        <circle
          className="draw-in"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={
            {
              "--dash-full": CIRCUMFERENCE,
              "--dash-target": CIRCUMFERENCE * (1 - PERCENT),
            } as React.CSSProperties
          }
        />
      </svg>
      <div>
        <p className="font-display text-2xl leading-none tracking-wide text-ink">94%</p>
        <p className="mt-1 text-[12px] leading-snug text-grey">relevance match</p>
      </div>
    </div>
  );
}
