"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HeroCarousel.css";

const WHATSAPP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

const SLIDES = [
  {
    image: "/hero/hero1.jpeg",
    title: "We organize come together meetings",
    text: "Walks that turn strangers from home into family away from home.",
  },
  {
    image: "/hero/hero2.jpeg",
    title: "Every gathering carries a piece of Turkana",
    text: "From birthdays to homecomings, we celebrate the moments that matter, our way.",
  },
  {
    image: "/hero/hero3.jpeg",
    title: "A network built on belonging",
    text: "Hundreds of Turkana hearts in Nairobi, one community holding each other up.",
  },
  {
    image: "/hero/hero4.jpeg",
    title: "Far from the Home, close to home",
    text: "We keep our culture, our laughter, and our roots alive in the city.",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    clearInterval(timerRef.current);
    setActive(index);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  };

  const goNext = () => goTo((active + 1) % SLIDES.length);
  const goPrev = () => goTo((active - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__slides">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero__slide ${index === active ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== active}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <p className="hero__brand-eyebrow">Turkana Network Connect &mdash; Nairobi</p>

        {SLIDES.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero__text-block ${index === active ? "is-active" : ""}`}
            aria-hidden={index !== active}
          >
           
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__text">{slide.text}</p>
          </div>
        ))}

        <div className="hero__actions">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaWhatsapp aria-hidden="true" />
            Join Us
          </a>
          <a href="/about/" className="btn btn-ghost-light">
            Learn Our Story
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero__controls">
        <button className="hero__arrow" aria-label="Previous slide" onClick={goPrev}>
          <FiChevronLeft />
        </button>
        <div className="hero__dots" role="tablist" aria-label="Slide selector">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              role="tab"
              aria-selected={index === active}
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              className={`hero__dot ${index === active ? "is-active" : ""}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button className="hero__arrow" aria-label="Next slide" onClick={goNext}>
          <FiChevronRight />
        </button>
      </div>

      <div className="hero__horizon horizon-divider" />
    </section>
  );
}
