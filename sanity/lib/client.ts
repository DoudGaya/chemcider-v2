import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-02-01";
const token = process.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId);

export async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
): Promise<T> {
  if (!projectId) return fallback;

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: !token,
      perspective: "published",
    });
    const result = await client.fetch<T>(query, params);
    if (result == null) return fallback;
    if (Array.isArray(result) && result.length === 0) return fallback;
    return result;
  } catch {
    return fallback;
  }
}
