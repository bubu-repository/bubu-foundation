"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Avatar({
  name,
  src,
  size = 48,
  className,
}: {
  name: string;
  src?: string | null;
  size?: number;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);

  if (!src || broken) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-surface-orange font-display text-brand-deep",
          className
        )}
        style={{ width: size, height: size, fontSize: size * 0.4 }}
        aria-hidden
      >
        {initials(name)}
      </div>
    );
  }

  return (
    // Avatars come from arbitrary external URLs (user-supplied or
    // pravatar.cc), not domains next/image can be pre-configured for.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      onError={() => setBroken(true)}
      className={cn("shrink-0 rounded-full object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
