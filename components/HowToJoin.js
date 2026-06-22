import { FaWhatsapp } from "react-icons/fa";
import "./HowToJoin.css";

const WHATSAPP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

const STEPS = [
  {
    step: "Step 1",
    title: "Tap Join Us",
    text: "Use the WhatsApp link anywhere on this site to open our community group.",
  },
  {
    step: "Step 2",
    title: "Introduce yourself",
    text: "Say hello and let us know roughly where in Nairobi you're based.",
  },
  {
    step: "Step 3",
    title: "Show up",
    text: "Join the next walk or gathering posted in the group. Everyone is welcome from day one.",
  },
];

export default function HowToJoin() {
  return (
    <section className="how-to-join section section--deep">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Getting Involved</span>
          <h2>Joining us takes three simple steps</h2>
        </div>

        <div className="how-to-join__grid">
          {STEPS.map((item, index) => (
            <div className="how-to-join__card reveal" key={item.step} style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="how-to-join__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="how-to-join__cta reveal">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaWhatsapp aria-hidden="true" />
            Join Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
