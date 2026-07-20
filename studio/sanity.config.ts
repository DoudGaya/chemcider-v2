import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { chemciderStructure } from "./structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

if (!projectId) {
  throw new Error("Missing SANITY_STUDIO_PROJECT_ID. Copy studio/.env.example to studio/.env (or studio/.env.local) and add the project ID.");
}

export default defineConfig({
  name: "chemcider",
  title: process.env.SANITY_STUDIO_TITLE ?? "Chemcider Content Studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure: chemciderStructure }),
    visionTool({ defaultApiVersion: "2026-02-01" }),
  ],
  schema: { types: schemaTypes },
});
