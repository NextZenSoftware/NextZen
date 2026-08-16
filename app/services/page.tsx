import { Metadata } from "next"
import { ServicesPageClient } from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "Services - NextzenSoftware | nextzensoftware - IT Services & Solutions",
  description: "NextzenSoftware (nextzensoftware) offers comprehensive IT services including web development, mobile app development, cloud infrastructure, DevOps, cybersecurity, and database design. End-to-end digital engineering services for modern businesses.",
  keywords: ["nextzensoftware", "NextzenSoftware", "IT services", "web development services", "cloud solutions", "SaaS development", "mobile app development", "DevOps services", "cybersecurity", "nextzen services"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/services',
  },
  openGraph: {
    title: "IT Services - NextzenSoftware | nextzensoftware",
    description: "Comprehensive IT services from NextzenSoftware (nextzensoftware) - web development, cloud infrastructure, DevOps, cybersecurity, and more.",
    url: "https://www.nextzensoftware.com/services",
    siteName: "NextzenSoftware",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
