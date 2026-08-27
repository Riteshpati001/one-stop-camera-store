/**
 * Aperture Noir design note: the enquiry page feels personal and practical, with
 * a warm action surface and technical-label clarity rather than a generic checkout form.
 */
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { store } from "@/data/store";

function initialProduct() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product") || "";
}

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(initialProduct);
  const brief = new URLSearchParams(window.location.search).get("brief");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); };
  if (submitted) return <div className="page quote-page"><section className="shell form-success"><CheckCircle2 /><p className="eyebrow">Enquiry captured</p><h1>Thanks. Your brief is ready for One Stop.</h1><p>This demo confirms the form experience locally. For production, connect it to verified store email or enquiry management.</p><div><a className="button button-amber" href="/products">Continue exploring <ArrowUpRight /></a><button className="button button-ghost" onClick={() => setSubmitted(false)}>Send another enquiry</button></div></section></div>;
  return (
    <div className="page quote-page">
      <section className="shell quote-layout">
        <div className="quote-intro">
          <motion.p className="eyebrow" initial={{ opacity: 0, x: -52 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}><span className="eyebrow-dot" /> Request a quote</motion.p>
          <motion.h1 initial={{ opacity: 0, x: -72 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>Tell us what you are making.</motion.h1>
          <motion.p initial={{ opacity: 0, x: 58 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.11, duration: 0.38, ease: [0.23, 1, 0.32, 1] }}>A few details make it easier for One Stop to check relevant options, price, and availability before getting back to you.</motion.p>
          {brief && <div className="brief-recap"><span>Gear finder brief</span><strong>{brief.split("|").map((part) => part.trim()).join(" · ")}</strong></div>}
          <div className="quote-direct">
            <span>Prefer a direct conversation?</span>
            <a href={store.phoneHref}><Phone /> {store.phone}</a>
            <a href={store.emailHref}><Mail /> {store.email}</a>
          </div>
        </div>
        <form className="quote-form" onSubmit={submit}>
          <div className="form-title"><span>01</span><p>Your enquiry</p></div>
          <div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone<input required name="phone" type="tel" placeholder="Your phone number" /></label></div>
          <label>Email<input required name="email" type="email" placeholder="you@example.com" /></label>
          <div className="form-row"><label>Gear or product<input name="product" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="What are you looking for?" /></label><label>Budget range<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Still exploring</option><option>Entry setup</option><option>Serious kit</option><option>Professional setup</option></select></label></div>
          <label>What should One Stop know?<textarea name="message" rows={5} placeholder="A little about your project, timeline, or questions..." /></label>
          <p className="form-disclaimer">This is a client-demo submission flow. A production version needs connected delivery, validation, and consent handling.</p>
          <button className="button button-amber form-submit" type="submit">Send enquiry <ArrowUpRight /></button>
        </form>
      </section>
    </div>
  );
}
