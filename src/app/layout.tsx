import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/SEO/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durrat Foreign Employment Agency | Ethiopian Workers to Middle East",
  description: "Durrat connects skilled Ethiopian workers with reputable employers across the Middle East, providing safe and legal employment opportunities abroad.",
  keywords: "foreign employment agency, Ethiopian workers, overseas jobs, Middle East employment, Ethiopian maids, Ethiopian nurses, work abroad",
  authors: [{ name: "Durrat Agency" }],
  creator: "Durrat Agency",
  publisher: "Durrat Agency",
  icons: {
    icon: "/durrat.png",
    apple: "/durrat-apple-touch.png",
  },
  openGraph: {
    type: "website",
    url: "https://durratfea.com",
    title: "Durrat Foreign Employment Agency | Ethiopian Workers to Middle East",
    description: "Connecting skilled Ethiopian workers with reputable employers across the Middle East",
    siteName: "Durrat Foreign Employment Agency",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Durrat Foreign Employment Agency"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Durrat Foreign Employment Agency | Ethiopian Workers to Middle East",
    description: "Connecting skilled Ethiopian workers with reputable employers across the Middle East",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://durratfea.com",
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}