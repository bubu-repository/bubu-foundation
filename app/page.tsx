import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { StatsBar } from "@/components/sections/StatsBar";
import { BrowseByExpertiseSection } from "@/components/sections/BrowseByExpertiseSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
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
      <Marquee text="MOVEMENTS, NOT MOMENTS" />
      <StatsBar
        alumniCount={profiles.length}
        categoryCount={categories.length}
        opportunityCount={openOpportunityCount}
      />
      <BrowseByExpertiseSection categories={categories} profiles={profiles} />
      <VisionSection />
      <HowItWorksSection />
      <TestimonialsSection testimonials={testimonials} />
      <Marquee text="JOIN THE NETWORK" tone="dark" />
      <FAQSection />
      <CTASection />
    </>
  );
}
