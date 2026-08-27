/**
 * Aperture Noir design note: trust is communicated by transparent absence—no ratings,
 * fabricated testimonials, or review-like placeholders appear before a verified source exists.
 */
import { BadgeCheck, ArrowUpRight } from "lucide-react";

export default function Reviews() {
  return <div className="page reviews-page">
    <section className="shell review-empty">
      <div className="review-icon"><BadgeCheck /></div>
      <p className="eyebrow side-enter side-enter-left">Verified reviews</p>
      <h1 className="side-enter side-enter-left side-enter-delay-1">Trust should be sourced, not staged.</h1>
      <p className="side-enter side-enter-right side-enter-delay-2">Customer reviews will appear here only after One Stop supplies a legitimate, approved source. This prototype deliberately does not invent testimonials, scores, or customer names.</p>
      <a className="button button-amber" href="/contact">Contact One Stop <ArrowUpRight /></a>
    </section>
  </div>;
}
