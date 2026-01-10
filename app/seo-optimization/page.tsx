import { Metadata } from "next"
import { SEOOptimizationPageClient } from "./SEOOptimizationPageClient"

export const metadata: Metadata = {
  title: "SEO Optimization Services - NextzenSoftware | nextzensoftware - Search Engine Optimization",
  description: "NextzenSoftware (nextzensoftware) offers comprehensive SEO optimization services including keyword research, on-page SEO, technical SEO, link building, local SEO, and analytics. Boost your Google rankings and drive organic traffic.",
  keywords: ["nextzensoftware", "NextzenSoftware", "SEO optimization", "search engine optimization", "SEO services", "keyword research", "technical SEO", "link building", "local SEO", "Google rankings", "nextzen SEO"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/seo-optimization',
  },
  openGraph: {
    title: "SEO Optimization Services - NextzenSoftware | nextzensoftware",
    description: "Comprehensive SEO optimization services from NextzenSoftware (nextzensoftware) - keyword research, technical SEO, link building, and analytics.",
    url: "https://www.nextzensoftware.com/seo-optimization",
    siteName: "NextzenSoftware",
  },
}

export default function SEOOptimizationPage() {
  return <SEOOptimizationPageClient />
}
