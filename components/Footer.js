import Link from "next/link";
import { FaTiktok, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const WHATSAPP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

const SOCIALS = [
  { label: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@turkananetworkconnect" },
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/turkananetworkconnect" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/turkananetworkconnect" },
  { label: "WhatsApp", icon: FaWhatsapp, href: WHATSAPP_LINK },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__horizon horizon-divider" />
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png" alt="Turkana Network Connect logo" className="footer__logo" />
            <div>
              <p className="footer__brand-text">Turkana Network Connect</p>
              <p className="footer__tagline">Rooted in Turkana. Together in Nairobi.</p>
            </div>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <Link href="/">Home</Link>
            <Link href="/about/">About Us</Link>
            <Link href="/gallery/">Gallery</Link>
            <Link href="/events/">Events</Link>
          </nav>

          <div className="footer__socials">
            <p className="footer__socials-label">Follow along</p>
            <div className="footer__socials-row">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer__social-icon"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Turkana Network Connect. All rights reserved.</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
