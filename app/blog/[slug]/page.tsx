import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { posts, getPost, formatDate } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { images: [post.image] } };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const Content = post.content;
  return (
    <article className="article-page">
      <div className="page-shell article-shell">
        <Link href="/blog" className="back-link"><ArrowLeft size={16} /> Back to the journal</Link>
        <header className="article-header">
          <p className="eyebrow">{post.category} <span>·</span> {formatDate(post.date)}</p>
          <h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><span className="article-read">{post.readTime}</span>
        </header>
        <div className="article-cover" style={{ backgroundImage: `url("${post.image}")` }} role="img" aria-label={post.imageAlt} />
        <div className="article-content"><Content /></div>
        <div className="article-end"><span>—</span><p>Stories connect us. Share yours with the Warmdaz Family.</p><Link href="/about" className="text-link">Our story <ArrowUpRight size={16} /></Link></div>
        <div className="article-next"><Link href="/blog"><ArrowLeft size={16} /> Explore more stories</Link></div>
      </div>
    </article>
  );
}