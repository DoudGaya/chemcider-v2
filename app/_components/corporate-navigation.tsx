"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import type { NavigationGroup, NavigationItem } from "../../sanity/lib/types";
import { Brand } from "./brand";

function SmartLink({ item, onNavigate }: { item: NavigationItem; onNavigate?: () => void }) {
  const className = "nav-destination";
  if (item.external) {
    return <a className={className} href={item.href} target="_blank" rel="noreferrer" onClick={onNavigate}>{item.label}<span aria-hidden="true">↗</span></a>;
  }
  return <Link className={className} href={item.href} onClick={onNavigate}>{item.label}<span aria-hidden="true">↗</span></Link>;
}

function DesktopGroup({ group }: { group: NavigationGroup }) {
  return (
    <Collapsible className="desktop-nav-group">
      <CollapsibleTrigger className="desktop-nav-trigger">
        {group.label}<ChevronDown size={14} aria-hidden="true" />
      </CollapsibleTrigger>
      <CollapsibleContent className="desktop-nav-popover">
        <div className="desktop-nav-popover-inner">
          <p>{group.label}</p>
          {group.items.map((item) => (
            <SmartLink item={item} key={`${group.label}-${item.href}`} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function MobileGroup({ group, onNavigate }: { group: NavigationGroup; onNavigate: () => void }) {
  return (
    <Collapsible defaultOpen className="mobile-nav-group">
      <CollapsibleTrigger className="mobile-nav-group-trigger">
        <span>{group.label}</span><ChevronDown size={17} aria-hidden="true" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mobile-nav-group-content">
        {group.items.map((item) => (
          <div className="mobile-nav-link-wrap" key={`${group.label}-${item.href}`}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noreferrer" onClick={onNavigate}>
                <span>{item.label}</span>{item.description && <small>{item.description}</small>}
              </a>
            ) : (
              <Link href={item.href} onClick={onNavigate}>
                <span>{item.label}</span>{item.description && <small>{item.description}</small>}
              </Link>
            )}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CorporateNavigation({ groups }: { groups: NavigationGroup[] }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {groups.map((group) => <DesktopGroup group={group} key={group.label} />)}
          </nav>
          <Link className="button button-small button-primary desktop-partner" href="/partner">Partner with us <span aria-hidden="true">↗</span></Link>
          <button className="mobile-nav-trigger" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation">
            <Menu size={21} aria-hidden="true" /><span>Menu</span>
          </button>
        </div>
      </header>
      <div className={`mobile-nav-layer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button className="mobile-nav-scrim" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} />
        <aside id="mobile-navigation" className="mobile-nav-sidebar" role="dialog" aria-modal="true" aria-label="Chemcider navigation">
          <div className="mobile-nav-head">
            <Brand inverse />
            <button ref={closeRef} className="mobile-nav-close" type="button" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={22} /></button>
          </div>
          <div className="mobile-nav-intro">
            <p>Explore Chemcider</p>
            <span>Research, responsible products and sustainable systems for Africa.</span>
          </div>
          <nav className="mobile-nav-content" aria-label="Mobile primary navigation">
            {groups.map((group) => <MobileGroup group={group} key={group.label} onNavigate={() => setOpen(false)} />)}
          </nav>
          <div className="mobile-nav-footer">
            <Link className="button button-light" href="/partner" onClick={() => setOpen(false)}>Partner with us <span aria-hidden="true">↗</span></Link>
            <p>Nigeria · West Africa</p>
          </div>
        </aside>
      </div>
    </>
  );
}
