# Chemcider Sanity Studio

This standalone Studio controls Chemcider’s public navigation, corporate pages, people and role assignments, CEO message, research programmes, projects, events, news, products, services and impact metrics.

## Start

```bash
Copy-Item .env.example .env
npm install
npm run dev
```

Required variables:

```text
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

The customised Structure desk is defined in `structure.ts`. Schemas live in `schemaTypes/`. The primary navigation and other singletons have stable document IDs so editors do not accidentally create competing settings records.

Publish only reviewed information. A published CMS record replaces its matching built-in public-site fallback. Full editorial, role-assignment, SEO and deployment instructions are in the repository root README.
