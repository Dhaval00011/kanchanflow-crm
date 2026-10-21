import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanchanflow.com"),
  title: {
    default: "KanchanFlow | B2B Manufacturing CRM — Quotes, BOM & Shop-Floor Pipeline",
    template: "%s | KanchanFlow Manufacturing CRM",
  },
  description:
    "Industrial-grade CRM built for discrete manufacturers, CNC machine shops, and OEMs. Convert RFQs and multi-level BOMs into barcoded shop-floor Work Orders with WhatsApp Business & Tally sync.",
  openGraph: {
    title: "KanchanFlow | Manufacturing CRM for Quotes, Work Orders & Shop-Floor Sales",
    description:
      "Replace scattered Excel quotes and personal WhatsApp threads with a unified Quote-to-Work-Order pipeline built for modern factories.",
    url: "https://kanchanflow.com",
    siteName: "KanchanFlow",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-charcoal-900 text-steel-50 selection:bg-kanchan-400 selection:text-charcoal-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
