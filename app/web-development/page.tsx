import { createPageMetadata } from "@/lib/seo"
import { WebDevelopmentPageClient } from "./WebDevelopmentPageClient"

export const metadata = createPageMetadata({
  title: "Web Development Services",
  description: "Build fast, accessible websites and web applications with NextzenSoftware using Next.js, React, Node.js, and modern delivery practices.",
  path: "/web-development",
  keywords: ["web development", "Next.js development", "React development", "web application development"],
})

export default function WebDevelopmentPage() {
  return <WebDevelopmentPageClient />
}
