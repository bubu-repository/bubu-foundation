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
  shape = "circle",
  className,
}: {
  name: string;
  src?: string | null;
  size?: number | "fill";
  shape?: "circle" | "square";
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  const radius = shape === "circle" ? "rounded-full" : "rounded-card";
  const dimStyle = size === "fill" ? undefined : { width: size, height: size };
  const dimClass = size === "fill" ? "h-full w-full" : undefined;

  if (!src || broken) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center bg-brand font-display tracking-wide text-white",
          radius,
          dimClass,
          size === "fill" ? "text-4xl md:text-5xl" : undefined,
          className
        )}
        style={{ ...dimStyle, fontSize: size === "fill" ? undefined : size * 0.4 }}
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
      onError={() => setBroken(true)}
      className={cn("shrink-0 object-cover", radius, dimClass, className)}
      style={dimStyle}
    />
  );
}
