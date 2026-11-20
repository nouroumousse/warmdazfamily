import LanguagePost from "@/content/posts/keeping-tachelhit-alive.mdx";
import PlacePost from "@/content/posts/landscape-and-memory.mdx";
import GatheringPost from "@/content/posts/a-place-for-every-generation.mdx";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: React.ComponentType;
};

export const posts: Post[] = [
  {
    slug: "keeping-tachelhit-alive",
    title: "A language lives when we use it",
    excerpt: "On the everyday words, stories and conversations that carry Tachelhit from one generation to the next.",
    category: "Language",
    date: "2026-11-12",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Mountain landscape beneath a clear night sky",
    content: LanguagePost,
  },
  {
    slug: "landscape-and-memory",
    title: "The landscape is part of our memory",
    excerpt: "A reflection on the paths, hillsides and shared places that shape how we remember home.",
    category: "Place & Memory",
    date: "2026-10-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Layered mountain peaks in the distance",
    content: PlacePost,
  },
  {
    slug: "a-place-for-every-generation",
    title: "Making room for every generation",
    excerpt: "Why community spaces matter, and what becomes possible when young and old create together.",
    category: "Community",
    date: "2026-10-03",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A group of people gathered outdoors",
    content: GatheringPost,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}