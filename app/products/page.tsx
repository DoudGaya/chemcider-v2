import type { Metadata } from "next";
import Link from "next/link";
import { Callout, PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Chemcider hygiene product lines and the company's responsible product stewardship approach.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        label="Product platform"
        title="Essential chemistry."
        accent="Handled responsibly."
        copy="Our current platform focuses on hygiene essentials for appropriate household, retail and institutional channels. Availability, grade, pack size and permitted use are confirmed in the product quotation and approved label."
        aside={<Link className="button button-primary" href="/contact">Request product information ↗</Link>}
      />

      <section className="section shell">
        <SectionIntro label="Current lines" title="A focused foundation for growth." copy="Two established categories give Chemcider a commercial base from which to deepen quality systems, distribution and related research." />
        <div className="product-detail-grid">
          <article className="product-detail-card blue">
            <div className="product-detail-visual"><span>MS</span><small>01 / CHEMCIDER</small></div>
            <div className="product-detail-copy">
              <span className="status-chip">Current line</span>
              <h2>Methylated spirit</h2>
              <p>A denatured-alcohol product line supplied for uses authorised by the applicable grade, label and regulation.</p>
              <dl>
                <div><dt>Channels</dt><dd>Retail · Institutional · Distributor</dd></div>
                <div><dt>Specifications</dt><dd>Confirmed per grade and quotation</dd></div>
                <div><dt>Handling</dt><dd>Flammable — keep from heat and ignition sources</dd></div>
              </dl>
            </div>
          </article>
          <article className="product-detail-card mint">
            <div className="product-detail-visual"><span>H₂O₂</span><small>02 / CHEMCIDER</small></div>
            <div className="product-detail-copy">
              <span className="status-chip">Current line</span>
              <h2>Hydrogen peroxide</h2>
              <p>An oxidising solution supplied in grade-appropriate formats, with use governed by concentration, label and regulation.</p>
              <dl>
                <div><dt>Channels</dt><dd>Retail · Institutional · Distributor</dd></div>
                <div><dt>Specifications</dt><dd>Confirmed per grade and quotation</dd></div>
                <div><dt>Handling</dt><dd>Protect from heat, light and incompatible materials</dd></div>
              </dl>
            </div>
          </article>
        </div>
        <div className="safety-note"><strong>Important product notice</strong><p>Read and follow the approved label and safety information. Do not ingest. Do not mix with other chemicals. Keep out of reach of children. Product claims and use instructions vary by grade and concentration.</p></div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <SectionIntro label="Product stewardship" title="Trust is built batch by batch." copy="Chemcider's quality roadmap is designed to make product identity, handling and accountability clear across the value chain." />
          <div className="callout-grid">
            <Callout number="01" title="Clear specifications">Grade, concentration, pack and intended-use information are defined before sale.</Callout>
            <Callout number="02" title="Traceable supply">Supplier qualification, batch records and complaint handling form the control backbone.</Callout>
            <Callout number="03" title="Useful safety information">Labels and safety documents are written for real handling decisions, not compliance theatre.</Callout>
            <Callout number="04" title="Responsible expansion">Related products advance only after regulatory, safety and commercial review.</Callout>
          </div>
        </div>
      </section>
      <PageCta />
    </main>
  );
}
