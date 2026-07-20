# Chemcider website and content platform

Chemcider’s public website positions the company as a Nigerian applied-research and responsible-products business working at the intersection of health, clean production and circular systems. It includes a standalone Sanity Studio for the corporate team, research portfolio, products, projects, events and news.

## Repository map

```text
landing/
├── app/                 Next.js public website and routes
├── components/ui/       Shared accessible interface primitives
├── sanity/lib/          Sanity client, GROQ queries, types and safe fallback content
├── studio/              Standalone Sanity Studio, schemas and Structure desk
├── public/              Public assets and social image
└── .env.example         Public-site environment template
```

Operational and fundraising plans live in the sibling `../operations` directory. Detailed project briefs live in `../projects`. Public project summaries are maintained in Sanity and displayed at `/projects`.

## Local setup

Requirements: Node.js 22.13 or newer and npm.

```bash
cd landing
npm install
Copy-Item .env.example .env.local
npm run dev
```

The public site runs at `http://localhost:3000`.

## Connect Sanity

1. Create or select a Sanity project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy `.env.example` to `.env.local` and add the project ID and dataset.
3. Copy `studio/.env.example` to `studio/.env` and add the same public project ID and dataset.
4. In Sanity Manage, add `http://localhost:3000` and the deployed website origin under **API → CORS origins**. Allow credentials only if your preview workflow needs them.
5. Start the editor:

```bash
npm --prefix studio install
npm run studio
```

The Studio runs at the URL printed by the Sanity CLI, normally `http://localhost:3333`.

The public website uses published content only. `SANITY_API_READ_TOKEN` is optional and should be used only for a private dataset or a controlled server-side preview. Never expose that token through a `NEXT_PUBLIC_` variable or commit it.

If Sanity is not configured, or a collection is empty, the site uses the polished content in `sanity/lib/fallback.ts`. This keeps every route useful during onboarding. Once editors publish matching documents in Sanity, CMS content automatically replaces the fallback.

## First-time content checklist

Open **Chemcider content** in Studio and create or publish these records:

1. **Site settings** — organisation identity, homepage message, default SEO and partnership CTA.
2. **Primary navigation** — grouped links for What we do, Corporate, and Media & activity.
3. **Corporate pages** — use slugs `about`, `research`, `products`, `services` and `impact` where applicable.
4. **CEO message** — headline, long-form message, quotation and signature or CEO profile.
5. **People** — one approved public profile per team or board member.
6. **Teams, committees & boards** — use slugs `operational-team`, `management-team`, `standing-committee` and `advisory-board`.
7. **Research programmes, projects, products, services and impact metrics**.
8. **News and events** as new activity is approved for publication.

### Assigning roles and appointments

Create the person once under **People**. Open the relevant team, committee or board, add a **Role assignment**, select the person, enter the public position and role summary, set the display order and publish. A role can intentionally remain unassigned while vacant or confidential; the public page will show a professional role profile instead of inventing a name.

When an appointment ends, set **Active** to false or add a term end date, review any related CEO-message signature, then publish. Only use photographs, biographies, email addresses and professional profile links for which Chemcider has permission.

## Editorial workflow

- Draft: content owner prepares the record and supplies sources for any factual or impact claim.
- Review: technical or product owner checks accuracy; Quality/HSE checks safety and regulatory language.
- Approval: an authorised corporate editor checks brand, privacy, partner permissions and SEO.
- Publish: publish the Sanity document, then verify the public route on desktop and mobile.
- Correct: update the same source record; do not create a second version of the fact in page code.

Dates for unconfirmed events must remain empty and the status must remain **planning**. Targets and proposed outcomes must be labelled as ambitions until a baseline and evidence source exist.

## SEO and copy standards

Every public record should have a unique SEO title (about 50–60 characters), a useful description (about 140–165 characters), one clear page heading and human-readable slug. Write for the reader first; use phrases such as “sustainable chemical research in Nigeria” only where they accurately describe the content. Add meaningful alternative text to public images.

The site generates canonical metadata, Open Graph/Twitter previews, organisation, article, event and research-project structured data, `robots.txt`, `sitemap.xml` and a web manifest. Do not claim certifications, registrations, partnerships, funding, achieved impact or geographic operations until they are documented.

## Navigation management

The desktop menu and transparent-blur mobile sidebar read the same **Primary navigation** document. Links can be reordered without a code release. Use internal paths beginning with `/`; select **External** only for a complete trusted URL. Keep group labels short and link descriptions specific.

## Commands

```bash
npm run dev                 # public-site development
npm run lint                # ESLint
npm run typecheck           # public-site TypeScript check
npm run build               # Cloudflare/Vinext production build
npm run studio              # Sanity Studio development
npm run studio:typecheck    # Studio schema TypeScript check
npm --prefix studio run build
```

The Studio build requires valid `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` values. Deploy Studio with `npm --prefix studio run deploy` only after the team has chosen its hostname and access model.

## Deployment notes

- Configure the three `NEXT_PUBLIC_SANITY_*` values in the website hosting environment.
- Keep `SANITY_API_READ_TOKEN` in server-side secret storage if it is needed.
- Add the production website and Studio origins to Sanity CORS.
- Run lint, both type checks and the production build before release.
- Publish Sanity documents before expecting them on the live website; drafts are intentionally excluded.

Useful official references: [Sanity and Next.js](https://www.sanity.io/docs/nextjs/introduction), [Sanity schema types](https://www.sanity.io/docs/apis-and-sdks/schema-types), [Structure tool](https://www.sanity.io/docs/studio/structure-tool), [Studio environment variables](https://www.sanity.io/docs/studio/environment-variables), and [shadcn sidebar guidance](https://ui.shadcn.com/docs/components/radix/sidebar).

## Content or code support

For content changes, start in Sanity Studio. For new content types or layout changes, open a code issue describing the route, fields, approval owner and expected public behaviour. This prevents the website and editorial model from drifting apart.
