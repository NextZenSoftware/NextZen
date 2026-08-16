import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextzensoftware.com"),
  title: {
    default: "NextzenSoftware - Modern Cloud & Web Solutions | nextzensoftware",
    template: "%s | NextzenSoftware",
  },
  description: "NextzenSoftware (nextzensoftware) - Advanced SaaS solutions, web development, cloud services, and digital transformation for forward-thinking companies. Expert in scalable, secure, and high-performance digital products.",
  keywords: ["nextzensoftware", "NextzenSoftware", "Web Development", "Cloud Solutions", "SaaS", "App Development", "SEO Optimization", "UI/UX Design", "Next.js", "React", "Software Agency", "Digital Solutions", "Enterprise Software"],
  authors: [{ name: "NextzenSoftware Team" }],
  creator: "NextzenSoftware",
  publisher: "NextzenSoftware",
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
    url: "https://www.nextzensoftware.com",
    title: "NextzenSoftware - Modern Cloud & Web Solutions | nextzensoftware",
    description: "NextzenSoftware (nextzensoftware) - Advanced SaaS solutions, web development, cloud services, and digital transformation for forward-thinking companies.",
    siteName: "NextzenSoftware",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure to create this image
        width: 1200,
        height: 630,
        alt: "NextzenSoftware - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextzenSoftware - Modern Cloud & Web Solutions | nextzensoftware",
    description: "NextzenSoftware (nextzensoftware) - Advanced SaaS solutions, web development, cloud services, and digital transformation for forward-thinking companies.",
    images: ["/images/og-image.jpg"],
    creator: "@nextzensoftware",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Add this if you have one
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
      </body>
    </html>
  );
}
