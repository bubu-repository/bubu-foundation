import { cn } from "@/lib/cn";

export function Marquee({
  text,
  tone = "light",
}: {
  text: string;
  tone?: "light" | "dark";
}) {
  // Duplicated so the -50% loop point lines up seamlessly.
  const items = [0, 1];

  return (
    <div
      className={cn(
        "marquee border-y py-5",
        tone === "dark" ? "border-ink bg-ink" : "border-line-lt/60 bg-surface"
      )}
      aria-hidden
    >
      <div className="marquee-track">
        {items.map((i) => (
          <div key={i} className="flex shrink-0 items-center">
            {Array.from({ length: 6 }).map((_, j) => (
              <span
                key={j}
                className={cn(
                  "px-4 font-display text-2xl tracking-wide whitespace-nowrap md:text-3xl",
                  tone === "dark" ? "text-white" : "text-ink"
                )}
              >
                {text}
                <span className="ml-4 text-brand">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
