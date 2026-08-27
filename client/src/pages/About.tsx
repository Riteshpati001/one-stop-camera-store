/**
 * Aperture Noir design note: the About page deliberately stays spare and factual,
 * letting verified local identity and practical purpose carry the narrative.
 */
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageIntro } from "@/components/SiteChrome";
import { store } from "@/data/store";

export default function About() {
  return <div className="page about-page">
    <PageIntro eyebrow="About One Stop" title="Your local photography destination." copy="One Stop is a camera and photography equipment store in Bhubaneswar, created for photographers, content creators, videographers, and people finding their first setup." />
    <section className="shell about-statement">
      <div className="about-big-type">Make room<br />for better stories.</div>
      <div className="about-copy"><p>The store experience is intended to make gear discovery feel more approachable: start with what you want to create, ask focused questions, and verify the right equipment directly with the team.</p><p>Business history, specialist services, brand affiliations, and catalogue details are intentionally not stated here until the owner has confirmed them.</p><a className="button button-amber" href="/gear-finder">Find your gear <ArrowUpRight /></a></div>
    </section>
    <section className="shell local-note"><MapPin /><div><p className="eyebrow">Bhubaneswar, Odisha</p><h2>Come with a project in mind.</h2></div><a className="text-link" href="/contact">Plan your visit <ArrowUpRight /></a></section>
  </div>;
}
