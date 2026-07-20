export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavigationItem = NavigationChild & {
  children?: NavigationChild[];
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export type SeoFields = {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
};

export type SiteSettings = {
  organizationName: string;
  legalName?: string;
  tagline: string;
  email: string;
  geography: string;
  heroLabel: string;
  heroTitle: string;
  heroAccent: string;
  heroIntroduction: string;
  propositionTitle: string;
  propositionText: string;
  partnershipTitle: string;
  partnershipText: string;
  defaultSeo: SeoFields;
};

export type MarketingPage = {
  slug: string;
  heroLabel: string;
  heroTitle: string;
  heroAccent?: string;
  introduction: string;
  seo: SeoFields;
};

export type Person = {
  name?: string;
  slug?: string;
  currentTitle?: string;
  shortBio?: string;
  expertise?: string[];
  imageUrl?: string;
  imageAlt?: string;
  linkedinUrl?: string;
};

export type GovernanceMember = {
  key: string;
  position: string;
  roleSummary: string;
  active: boolean;
  order: number;
  person?: Person;
};

export type GovernanceGroup = {
  title: string;
  slug: string;
  type: "operations" | "management" | "committee" | "advisory";
  heroLabel: string;
  heroTitle: string;
  heroAccent: string;
  introduction: string;
  mandate: string;
  members: GovernanceMember[];
  seo: SeoFields;
};

export type CeoMessage = {
  kicker: string;
  headline: string;
  accent: string;
  introduction: string;
  quote: string;
  body: string[];
  signatureName: string;
  signatureTitle: string;
  publishedAt?: string;
  person?: Person;
  seo: SeoFields;
};

export type Project = {
  title: string;
  slug: string;
  code: string;
  status: string;
  programme: string;
  stage: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  partnerNeed: string;
  geography: string;
  featured?: boolean;
  publishedAt?: string;
  seo: SeoFields;
};

export type EventItem = {
  title: string;
  slug: string;
  status: "planning" | "open" | "closed" | "completed";
  startAt?: string;
  endAt?: string;
  location: string;
  format: string;
  summary: string;
  body: string[];
  registrationUrl?: string;
  featured?: boolean;
  seo: SeoFields;
};

export type NewsArticle = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
  author?: Person;
  imageUrl?: string;
  imageAlt?: string;
  featured?: boolean;
  seo: SeoFields;
};

export type ResearchProgramme = {
  code: string;
  slug: string;
  status: string;
  title: string;
  summary: string;
  question: string;
  work: string[];
  partner: string;
  order: number;
};

export type ProductItem = {
  code: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  channels: string;
  specifications: string;
  handling: string;
  order: number;
};

export type ServiceItem = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  order: number;
};

export type ImpactMetric = {
  theme: string;
  indicator: string;
  evidence: string;
  order: number;
};
