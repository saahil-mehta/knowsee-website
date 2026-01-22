import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk, Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Knowsee | AI Intranet Knowledgebase",
  description:
    "Turn years of scattered company knowledge into instant, intelligent answers with best-in-class security.",
  keywords: ["AI", "knowledge base", "intranet", "enterprise search", "RAG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${geist.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
