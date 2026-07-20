import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNews, getNewsArticle } from "../../../sanity/lib/data";
import { buildMetadata } from "../../../sanity/lib/metadata";
import { Breadcrumbs, formatDate } from "../../_components/content";
import { PageCta, PageHero } from "../../_components/site";

export async function generateStaticParams() { return (await getNews()).map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const article = await getNewsArticle((await params).slug); return article ? buildMetadata(article.seo, article.title, article.excerpt) : {}; }

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = await getNewsArticle((await params).slug);
  if (!article) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "NewsArticle", headline: article.title, description: article.excerpt, datePublished: article.publishedAt, author: { "@type": article.author ? "Person" : "Organization", name: article.author?.name ?? "Chemcider" }, publisher: { "@type": "Organization", name: "Chemcider" } };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Breadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title }]} /><PageHero label={`${article.category} · ${formatDate(article.publishedAt)}`} title={article.title} copy={article.excerpt} /><section className="section shell article-layout"><article className="editorial-copy">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<footer><strong>{article.author?.name ?? "Chemcider Editorial"}</strong><span>{article.author?.currentTitle ?? "Research and company perspective"}</span></footer></article></section><PageCta /></main>;
}
