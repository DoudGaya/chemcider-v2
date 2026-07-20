import type {
  CeoMessage,
  EventItem,
  GovernanceGroup,
  ImpactMetric,
  MarketingPage,
  NavigationGroup,
  NewsArticle,
  ProductItem,
  Project,
  ResearchProgramme,
  ServiceItem,
  SiteSettings,
} from "./types";

export const fallbackSettings: SiteSettings = {
  organizationName: "Chemcider",
  legalName: "Chemcider",
  tagline: "Better chemistry. Healthier communities. Cleaner systems.",
  email: "hello@chemcider.com",
  geography: "Nigeria · West Africa",
  heroLabel: "Applied research · Nigeria",
  heroTitle: "Better chemistry for a",
  heroAccent: "healthier Africa.",
  heroIntroduction:
    "Chemcider develops practical sanitation, clean-production and circular-system solutions for the communities and industries that move Africa forward.",
  propositionTitle: "Chemistry, made accountable.",
  propositionText:
    "We connect commercial discipline with applied research: supplying essential hygiene products today while developing the cleaner technologies, partnerships and evidence Africa needs tomorrow.",
  partnershipTitle: "Let’s build what Africa needs next.",
  partnershipText:
    "Bring a research question, a deployment challenge or patient capital. We’ll bring local context and a disciplined route to evidence.",
  defaultSeo: {
    title: "Chemcider — Applied Research for a Healthier Africa",
    description:
      "Chemcider is a Nigerian applied research company developing responsible hygiene, cleaner production and circular-system solutions for Africa.",
    keywords: [
      "sustainable chemical research Nigeria",
      "green technology Africa",
      "hygiene products Nigeria",
      "clean production Africa",
    ],
  },
};

export const fallbackNavigation: NavigationGroup[] = [
  {
    label: "What we do",
    items: [
      { label: "Research", href: "/research", description: "Applied research programmes and evidence pathways" },
      { label: "Products", href: "/products", description: "Responsible hygiene product platform" },
      { label: "Services", href: "/services", description: "Research, pilot and sustainability services" },
      { label: "Impact", href: "/impact", description: "Measurement framework and commitments" },
    ],
  },
  {
    label: "Corporate",
    items: [
      { label: "About Chemcider", href: "/company/about", description: "Mission, model and governance" },
      { label: "CEO message", href: "/company/ceo-message", description: "A message from the chief executive" },
      { label: "Operational team", href: "/company/operational-team", description: "The roles responsible for delivery" },
      { label: "Management team", href: "/company/management-team", description: "Executive leadership and accountability" },
      { label: "Standing committee", href: "/company/standing-committee", description: "Permanent oversight committees" },
      { label: "Advisory board", href: "/company/advisory-board", description: "Independent scientific and market counsel" },
    ],
  },
  {
    label: "Media & activity",
    items: [
      { label: "Projects", href: "/projects", description: "Flagship research and deployment projects" },
      { label: "News", href: "/news", description: "Company and research updates" },
      { label: "Events", href: "/events", description: "Briefings, workshops and partner sessions" },
      { label: "Partnerships", href: "/partner", description: "Work with or fund Chemcider" },
      { label: "Contact", href: "/contact", description: "Find the right conversation" },
    ],
  },
];

export const fallbackPages: Record<string, MarketingPage> = {
  about: {
    slug: "about",
    heroLabel: "About Chemcider",
    heroTitle: "Built in Nigeria.",
    heroAccent: "Designed for Africa.",
    introduction:
      "Chemcider is building an applied-research and responsible-products company around a clear belief: African health and sustainability challenges deserve solutions designed with local evidence, operating reality and long-term accountability.",
    seo: {
      title: "About Chemcider",
      description: "Learn how Chemcider combines responsible products, applied research and partnerships to improve African wellbeing.",
    },
  },
  research: {
    slug: "research",
    heroLabel: "Research portfolio",
    heroTitle: "Local questions.",
    heroAccent: "Testable answers.",
    introduction:
      "Our research agenda starts with challenges visible in Nigerian communities and production systems. We define the evidence needed, test at practical scale and publish what partners need to decide responsibly.",
    seo: { title: "Research", description: "Explore Chemcider’s applied research programmes in clean production, circular systems and hygiene access." },
  },
  products: {
    slug: "products",
    heroLabel: "Product platform",
    heroTitle: "Essential chemistry.",
    heroAccent: "Handled responsibly.",
    introduction:
      "Our current platform focuses on hygiene essentials for appropriate household, retail and institutional channels. Availability, grade, pack size and permitted use are confirmed in the product quotation and approved label.",
    seo: { title: "Products", description: "Explore Chemcider hygiene product lines and responsible product stewardship." },
  },
  services: {
    slug: "services",
    heroLabel: "Technical services",
    heroTitle: "Research discipline.",
    heroAccent: "Operating reality.",
    introduction:
      "We help manufacturers, institutions, funders and solution providers turn a sustainability question into a testable, locally grounded programme of work.",
    seo: { title: "Services", description: "Applied research, pilot design, responsible sourcing and sustainability diagnostics from Chemcider." },
  },
  impact: {
    slug: "impact",
    heroLabel: "Impact & accountability",
    heroTitle: "Evidence before",
    heroAccent: "amplification.",
    introduction:
      "We report outcomes only after a credible baseline, clear metric definitions and documented safeguards are in place. Until then, ambition is labelled as ambition.",
    seo: { title: "Impact", description: "Chemcider’s framework for measuring health access, clean production and circularity." },
  },
};

const role = (key: string, position: string, roleSummary: string, order: number) => ({
  key,
  position,
  roleSummary,
  active: true,
  order,
});

export const fallbackGovernanceGroups: Record<string, GovernanceGroup> = {
  "operational-team": {
    title: "Operational team",
    slug: "operational-team",
    type: "operations",
    heroLabel: "Corporate · Delivery",
    heroTitle: "The people who turn",
    heroAccent: "intent into practice.",
    introduction:
      "Chemcider’s operating team connects customer needs, controlled supply, research delivery and safe execution. Named appointments can be published from Sanity as the organisation grows.",
    mandate:
      "Deliver dependable products and projects while protecting quality, people, cash and the evidence behind every public claim.",
    members: [
      role("operations-supply", "Head, Operations & Supply", "Owns procurement, stock, logistics, service levels and continuity planning.", 1),
      role("quality-regulatory", "Quality & Regulatory Lead", "Owns product specifications, registrations, complaints, traceability and corrective action.", 2),
      role("research-projects", "Research & Projects Lead", "Turns programme questions into protocols, partnerships, stage gates and decision-ready results.", 3),
      role("commercial", "Commercial Partnerships Lead", "Builds responsible customer, distributor, host-site and strategic-partner relationships.", 4),
    ],
    seo: { title: "Operational Team", description: "Meet the roles responsible for safe and dependable Chemcider delivery." },
  },
  "management-team": {
    title: "Management team",
    slug: "management-team",
    type: "management",
    heroLabel: "Corporate · Leadership",
    heroTitle: "Leadership with",
    heroAccent: "measurable accountability.",
    introduction:
      "Chemcider’s management architecture is designed to keep science, operations, finance and impact connected in every major decision.",
    mandate:
      "Set strategy, allocate capital, manage enterprise risk and ensure that growth remains commercially sound, scientifically credible and socially responsible.",
    members: [
      role("ceo", "Managing Director / Chief Executive Officer", "Leads strategy, culture, capital formation and accountability to the board and partners.", 1),
      role("research-director", "Director, Research & Innovation", "Owns the research portfolio, technical standards, evidence quality and intellectual-property decisions.", 2),
      role("operations-director", "Director, Operations & Product Stewardship", "Owns operational performance, supply assurance, quality systems and HSE readiness.", 3),
      role("finance-lead", "Finance & Corporate Services Lead", "Owns financial control, planning, compliance, people systems and decision support.", 4),
    ],
    seo: { title: "Management Team", description: "Chemcider’s management roles and leadership accountabilities." },
  },
  "standing-committee": {
    title: "Standing committee",
    slug: "standing-committee",
    type: "committee",
    heroLabel: "Governance · Oversight",
    heroTitle: "Permanent oversight for",
    heroAccent: "the decisions that matter.",
    introduction:
      "Standing committees create consistent review where Chemcider faces its highest scientific, safety, financial and reputational risks.",
    mandate:
      "Provide documented challenge and recommendations before material product, research, investment and public-impact decisions are approved.",
    members: [
      role("hse-committee", "HSE & Product Stewardship Committee", "Reviews product safety, incidents, regulatory actions, storage, transport and corrective action.", 1),
      role("research-committee", "Research Ethics & Evidence Committee", "Reviews methods, data integrity, safeguards, conflicts and project stage-gate evidence.", 2),
      role("finance-committee", "Finance, Audit & Risk Committee", "Reviews cash, controls, funding obligations, procurement, assurance and enterprise risk.", 3),
      role("impact-committee", "Partnerships & Impact Committee", "Reviews partner fit, community value, measurement quality and responsible communications.", 4),
    ],
    seo: { title: "Standing Committees", description: "Chemcider’s permanent oversight committees for science, safety, finance and impact." },
  },
  "advisory-board": {
    title: "Advisory board",
    slug: "advisory-board",
    type: "advisory",
    heroLabel: "Governance · Independent counsel",
    heroTitle: "Independent perspective.",
    heroAccent: "Stronger decisions.",
    introduction:
      "Chemcider’s proposed advisory board brings independent scientific, public-health, climate-finance and regional-market judgement to the company’s most consequential choices.",
    mandate:
      "Challenge assumptions, strengthen technical and commercial pathways, open credible networks and help Chemcider recognise risk before it becomes expensive.",
    members: [
      role("science-advisor", "Scientific & Engineering Adviser", "Challenges technical feasibility, experimental design and scale-up assumptions.", 1),
      role("health-advisor", "Public Health & Community Systems Adviser", "Guides responsible access, communication, safeguarding and community relevance.", 2),
      role("finance-advisor", "Climate Finance & ESG Adviser", "Tests additionality, capital fit, impact integrity and funder readiness.", 3),
      role("market-advisor", "West African Market & Policy Adviser", "Guides regulatory context, regional partnerships and responsible market entry.", 4),
    ],
    seo: { title: "Advisory Board", description: "The independent expertise Chemcider is building around science, health, finance and African markets." },
  },
};

export const fallbackCeoMessage: CeoMessage = {
  kicker: "A message from the chief executive",
  headline: "We are building for the Africa",
  accent: "that must come next.",
  introduction:
    "Africa’s future will not be secured by importing yesterday’s answers. It will be built by people willing to combine scientific discipline, local knowledge and the courage to solve difficult problems at home.",
  quote:
    "Our ambition is not to be known simply for the products we sell, but for the healthier communities, cleaner systems and African capability we help create.",
  body: [
    "Chemcider began with a practical conviction: essential chemistry can improve everyday wellbeing when it is supplied responsibly, explained clearly and supported by systems people can trust. Our hygiene platform is therefore more than a commercial starting point. It is a commitment to reliability, product stewardship and proximity to the realities our customers face.",
    "But our responsibility cannot stop at today’s products. Nigerian and African industry must reduce avoidable dependence on fossil fuels, recover more value from materials and design public-health solutions around the conditions in which people actually live and work. That is why we are building Chemcider as an applied-research company—one that frames local problems carefully, tests solutions honestly and scales only what the evidence supports.",
    "We will not claim impact before it is measured. We will not call a product sustainable while ignoring safety, quality or the full system around it. And we will not pursue growth that leaves local capability behind. Our standard is more demanding: useful science, responsible enterprise and results that partners and communities can interrogate.",
    "To researchers, manufacturers, public institutions, communities and patient investors: there is meaningful work ahead. Bring us the challenge, the insight, the operating site or the capital. Together, we can build solutions that are not merely introduced into Africa, but developed with Africa and strengthened by African excellence.",
  ],
  signatureName: "Office of the Chief Executive",
  signatureTitle: "Chemcider",
  publishedAt: "2026-07-20",
  seo: {
    title: "CEO Message",
    description: "An inspiring message on Chemcider’s mission to unite responsible chemistry, African research and accountable growth.",
  },
};

export const fallbackProjects: Project[] = [
  {
    title: "Clean Process Heat Pilot",
    slug: "clean-process-heat-pilot",
    code: "R01 / ENERGY",
    status: "Concept validation",
    programme: "Clean production",
    stage: "Partner and host-site formation",
    summary: "Testing practical pathways for small production facilities to reduce fossil-fuel use without weakening reliability, quality or unit economics.",
    challenge: "Small manufacturers often depend on diesel or petrol for power and heat, while technology choices fail when load variation, maintenance, financing and operator capability are ignored.",
    approach: ["Establish a production-normalised energy baseline", "Compare efficiency, electric, solar-thermal and hybrid pathways", "Pilot one bounded option with independent measurement", "Prepare a scale and asset-finance case from verified performance"],
    outcomes: ["Measured fuel and cost performance", "Safety and reliability evidence", "Avoided-emissions estimate with disclosed assumptions", "Replicable investment case"],
    partnerNeed: "Host manufacturers, engineering researchers, clean-energy providers and catalytic funders.",
    geography: "Nigeria · Initial host site to be selected",
    featured: true,
    publishedAt: "2026-07-20",
    seo: { title: "Clean Process Heat Pilot", description: "Chemcider’s proposed pilot for reducing fossil-fuel use in Nigerian production." },
  },
  {
    title: "Circular Chemical Systems",
    slug: "circular-chemical-systems",
    code: "R02 / CIRCULARITY",
    status: "Research design",
    programme: "Circular systems",
    stage: "Material-flow baseline",
    summary: "Identifying safe, economically credible opportunities to reduce, recover or redesign packaging, water and production materials.",
    challenge: "Materials are often lost because flows are not measured, quality constraints are unclear and recovery partners are disconnected from producers and customers.",
    approach: ["Map material and water flows", "Rank losses by mass, cost and environmental relevance", "Screen quality, compatibility and regulatory constraints", "Pilot one traceable recovery or redesign pathway"],
    outcomes: ["Verified material-flow map", "Quality-safe circularity options", "Partner and reverse-logistics model", "Evidence-based scale recommendation"],
    partnerNeed: "Packaging specialists, laboratories, recovery operators, distributors and circular-economy researchers.",
    geography: "Nigeria · Chemcider and partner value chains",
    featured: true,
    publishedAt: "2026-07-20",
    seo: { title: "Circular Chemical Systems", description: "Chemcider research into safer material, water and packaging circularity." },
  },
  {
    title: "Community Hygiene Access",
    slug: "community-hygiene-access",
    code: "R03 / HEALTH",
    status: "Partner discovery",
    programme: "Responsible hygiene",
    stage: "User and channel research",
    summary: "Testing how appropriate product formats, safety communication and last-mile partnerships can improve dependable hygiene access.",
    challenge: "Availability alone does not ensure safe use. Price, pack format, label comprehension, channel trust, storage and misinformation shape real access.",
    approach: ["Define one user group and access baseline", "Review permitted claims and safety communication", "Co-design a traceable delivery model", "Measure access, understanding, complaints and repeat demand"],
    outcomes: ["Verified access evidence", "Tested safety communication", "Responsible channel economics", "Safeguarded replication plan"],
    partnerNeed: "Public-health organisations, community groups, regulated channels, distributors and monitoring partners.",
    geography: "Nigeria · Pilot community to be selected",
    featured: true,
    publishedAt: "2026-07-20",
    seo: { title: "Community Hygiene Access", description: "Chemcider’s proposed research into responsible hygiene access and last-mile delivery." },
  },
];

export const fallbackEvents: EventItem[] = [
  {
    title: "Clean Process Heat Partner Roundtable",
    slug: "clean-process-heat-partner-roundtable",
    status: "planning",
    startAt: "2026-09-18T10:00:00+01:00",
    location: "Lagos + online",
    format: "Hybrid roundtable",
    summary: "A proposed working session for host manufacturers, engineers, technology providers and climate-finance partners.",
    body: ["This planning-stage roundtable will test the Clean Process Heat pilot brief, surface site and technology constraints, and identify a credible host and measurement consortium.", "The date and venue remain subject to partner confirmation. Expressions of interest are welcome from organisations able to contribute operating data, technical validation, equipment, funding or follow-on finance."],
    featured: true,
    seo: { title: "Clean Process Heat Partner Roundtable", description: "Register interest in Chemcider’s proposed clean-production partner roundtable." },
  },
  {
    title: "Responsible Hygiene Distribution Briefing",
    slug: "responsible-hygiene-distribution-briefing",
    status: "planning",
    startAt: "2026-10-16T11:00:00+01:00",
    location: "Online",
    format: "Technical briefing",
    summary: "A proposed briefing on product stewardship, traceable distribution and clearer safety communication.",
    body: ["The session will bring together regulated channels, institutional buyers and public-health partners to examine where product information, traceability and last-mile practice can be strengthened.", "The programme is in planning and final participation details will be published after partner confirmation."],
    seo: { title: "Responsible Hygiene Distribution Briefing", description: "A proposed Chemcider briefing for responsible hygiene-product channels." },
  },
  {
    title: "Circular Systems Technical Workshop",
    slug: "circular-systems-technical-workshop",
    status: "planning",
    startAt: "2026-11-12T09:30:00+01:00",
    location: "Lagos",
    format: "Working workshop",
    summary: "A proposed technical session on material-flow measurement, packaging compatibility and credible recovery evidence.",
    body: ["This workshop is intended for packaging specialists, laboratories, manufacturers and recovery operators interested in defining a safe circular-systems pilot.", "The date is provisional. Chemcider will publish the confirmed agenda and participation route through the CMS."],
    seo: { title: "Circular Systems Technical Workshop", description: "A proposed Chemcider workshop on safer circular production systems." },
  },
];

export const fallbackNews: NewsArticle[] = [
  {
    title: "Chemcider publishes its applied-research agenda",
    slug: "chemcider-publishes-applied-research-agenda",
    category: "Company",
    excerpt: "Three connected research platforms now organise Chemcider’s work across clean production, circular systems and responsible hygiene.",
    body: ["Chemcider has published a focused applied-research agenda designed around challenges visible in Nigerian communities and production systems.", "The portfolio is organised into Clean Process Heat, Circular Chemical Systems and Community Hygiene Access. Each programme will progress through defined evidence gates, with safety, economics and measurable community value considered before scale.", "The company is inviting technical, deployment, community and funding partners to help strengthen the first project briefs."],
    publishedAt: "2026-07-20",
    featured: true,
    seo: { title: "Chemcider Publishes Applied-Research Agenda", description: "Chemcider introduces three research platforms for cleaner production, circularity and hygiene access." },
  },
  {
    title: "Why Chemcider is starting with evidence, not promises",
    slug: "starting-with-evidence-not-promises",
    category: "Perspective",
    excerpt: "A credible sustainability company must separate ambition, activity and verified outcomes.",
    body: ["Sustainability language becomes less useful when every activity is presented as impact. Chemcider’s approach begins with a baseline, a defined intervention and a result that can be checked.", "Targets on the website are therefore labelled as targets. Fuel reduction will only be reported against a measured and production-adjusted baseline. Material recovery will only be counted when downstream use is evidenced.", "This discipline is intended to make the company a stronger partner for communities, researchers, customers and funders."],
    publishedAt: "2026-07-18",
    seo: { title: "Evidence Before Promises", description: "How Chemcider intends to build credible environmental and public-health claims." },
  },
  {
    title: "Partner invitations open across Chemcider’s first project portfolio",
    slug: "partner-invitations-first-project-portfolio",
    category: "Partnerships",
    excerpt: "Chemcider is seeking host sites, technical reviewers, community delivery partners and fit-for-stage capital.",
    body: ["Chemcider has opened partner conversations around its first three proposed projects.", "Priority needs include a production host for the Clean Process Heat pilot, analytical and packaging expertise for Circular Chemical Systems, and community or regulated distribution partners for Community Hygiene Access.", "Partnership discussions begin with a clear role, contribution, evidence requirement and next-stage decision."],
    publishedAt: "2026-07-16",
    seo: { title: "Chemcider Opens Project Partner Invitations", description: "Explore technical, deployment and funding roles across Chemcider’s first projects." },
  },
];

export const fallbackResearchProgrammes: ResearchProgramme[] = [
  { code: "R01", slug: "clean-process-heat", status: "Concept validation", title: "Clean process heat", summary: "Assessing modular thermal and renewable-energy options for facilities that currently rely on diesel and petrol.", question: "How can small African production facilities reduce fossil-fuel use without weakening reliability or unit economics?", work: ["Energy and thermal-load baselines", "Technology and feedstock screening", "Pilot design with operating safeguards", "Cost and avoided-emissions measurement"], partner: "Energy-technology providers, universities, manufacturers and climate-finance partners.", order: 1 },
  { code: "R02", slug: "circular-chemical-systems", status: "Research design", title: "Circular chemical systems", summary: "Mapping water, packaging and material flows to identify recovery opportunities without compromising safety.", question: "Where can water, packaging and production materials be safely reduced, recovered or redesigned?", work: ["Material-flow mapping", "Packaging and reuse assessment", "Waste and water characterisation", "Recovery pathway economics"], partner: "Materials researchers, recyclers, laboratories, packaging suppliers and industrial partners.", order: 2 },
  { code: "R03", slug: "community-hygiene-access", status: "Partner discovery", title: "Community hygiene access", summary: "Testing formats, education and last-mile partnerships that can improve dependable hygiene access.", question: "Which product formats, knowledge and distribution models improve safe hygiene access in underserved communities?", work: ["User and channel research", "Safety-communication testing", "Last-mile delivery pilots", "Access and behaviour measurement"], partner: "Public-health organisations, distributors, community groups and impact funders.", order: 3 },
];

export const fallbackProducts: ProductItem[] = [
  { code: "MS / 01", slug: "methylated-spirit", name: "Methylated spirit", category: "Current line", summary: "A denatured-alcohol product line supplied for uses authorised by the applicable grade, label and regulation.", channels: "Retail · Institutional · Distributor", specifications: "Confirmed per grade and quotation", handling: "Flammable — keep from heat and ignition sources", order: 1 },
  { code: "HP / 02", slug: "hydrogen-peroxide", name: "Hydrogen peroxide", category: "Current line", summary: "An oxidising solution supplied in grade-appropriate formats, with use governed by concentration, label and regulation.", channels: "Retail · Institutional · Distributor", specifications: "Confirmed per grade and quotation", handling: "Protect from heat, light and incompatible materials", order: 2 },
];

export const fallbackServices: ServiceItem[] = [
  { number: "01", slug: "applied-research", title: "Applied research & formulation", summary: "Structured investigation of product, process and delivery questions with defined methods, evidence gates and handover outputs.", deliverables: ["Research brief", "Test plan", "Findings memo", "Next-gate recommendation"], order: 1 },
  { number: "02", slug: "pilot-design", title: "Pilot design & field validation", summary: "Practical pilot architecture for clean production, circular systems and hygiene-access initiatives in Nigerian operating contexts.", deliverables: ["Baseline", "Pilot protocol", "Risk register", "Measurement plan"], order: 2 },
  { number: "03", slug: "responsible-sourcing", title: "Responsible sourcing & distribution", summary: "Supplier, product and channel development for organisations that need dependable hygiene and chemical-product supply.", deliverables: ["Supplier screen", "Specification alignment", "Channel plan", "Traceability controls"], order: 3 },
  { number: "04", slug: "sustainability-diagnostics", title: "Sustainability diagnostics", summary: "A focused assessment of energy, materials, waste and operating data to identify technically realistic improvement opportunities.", deliverables: ["Current-state map", "Opportunity register", "Priority business case", "Implementation roadmap"], order: 4 },
];

export const fallbackImpactMetrics: ImpactMetric[] = [
  { theme: "Access", indicator: "People and institutions reached", evidence: "Verified customer, partner or beneficiary records", order: 1 },
  { theme: "Safety", indicator: "Reportable incidents and training completion", evidence: "Incident log and documented training records", order: 2 },
  { theme: "Climate", indicator: "Fuel displaced and estimated tCO₂e avoided", evidence: "Measured energy baseline and approved conversion factors", order: 3 },
  { theme: "Circularity", indicator: "Material, water or packaging recovered", evidence: "Mass-balance records and recovery evidence", order: 4 },
  { theme: "Livelihoods", indicator: "Jobs and local supplier value created", evidence: "Payroll, supplier and procurement records", order: 5 },
  { theme: "Learning", indicator: "Pilots reaching the next evidence gate", evidence: "Stage-gate review and decision memo", order: 6 },
];
