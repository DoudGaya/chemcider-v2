import type { Metadata } from "next";
import { PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = {
  title: "Impact",
  description: "See Chemcider's proposed impact framework for health access, clean production and circular systems.",
};

const metrics = [
  ["Access", "People and institutions reached", "Verified customer, partner or beneficiary records"],
  ["Safety", "Reportable incidents and training completion", "Incident log and documented training records"],
  ["Climate", "Fuel displaced and estimated tCO₂e avoided", "Measured energy baseline and approved conversion factors"],
  ["Circularity", "Material, water or packaging recovered", "Mass-balance records and recovery evidence"],
  ["Livelihoods", "Jobs and local supplier value created", "Payroll, supplier and procurement records"],
  ["Learning", "Pilots reaching the next evidence gate", "Stage-gate review and decision memo"],
];

export default function ImpactPage() {
  return (
    <main>
      <PageHero label="Impact & accountability" title="Evidence before" accent="amplification." copy="We intend to report outcomes only after a credible baseline, clear metric definitions and documented safeguards are in place. Until then, ambition is labelled as ambition." aside={<span className="page-tag">PROPOSED 2026–2029 FRAMEWORK</span>} />
      <section className="section shell theory-grid">
        <div><p className="section-label">Theory of change</p><h2>Commercial strength can compound public value.</h2></div>
        <div className="theory-flow">
          <article><span>INPUT</span><strong>Research, products, partnerships and patient capital</strong></article>
          <article><span>OUTPUT</span><strong>Safer supply, validated pilots and stronger local capability</strong></article>
          <article><span>OUTCOME</span><strong>Better hygiene access, cleaner production and lower material loss</strong></article>
          <article><span>IMPACT</span><strong>Healthier communities and more resilient African systems</strong></article>
        </div>
      </section>
      <section className="section soft-section">
        <div className="shell">
          <SectionIntro label="Measurement architecture" title="Metrics a partner can interrogate." copy="Definitions and evidence sources are established before a project makes public impact claims." />
          <div className="metric-table" role="table" aria-label="Chemcider impact metrics">
            <div className="metric-row metric-head" role="row"><span>Theme</span><span>Core indicator</span><span>Evidence source</span></div>
            {metrics.map(([theme, indicator, evidence]) => <div className="metric-row" role="row" key={theme}><strong>{theme}</strong><span>{indicator}</span><span>{evidence}</span></div>)}
          </div>
        </div>
      </section>
      <section className="section shell">
        <SectionIntro label="Alignment" title="Connected to globally understood outcomes." copy="Our work maps most directly to six Sustainable Development Goals, while remaining accountable to locally defined needs." />
        <div className="sdg-grid">
          {[['03','Good health'],['06','Clean water'],['07','Clean energy'],['09','Industry & innovation'],['12','Responsible production'],['13','Climate action']].map(([n,t]) => <div key={n}><span>{n}</span><strong>{t}</strong></div>)}
        </div>
        <p className="target-disclaimer">Targets shown across this site are management ambitions, not achieved results. Baselines, budgets and verification arrangements will be finalised with delivery partners before public reporting.</p>
      </section>
      <PageCta />
    </main>
  );
}
