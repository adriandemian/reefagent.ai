import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Sovereignty } from "@/components/sovereignty";
import { ComparisonTable } from "@/components/comparison-table";
import { SocialProof } from "@/components/social-proof";
import { Integrations } from "@/components/integrations";
import { Install } from "@/components/install";
import { Architecture } from "@/components/architecture";
import { Roadmap } from "@/components/roadmap";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FadeIn>
          <HowItWorks />
        </FadeIn>
        <FadeIn>
          <Features />
        </FadeIn>
        <FadeIn>
          <Sovereignty />
        </FadeIn>
        <FadeIn>
          <ComparisonTable />
        </FadeIn>
        <FadeIn>
          <SocialProof />
        </FadeIn>
        <FadeIn>
          <Integrations />
        </FadeIn>
        <FadeIn>
          <Install />
        </FadeIn>
        <FadeIn>
          <Architecture />
        </FadeIn>
        <FadeIn>
          <Roadmap />
        </FadeIn>
        <FadeIn>
          <FAQ />
        </FadeIn>
        <FadeIn>
          <CTA />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
