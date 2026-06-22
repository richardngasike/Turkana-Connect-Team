import "./Values.css";

const VALUES = [
  {
    number: "01",
    title: "Unity",
    text: "We hold each other up the way our families taught us, no matter how far we've moved from home.",
  },
  {
    number: "02",
    title: "Culture",
    text: "Our language, songs, and customs travel with us. We practice them so they're never forgotten.",
  },
  {
    number: "03",
    title: "Openness",
    text: "Every Turkana person in Nairobi is welcome here, whether they've been in the city for years or just arrived.",
  },
  {
    number: "04",
    title: "Joy",
    text: "Life away from home is easier when shared. We make space to laugh, dance, and celebrate often.",
  },
];

export default function Values() {
  return (
    <section className="values section section--deep">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Stand For</span>
          <h2>The values that hold us together</h2>
        </div>

        <div className="values__list">
          {VALUES.map((value, index) => (
            <div className="values__row reveal" key={value.title} style={{ transitionDelay: `${index * 80}ms` }}>
              <span className="values__number">{value.number}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
