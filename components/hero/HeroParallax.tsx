"use client";

import { useEffect, useRef } from "react";

// A single container-level transform, separate from each FloatingCard's own
// rise/float transforms — composing transforms across parent/child elements
// avoids fighting over one element's `transform` property.
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    const section = el.closest("section");
    if (!section) return;

    function handleMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const MAX = 10;
      el!.style.transform = `translate(${x * MAX}px, ${y * MAX}px)`;
    }

    function handleLeave() {
      el!.style.transform = "translate(0, 0)";
    }

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div ref={ref} className="h-full w-full transition-transform duration-300 ease-out">
      {children}
    </div>
  );
}
