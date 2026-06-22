import { FaWhatsapp } from "react-icons/fa";
import "./JoinCta.css";

const WHATSAPP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

export default function JoinCta() {
  return (
    <section className="join-cta section section--sand">
      <div className="container">
        <div className="join-cta__panel reveal">
          <div
            className="join-cta__image"
            style={{ backgroundImage: "url(/cta/cta-bg.jpeg)" }}
          />
          <div className="join-cta__overlay" />
          <div className="join-cta__content">
            <span className="eyebrow eyebrow--light">Become Part of It</span>
            <h2>Your community in Nairobi is one tap away</h2>
            <p>
              Join our WhatsApp group to hear about the next walk, the next celebration, and the
              next chance to connect with home, right here in the city.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaWhatsapp aria-hidden="true" />
              Join Our WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
