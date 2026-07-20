import type { Metadata } from "next";
import type { SeoFields } from "./types";

export function buildMetadata(
  seo: SeoFields | undefined,
  fallbackTitle: string,
  fallbackDescription: string,
): Metadata {
  const title = seo?.title ?? fallbackTitle;
  const description = seo?.description ?? fallbackDescription;
  const images = seo?.imageUrl ? [{ url: seo.imageUrl }] : undefined;

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: { canonical: "./" },
    openGraph: { title, description, images },
    twitter: { card: "summary_large_image", title, description, images: seo?.imageUrl ? [seo.imageUrl] : undefined },
  };
}
