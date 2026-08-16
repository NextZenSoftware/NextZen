import { Metadata } from "next"
import { UIUXDesignPageClient } from "./UIUXDesignPageClient"

export const metadata: Metadata = {
  title: "UI/UX Design Services - NextzenSoftware | nextzensoftware - User Experience Design",
  description: "NextzenSoftware (nextzensoftware) offers expert UI/UX design services including wireframing, prototyping, visual design, user research, design systems, and interaction design. Create beautiful, user-centric digital experiences.",
  keywords: ["nextzensoftware", "NextzenSoftware", "UI/UX design", "user experience design", "user interface design", "wireframing", "prototyping", "design systems", "UX research", "interaction design", "nextzen design"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/ui-ux-design',
  },
  openGraph: {
    title: "UI/UX Design Services - NextzenSoftware | nextzensoftware",
    description: "Expert UI/UX design services from NextzenSoftware (nextzensoftware) - wireframing, prototyping, visual design, and user research.",
    url: "https://www.nextzensoftware.com/ui-ux-design",
    siteName: "NextzenSoftware",
  },
}

export default function UIUXDesignPage() {
  return <UIUXDesignPageClient />
}
