import { Metadata } from "next"
import { WebDevelopmentPageClient } from "./WebDevelopmentPageClient"

export const metadata: Metadata = {
  title: "Web Development Services - NextzenSoftware | nextzensoftware - Custom Web Applications",
  description: "NextzenSoftware (nextzensoftware) offers custom web development services using Next.js, React, and Node.js. We build high-performance, scalable, secure websites and web applications. Responsive design, CMS integration, e-commerce solutions, and PWA development.",
  keywords: ["nextzensoftware", "NextzenSoftware", "web development", "custom web development", "Next.js development", "React development", "web application development", "responsive web design", "e-commerce development", "PWA development", "nextzen web development"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/web-development',
  },
  openGraph: {
    title: "Web Development Services - NextzenSoftware | nextzensoftware",
    description: "Custom web development services from NextzenSoftware (nextzensoftware) - Next.js, React, Node.js. High-performance, scalable websites and web applications.",
    url: "https://www.nextzensoftware.com/web-development",
    siteName: "NextzenSoftware",
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentPageClient />
}
