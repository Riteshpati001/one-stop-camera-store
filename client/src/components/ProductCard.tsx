/**
 * Aperture Noir design note: cards use photographic scale, hairline framing, and
 * sparse metadata so the catalogue reads like an editorial contact sheet.
 */
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/store";

export function ProductCard({ product, feature = false, index = 0 }: { product: Product; feature?: boolean; index?: number }) {
  return (
    <motion.a className={`product-card ${product.tone} ${feature ? "product-card-feature" : ""}`} href={`/products/${product.slug}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: Math.min(index * 0.07, 0.28), duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
      <div className="product-image-wrap">
        <img src={product.image} alt={`${product.name} demonstration`} loading="lazy" />
        <span className="product-frame product-frame-tl" /><span className="product-frame product-frame-br" />
        <span className="product-card-arrow"><ArrowUpRight /></span>
      </div>
      <div className="product-card-copy">
        <span>{product.label}</span>
        <h3>{product.name}</h3>
        <p>Price & availability on request</p>
      </div>
    </motion.a>
  );
}
