import type { Metadata } from "next";
import { getPage, getServices } from "../../sanity/lib/data";
import { buildMetadata } from "../../sanity/lib/metadata";
import { PageCta, PageHero, SectionIntro } from "../_components/site";

export async function generateMetadata(): Promise<Metadata> { const page = await getPage("services"); return buildMetadata(page.seo, "Services", page.introduction); }

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getPage("services"), getServices()]);
  return <main><PageHero label={page.heroLabel} title={page.heroTitle} accent={page.heroAccent} copy={page.introduction} aside={<span className="page-tag">SCOPED ENGAGEMENTS · CLEAR DELIVERABLES</span>} /><section className="section shell"><SectionIntro label="What we offer" title="Technical work that leads to a decision." copy="Every engagement starts with a defined question and ends with a usable output." /><div className="service-list">{services.map((service) => <article key={service.slug}><span>{service.number}</span><div><h2>{service.title}</h2><p>{service.summary}</p></div><div><h3>Typical outputs</h3><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div></section><section className="section process-section"><div className="shell engagement-grid"><div><p className="section-label">Engagement model</p><h2>A clean route from brief to handover.</h2></div><ol>{[["01","Scope","Align the decision, evidence, timeline and owners."],["02","Execute","Run the agreed research, diagnostic or pilot work."],["03","Review","Test findings with technical and operating stakeholders."],["04","Transfer","Deliver the evidence pack, actions and next-stage plan."]].map(([n,t,c]) => <li key={n}><span>{n}</span><div><strong>{t}</strong><p>{c}</p></div></li>)}</ol></div></section><PageCta /></main>;
}
