import { defineField, defineType } from "sanity";

const slugField = defineField({
  name: "slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (rule) => rule.required(),
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "homepage", title: "Homepage" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "organizationName", type: "string", group: "identity", validation: (rule) => rule.required() }),
    defineField({ name: "legalName", type: "string", group: "identity" }),
    defineField({ name: "tagline", type: "string", group: "identity", validation: (rule) => rule.required().max(100) }),
    defineField({ name: "email", type: "string", group: "identity", validation: (rule) => rule.required().email() }),
    defineField({ name: "geography", type: "string", group: "identity" }),
    defineField({ name: "heroLabel", type: "string", group: "homepage" }),
    defineField({ name: "heroTitle", type: "string", group: "homepage", validation: (rule) => rule.required() }),
    defineField({ name: "heroAccent", type: "string", group: "homepage", validation: (rule) => rule.required() }),
    defineField({ name: "heroIntroduction", type: "text", rows: 4, group: "homepage", validation: (rule) => rule.required().max(340) }),
    defineField({ name: "propositionTitle", type: "string", group: "homepage" }),
    defineField({ name: "propositionText", type: "text", rows: 4, group: "homepage" }),
    defineField({ name: "partnershipTitle", type: "string", group: "homepage" }),
    defineField({ name: "partnershipText", type: "text", rows: 4, group: "homepage" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seoFields", group: "seo" }),
  ],
  preview: { prepare: () => ({ title: "Chemcider site settings" }) },
});

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "identifier", type: "string", initialValue: "primary", readOnly: true, validation: (rule) => rule.required() }),
    defineField({ name: "groups", type: "array", of: [{ type: "navigationGroup" }], validation: (rule) => rule.required().min(1) }),
  ],
});

export const page = defineType({
  name: "page",
  title: "Corporate page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "pageKind", type: "string", options: { list: ["Corporate", "Research", "Products", "Services", "Impact", "Partnership", "Contact", "Policy"] } }),
    defineField({ name: "heroLabel", type: "string" }),
    defineField({ name: "heroTitle", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroAccent", type: "string" }),
    defineField({ name: "introduction", type: "text", rows: 5, validation: (rule) => rule.required().max(520) }),
    defineField({ name: "sections", type: "array", of: [{ type: "contentSection" }] }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "title", subtitle: "pageKind" } },
});

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "currentTitle", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", type: "string", validation: (rule) => rule.required() })] }),
    defineField({ name: "shortBio", type: "text", rows: 4, validation: (rule) => rule.required().max(500) }),
    defineField({ name: "biography", type: "blockContent" }),
    defineField({ name: "expertise", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "publicEmail", type: "string", description: "Publish only with the person’s approval.", validation: (rule) => rule.email() }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "name", subtitle: "currentTitle", media: "image" } },
});

export const governanceGroup = defineType({
  name: "governanceGroup",
  title: "Team, committee or board",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "type", type: "string", options: { list: [{ title: "Operational team", value: "operations" }, { title: "Management team", value: "management" }, { title: "Standing committee", value: "committee" }, { title: "Advisory board", value: "advisory" }], layout: "radio" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroLabel", type: "string" }),
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "heroAccent", type: "string" }),
    defineField({ name: "introduction", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: "mandate", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "members", title: "Roles and appointments", type: "array", of: [{ type: "roleAssignment" }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "title", subtitle: "type" } },
});

export const ceoMessage = defineType({
  name: "ceoMessage",
  title: "CEO message",
  type: "document",
  fields: [
    defineField({ name: "kicker", type: "string", initialValue: "A message from the chief executive" }),
    defineField({ name: "headline", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "accent", type: "string" }),
    defineField({ name: "introduction", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: "quote", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "blockContent", validation: (rule) => rule.required() }),
    defineField({ name: "person", title: "CEO profile", type: "reference", to: [{ type: "person" }] }),
    defineField({ name: "signatureName", type: "string", description: "Used when the CEO profile is not assigned or public." }),
    defineField({ name: "signatureTitle", type: "string" }),
    defineField({ name: "publishedAt", type: "date" }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "headline", subtitle: "publishedAt", media: "person.image" } },
});

export const researchProgramme = defineType({
  name: "researchProgramme",
  title: "Research programme",
  type: "document",
  fields: [
    defineField({ name: "code", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "status", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "question", title: "Primary research question", type: "text", rows: 4 }),
    defineField({ name: "work", title: "Current work packages", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "partner", title: "Partner fit", type: "text", rows: 3 }),
    defineField({ name: "order", type: "number", validation: (rule) => rule.integer().min(0) }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "title", subtitle: "status" } },
});

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [{ name: "overview", title: "Overview", default: true }, { name: "delivery", title: "Delivery" }, { name: "seo", title: "SEO" }],
  fields: [
    defineField({ name: "title", type: "string", group: "overview", validation: (rule) => rule.required() }),
    { ...slugField, group: "overview" },
    defineField({ name: "code", type: "string", group: "overview", validation: (rule) => rule.required() }),
    defineField({ name: "status", type: "string", group: "overview", validation: (rule) => rule.required() }),
    defineField({ name: "programme", type: "string", group: "overview" }),
    defineField({ name: "stage", type: "string", group: "overview" }),
    defineField({ name: "summary", type: "text", rows: 4, group: "overview", validation: (rule) => rule.required() }),
    defineField({ name: "challenge", type: "text", rows: 5, group: "delivery" }),
    defineField({ name: "approach", type: "array", of: [{ type: "string" }], group: "delivery" }),
    defineField({ name: "outcomes", type: "array", of: [{ type: "string" }], group: "delivery" }),
    defineField({ name: "partnerNeed", title: "Partner need", type: "text", rows: 3, group: "delivery" }),
    defineField({ name: "geography", type: "string", group: "delivery" }),
    defineField({ name: "featured", type: "boolean", initialValue: false, group: "overview" }),
    defineField({ name: "publishedAt", type: "date", group: "overview" }),
    defineField({ name: "seo", type: "seoFields", group: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "status" } },
});

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "status", type: "string", options: { list: ["planning", "open", "closed", "completed"], layout: "radio" }, validation: (rule) => rule.required() }),
    defineField({ name: "startAt", type: "datetime" }),
    defineField({ name: "endAt", type: "datetime" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "format", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({ name: "registrationUrl", type: "url" }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "title", subtitle: "startAt" } },
});

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "category", type: "string", options: { list: ["Company", "Research", "Partnerships", "Perspective", "Product stewardship"] } }),
    defineField({ name: "excerpt", type: "text", rows: 3, validation: (rule) => rule.required().max(260) }),
    defineField({ name: "body", type: "blockContent", validation: (rule) => rule.required() }),
    defineField({ name: "author", type: "reference", to: [{ type: "person" }] }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", type: "string", validation: (rule) => rule.required() })] }),
    defineField({ name: "publishedAt", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "image" } },
});

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "string", hidden: true }),
    defineField({ name: "slug", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
    defineField({ name: "code", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "channels", type: "string" }),
    defineField({ name: "specifications", type: "string" }),
    defineField({ name: "handling", type: "text", rows: 3 }),
    defineField({ name: "order", type: "number", validation: (rule) => rule.integer().min(0) }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
  preview: { select: { title: "name", subtitle: "code" } },
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    slugField,
    defineField({ name: "number", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "deliverables", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", type: "number", validation: (rule) => rule.integer().min(0) }),
    defineField({ name: "seo", type: "seoFields" }),
  ],
});

export const impactMetric = defineType({
  name: "impactMetric",
  title: "Impact metric",
  type: "document",
  fields: [
    defineField({ name: "theme", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "indicator", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "evidence", title: "Evidence source", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "order", type: "number", validation: (rule) => rule.integer().min(0) }),
  ],
  preview: { select: { title: "theme", subtitle: "indicator" } },
});

export const documentTypes = [
  siteSettings,
  navigation,
  page,
  person,
  governanceGroup,
  ceoMessage,
  researchProgramme,
  project,
  event,
  newsArticle,
  product,
  service,
  impactMetric,
];
