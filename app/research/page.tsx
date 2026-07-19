import type { Metadata } from "next";
import { Callout, PageCta, PageHero, SectionIntro, StageFlow } from "../_components/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore Chemcider's applied research programmes in clean production, circular chemical systems and community hygiene access.",
};

const programmes = [
  {
    code: "R01",
    stage: "Concept validation",
    title: "Clean process heat",
    question: "How can small African production facilities reduce fossil-fuel use without weakening reliability or unit economics?",
    work: ["Energy and thermal-load baselines", "Technology and feedstock screening", "Pilot design with operating safeguards", "Cost and avoided-emissions measurement"],
    partner: "Energy-technology providers, universities, manufacturers and climate-finance partners.",
  },
  {
    code: "R02",
    stage: "Research design",
    title: "Circular chemical systems",
    question: "Where can water, packaging and production materials be safely reduced, recovered or redesigned?",
    work: ["Material-flow mapping", "Packaging and reuse assessment", "Waste and water characterisation", "Recovery pathway economics"],
    partner: "Materials researchers, recyclers, laboratories, packaging suppliers and industrial partners.",
  },
  {
    code: "R03",
    stage: "Partner discovery",
    title: "Community hygiene access",
    question: "Which product formats, knowledge and distribution models improve safe hygiene access in underserved communities?",
    work: ["User and channel research", "Safety-communication testing", "Last-mile delivery pilots", "Access and behaviour measurement"],
    partner: "Public-health organisations, distributors, community groups and impact funders.",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        label="Research portfolio"
        title="Local questions."
        accent="Testable answers."
        copy="Our research agenda starts with challenges visible in Nigerian communities and production systems. We define the evidence needed, test at practical scale and publish what partners need to decide responsibly."
        aside={<span className="page-tag">OPEN TO TECHNICAL &amp; PILOT PARTNERS</span>}
      />

      <section className="section shell">
        <SectionIntro label="Active themes" title="A focused applied-research portfolio." copy="Each programme is a platform for specific projects—not a vague statement of interest." />
        <div className="research-cards">
          {programmes.map((programme) => (
            <article className="research-card" key={programme.code}>
              <div className="research-card-head"><span>{programme.code}</span><span className="status-chip">{programme.stage}</span></div>
              <h2>{programme.title}</h2>
              <p className="research-question">{programme.question}</p>
              <div className="research-columns">
                <div><h3>Current work packages</h3><ul>{programme.work.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>Partner fit</h3><p>{programme.partner}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionIntro label="Evidence pathway" title="A stage-gated route from idea to scale." copy="Projects only advance when performance, safety, economics and community value support the next decision." dark />
          <StageFlow />
        </div>
      </section>

      <section className="section shell">
        <SectionIntro label="Research integrity" title="Designed for credible collaboration." copy="Our operating standard is simple: make the question, method, risk and decision visible." />
        <div className="callout-grid">
          <Callout number="01" title="Named hypothesis">Every pilot begins with a falsifiable question and defined success threshold.</Callout>
          <Callout number="02" title="Safety by design">Product, worker, community and environmental safeguards are planned before field activity.</Callout>
          <Callout number="03" title="Baseline first">Impact is compared with a defined baseline—not inferred from activity alone.</Callout>
          <Callout number="04" title="Decision-ready results">Outputs include the operating, financial and impact evidence needed for the next gate.</Callout>
        </div>
      </section>
      <PageCta />
    </main>
  );
}
