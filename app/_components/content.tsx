import Link from "next/link";
import type { GovernanceMember } from "../../sanity/lib/types";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumbs shell" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} aria-current={item.href ? undefined : "page"}>
            <span aria-hidden="true">/</span>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function RoleCard({ member }: { member: GovernanceMember }) {
  const initials = member.person?.name
    ? member.person.name.split(" ").map((part) => part[0]).join("").slice(0, 2)
    : "C";

  return (
    <article className="role-card">
      <div className="role-card-profile">
        <div className="role-avatar" aria-hidden="true">{initials}</div>
        <div>
          <p>{member.person?.name ?? "Role profile"}</p>
          <span>{member.person ? "Current appointment" : "Appointment managed in CMS"}</span>
        </div>
      </div>
      <h2>{member.position}</h2>
      <p>{member.roleSummary}</p>
      {member.person?.expertise?.length ? (
        <ul className="tag-list" aria-label="Areas of expertise">
          {member.person.expertise.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}
      {member.person?.linkedinUrl ? <a className="text-link" href={member.person.linkedinUrl} target="_blank" rel="noreferrer">View professional profile <span aria-hidden="true">↗</span></a> : null}
    </article>
  );
}

export function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="detail-list">
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

export function formatDate(value?: string) {
  if (!value) return "Date to be confirmed";
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}
