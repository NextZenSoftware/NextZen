import { createPageMetadata } from "@/lib/seo"
import { ServicesPageClient } from "./ServicesPageClient"

export const metadata = createPageMetadata({
  title: "Digital Product and IT Services",
  description: "Explore NextzenSoftware services for web development, mobile apps, cloud infrastructure, SEO, and user experience design.",
  path: "/services",
  keywords: ["IT services", "web development services", "mobile app services", "cloud services"],
})

export default function ServicesPage() {
  return <ServicesPageClient />
}
