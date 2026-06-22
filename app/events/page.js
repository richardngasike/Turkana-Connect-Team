import PageBanner from "@/components/PageBanner";
import EventsList from "@/components/EventsList";
import HowToJoin from "@/components/HowToJoin";

export const metadata = {
  title: "Events | Turkana Network Connect",
  description:
    "See upcoming walks, parties, and cultural gatherings hosted by Turkana Network Connect in Nairobi, and learn how to join.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Events"
        title="Walks, parties, and everything between"
        text="Here's what's on the calendar. Come as you are, leave with new friends."
        image="/events/events-banner.jpeg"
      />
      <EventsList />
      <HowToJoin />
    </>
  );
}
