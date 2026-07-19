import type { Metadata } from "next";
import { PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Chemcider provides applied research, pilot design, responsible sourcing and sustainability advisory services.",
};

const services = [
  { number: "01", title: "Applied research & formulation", copy: "Structured investigation of product, process and delivery questions with defined methods, evidence gates and handover outputs.", deliverables: ["Research brief", "Test plan", "Findings memo", "Next-gate recommendation"] },
  { number: "02", title: "Pilot design & field validation", copy: "Practical pilot architecture for clean production, circular systems and hygiene-access initiatives in Nigerian operating contexts.", deliverables: ["Baseline", "Pilot protocol", "Risk register", "Measurement plan"] },
  { number: "03", title: "Responsible sourcing & distribution", copy: "Supplier, product and channel development for organisations that need dependable hygiene and chemical-product supply.", deliverables: ["Supplier screen", "Specification alignment", "Channel plan", "Traceability controls"] },
  { number: "04", title: "Sustainability diagnostics", copy: "A focused assessment of energy, materials, waste and operating data to identify technically realistic improvement opportunities.", deliverables: ["Current-state map", "Opportunity register", "Priority business case", "Implementation roadmap"] },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero label="Technical services" title="Research discipline." accent="Operating reality." copy="We help manufacturers, institutions, funders and solution providers turn a sustainability question into a testable, locally grounded programme of work." aside={<span className="page-tag">SCOPED ENGAGEMENTS · CLEAR DELIVERABLES</span>} />
      <section className="section shell">
        <SectionIntro label="What we offer" title="Technical work that leads to a decision." copy="Every engagement starts with a defined question and ends with a usable output." />
        <div className="service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <div><h2>{service.title}</h2><p>{service.copy}</p></div>
              <div><h3>Typical outputs</h3><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section process-section">
        <div className="shell engagement-grid">
          <div><p className="section-label">Engagement model</p><h2>A clean route from brief to handover.</h2></div>
          <ol>
            <li><span>01</span><div><strong>Scope</strong><p>Align the decision, evidence, timeline and owners.</p></div></li>
            <li><span>02</span><div><strong>Execute</strong><p>Run the agreed research, diagnostic or pilot work.</p></div></li>
            <li><span>03</span><div><strong>Review</strong><p>Test findings with technical and operating stakeholders.</p></div></li>
            <li><span>04</span><div><strong>Transfer</strong><p>Deliver the evidence pack, actions and next-stage plan.</p></div></li>
          </ol>
        </div>
      </section>
      <PageCta />
    </main>
  );
}
