import { cn } from "@/lib/cn";

export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "solid" | "outline" | "closed";
  className?: string;
}) {
  const tones = {
    neutral: "bg-surface text-grey-dark",
    brand: "bg-surface-orange text-brand-deep",
    solid: "bg-brand text-white",
    outline: "bg-transparent text-ink border border-line",
    closed: "bg-surface text-grey",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
