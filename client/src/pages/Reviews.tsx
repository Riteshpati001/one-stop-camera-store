/**
 * Aperture Noir design note: trust is communicated by transparent absence—no ratings,
 * fabricated testimonials, or review-like placeholders appear before a verified source exists.
 */
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Reviews() {
  return <div className="page reviews-page">
    <section className="shell review-empty">
      <div className="review-icon"><BadgeCheck /></div>
      <motion.p className="eyebrow" initial={{ opacity: 0, x: -52 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}>Verified reviews</motion.p>
      <motion.h1 initial={{ opacity: 0, x: -72 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>Trust should be sourced, not staged.</motion.h1>
      <motion.p initial={{ opacity: 0, x: 58 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.11, duration: 0.38, ease: [0.23, 1, 0.32, 1] }}>Customer reviews will appear here only after One Stop supplies a legitimate, approved source. This prototype deliberately does not invent testimonials, scores, or customer names.</motion.p>
      <a className="button button-amber" href="/contact">Contact One Stop <ArrowUpRight /></a>
    </section>
  </div>;
}
