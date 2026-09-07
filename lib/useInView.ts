"use client";

import { useEffect, useRef, useState } from "react";

// @starting-style (used by .rise elsewhere) only fires on DOM insertion, not
// on a later class toggle, so a genuine scroll-into-view reveal needs an
// IntersectionObserver instead.
export function useInView<T extends HTMLElement>(rootMargin = "-80px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
