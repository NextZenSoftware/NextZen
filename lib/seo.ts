import type { Metadata } from "next"

export const siteUrl = "https://www.nextzensoftware.com"
export const siteName = "NextzenSoftware"
export const siteDescription =
  "NextzenSoftware builds modern websites, web applications, mobile apps, and cloud solutions for growing businesses."
export const socialImage = "/images/hero-illustration.png"

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = new URL(path, siteUrl).toString()

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName,
      locale: "en_US",
      images: [{ url: socialImage, width: 1200, height: 630, alt: `${siteName} digital solutions` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  }
}