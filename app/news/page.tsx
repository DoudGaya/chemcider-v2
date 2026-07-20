import type { Metadata } from "next";
import Link from "next/link";
import { getNews } from "../../sanity/lib/data";
import { Breadcrumbs, formatDate } from "../_components/content";
import { PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = { title: "News & Perspectives", description: "Chemcider company updates, research perspectives and product-stewardship news." };

export default async function NewsPage() {
  const articles = await getNews();
  return (
    <main>
      <Breadcrumbs items={[{ label: "News" }]} />
      <PageHero label="News & perspectives" title="Progress, explained" accent="with context." copy="Company updates, research thinking and practical perspectives on responsible chemistry and African sustainability." aside={<span className="page-tag">EDITORIAL · CMS MANAGED</span>} />
      <section className="section shell">
        <SectionIntro label="Latest" title="What we are learning and building." copy="Our editorial standard separates plans, perspectives and verified results." />
        <div className="collection-grid">
          {articles.map((article) => <article className="collection-card" key={article.slug}><div className="collection-meta"><span>{article.category}</span><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></div><h2>{article.title}</h2><p>{article.excerpt}</p><Link className="text-link" href={`/news/${article.slug}`}>Read article <span aria-hidden="true">↗</span></Link></article>)}
        </div>
      </section>
      <PageCta />
    </main>
  );
}
