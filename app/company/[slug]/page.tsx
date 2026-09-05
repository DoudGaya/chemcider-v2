import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCeoMessage, getGovernanceGroup, getPage } from "../../../sanity/lib/data";
import { buildMetadata } from "../../../sanity/lib/metadata";
import { Breadcrumbs, RoleCard } from "../../_components/content";
import { PageCta, PageHero, SectionIntro } from "../../_components/site";


const slugs = ["about", "ceo-message", "operational-team", "management-team", "standing-committee", "advisory-board"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "ceo-message") {
    const message = await getCeoMessage();
    return buildMetadata(message.seo, "CEO Message", message.introduction);
  }
  if (slug === "about") {
    const page = await getPage("about");
    return buildMetadata(page.seo, "About Chemcider", page.introduction);
  }
  const group = await getGovernanceGroup(slug);
  return group ? buildMetadata(group.seo, group.title, group.introduction) : {};
}

function AboutContent({ page }: { page: Awaited<ReturnType<typeof getPage>> }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Company" }, { label: "About" }]} />
      <PageHero label={page.heroLabel} title={page.heroTitle} accent={page.heroAccent} copy={page.introduction} aside={<span className="page-tag">CHEMISTRY · CLIMATE · COMMUNITY</span>} />
      <section className="section shell manifesto-grid">
        <div><p className="section-label">Our mission</p><h2>Improve African wellbeing through responsible chemistry and practical innovation.</h2></div>
        <div><p>We aim to reduce avoidable fossil-fuel use, strengthen access to dependable hygiene products, improve environmental cleanliness and translate research into technologies that work in real African conditions.</p><p>Our commercial product platform creates a route to customers and operating insight. Our research portfolio turns that proximity into better questions, stronger pilots and scalable solutions.</p></div>
      </section>
      <section className="section process-section">
        <div className="shell">
          <SectionIntro label="Our operating principles" title="Evidence, safety and local value." copy="We choose partners, projects and growth opportunities against a standard designed for durable trust." dark />
          <div className="principle-grid">
            {[
              ["01", "Evidence over theatre", "We favour a modest verified result over a large unsupported claim."],
              ["02", "Safety by design", "Product stewardship and community safeguards begin before launch."],
              ["03", "Local capability", "Growth should strengthen African skills, institutions and supply relationships."],
              ["04", "Earned scale", "Performance, economics and measurable outcomes determine what expands."],
            ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section shell">
        <SectionIntro label="Corporate architecture" title="Clear responsibility at every level." copy="Our governance model separates delivery, executive accountability, standing oversight and independent advice." />
        <div className="corporate-link-grid">
          {[
            ["Operational team", "/company/operational-team", "Day-to-day product, research and partnership delivery."],
            ["Management team", "/company/management-team", "Strategy, capital, performance and enterprise risk."],
            ["Standing committee", "/company/standing-committee", "Permanent oversight of material decisions."],
            ["Advisory board", "/company/advisory-board", "Independent scientific, health, finance and market counsel."],
          ].map(([title, href, copy]) => <Link href={href} key={href}><span>Corporate</span><h3>{title}</h3><p>{copy}</p><strong>Explore <span aria-hidden="true">↗</span></strong></Link>)}
        </div>
      </section>
      <PageCta />
    </>
  );
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();

  if (slug === "about") {
    const page = await getPage("about");
    return <main><AboutContent page={page} /></main>;
  }

  if (slug === "ceo-message") {
    const message = await getCeoMessage();
    return (
      <main>
        <Breadcrumbs items={[{ label: "Company" }, { label: "CEO message" }]} />
        <PageHero label={message.kicker} title={message.headline} accent={message.accent} copy={message.introduction} aside={<span className="page-tag">LEADERSHIP · PURPOSE · ACCOUNTABILITY</span>} />
        <section className="section shell ceo-message-layout">
          <aside>
            <span className="ceo-monogram">C</span>
            <blockquote>“{message.quote}”</blockquote>
          </aside>
          <article className="editorial-copy">
            {message.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <footer>
              <strong>{message.person?.name ?? message.signatureName}</strong>
              <span>{message.person?.currentTitle ?? message.signatureTitle}</span>
            </footer>
          </article>
        </section>
        <PageCta />
      </main>
    );
  }

  const group = await getGovernanceGroup(slug);
  if (!group) notFound();

  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: group.title }]} />
      <PageHero label={group.heroLabel} title={group.heroTitle} accent={group.heroAccent} copy={group.introduction} aside={<span className="page-tag">ROLES · MANDATE · ACCOUNTABILITY</span>} />
      <section className="section shell">
        <div className="mandate-panel"><p className="section-label">Mandate</p><h2>{group.mandate}</h2></div>
        <div className="role-grid">{group.members.map((member) => <RoleCard member={member} key={member.key} />)}</div>
        <p className="cms-note">Appointments and role information are maintained by authorised editors in Chemcider’s Sanity Studio. Vacant or non-public roles are presented as role profiles.</p>
      </section>
      <PageCta />
    </main>
  );
}
