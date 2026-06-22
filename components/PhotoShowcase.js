import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import "./PhotoShowcase.css";

const PHOTOS = [
  { src: "/showcase/showcase1.jpeg", alt: "Members eating together in Nairobi", tall: true },
  { src: "/showcase/showcase2.jpeg", alt: "members interacting together" },
  { src: "/showcase/showcase3.jpeg", alt: "Group playing games together" },
  { src: "/showcase/showcase4.jpeg", alt: "Friends sharing a story" },
  { src: "/showcase/showcase5.jpeg", alt: "Members posing for a photo during a gathering", tall: true },
  { src: "/showcase/showcase6.jpeg", alt: "Children and families at a community day" },
];

export default function PhotoShowcase() {
  return (
    <section className="showcase section section--tight section--sand">
      <div className="container">
        <div className="showcase__head reveal">
          <div>
            <span className="eyebrow">Moments Together</span>
            <h2>Life within our community</h2>
          </div>
          <Link href="/gallery/" className="showcase__link">
            View Full Gallery
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="showcase__grid">
          {PHOTOS.map((photo, index) => (
            <div
              key={photo.src}
              className={`showcase__item reveal ${photo.tall ? "showcase__item--tall" : ""}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
