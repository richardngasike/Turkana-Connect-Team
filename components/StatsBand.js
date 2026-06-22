import "./StatsBand.css";

const STATS = [
  { value: "500+", label: "Members across Nairobi" },
  { value: "40+", label: "Walks & gatherings yearly" },
  { value: "8", label: "Years building this network" },
  { value: "1", label: "Home, wherever we meet" },
];

export default function StatsBand() {
  return (
    <section className="stats section--deep">
      <div className="container stats__inner">
        {STATS.map((stat, index) => (
          <div className="stats__item reveal" key={stat.label} style={{ transitionDelay: `${index * 80}ms` }}>
            <p className="stats__value">{stat.value}</p>
            <p className="stats__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
