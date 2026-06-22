import "./StorySection.css";

export default function StorySection() {
  return (
    <section className="story section section--sand">
      <div className="container story__grid">
        <div className="story__image reveal">
          <img src="/about/storymain.jpeg" alt="Turkana Network Connect members together in Nairobi" />
          <div className="story__image-accent" />
        </div>

        <div className="story__copy reveal">
          <span className="eyebrow">Our Story</span>
          <h2>A home away from home, built one gathering at a time</h2>
          <p>
           The purpose of this group is to:
✓ Bring together Turkana people hailing from all parts of the country/world within the Nairobi region.
✓ Foster togetherness and unity.
✓ Enhance our connections as we get to relate with each other.
✓ Ensure we as Turkanas have a home away from home as we come together as one.
✓ Gather to discuss topics of interest, e.g., business and commerce, etc.
✓ Enable individuals, e.g., those with leadership potential, to enhance their skills and abilities.
✓ Support each other in various fields, e.g., career-wise, talent-wise, and legitimate business-wise.
NB: No sending of scam links here, which will otherwise lead to immediate removal from the forum.
To accomplish this, we will be holding activities to keep us connected, e.g.:
✓ Meet and greets
✓ Fun days
✓ Meetings within Nairobi during holidays and other special occasions
          </p>
        </div>
      </div>
    </section>
  );
}
