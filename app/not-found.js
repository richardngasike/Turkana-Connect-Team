import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>This path doesn&apos;t lead home</h1>
        <p>The page you&apos;re looking for has wandered off. Let&apos;s get you back on track.</p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
      <div className="horizon-divider not-found__horizon" />
    </section>
  );
}
