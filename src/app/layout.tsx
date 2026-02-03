import "./globals.css";
import type { Metadata } from "next";
import GraphBackground from "@/components/GraphBackground";

export const metadata: Metadata = {
  title: "Jamar Whitfield | Portfolio",
  description: "Mathematics and computer science portfolio."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-white">
        <GraphBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
