import { Metadata } from "next"
import { AboutPageClient } from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - NextzenSoftware | nextzensoftware - Our Team & Vision",
  description: "Learn about NextzenSoftware (nextzensoftware) - a technology-driven company with 50+ experts specializing in scalable digital solutions, web development, cloud services, and digital transformation. 10+ years of experience, 100+ successful projects.",
  keywords: ["nextzensoftware", "NextzenSoftware", "about nextzensoftware", "our team", "company values", "digital solutions company", "IT company", "software development team", "nextzen team"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/about',
  },
  openGraph: {
    title: "About NextzenSoftware - Our Team & Vision | nextzensoftware",
    description: "NextzenSoftware (nextzensoftware) - A technology-driven company with 50+ experts specializing in scalable digital solutions, web development, and cloud services.",
    url: "https://www.nextzensoftware.com/about",
    siteName: "NextzenSoftware",
  },
}

export default function AboutPage() {
    return <AboutPageClient />
}
