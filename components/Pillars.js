import { FiSun, FiUsers, FiHeart, FiMapPin } from "react-icons/fi";
import "./Pillars.css";

const PILLARS = [
  {
    icon: FiSun,
    title: "Saturday Walks",
    text: "We meet at sunrise and walk Nairobi's parks and trails together, catching up on the week and the news from home.",
  },
  {
    icon: FiUsers,
    title: "Gatherings & Parties",
    text: "Birthdays, send-offs, homecomings, end-of-year parties. Any reason to gather is a reason worth celebrating.",
  },
  {
    icon: FiHeart,
    title: "Support Network",
    text: "From job leads to a listening ear during hard times, our members show up for one another, always.",
  },
  {
    icon: FiMapPin,
    title: "Staying Rooted",
    text: "Language, food, music, and stories from Turkana, kept alive in the heart of the city we now call home too.",
  },
];

export default function Pillars() {
  return (
    <section className="pillars section section--sand">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What Brings Us Together</span>
          <h2>One community, many reasons to connect</h2>
          <p>
            Turkana Network Connect exists so that no one from home feels far from home. Here is
            how we spend our time together in Nairobi.
          </p>
        </div>

        <div className="pillars__grid">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                className="pillars__card reveal"
                key={pillar.title}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="pillars__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
