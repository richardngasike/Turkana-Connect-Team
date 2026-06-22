"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Events", href: "/events/" },
];

const WHATSAPP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner container">
          <Link href="/" className="navbar__brand">
            <img src="/logo.png" alt="Turkana Network Connect logo" className="navbar__logo" />
          </Link>

          <nav className="navbar__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar__link ${pathname === link.href ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__join"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>Join Us</span>
            </a>
            <button
              className="navbar__toggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div className="navbar__horizon horizon-divider horizon-divider--thin" />
      </header>

      {/* Mobile sidebar */}
      <div className={`sidebar-overlay ${isOpen ? "is-open" : ""}`} onClick={() => setIsOpen(false)} />
      <aside className={`sidebar ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="sidebar__head">
          <img src="/logo.png" alt="Turkana Network Connect logo" className="sidebar__logo" />
          <button className="sidebar__close" aria-label="Close menu" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>
        </div>
        <nav className="sidebar__links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar__link ${pathname === link.href ? "is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="sidebar__join">
          <FaWhatsapp aria-hidden="true" />
          <span>Join Us on WhatsApp</span>
        </a>
        <p className="sidebar__note">Together in Nairobi, rooted in Turkana.</p>
      </aside>
    </>
  );
}
