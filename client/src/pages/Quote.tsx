/**
 * Aperture Noir design note: the enquiry page feels personal and practical, with
 * a warm action surface and technical-label clarity rather than a generic checkout form.
 */
import { FormEvent, useState } from "react";
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
          <p className="eyebrow side-enter side-enter-left"><span className="eyebrow-dot" /> Request a quote</p>
          <h1 className="side-enter side-enter-left side-enter-delay-1">Tell us what you are making.</h1>
          <p className="side-enter side-enter-right side-enter-delay-2">A few details make it easier for One Stop to check relevant options, price, and availability before getting back to you.</p>
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
