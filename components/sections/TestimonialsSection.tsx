import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import type { TestimonialWithProfile } from "@/lib/types";

export function TestimonialsSection({ testimonials }: { testimonials: TestimonialWithProfile[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-surface/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Real stories</p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
            What alumni say
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
