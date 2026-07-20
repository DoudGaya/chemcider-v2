import { defineArrayMember, defineField, defineType } from "sanity";

export const seoFields = defineType({
  name: "seoFields",
  title: "Search & social preview",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "title", title: "SEO title", type: "string", validation: (rule) => rule.max(60).warning("Aim for 50–60 characters.") }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 3, validation: (rule) => rule.max(165).warning("Aim for 140–165 characters.") }),
    defineField({ name: "keywords", title: "Priority keywords", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "image", title: "Social image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })] }),
  ],
});

export const blockContent = defineType({
  name: "blockContent",
  title: "Editorial content",
  type: "array",
  of: [
    defineArrayMember({ type: "block", styles: [{ title: "Normal", value: "normal" }, { title: "Heading 2", value: "h2" }, { title: "Heading 3", value: "h3" }, { title: "Quote", value: "blockquote" }], lists: [{ title: "Bullet", value: "bullet" }, { title: "Numbered", value: "number" }] }),
    defineArrayMember({ type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }), defineField({ name: "caption", title: "Caption", type: "string" })] }),
  ],
});

export const navigationChild = defineType({
  name: "navigationChild",
  title: "Child link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL or path", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "string" }),
    defineField({ name: "external", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const navigationItem = defineType({
  name: "navigationItem",
  title: "Navigation item",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL or path", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "string" }),
    defineField({ name: "external", type: "boolean", initialValue: false }),
    defineField({ name: "children", type: "array", of: [{ type: "navigationChild" }] }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const navigationGroup = defineType({
  name: "navigationGroup",
  title: "Navigation group",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "items", type: "array", of: [{ type: "navigationItem" }], validation: (rule) => rule.required().min(1) }),
  ],
  preview: { select: { title: "label" } },
});

export const roleAssignment = defineType({
  name: "roleAssignment",
  title: "Role assignment",
  type: "object",
  fields: [
    defineField({ name: "person", title: "Assigned person", type: "reference", to: [{ type: "person" }], description: "May be left empty while a role is vacant or an appointment is not public." }),
    defineField({ name: "position", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "roleSummary", title: "Public role summary", type: "text", rows: 3, validation: (rule) => rule.required().max(320) }),
    defineField({ name: "termStart", type: "date" }),
    defineField({ name: "termEnd", type: "date" }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
    defineField({ name: "order", type: "number", validation: (rule) => rule.integer().min(0) }),
  ],
  preview: { select: { title: "position", subtitle: "person.name", media: "person.image" } },
});

export const contentSection = defineType({
  name: "contentSection",
  title: "Content section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({ name: "items", title: "Supporting points", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
});
