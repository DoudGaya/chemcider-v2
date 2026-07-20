import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "../../../sanity/lib/data";
import { buildMetadata } from "../../../sanity/lib/metadata";
import { Breadcrumbs, DetailList } from "../../_components/content";
import { PageCta, PageHero } from "../../_components/site";

export async function generateStaticParams() {
  return (await getProjects()).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return project ? buildMetadata(project.seo, project.title, project.summary) : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = await getProject((await params).slug);
  if (!project) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "ResearchProject", name: project.title, description: project.summary, areaServed: project.geography, sponsor: { "@type": "Organization", name: "Chemcider" } };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
      <PageHero label={project.code} title={project.title} accent={project.programme} copy={project.summary} aside={<span className="page-tag">{project.status} · {project.stage}</span>} />
      <section className="section shell project-detail-layout">
        <article className="editorial-copy"><p className="section-label">The challenge</p><h2>{project.challenge}</h2><p>{project.partnerNeed}</p></article>
        <aside className="project-facts"><div><span>Status</span><strong>{project.status}</strong></div><div><span>Stage</span><strong>{project.stage}</strong></div><div><span>Geography</span><strong>{project.geography}</strong></div></aside>
        <DetailList title="Proposed approach" items={project.approach} />
        <DetailList title="Evidence outputs" items={project.outcomes} />
      </section>
      <PageCta />
    </main>
  );
}
