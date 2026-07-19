import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Partner with Chemcider on applied research, field pilots, distribution and climate or health financing in Nigeria.",
};

const partnerTypes = [
  ["Technical & academic", "Co-design methods, testing, validation and publication pathways."],
  ["Industry & deployment", "Provide operating sites, customer insight, technology or distribution capability."],
  ["Community & public sector", "Shape responsible delivery, local safeguards and adoption."],
  ["Funding & investment", "Finance evidence, productive assets and scale through fit-for-stage capital."],
];

export default function PartnerPage() {
  return (
    <main>
      <PageHero label="Partnerships & funding" title="Fund the evidence." accent="Scale the result." copy="Chemcider is preparing a portfolio of focused, stage-gated programmes across hygiene access, cleaner production and circular systems. We welcome partners who value measurable outcomes and practical African innovation." aside={<a className="button button-primary" href="mailto:hello@chemcider.com?subject=Chemcider%20partnership%20enquiry">Open a conversation ↗</a>} />
      <section className="section shell investment-case">
        <div><p className="section-label">Why Chemcider</p><h2>A platform at the intersection of health, industry and climate.</h2></div>
        <div className="investment-points">
          <article><span>01</span><div><h3>Real operating context</h3><p>Commercial activity creates direct visibility into product, supply and customer realities.</p></div></article>
          <article><span>02</span><div><h3>Focused research agenda</h3><p>Three connected platforms make the story coherent while allowing ring-fenced projects.</p></div></article>
          <article><span>03</span><div><h3>Stage-matched capital</h3><p>Grants fund evidence; patient capital and debt follow validated economics and assets.</p></div></article>
          <article><span>04</span><div><h3>Measurable outcomes</h3><p>Access, safety, carbon, circularity and livelihoods are defined before claims are made.</p></div></article>
        </div>
      </section>
      <section className="section soft-section">
        <div className="shell">
          <SectionIntro label="Who we work with" title="Different capabilities. One evidence path." copy="A strong consortium combines technical depth, delivery access, community legitimacy and appropriate finance." />
          <div className="partner-grid">{partnerTypes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>
      <section className="section shell diligence-section">
        <div><p className="section-label">Partner readiness</p><h2>What we prepare for serious conversations.</h2><p>Materials are released according to the stage and confidentiality of the opportunity.</p></div>
        <ul>
          <li><span>01</span>Company profile and ownership summary</li>
          <li><span>02</span>Project concept note and theory of change</li>
          <li><span>03</span>Stage-gated work plan, budget and risk register</li>
          <li><span>04</span>Financial model and use-of-funds schedule</li>
          <li><span>05</span>Regulatory, quality and safeguarding roadmap</li>
          <li><span>06</span>Measurement, reporting and learning plan</li>
        </ul>
      </section>
      <section className="partner-close">
        <div className="shell partner-close-inner"><p>READY TO COLLABORATE?</p><h2>Bring the challenge.<br />We&apos;ll structure the work.</h2><div><p>Tell us the problem, geography, capability or capital you can bring.</p><Link className="button button-light" href="/contact">Choose an enquiry route ↗</Link></div></div>
      </section>
    </main>
  );
}
