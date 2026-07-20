import type { Metadata } from "next";
import Link from "next/link";
import { getEvents } from "../../sanity/lib/data";
import { Breadcrumbs, formatDate } from "../_components/content";
import { PageCta, PageHero, SectionIntro } from "../_components/site";

export const metadata: Metadata = { title: "Events", description: "Chemcider research briefings, workshops and partner sessions in Nigeria and across West Africa." };

export default async function EventsPage() {
  const events = await getEvents();
  return <main><Breadcrumbs items={[{ label: "Events" }]} /><PageHero label="Events & engagement" title="Conversations that" accent="move work forward." copy="Join Chemcider research briefings, technical workshops and partner sessions. Planning-stage listings are clearly marked until dates are confirmed." aside={<span className="page-tag">BRIEFINGS · WORKSHOPS · PARTNERSHIPS</span>} /><section className="section shell"><SectionIntro label="Programme" title="Upcoming and planned sessions." copy="Registration opens only when the date, venue and participation pathway are confirmed." /><div className="event-list">{events.map((event) => <article key={event.slug}><div className="event-date"><strong>{event.startAt ? new Date(event.startAt).getDate().toString().padStart(2, "0") : "TBC"}</strong><span>{event.startAt ? new Intl.DateTimeFormat("en-NG", { month: "short", year: "numeric" }).format(new Date(event.startAt)) : "Planning"}</span></div><div><span className="status-chip">{event.status}</span><h2>{event.title}</h2><p>{event.summary}</p><small>{formatDate(event.startAt)} · {event.location} · {event.format}</small></div><Link className="text-link" href={`/events/${event.slug}`}>Event details <span aria-hidden="true">↗</span></Link></article>)}</div></section><PageCta /></main>;
}
