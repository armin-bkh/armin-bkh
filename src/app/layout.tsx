import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const geistSans = localFont({
  src: [
    {
      path: "../fonts/geist/Geist-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/geist/Geist-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../fonts/geist-mono/GeistMono-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/geist-mono/GeistMono-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Frontend Developer`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Frontend Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Web3",
    "DeFi",
    "Telegram Mini Apps",
    "React Native",
    "Strapi",
    "Portfolio",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} — Frontend Developer`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Frontend Developer`,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NextIntlClientProvider>
          <SmoothScroll />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
