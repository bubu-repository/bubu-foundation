"use client";

import { motion, useReducedMotion } from "framer-motion";

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

export function HowItWorksSection() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">How it works</p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
            Four steps from alumni to collaborator
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 }}
              className="rounded-card border border-line-lt bg-card p-6"
            >
              <p className="font-display text-3xl text-brand">{step.n}</p>
              <h3 className="mt-3 font-display text-xl tracking-wide text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
