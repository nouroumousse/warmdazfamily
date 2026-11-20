import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart, Languages, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "Our story",
  description: "Learn about Warmdaz Family, a community initiative rooted in Warmdaz, Morocco.",
};

export default function AboutPage() {
  return (
    <div className="subpage">
      <section className="page-hero page-shell">
        <p className="eyebrow">OUR STORY / WAR MDAZ, MOROCCO</p>
        <h1>A shared place<br />for <em>what matters.</em></h1>
        <p className="page-hero-lede">Warmdaz Family is an invitation to connect with our roots, care for our shared heritage and make space for the next generation.</p>
      </section>
      <div className="about-photo" role="img" aria-label="Mountain landscape in the Atlas Mountains" />
      <section className="section-pad">
        <div className="page-shell about-grid">
          <p className="eyebrow">WHY WE EXIST</p>
          <div><h2>We believe the future of a place begins with the people who care about it.</h2><p className="body-copy">Warmdaz — also known as Ouarmdaz — is more than a point on a map. It is a landscape of relationships, memories, knowledge and possibility. Warmdaz Family is a space to bring those threads together.</p><p className="body-copy">We want to make it easier for people to share stories, celebrate Amazigh culture, pass on local knowledge and turn good ideas into meaningful community action.</p></div>
        </div>
      </section>
      <section className="about-values section-pad">
        <div className="page-shell"><p className="eyebrow">WHAT GUIDES US</p><div className="values-grid">
          <article><Heart size={25} /><h3>Care for one another</h3><p>Community starts with listening, generosity and making room for every voice.</p></article>
          <article><Languages size={25} /><h3>Keep culture living</h3><p>Language and heritage grow stronger when they are shared, practiced and celebrated.</p></article>
          <article><Sprout size={25} /><h3>Grow together</h3><p>We believe local ideas and shared learning can open paths for future generations.</p></article>
        </div></div>
      </section>
      <section className="about-cta page-shell"><p className="eyebrow">THE STORY CONTINUES WITH YOU</p><h2>Come as you are.<br /><em>Bring what you know.</em></h2><Link href="/blog" className="text-link">Read the journal <ArrowUpRight size={17} /></Link></section>
    </div>
  );
}