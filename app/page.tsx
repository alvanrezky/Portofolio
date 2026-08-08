import Hero from "@/components/hero";
import HomeSummary from "@/components/homesummary";
import FadeInSection from "@/components/animations/fadeinsections";

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeInSection>
        <HomeSummary />
      </FadeInSection>
    </main>
  );
}