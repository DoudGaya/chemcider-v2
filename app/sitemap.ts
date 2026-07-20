import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getEvents, getNews, getProjects } from "../sanity/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "chemcider.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = `${protocol}://${host}`;
  const [projects, articles, events] = await Promise.all([getProjects(), getNews(), getEvents()]);
  const routes = ["", "/company/about", "/company/ceo-message", "/company/operational-team", "/company/management-team", "/company/standing-committee", "/company/advisory-board", "/research", "/products", "/services", "/impact", "/projects", "/news", "/events", "/partner", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .7 })),
    ...projects.map((item) => ({ url: `${base}/projects/${item.slug}`, lastModified: item.publishedAt, changeFrequency: "monthly" as const, priority: .7 })),
    ...articles.map((item) => ({ url: `${base}/news/${item.slug}`, lastModified: item.publishedAt, changeFrequency: "monthly" as const, priority: .6 })),
    ...events.map((item) => ({ url: `${base}/events/${item.slug}`, lastModified: item.startAt, changeFrequency: "weekly" as const, priority: .6 })),
  ];
}
