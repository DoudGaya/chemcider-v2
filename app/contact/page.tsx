import type { Metadata } from "next";
import { PageHero } from "../_components/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Chemcider about products, research, pilots or funding partnerships." };

const routes = [
  ["Product & distribution", "Stock, specifications, institutional supply and distributor discussions.", "Product or distribution enquiry"],
  ["Research & pilots", "Technical collaboration, host sites, academic partnerships and field validation.", "Research or pilot enquiry"],
  ["Funding & investment", "Grant, catalytic-capital, impact-investment and project-finance conversations.", "Funding or investment enquiry"],
];

export default function ContactPage() {
  return (
    <main>
      <PageHero label="Contact" title="Start with the" accent="right conversation." copy="Choose the route that best fits your enquiry. A useful first message includes your organisation, the opportunity, location, timing and the decision you need to make." aside={<span className="page-tag">NIGERIA · WEST AFRICA</span>} />
      <section className="section shell contact-grid">
        {routes.map(([title, copy, subject], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><a className="arrow-link" href={`mailto:hello@chemcider.com?subject=${encodeURIComponent(subject)}`}>Email the team <span aria-hidden="true">↗</span></a></article>)}
      </section>
      <section className="section shell contact-note"><div><p className="section-label">General enquiries</p><h2>hello@chemcider.com</h2></div><p>For safe and efficient handling, do not send confidential formulas, personal health information or sensitive commercial documents in an initial email.</p></section>
    </main>
  );
}
