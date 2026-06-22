import "./StatsBand.css";

const STATS = [
  { value: "360+", label: "Members across Nairobi" },
  { value: "10+", label: "Walks & gatherings yearly" },
  { value: "1", label: "Year building this network" },
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
