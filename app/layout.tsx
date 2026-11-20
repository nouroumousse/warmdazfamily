import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Warmdaz Family — Culture, Community & Connection",
    template: "%s | Warmdaz Family",
  },
  description: "A community space rooted in Warmdaz, Morocco, celebrating Amazigh culture, local stories, language and the people shaping tomorrow.",
  openGraph: {
    title: "Warmdaz Family",
    description: "Rooted in Warmdaz. Connected through culture, stories and community.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}