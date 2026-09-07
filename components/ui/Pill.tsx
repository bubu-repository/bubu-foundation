import { cn } from "@/lib/cn";

export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "open" | "closed";
  className?: string;
}) {
  const tones = {
    neutral: "bg-surface text-grey-dark",
    brand: "bg-surface-orange text-brand-deep",
    open: "bg-surface-orange text-brand-deep",
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
