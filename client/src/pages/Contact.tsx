/**
 * Aperture Noir design note: the contact page pairs an anchored map with large,
 * high-contrast local details to turn intent into an uncomplicated visit or call.
 */
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/SiteChrome";
import { StoreMap } from "@/components/StoreMap";
import { store } from "@/data/store";

export default function Contact() {
  return <div className="page contact-page">
    <PageIntro eyebrow="Visit & contact" title="Bring your next idea in." copy="Plan a visit, ask about a product, or request a quote. The exact opening hours should be confirmed directly with the store." />
    <section className="shell contact-layout">
      <div className="contact-details">
        <div><span className="contact-icon"><MapPin /></span><p className="eyebrow">Store address</p><h2>{store.location}</h2><p>{store.address}</p><a className="text-link" href={store.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></div>
        <div className="contact-channel-grid"><a href={store.phoneHref}><Phone /><span>Call One Stop</span><strong>{store.phone}</strong></a><a href={store.emailHref}><Mail /><span>Write to One Stop</span><strong>{store.email}</strong></a></div>
        <a className="button button-amber" href="/quote">Request a quote <ArrowUpRight /></a>
      </div>
      <div className="map-card"><StoreMap /><div className="map-caption"><span>One Stop</span><span>Directions open in Google Maps</span></div></div>
    </section>
  </div>;
}
