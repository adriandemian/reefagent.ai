import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { Install } from "@/components/install";
import { Architecture } from "@/components/architecture";
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
          <Features />
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
          <CTA />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
