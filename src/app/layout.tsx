import "./globals.css";
import type { Metadata } from "next";
import GraphBackground from "@/components/GraphBackground";

const siteUrl = "https://jamarwhitfield.github.io/portfolio-site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jamar Whitfield Jr. | Computer Science, Mathematics & ML Systems",
    template: "%s | Jamar Whitfield Jr."
  },
  description:
    "Portfolio of Jamar Whitfield Jr., a computer science graduate and mathematics student working across ML systems, data infrastructure, computer vision research, and quantitative software.",
  authors: [{ name: "Jamar Whitfield Jr." }],
  creator: "Jamar Whitfield Jr.",
  keywords: [
    "Jamar Whitfield",
    "software engineer",
    "machine learning",
    "computer vision",
    "data engineering",
    "mathematics",
    "quantitative software",
    "LSU"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jamar Whitfield Jr. | Portfolio",
    description: "ML systems, research software, data infrastructure, computer vision, and quantitative computing.",
    siteName: "Jamar Whitfield Jr. Portfolio",
    images: [{ url: "og-image.png", width: 1200, height: 630, alt: "Jamar Whitfield Jr. portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamar Whitfield Jr. | Portfolio",
    description: "ML systems, research software, data infrastructure, computer vision, and quantitative computing.",
    images: ["og-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-white">
        <GraphBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
