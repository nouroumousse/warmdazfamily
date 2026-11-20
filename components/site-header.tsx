"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "Our story" },
  { href: "/#work", label: "What we do" },
  { href: "/blog", label: "Journal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Warmdaz Family home" onClick={() => setOpen(false)}>
          <span className="brand-symbol">W<span>·</span></span>
          <span className="brand-name">WARMDAZ <small>FAMILY</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/#contact" className="nav-cta">Be part of it <span>↗</span></Link>
        </nav>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href="/#contact" onClick={() => setOpen(false)}>Be part of it ↗</Link>
        </nav>
      )}
    </header>
  );
}