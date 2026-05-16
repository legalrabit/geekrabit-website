import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MarketsBar } from "@/components/site/MarketsBar";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Process } from "@/components/site/Process";
import { AvailableFor } from "@/components/site/AvailableFor";
import { TechStack } from "@/components/site/TechStack";
import { WhyUs } from "@/components/site/WhyUs";
import { Founder } from "@/components/site/Founder";
import { Pricing } from "@/components/site/Pricing";
import { Comparison } from "@/components/site/Comparison";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CustomCursor } from "@/components/site/CustomCursor";

// Home route inherits all SEO meta + Organization JSON-LD from __root.tsx.
// No page-specific overrides needed — root's defaults are the homepage's
// canonical SEO surface.
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <MarketsBar />
      <TrustStrip />
      <Services />
      <CaseStudy />
      <Process />
      <AvailableFor />
      <TechStack />
      <WhyUs />
      <Founder />
      <Pricing />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}
