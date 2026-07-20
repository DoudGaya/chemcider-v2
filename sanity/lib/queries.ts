export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  organizationName, legalName, tagline, email, geography,
  heroLabel, heroTitle, heroAccent, heroIntroduction,
  propositionTitle, propositionText, partnershipTitle, partnershipText,
  "defaultSeo": defaultSeo{title, description, keywords, "imageUrl": image.asset->url}
}`;

export const navigationQuery = `*[_type == "navigation" && identifier == "primary"][0].groups[]{
  label,
  items[]{label, href, description, external, children[]{label, href, description, external}}
}`;

export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  "slug": slug.current, heroLabel, heroTitle, heroAccent, introduction,
  "seo": seo{title, description, keywords, "imageUrl": image.asset->url}
}`;

export const governanceGroupQuery = `*[_type == "governanceGroup" && slug.current == $slug][0]{
  title, "slug": slug.current, type, heroLabel, heroTitle, heroAccent, introduction, mandate,
  "members": members[active != false] | order(order asc){
    "key": _key, position, roleSummary, active, order,
    "person": person->{
      name, "slug": slug.current, currentTitle, shortBio, expertise, linkedinUrl,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    }
  },
  "seo": seo{title, description, keywords, "imageUrl": image.asset->url}
}`;

export const ceoMessageQuery = `*[_type == "ceoMessage"][0]{
  kicker, headline, accent, introduction, quote,
  "body": body[_type == "block"].children[].text,
  signatureName, signatureTitle, publishedAt,
  "person": person->{name, "slug": slug.current, currentTitle, shortBio, expertise, linkedinUrl, "imageUrl": image.asset->url, "imageAlt": image.alt},
  "seo": seo{title, description, keywords, "imageUrl": image.asset->url}
}`;

const projectFields = `title, "slug": slug.current, code, status, programme, stage, summary, challenge,
  approach, outcomes, partnerNeed, geography, featured, publishedAt,
  "seo": seo{title, description, keywords, "imageUrl": image.asset->url}`;
export const projectsQuery = `*[_type == "project"] | order(featured desc, publishedAt desc){${projectFields}}`;
export const projectQuery = `*[_type == "project" && slug.current == $slug][0]{${projectFields}}`;

const eventFields = `title, "slug": slug.current, status, startAt, endAt, location, format, summary,
  "body": body[_type == "block"].children[].text, registrationUrl, featured,
  "seo": seo{title, description, keywords, "imageUrl": image.asset->url}`;
export const eventsQuery = `*[_type == "event"] | order(startAt asc){${eventFields}}`;
export const eventQuery = `*[_type == "event" && slug.current == $slug][0]{${eventFields}}`;

const newsFields = `title, "slug": slug.current, category, excerpt, publishedAt, featured,
  "body": body[_type == "block"].children[].text,
  "author": author->{name, "slug": slug.current, currentTitle, shortBio, expertise, linkedinUrl, "imageUrl": image.asset->url, "imageAlt": image.alt},
  "imageUrl": image.asset->url, "imageAlt": image.alt,
  "seo": seo{title, description, keywords, "imageUrl": image.asset->url}`;
export const newsQuery = `*[_type == "newsArticle"] | order(publishedAt desc){${newsFields}}`;
export const newsArticleQuery = `*[_type == "newsArticle" && slug.current == $slug][0]{${newsFields}}`;

export const researchProgrammesQuery = `*[_type == "researchProgramme"] | order(order asc){
  code, "slug": slug.current, status, title, summary, question, work, partner, order
}`;
export const productsQuery = `*[_type == "product"] | order(order asc){
  code, "slug": slug.current, name, category, summary, channels, specifications, handling, order
}`;
export const servicesQuery = `*[_type == "service"] | order(order asc){
  number, "slug": slug.current, title, summary, deliverables, order
}`;
export const impactMetricsQuery = `*[_type == "impactMetric"] | order(order asc){theme, indicator, evidence, order}`;
