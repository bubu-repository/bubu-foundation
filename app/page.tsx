import { Hero } from "@/components/hero/Hero";
import { VisionSection } from "@/components/sections/VisionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisionSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}
