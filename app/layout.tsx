import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MariaChatbot } from "@/components/chat/MariaChatbot";
import { cn } from "@/lib/utils";
import { siteDescription, siteName, siteUrl, socialImage } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Web, App & Cloud Solutions`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteName} | Web, App & Cloud Solutions`,
    description: siteDescription,
    siteName,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: `${siteName} digital solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Web, App & Cloud Solutions`,
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: "/next.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50")}>
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen pt-6 md:pt-12 lg:pt-4">
          {children}
        </main>
        <Footer />
        <MariaChatbot />
      </body>
    </html>
  );
}
