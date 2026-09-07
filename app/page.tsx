import { Hero } from "@/components/hero/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { BrowseByExpertiseSection } from "@/components/sections/BrowseByExpertiseSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { getExpertiseCategories } from "@/lib/data/categories";
import { getDirectoryProfiles } from "@/lib/data/profiles";
import { getOpportunities } from "@/lib/data/opportunities";
import { getTestimonials } from "@/lib/data/testimonials";

export default async function HomePage() {
  const [{ categories }, { profiles }, { opportunities }, { testimonials }] = await Promise.all([
    getExpertiseCategories(),
    getDirectoryProfiles({}),
    getOpportunities({}),
    getTestimonials(),
  ]);

  const openOpportunityCount = opportunities.filter((o) => o.status === "open").length;

  return (
    <>
      <Hero alumniCount={profiles.length} />
      <StatsBar
        alumniCount={profiles.length}
        categoryCount={categories.length}
        opportunityCount={openOpportunityCount}
      />
      <BrowseByExpertiseSection categories={categories} profiles={profiles} />
      <VisionSection />
      <HowItWorksSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  );
}
