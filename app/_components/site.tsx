import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
];

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Chemcider home">
      <span className="brand-mark" aria-hidden="true">C<span>+</span></span>
      <span className="brand-copy"><strong>CHEMCIDER</strong><small>Applied research &amp; sustainable systems</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-small button-primary desktop-partner" href="/partner">Partner with us <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <Link href="/partner">Partner with us ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Better chemistry. Healthier communities. Cleaner systems.</p>
          <span>Nigeria · West Africa</span>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/research">Research</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/impact">Impact</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/partner">Partnerships</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h3>Start a conversation</h3>
          <p>Research, distribution, pilot and funding partnerships are welcome.</p>
          <a href="mailto:hello@chemcider.com">hello@chemcider.com ↗</a>
        </div>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Chemcider. All rights reserved.</span>
        <span>Responsible chemistry · Evidence-led impact</span>
      </div>
    </footer>
  );
}

export function SectionIntro({ label, title, copy, dark = false }: { label: string; title: string; copy: string; dark?: boolean }) {
  return (
    <div className={`section-intro${dark ? " section-intro-dark" : ""}`}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

export function StageFlow() {
  const stages = [
    ["01", "Frame", "Define the local problem, user and safeguard."],
    ["02", "Research", "Build the hypothesis, baseline and technical case."],
    ["03", "Pilot", "Test performance with a delivery partner."],
    ["04", "Validate", "Measure safety, economics and environmental value."],
    ["05", "Scale", "Finance and replicate what the evidence supports."],
  ];
  return (
    <div className="stage-flow">
      {stages.map(([number, title, copy]) => (
        <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
      ))}
    </div>
  );
}

export function PageHero({ label, title, accent, copy, aside }: { label: string; title: string; accent?: string; copy: string; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <p className="eyebrow"><span /> {label}</p>
          <h1>{title} {accent && <em>{accent}</em>}</h1>
        </div>
        <div className="page-hero-copy"><p>{copy}</p>{aside}</div>
      </div>
    </section>
  );
}

export function PageCta() {
  return (
    <section className="page-cta">
      <div className="shell page-cta-inner">
        <p>PARTNERSHIP / 2026</p>
        <h2>Let&apos;s build what Africa needs next.</h2>
        <div>
          <p>Bring a research question, a deployment challenge or patient capital. We&apos;ll bring local context and a disciplined route to evidence.</p>
          <Link className="button button-light" href="/partner">Start a partnership <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function Callout({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <article className="callout"><span>{number}</span><h3>{title}</h3><p>{children}</p></article>;
}
