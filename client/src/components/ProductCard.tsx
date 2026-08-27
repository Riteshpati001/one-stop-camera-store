/**
 * Aperture Noir design note: cards use photographic scale, hairline framing, and
 * sparse metadata so the catalogue reads like an editorial contact sheet.
 */
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/store";

export function ProductCard({ product, feature = false }: { product: Product; feature?: boolean }) {
  return (
    <a className={`product-card ${product.tone} ${feature ? "product-card-feature" : ""}`} href={`/products/${product.slug}`}>
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
    </a>
  );
}
