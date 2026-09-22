import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obliquetemp.vercel.app"),
  title: {
    default: "Oblique — Architecture, urbanism, research",
    template: "%s — Oblique",
  },
  description:
    "Oblique is an architecture, urbanism and research practice working on cultural, residential and civic buildings from Zürich, Berlin and Singapore.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Oblique",
    description: "Architecture, urbanism and research. Zürich · Berlin · Singapore.",
    type: "website",
    url: "/",
    siteName: "Oblique",
    images: [
      {
        url: "/images/kaskad-centre.jpg",
        width: 2800,
        height: 1870,
        alt: "Oblique architecture practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oblique",
    description: "Architecture, urbanism and research. Zürich · Berlin · Singapore.",
    images: ["/images/kaskad-centre.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
