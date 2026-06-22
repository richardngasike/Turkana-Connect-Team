import { FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import "./EventsList.css";

const EVENTS = [
  {
    title: "Sunrise Community Walk",
    date: "Every Saturday",
    time: "6:30 AM",
    location: "Karura Forest, Nairobi",
    image: "/gallery/gallery1.jpeg",
    description: "Our regular weekly walk, open to every member and first-time visitor.",
  },
  {
    title: "Mid-Year Cultural Evening",
    date: "12 July 2026",
    time: "4:00 PM",
    location: "Community Hall, Eastlands",
    image: "/gallery/gallery2.jpeg",
    description: "An evening of traditional songs, dance, and food celebrating our heritage.",
  },
  {
    title: "Welcome Mixer for New Arrivals",
    date: "26 July 2026",
    time: "2:00 PM",
    location: "Uhuru Park, Nairobi",
    image: "/gallery/gallery3.jpeg",
    description: "A relaxed afternoon to welcome new members who have recently moved to Nairobi.",
  },
  {
    title: "End of Year Celebration",
    date: "13 December 2026",
    time: "1:00 PM",
    location: "Members' Garden Venue",
    image: "/gallery/gallery4.jpeg",
    description: "Our biggest gathering of the year, closing out the year together as one family.",
  },
];

export default function EventsList() {
  return (
    <section className="events-list section section--sand">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What&apos;s Coming Up</span>
          <h2>Upcoming walks and gatherings</h2>
          <p>Mark your calendar. Every member is welcome at every event, no invitation needed.</p>
        </div>

        <div className="events-list__items">
          {EVENTS.map((event, index) => (
            <div className="events-list__card reveal" key={event.title} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="events-list__image">
                <img src={event.image} alt={event.title} loading="lazy" />
              </div>
              <div className="events-list__details">
                <h3>{event.title}</h3>
                <p className="events-list__description">{event.description}</p>
                <div className="events-list__meta">
                  <span>
                    <FiCalendar aria-hidden="true" />
                    {event.date}
                  </span>
                  <span>
                    <FiClock aria-hidden="true" />
                    {event.time}
                  </span>
                  <span>
                    <FiMapPin aria-hidden="true" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
