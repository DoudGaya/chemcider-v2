import type { Metadata } from "next";
import { getPage, getResearchProgrammes } from "../../sanity/lib/data";
import { buildMetadata } from "../../sanity/lib/metadata";
import { Callout, PageCta, PageHero, SectionIntro, StageFlow } from "../_components/site";

export async function generateMetadata(): Promise<Metadata> { const page = await getPage("research"); return buildMetadata(page.seo, "Research", page.introduction); }

export default async function ResearchPage() {
  const [page, programmes] = await Promise.all([getPage("research"), getResearchProgrammes()]);
  return <main>
    <PageHero label={page.heroLabel} title={page.heroTitle} accent={page.heroAccent} copy={page.introduction} aside={<span className="page-tag">OPEN TO TECHNICAL &amp; PILOT PARTNERS</span>} />
    <section className="section shell"><SectionIntro label="Active themes" title="A focused applied-research portfolio." copy="Each programme is a platform for specific projects—not a vague statement of interest." /><div className="research-cards">{programmes.map((programme) => <article className="research-card" key={programme.code}><div className="research-card-head"><span>{programme.code}</span><span className="status-chip">{programme.status}</span></div><h2>{programme.title}</h2><p className="research-question">{programme.question}</p><div className="research-columns"><div><h3>Current work packages</h3><ul>{programme.work.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Partner fit</h3><p>{programme.partner}</p></div></div></article>)}</div></section>
    <section className="section process-section"><div className="shell"><SectionIntro label="Evidence pathway" title="A stage-gated route from idea to scale." copy="Projects only advance when performance, safety, economics and community value support the next decision." dark /><StageFlow /></div></section>
    <section className="section shell"><SectionIntro label="Research integrity" title="Designed for credible collaboration." copy="Our operating standard is simple: make the question, method, risk and decision visible." /><div className="callout-grid"><Callout number="01" title="Named hypothesis">Every pilot begins with a falsifiable question and defined success threshold.</Callout><Callout number="02" title="Safety by design">Product, worker, community and environmental safeguards are planned before field activity.</Callout><Callout number="03" title="Baseline first">Impact is compared with a defined baseline—not inferred from activity alone.</Callout><Callout number="04" title="Decision-ready results">Outputs include the operating, financial and impact evidence needed for the next gate.</Callout></div></section><PageCta />
  </main>;
}
