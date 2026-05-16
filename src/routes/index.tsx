import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Process } from "@/components/site/Process";
import { TechStack } from "@/components/site/TechStack";
import { WhyUs } from "@/components/site/WhyUs";
import { Founder } from "@/components/site/Founder";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CustomCursor } from "@/components/site/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GeekRabit — AI features that actually run in production" },
      {
        name: "description",
        content:
          "AI-first product engineering studio. WhatsApp NLP, voice agents, vision AI, native mobile, microservices. From idea to live in 6 weeks. Bengaluru + Remote.",
      },
      { property: "og:title", content: "GeekRabit — AI features that actually run in production" },
      {
        property: "og:description",
        content:
          "WhatsApp NLP. Voice agents. Vision AI. Native mobile. Microservices. From idea to live in 6 weeks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <CaseStudy />
      <Process />
      <TechStack />
      <WhyUs />
      <Founder />
      <FinalCTA />
      <Footer />
    </main>
  );
}
