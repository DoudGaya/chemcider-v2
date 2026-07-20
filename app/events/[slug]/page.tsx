import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEvent, getEvents } from "../../../sanity/lib/data";
import { buildMetadata } from "../../../sanity/lib/metadata";
import { Breadcrumbs, formatDate } from "../../_components/content";
import { PageCta, PageHero } from "../../_components/site";

export async function generateStaticParams() { return (await getEvents()).map((event) => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const event = await getEvent((await params).slug); return event ? buildMetadata(event.seo, event.title, event.summary) : {}; }

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const event = await getEvent((await params).slug);
  if (!event) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "Event", name: event.title, description: event.summary, startDate: event.startAt, endDate: event.endAt, eventStatus: event.status === "completed" ? "https://schema.org/EventCompleted" : "https://schema.org/EventScheduled", location: { "@type": "Place", name: event.location }, organizer: { "@type": "Organization", name: "Chemcider" } };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: event.title }]} /><PageHero label={`${event.status} · ${event.format}`} title={event.title} copy={event.summary} aside={<span className="page-tag">{formatDate(event.startAt)} · {event.location}</span>} /><section className="section shell article-layout"><article className="editorial-copy">{event.status === "planning" && <p className="planning-notice"><strong>Planning notice:</strong> this event is proposed. The date and participation details will be published after confirmation.</p>}{event.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{event.registrationUrl ? <a className="button button-primary" href={event.registrationUrl}>Register for the event <span aria-hidden="true">↗</span></a> : null}</article></section><PageCta /></main>;
}
