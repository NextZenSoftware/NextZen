import { createPageMetadata } from "@/lib/seo"
import { AppDevelopmentPageClient } from "./AppDevelopmentPageClient"

export const metadata = createPageMetadata({
  title: "Mobile App Development",
  description: "Build iOS, Android, and cross-platform mobile apps with NextzenSoftware using modern product and engineering practices.",
  path: "/app-development",
  keywords: ["mobile app development", "iOS app development", "Android app development", "React Native development"],
})

export default function AppDevelopmentPage() {
  return <AppDevelopmentPageClient />
}
