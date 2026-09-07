"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    n: "01",
    title: "Register",
    body: "Share your name, expertise, and years of experience. Two minutes, no résumé required.",
  },
  {
    n: "02",
    title: "Build your profile",
    body: "Add your bio, portfolio links, and how people should reach you — LinkedIn or WhatsApp.",
  },
  {
    n: "03",
    title: "Join the community",
    body: "Browse the directory by expertise. Find the alumni doing the work you need, or who need you.",
  },
  {
    n: "04",
    title: "Collaborate",
    body: "Post or answer opportunities — projects, mentorship, investment, social good. Take it from there.",
  },
];

// IntersectionObserver-driven reveal: @starting-style (used by .rise
// elsewhere) only fires on DOM insertion, not on a later class toggle, so a
// genuine scroll-into-view reveal needs an observer instead.
function useInView<T extends HTMLElement>() {
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
      { rootMargin: "-80px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function HowItWorksSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">How it works</p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
            Four steps from alumni to collaborator
          </h2>
        </div>

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={cn(
                "rounded-card border border-line-lt bg-card p-6 transition-[opacity,transform] duration-500 ease-out",
                inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <p className="font-display text-3xl text-brand">{step.n}</p>
              <h3 className="mt-3 font-display text-xl tracking-wide text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
