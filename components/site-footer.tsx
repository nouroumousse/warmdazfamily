import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div>
          <p className="eyebrow eyebrow-light">ROOTED IN WAR MDAZ · OPEN TO THE WORLD</p>
          <h2>Our stories are<br /><em>still being written.</em></h2>
        </div>
        <Link href="/about" className="footer-link">Discover our story <span>↗</span></Link>
      </div>
      <div className="footer-bottom">
        <Link href="/" className="footer-brand">W<span>·</span>F / WAR MDAZ FAMILY</Link>
        <p>A community space for culture, connection and the future.</p>
        <span>© {new Date().getFullYear()} Warmdaz Family</span>
      </div>
    </footer>
  );
}