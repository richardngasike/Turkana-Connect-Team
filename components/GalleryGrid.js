"use client";

import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./GalleryGrid.css";

const CATEGORIES = ["All", "Walks", "Parties", "Culture", "Community"];

const PHOTOS = [
  { src: "/gallery/gallery1.jpeg", alt: "Members on a Saturday morning walk", category: "Walks" },
  { src: "/gallery/gallery2.jpeg", alt: "Dancing at a community celebration", category: "Parties" },
  { src: "/gallery/gallery3.jpeg", alt: "Traditional attire at a cultural event", category: "Culture" },
  { src: "/gallery/gallery4.jpeg", alt: "Group photo after a community walk", category: "Walks" },
  { src: "/gallery/gallery5.jpeg", alt: "Friends sharing food at a gathering", category: "Community" },
  { src: "/gallery/gallery6.jpeg", alt: "Birthday celebration with the group", category: "Parties" },
  { src: "/gallery/gallery7.jpeg", alt: "Children at a family community day", category: "Community" },
  { src: "/gallery/gallery8.jpeg", alt: "Cultural dance performance", category: "Culture" },
  { src: "/gallery/gallery9.jpeg", alt: "Evening walk through the city", category: "Walks" },
  { src: "/gallery/gallery10.jpeg", alt: "End of year party with members", category: "Parties" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "All" ? PHOTOS : PHOTOS.filter((photo) => photo.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((prev) => (prev + 1) % filtered.length);
  const showPrev = () => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section className="gallery-grid section section--sand">
      <div className="container">
        <div className="gallery-grid__filters reveal" role="tablist" aria-label="Gallery filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              className={`gallery-grid__filter ${activeCategory === category ? "is-active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid__grid">
          {filtered.map((photo, index) => (
            <button
              key={photo.src}
              className="gallery-grid__item reveal"
              style={{ transitionDelay: `${(index % 6) * 60}ms` }}
              onClick={() => openLightbox(index)}
              aria-label={`Open image: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lightbox__close" aria-label="Close image viewer" onClick={closeLightbox}>
            <FiX />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={showPrev}>
            <FiChevronLeft />
          </button>
          <figure className="lightbox__figure">
            <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} />
            <figcaption>{filtered[lightboxIndex].alt}</figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={showNext}>
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
