import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { Install } from "@/components/install";
import { Architecture } from "@/components/architecture";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Install />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
