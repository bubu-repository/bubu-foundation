"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/useInView";

export function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>("-40px");
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    // Reduced motion still animates, just near-instantly — keeps the state
    // update inside the rAF callback rather than synchronously in the effect.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 1 : 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
