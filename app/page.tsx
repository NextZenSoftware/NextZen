import { Hero } from "@/components/home/Hero"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TrustedBy } from "@/components/home/TrustedBy"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { CTASection } from "@/components/home/CTASection"
import { createPageMetadata, siteName, siteUrl } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Web, App & Cloud Solutions for Growing Businesses",
  description:
    "NextzenSoftware builds high-performance websites, web applications, mobile apps, and cloud solutions for growing businesses.",
  path: "/",
  keywords: ["web development", "app development", "cloud solutions", "digital transformation"],
})

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    name: siteName,
    url: siteUrl,
    description: "Web, app, and cloud solutions from NextzenSoftware.",
    areaServed: 'Worldwide',
    serviceType: ['Web Development', 'Cloud Solutions', 'SaaS Development', 'Digital Transformation', 'App Development', 'SEO Optimization', 'UI/UX Design']
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
