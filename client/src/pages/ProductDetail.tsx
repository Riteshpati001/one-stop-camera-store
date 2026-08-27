/**
 * Aperture Noir design note: the detail screen prioritizes one object and the
 * enquiry decision, presenting only verified-safe labels rather than invented specs.
 */
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/store";

export default function ProductDetail() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  return (
    <div className="page detail-page">
      <div className="shell detail-back"><a href="/products"><ArrowLeft /> Back to catalogue</a></div>
      <section className="shell product-detail-layout">
        <div className="detail-image-stage">
          <img src={product.image} alt={`${product.name} demonstration`} />
          <span className="detail-index">01 / DEMO</span>
          <span className="product-frame product-frame-tl" /><span className="product-frame product-frame-br" />
        </div>
        <div className="detail-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, x: -52 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}><span className="eyebrow-dot" /> {product.label}</motion.p>
          <motion.h1 initial={{ opacity: 0, x: -72 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>{product.name}</motion.h1>
          <motion.p className="detail-lead" initial={{ opacity: 0, x: 58 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.11, duration: 0.38, ease: [0.23, 1, 0.32, 1] }}>A representative catalogue entry designed to start the right conversation, not to replace an in-store gear check.</motion.p>
          <div className="detail-meta">
            <div><span>Price</span><strong>On request</strong></div>
            <div><span>Availability</span><strong>Confirm with One Stop</strong></div>
          </div>
          <div className="detail-confirmation">
            <Check />
            <p>Exact models, current stock, and technical specifications are shared after confirmation with the store.</p>
          </div>
          <div className="detail-actions">
            <a className="button button-amber" href={`/quote?product=${encodeURIComponent(product.name)}`}>Enquire now <ArrowUpRight /></a>
            <a className="button button-ghost" href={`/quote?product=${encodeURIComponent(product.name)}`}><MessageCircle /> Ask a question</a>
          </div>
        </div>
      </section>
      <section className="shell next-product"><p>Browse another direction</p><a href="/products">Return to all gear <ArrowUpRight /></a></section>
    </div>
  );
}
