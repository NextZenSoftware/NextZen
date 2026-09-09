import { createPageMetadata } from "@/lib/seo"
import { SEOOptimizationPageClient } from "./SEOOptimizationPageClient"

export const metadata = createPageMetadata({
  title: "SEO Optimization Services",
  description: "Improve technical performance, discoverability, and organic growth with practical SEO strategy from NextzenSoftware.",
  path: "/seo-optimization",
  keywords: ["SEO services", "technical SEO", "on-page SEO", "search engine optimization"],
})

export default function SEOOptimizationPage() {
  return <SEOOptimizationPageClient />
}
