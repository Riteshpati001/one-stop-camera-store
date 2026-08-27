/**
 * Aperture Noir design note: home is a cinematic editorial runway—dark studio space,
 * warm selected light, real photography, and disciplined dimensional motion.
 */
import { motion } from "framer-motion";
import { Aperture, ArrowDownRight, ArrowUpRight, Check, Compass, MapPin, ScanLine } from "lucide-react";
import { categories, products, store } from "@/data/store";
import { SectionHeading } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";

const rise = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } };
const enterLeft = { hidden: { opacity: 0, x: -96 }, show: { opacity: 1, x: 0 } };
const enterRight = { hidden: { opacity: 0, x: 96 }, show: { opacity: 1, x: 0 } };

export default function Home() {
  return <div className="home-page">
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-grain" />
      <div className="hero-arc arc-one" /><div className="hero-arc arc-two" />
      <div className="shell hero-content">
        <motion.p className="hero-kicker" initial="hidden" animate="show" variants={enterLeft} transition={{ duration: 0.56, ease: [0.23, 1, 0.32, 1] }}>One Stop · Bhubaneswar <span /></motion.p>
        <h1 aria-label="Capture what matters."><motion.span className="hero-title-line" initial="hidden" animate="show" variants={enterLeft} transition={{ delay: 0.08, duration: 0.76, ease: [0.23, 1, 0.32, 1] }}>Capture</motion.span><motion.em className="hero-title-line" initial="hidden" animate="show" variants={enterRight} transition={{ delay: 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>what matters.</motion.em></h1>
        <motion.div className="hero-bottom" initial="hidden" animate="show" variants={rise} transition={{ delay: 0.16, duration: 0.65 }}>
          <motion.p initial="hidden" animate="show" variants={enterLeft} transition={{ delay: 0.28, duration: 0.62, ease: [0.23, 1, 0.32, 1] }}>Cameras, lenses and photography essentials for creators who want to tell better stories.</motion.p>
          <motion.div className="hero-actions" initial="hidden" animate="show" variants={enterRight} transition={{ delay: 0.35, duration: 0.62, ease: [0.23, 1, 0.32, 1] }}><a className="button button-amber" href="/products">Explore gear <ArrowUpRight /></a><a className="button button-ghost-light" href="/quote">Get a quote</a></motion.div>
        </motion.div>
        <motion.div className="hero-orbit" initial={{ opacity: 0, rotateX: 16, rotateY: -14, y: 24 }} animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.23, 1, 0.32, 1] }} aria-hidden="true"><div className="orbit-ring" /><div className="orbit-core"><Aperture /></div><span>ONE STOP<br />OPTICS</span></motion.div>
        <a className="hero-scroll" href="#categories">Scroll to explore <ArrowDownRight /></a>
      </div>
    </section>

    <section id="categories" className="categories-section shell section-space">
      <SectionHeading eyebrow="Explore by direction" title="Build around the work." copy="Begin with the part of the process you are trying to improve." link={{ href: "/products", label: "View all gear" }} />
      <div className="category-grid">
        {categories.map((category, index) => <a href={`/products?category=${category.slug}`} className={`category-card category-card-${index + 1}`} key={category.slug}><img src={category.image} alt="" loading="lazy" /><div className="category-card-overlay" /><div className="category-card-content"><span>0{index + 1}</span><h3>{category.title}</h3><p>{category.descriptor}</p><ArrowUpRight /></div></a>)}
      </div>
    </section>

    <section className="gear-promo">
      <div className="shell gear-promo-layout">
        <div className="gear-promo-visual"><div className="focus-rings"><i /><i /><i /></div><div className="focus-box"><ScanLine /><span>FOCUS<br />YOUR IDEA</span></div></div>
        <div className="gear-promo-copy"><p className="eyebrow"><Compass /> Find your gear</p><h2>Less spec sheet.<br /><em>More direction.</em></h2><p>If you know what you want to make but not what you need to buy, begin with three simple choices. It takes less than a minute.</p><a className="button button-amber" href="/gear-finder">Start the gear finder <ArrowUpRight /></a></div>
      </div>
    </section>

    <section className="shell section-space featured-section">
      <SectionHeading eyebrow="Featured directions" title="Seen through a different lens." copy="Representative selections for the prototype. Ask One Stop to confirm the exact gear available now." link={{ href: "/products", label: "Browse catalogue" }} />
      <div className="featured-grid">{products.slice(0, 3).map((product, index) => <ProductCard key={product.slug} product={product} feature={index === 0} />)}</div>
    </section>

    <section className="shell visit-section">
      <div className="visit-symbol"><Aperture /></div>
      <div><p className="eyebrow"><MapPin /> Visit One Stop</p><h2>See the feel of it<br />in person.</h2></div>
      <div className="visit-info"><p>{store.address}</p><a className="text-link" href="/contact">Store details & directions <ArrowUpRight /></a></div>
    </section>

    <section className="shell home-quote">
      <div><p className="eyebrow"><Check /> A clearer next step</p><h2>Already know the gear you need?</h2></div><a className="button button-amber" href="/quote">Request a quote <ArrowUpRight /></a>
    </section>
  </div>;
}
