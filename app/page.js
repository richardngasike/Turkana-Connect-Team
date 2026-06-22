import HeroCarousel from "@/components/HeroCarousel";
import Pillars from "@/components/Pillars";
import PhotoShowcase from "@/components/PhotoShowcase";
import StatsBand from "@/components/StatsBand";
import JoinCta from "@/components/JoinCta";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Pillars />
      <StatsBand />
      <PhotoShowcase />
      <JoinCta />
    </>
  );
}
