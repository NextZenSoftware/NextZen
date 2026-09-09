import { createPageMetadata } from "@/lib/seo"
import { UIUXDesignPageClient } from "./UIUXDesignPageClient"

export const metadata = createPageMetadata({
  title: "UI/UX Design Services",
  description: "Create clear, accessible digital experiences through research, wireframes, prototypes, visual design, and design systems.",
  path: "/ui-ux-design",
  keywords: ["UI/UX design", "user experience design", "wireframing", "design systems"],
})

export default function UIUXDesignPage() {
  return <UIUXDesignPageClient />
}
