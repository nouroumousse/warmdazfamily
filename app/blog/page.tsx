import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Journal",
  description: "Stories, reflections and notes on Warmdaz, Amazigh culture, language and community.",
};

export default function BlogPage() {
  return (
    <div className="subpage blog-page">
      <section className="page-hero page-shell">
        <p className="eyebrow">THE JOURNAL / STORIES FROM OUR COMMUNITY</p>
        <h1>Notes from<br /><em>home.</em></h1>
        <p className="page-hero-lede">A growing collection of stories, ideas and reflections on the places and people that shape us.</p>
      </section>
      <section className="blog-list-section section-pad">
        <div className="page-shell">
          <div className="blog-list-top"><span>{String(posts.length).padStart(2, "0")} STORIES</span><span>LANGUAGE · CULTURE · COMMUNITY</span></div>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <div className="blog-card-image" style={{ backgroundImage: `url("${post.image}")` }} role="img" aria-label={post.imageAlt}><span>0{index + 1}</span><i><ArrowUpRight size={20} /></i></div>
                <div className="story-meta"><span>{post.category}</span><span>{formatDate(post.date)}</span></div>
                <h2>{post.title}</h2><p>{post.excerpt}</p><span className="read-story">Read story <ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}