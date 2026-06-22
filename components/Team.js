import "./Team.css";

const TEAM = [
  { name: "Epua", role: "Chairperson", image: "/team/richard.jpeg" },
  { name: "Edwin Epua", role: "Organizer", image: "/team/richard.jpeg" },
  { name: "xxxxxxxx", role: "Treasurer", image: "/team/richard.jpeg" },
  { name: "xxxxxxxx", role: "Events Coordinator", image: "/team/richard.jpeg" },
];

export default function Team() {
  return (
    <section className="team section section--sand">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Leadership</span>
          <h2>The people who keep us organized</h2>
          <p>
            A small committee of volunteers who plan our walks, gatherings, and the everyday work
            of keeping this community connected.
          </p>
        </div>

        <div className="team__grid">
          {TEAM.map((member, index) => (
            <div className="team__card reveal" key={member.name} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="team__photo">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
