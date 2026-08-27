/**
 * Aperture Noir design note: the catalogue is an offset editorial runway with
 * varied image scale and clear enquiry paths, never a transaction-heavy grid.
 */
import { useMemo, useState } from "react";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/data/store";
import { PageIntro, SectionHeading } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";

export default function Products() {
  const [selected, setSelected] = useState("all");
  const shownProducts = useMemo(() => selected === "all" ? products : products.filter((product) => product.category === selected), [selected]);
  return (
    <div className="page products-page">
      <PageIntro eyebrow="Catalogue" title="Find the tool behind the frame." copy="A visual guide to the kinds of camera gear One Stop can help you explore. Confirm the exact model, price, and stock before you visit." />
      <section className="shell catalog-toolbar-section">
        <div className="catalog-toolbar">
          <div className="toolbar-label"><SlidersHorizontal /> Browse by category</div>
          <div className="filter-row" aria-label="Product categories">
            <button className={selected === "all" ? "selected" : ""} onClick={() => setSelected("all")}>All gear</button>
            {categories.map((category) => <button key={category.slug} className={selected === category.slug ? "selected" : ""} onClick={() => setSelected(category.slug)}>{category.title}</button>)}
          </div>
        </div>
        <p className="catalog-notice">Demo catalogue — no pricing, model specification, or availability is published until One Stop approves it.</p>
      </section>
      <section className="shell catalog-section">
        <div className="product-grid">
          {shownProducts.map((product, index) => <ProductCard key={product.slug} product={product} feature={index === 0} index={index} />)}
        </div>
      </section>
      <section className="shell catalogue-cta-wrap">
        <div className="catalogue-cta">
          <p className="eyebrow"><span className="eyebrow-dot" /> Not sure where to begin?</p>
          <h2>Your work can lead the gear choice.</h2>
          <p>Answer three practical questions and take a clearer brief to the One Stop team.</p>
          <a className="button button-amber" href="/gear-finder">Find your gear <ArrowUpRight /></a>
        </div>
      </section>
    </div>
  );
}
