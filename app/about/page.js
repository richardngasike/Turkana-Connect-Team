import PageBanner from "@/components/PageBanner";
import StorySection from "@/components/StorySection";
import Values from "@/components/Values";
import Team from "@/components/Team";
import JoinCta from "@/components/JoinCta";

export const metadata = {
  title: "About Us | Turkana Network Connect",
  description:
    "Learn the story of Turkana Network Connect, the diaspora community keeping Turkana culture and friendship alive in Nairobi.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Where every Turkana voice in Nairobi belongs"
        text="The story of how a small circle of friends grew into a network hundreds strong."
        image="/header.jpeg"
      />
      <StorySection />
      <Values />
      <Team />
      <JoinCta />
    </>
  );
}
