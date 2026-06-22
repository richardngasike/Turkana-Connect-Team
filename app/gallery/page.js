import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import JoinCta from "@/components/JoinCta";

export const metadata = {
  title: "Gallery | Turkana Network Connect",
  description:
    "Browse photos from Turkana Network Connect walks, parties, and cultural gatherings across Nairobi.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="Captured moments, shared memories"
        text="A look back at the walks, parties, and gatherings that bring our community together."
        image="/gallery/gallery-banner.jpeg"
      />
      <GalleryGrid />
      <JoinCta />
    </>
  );
}
