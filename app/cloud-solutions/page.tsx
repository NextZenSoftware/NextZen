import { Metadata } from "next"
import { CloudSolutionsPageClient } from "./CloudSolutionsPageClient"

export const metadata: Metadata = {
  title: "Cloud Solutions - NextzenSoftware | nextzensoftware - AWS, Azure, GCP Services",
  description: "Enterprise-ready cloud solutions from NextzenSoftware (nextzensoftware) - AWS, Microsoft Azure, Google Cloud migration, DevOps automation, cloud security, and scalable cloud infrastructure. Cloud-native solutions that scale with your business.",
  keywords: ["nextzensoftware", "NextzenSoftware", "cloud solutions", "AWS services", "Azure services", "Google Cloud", "cloud migration", "DevOps automation", "cloud infrastructure", "cloud security", "nextzen cloud"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/cloud-solutions',
  },
  openGraph: {
    title: "Cloud Solutions - NextzenSoftware | nextzensoftware",
    description: "Enterprise-ready cloud solutions from NextzenSoftware (nextzensoftware) - AWS, Azure, GCP migration and management services.",
    url: "https://www.nextzensoftware.com/cloud-solutions",
    siteName: "NextzenSoftware",
  },
}

export default function CloudSolutionsPage() {
  return <CloudSolutionsPageClient />
}
