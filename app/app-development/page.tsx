import { Metadata } from "next"
import { AppDevelopmentPageClient } from "./AppDevelopmentPageClient"

export const metadata: Metadata = {
  title: "Mobile App Development - NextzenSoftware | nextzensoftware - iOS & Android Apps",
  description: "NextzenSoftware (nextzensoftware) specializes in mobile app development for iOS and Android. We create intuitive, feature-rich mobile applications using React Native, Flutter, Swift, and Kotlin. Cross-platform mobile app solutions.",
  keywords: ["nextzensoftware", "NextzenSoftware", "mobile app development", "iOS development", "Android development", "React Native", "Flutter development", "cross-platform apps", "mobile application development", "app development services", "nextzen mobile apps"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/app-development',
  },
  openGraph: {
    title: "Mobile App Development - NextzenSoftware | nextzensoftware",
    description: "Mobile app development services from NextzenSoftware (nextzensoftware) - iOS, Android, React Native, and Flutter solutions.",
    url: "https://www.nextzensoftware.com/app-development",
    siteName: "NextzenSoftware",
  },
}

export default function AppDevelopmentPage() {
  return <AppDevelopmentPageClient />
}
