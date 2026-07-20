import Link from "next/link";
import {
  ArrowLink,
  PageCta,
  SectionIntro,
  StageFlow,
} from "./_components/site";
import { getProducts, getResearchProgrammes, getSiteSettings } from "../sanity/lib/data";

const focusAreas = [
  {
    number: "01",
    eyebrow: "Health",
    title: "Responsible hygiene",
    copy: "Reliable sanitation products, clearer safety information and distribution models designed around the realities of African communities.",
    link: "/products",
  },
  {
    number: "02",
    eyebrow: "Energy",
    title: "Cleaner production",
    copy: "Applied research into lower-carbon process heat, energy efficiency and technologies that can reduce dependence on fossil fuels.",
    link: "/research",
  },
  {
    number: "03",
    eyebrow: "Environment",
    title: "Circular systems",
    copy: "Practical pathways for material recovery, safer chemical handling and less waste across local manufacturing value chains.",
    link: "/impact",
  },
];

export default async function Home() {
  const [settings, programmes, products] = await Promise.all([getSiteSettings(), getResearchProgrammes(), getProducts()]);
  return (
    <>
      <main>
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span />{settings.heroLabel}</p>
            <h1>{settings.heroTitle} <em>{settings.heroAccent}</em></h1>
            <p className="hero-lede">{settings.heroIntroduction}</p>
            <div className="button-row">
              <Link className="button button-primary" href="/research">
                Explore our research <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/partner">
                Partner with Chemcider
              </Link>
            </div>
            <div className="hero-note">
              <span>Research-led</span>
              <span>Safety-conscious</span>
              <span>Built for West Africa</span>
            </div>
          </div>

          <div className="hero-lab" aria-label="Chemcider impact system illustration">
            <div className="lab-topline">
              <span>CHEM / CLIMATE / CARE</span>
              <span className="status-dot">ACTIVE MANDATE</span>
            </div>
            <div className="orbital-field" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core-mark"><small>C</small><strong>+</strong></div>
              <span className="particle p1" />
              <span className="particle p2" />
              <span className="particle p3" />
            </div>
            <div className="lab-caption">
              <div><strong>03</strong><span>research platforms</span></div>
              <div><strong>NG</strong><span>home market</span></div>
              <div><strong>WA</strong><span>regional ambition</span></div>
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="shell statement-grid">
            <p className="section-label">Our proposition</p>
            <div>
              <h2>{settings.propositionTitle}</h2>
              <p>{settings.propositionText}</p>
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionIntro
            label="Where we focus"
            title="One company. Three connected outcomes."
            copy="Our portfolio is deliberately focused where health, industry and the environment meet."
          />
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.number}>
                <div className="focus-meta"><span>{area.number}</span><span>{area.eyebrow}</span></div>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
                <ArrowLink href={area.link}>Discover the work</ArrowLink>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="shell">
            <SectionIntro
              label="How we work"
              title="From local problem to scalable system."
              copy="Every Chemcider programme moves through a disciplined evidence path, with safety and measurable value built into each gate."
              dark
            />
            <StageFlow />
          </div>
        </section>

        <section className="section shell product-preview">
          <div className="product-copy">
            <p className="section-label">Current product platform</p>
            <h2>Hygiene essentials, supplied with greater responsibility.</h2>
            <p>
              Our methylated spirit and hydrogen peroxide product lines support
              everyday hygiene and institutional supply. Product grade,
              concentration and permitted use are always determined by the label
              and applicable regulation.
            </p>
            <ArrowLink href="/products">View products and safety approach</ArrowLink>
          </div>
          <div className="product-stack">
            {products.slice(0, 2).map((product, index) => (
              <article className={`product-card ${index === 0 ? "product-blue" : "product-mint"}`} key={product.slug}>
                <div className="product-code">{product.code}</div>
                <div><p>{product.category}</p><h3>{product.name}</h3><span>{product.channels}</span></div>
                <div className="bottle-shape" aria-hidden="true"><span>{index === 0 ? "MS" : "H₂O₂"}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section research-preview">
          <div className="shell">
            <SectionIntro
              label="Research pipeline"
              title="Programmes designed for partnership."
              copy="We make the stage, hypothesis and next evidence requirement visible—so technical, community and funding partners know where they can add value."
            />
            <div className="programme-list">
              {programmes.map((programme) => (
                <article className="programme-row" key={programme.code}>
                  <span className="programme-code">{programme.code}</span>
                  <div><span className="status-chip">{programme.status}</span><h3>{programme.title}</h3></div>
                  <p>{programme.summary}</p>
                  <Link href="/research" aria-label={`Read about ${programme.title}`}>↗</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell impact-preview">
          <div className="impact-panel">
            <div>
              <p className="section-label">2026–2029 ambition</p>
              <h2>Measure what changes—not just what ships.</h2>
              <p>
                Our proposed impact framework tracks access, safety, avoided
                fossil-fuel use, material recovery and livelihoods. Baselines will
                be independently established before public results are reported.
              </p>
              <ArrowLink href="/impact">See the impact framework</ArrowLink>
            </div>
            <div className="target-grid">
              <div><strong>03</strong><span>field pilots advanced</span></div>
              <div><strong>05+</strong><span>technical and community partners</span></div>
              <div><strong>50k</strong><span>people reached — target</span></div>
              <div><strong>100%</strong><span>projects with defined safeguards</span></div>
            </div>
          </div>
        </section>

        <PageCta />
      </main>
    </>
  );
}
