"use client";

export function FloatingCard({
  children,
  className,
  delay = 0,
  floatDuration = 5.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
}) {
  return (
    <div
      className={`rise glass rounded-card shadow-sm ${className ?? ""}`}
      style={{ "--rise-delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className="float" style={{ "--float-duration": `${floatDuration}s` } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
