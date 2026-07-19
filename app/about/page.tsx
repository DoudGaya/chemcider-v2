import type { Metadata } from "next";
import { Callout, PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Chemcider's mission to build healthier, cleaner and more sustainable systems across Nigeria and neighbouring countries.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero label="About Chemcider" title="Built in Nigeria." accent="Designed for Africa." copy="Chemcider is building an applied research and responsible-products company around a clear belief: African health and sustainability challenges deserve solutions designed with local evidence, operating reality and long-term accountability." aside={<span className="page-tag">CHEMISTRY · CLIMATE · COMMUNITY</span>} />
      <section className="section shell manifesto-grid">
        <div><p className="section-label">Our mission</p><h2>Improve African wellbeing through responsible chemistry and practical innovation.</h2></div>
        <div><p>We aim to reduce avoidable fossil-fuel use, strengthen access to dependable hygiene products, improve environmental cleanliness and translate research into technologies that work in real African conditions.</p><p>Our commercial product platform creates a route to customers and operating insight. Our research portfolio turns that proximity into better questions, stronger pilots and scalable solutions.</p></div>
      </section>
      <section className="section process-section">
        <div className="shell">
          <SectionIntro label="What guides us" title="Principles for durable trust." copy="These principles shape how we intend to choose projects, partners and growth opportunities." dark />
          <div className="callout-grid callout-grid-dark">
            <Callout number="01" title="Evidence over theatre">We would rather show a modest verified result than a large unsupported claim.</Callout>
            <Callout number="02" title="Safety is a design input">Responsible handling and community safeguards begin before a product or pilot launches.</Callout>
            <Callout number="03" title="Local value matters">We favour pathways that build capability, supply relationships and skilled work in Africa.</Callout>
            <Callout number="04" title="Scale must earn its way">Technical performance, unit economics and measurable outcomes determine what expands.</Callout>
          </div>
        </div>
      </section>
      <section className="section shell">
        <SectionIntro label="Governance architecture" title="Built to become diligence-ready." copy="Chemcider's operating plan calls for clear ownership of science, safety, finance and impact as the company grows." />
        <div className="governance-grid">
          <article><span>BOARD / ADVISORY</span><h3>Direction &amp; oversight</h3><p>Strategy, risk appetite, capital allocation and independent technical challenge.</p></article>
          <article><span>RESEARCH</span><h3>Evidence &amp; innovation</h3><p>Portfolio design, methods, partner review and stage-gate decisions.</p></article>
          <article><span>QUALITY / HSE</span><h3>Product &amp; people safety</h3><p>Regulatory pathway, specifications, incidents, training and corrective action.</p></article>
          <article><span>OPERATIONS</span><h3>Delivery &amp; economics</h3><p>Supply, distribution, customer service, cash discipline and scale readiness.</p></article>
        </div>
      </section>
      <PageCta />
    </main>
  );
}
