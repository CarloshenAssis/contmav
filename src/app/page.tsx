import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Audience } from "@/components/Audience";
import { Differentials } from "@/components/Differentials";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <Audience />
      <Differentials />
      <AboutTeaser />
      <Testimonials />
      <FinalCta />
    </>
  );
}
