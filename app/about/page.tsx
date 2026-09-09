import { createPageMetadata } from "@/lib/seo"
import { AboutPageClient } from "./AboutPageClient"

export const metadata = createPageMetadata({
  title: "About NextzenSoftware",
  description: "Learn about NextzenSoftware, our approach to digital products, and the team behind our web, app, and cloud solutions.",
  path: "/about",
  keywords: ["about NextzenSoftware", "software development team", "digital solutions company"],
})

export default function AboutPage() {
    return <AboutPageClient />
}
