import Link from "next/link";
import { ArrowUpRight, MoveRight, Sprout, BookOpen, Users, Mountain } from "lucide-react";
import { posts, formatDate } from "@/lib/posts";

const pillars = [
  { icon: Sprout, number: "01", title: "Living heritage", text: "Keeping local knowledge, language and traditions present in everyday life." },
  { icon: BookOpen, number: "02", title: "Stories & learning", text: "Making room for people to document, share and learn from one another." },
  { icon: Users, number: "03", title: "Stronger together", text: "Connecting generations and creating opportunities for community-led ideas." },
];

export default function HomePage() {
  const featured = posts[0];
  return (
    <>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="Mountain landscape in the Atlas region" />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> A COMMUNITY ROOTED IN WAR MDAZ, MOROCCO</p>
          <h1>Many roots.<br /><em>One family.</em></h1>
          <div className="hero-bottom">
            <p>We bring people, stories and generations together to celebrate where we come from — and imagine what we can become.</p>
            <Link href="/about" className="circle-link" aria-label="Discover our story"><ArrowUpRight size={25} /></Link>
          </div>
          <div className="hero-index"><span>30°02′N&nbsp; 8°27′W</span><span>ANTI-ATLAS · MOROCCO</span></div>
        </div>
        <div className="hero-vertical">WAR MDAZ FAMILY — EST. IN COMMUNITY</div>
      </section>

      <section className="intro-section section-pad">
        <div className="page-shell intro-grid">
          <div className="section-kicker"><span>01 / WHO WE ARE</span><i /></div>
          <div className="intro-copy">
            <p className="eyebrow">A PLACE TO BELONG</p>
            <h2>Our roots ground us.<br /><em>Our people move us forward.</em></h2>
            <div className="intro-lower">
              <p>Warmdaz Family is a community initiative shaped by a simple belief: culture stays alive when people take part in it. We celebrate the identity, creativity and collective memory of Warmdaz and its people.</p>
              <Link href="/about" className="text-link">More about us <MoveRight size={17} /></Link>
            </div>
          </div>
          <div className="intro-stamp"><Mountain size={30} strokeWidth={1.1} /><span>FROM THIS<br />LAND, WITH<br />EVERYONE.</span></div>
        </div>
      </section>

      <section className="pillars-section section-pad" id="work">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">02 / WHAT MATTERS TO US</p><h2>Culture is not a museum.<br /><em>It is something we do.</em></h2></div>
            <p className="section-aside">A living community is built through small acts of care, curiosity and participation.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, number, title, text }) => (
              <article className="pillar-card" key={number}>
                <div className="pillar-top"><span>{number}</span><Icon size={25} strokeWidth={1.3} /></div>
                <h3>{title}</h3><p>{text}</p><span className="pillar-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="page-shell quote-inner">
          <span className="quote-mark">“</span>
          <blockquote>A place is more than the ground beneath our feet. It is the people, language and memories we carry with us.</blockquote>
          <span className="quote-credit">A THOUGHT FROM WAR MDAZ</span>
        </div>
      </section>

      <section className="journal-section section-pad">
        <div className="page-shell">
          <div className="journal-heading">
            <div><p className="eyebrow">03 / THE JOURNAL</p><h2>Notes from <em>home.</em></h2></div>
            <Link href="/blog" className="text-link">All stories <MoveRight size={17} /></Link>
          </div>
          <div className="journal-grid">
            {posts.slice(0, 3).map((post, index) => (
              <Link href={`/blog/${post.slug}`} className={`story-card story-card-${index + 1}`} key={post.slug}>
                <div className="story-image" style={{ backgroundImage: `url("${post.image}")` }} role="img" aria-label={post.imageAlt}>
                  <span className="story-number">0{index + 1}</span><span className="story-arrow"><ArrowUpRight size={20} /></span>
                </div>
                <div className="story-meta"><span>{post.category}</span><span>{formatDate(post.date)}</span></div>
                <h3>{post.title}</h3><p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="join-section section-pad">
        <div className="page-shell join-inner">
          <div><p className="eyebrow eyebrow-light">THERE IS A PLACE FOR YOU HERE</p><h2>Belonging is<br /><em>something we build.</em></h2></div>
          <div className="join-copy"><p>Have a story to tell, an idea to share, or simply want to take part? The best things begin with a conversation.</p><Link href="/about" className="join-link">Meet the family <ArrowUpRight size={19} /></Link></div>
        </div>
      </section>
    </>
  );
}