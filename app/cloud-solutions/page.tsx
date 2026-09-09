import { createPageMetadata } from "@/lib/seo"
import { CloudSolutionsPageClient } from "./CloudSolutionsPageClient"

export const metadata = createPageMetadata({
  title: "Cloud Solutions",
  description: "Plan, modernize, and operate scalable cloud infrastructure with NextzenSoftware across migration, DevOps, and cloud-native delivery.",
  path: "/cloud-solutions",
  keywords: ["cloud solutions", "cloud migration", "DevOps services", "cloud infrastructure"],
})

export default function CloudSolutionsPage() {
  return <CloudSolutionsPageClient />
}
