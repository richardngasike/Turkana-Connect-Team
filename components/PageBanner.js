import "./PageBanner.css";

export default function PageBanner({ eyebrow, title, text, image }) {
  return (
    <section className="page-banner">
      <div className="page-banner__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-banner__overlay" />
      <div className="container page-banner__content">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
      <div className="page-banner__horizon horizon-divider" />
    </section>
  );
}
