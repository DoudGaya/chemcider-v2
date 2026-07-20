import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "../../sanity/lib/data";
import { Breadcrumbs } from "../_components/content";
import { PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Chemcider research and deployment projects across hygiene access, cleaner production and circular systems in Africa.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main>
      <Breadcrumbs items={[{ label: "Projects" }]} />
      <PageHero label="Research & deployment" title="Focused projects." accent="Visible evidence." copy="Each Chemcider project defines the problem, evidence stage, intended outcomes and partnership need so collaborators can engage with clarity." aside={<span className="page-tag">PROJECT PIPELINE · CMS MANAGED</span>} />
      <section className="section shell">
        <SectionIntro label="Current pipeline" title="Built to move through evidence gates." copy="Statuses describe the current programme stage; they are not claims of completed impact." />
        <div className="collection-grid">
          {projects.map((project) => (
            <article className="collection-card collection-card-feature" key={project.slug}>
              <div className="collection-meta"><span>{project.code}</span><span className="status-chip">{project.status}</span></div>
              <h2>{project.title}</h2><p>{project.summary}</p>
              <dl><div><dt>Programme</dt><dd>{project.programme}</dd></div><div><dt>Stage</dt><dd>{project.stage}</dd></div><div><dt>Geography</dt><dd>{project.geography}</dd></div></dl>
              <Link className="text-link" href={`/projects/${project.slug}`}>Open project brief <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <PageCta />
    </main>
  );
}
