/**
 * Aperture Noir design note: shared chrome stays light in visual weight—warm glass,
 * technical micro-labels, and accessible contrast—so product imagery remains primary.
 */
import { Menu, X, Aperture, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { store } from "@/data/store";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gear-finder", label: "Find your gear" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="/" className={`wordmark ${inverted ? "wordmark-inverted" : ""}`} aria-label="One Stop home">
      <img src="/manus-storage/onestop-shutter-mark_419cb75d.png" alt="" aria-hidden="true" />
      <span>ONE<br />STOP</span>
    </a>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow side-enter side-enter-left"><Aperture aria-hidden="true" /> {eyebrow}</p>
      <h1 className="side-enter side-enter-left side-enter-delay-1">{title}</h1>
      <p className="page-intro-copy side-enter side-enter-right side-enter-delay-2">{copy}</p>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy, link }: { eyebrow: string; title: string; copy?: string; link?: { href: string; label: string } }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {link && <a className="text-link" href={link.href}>{link.label}<ArrowUpRight aria-hidden="true" /></a>}
    </div>
  );
}

export function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="shell nav-inner">
          <Wordmark inverted />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => <a key={item.href} className={location === item.href ? "active" : ""} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-quote" href="/quote">Get a quote <ArrowUpRight aria-hidden="true" /></a>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-content">
          <p className="eyebrow">Navigation</p>
          {nav.map((item, index) => <a key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}<ArrowUpRight /></a>)}
          <div className="mobile-menu-meta">
            <a href={store.phoneHref}><Phone /> {store.phone}</a>
            <a href="/contact"><MapPin /> {store.location}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Wordmark inverted />
          <p className="footer-statement">Cameras · Lenses ·<br />Photography gear.</p>
        </div>
        <div className="footer-nav">
          <p>Explore</p>
          <a href="/products">Products</a>
          <a href="/gear-finder">Find your gear</a>
          <a href="/quote">Request a quote</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-nav footer-contact">
          <p>Visit One Stop</p>
          <a href="/contact">{store.location}</a>
          <a href={store.phoneHref}>{store.phone}</a>
          <a href={store.emailHref}>{store.email}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} One Stop</span>
        <span>Made for the next frame.</span>
      </div>
    </footer>
  );
}

export function MobileDock() {
  const [location] = useLocation();
  const items = [
    { href: "/", label: "Home", icon: Aperture },
    { href: "/products", label: "Products", icon: Menu },
    { href: "/quote", label: "Quote", icon: ArrowUpRight },
    { href: "/contact", label: "Contact", icon: MapPin },
  ];
  return <nav className="mobile-dock" aria-label="Mobile navigation">
    {items.map(({ href, label, icon: Icon }) => <a key={href} href={href} className={location === href ? "active" : ""}><Icon /><span>{label}</span></a>)}
  </nav>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><SiteHeader /><main>{children}</main><SiteFooter /><MobileDock /></div>;
}
