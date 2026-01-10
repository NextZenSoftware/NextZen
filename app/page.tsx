import { Hero } from "@/components/home/Hero"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TrustedBy } from "@/components/home/TrustedBy"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { CTASection } from "@/components/home/CTASection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NextzenSoftware - Digital Transformation Partner | nextzensoftware",
  description: "NextzenSoftware (nextzensoftware) - Accelerate your business growth with expert web development, cloud solutions, and strategic digital consulting. Trusted digital transformation partner.",
  keywords: ["nextzensoftware", "NextzenSoftware", "digital transformation", "web development", "cloud solutions", "SaaS", "software development", "enterprise solutions"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com',
  },
  openGraph: {
    title: "NextzenSoftware - Digital Transformation Partner | nextzensoftware",
    description: "NextzenSoftware (nextzensoftware) - Accelerate your business growth with expert web development, cloud solutions, and strategic digital consulting.",
    url: "https://www.nextzensoftware.com",
    siteName: "NextzenSoftware",
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextzenSoftware',
    alternateName: 'nextzensoftware',
    url: 'https://www.nextzensoftware.com',
    logo: 'https://www.nextzensoftware.com/images/logo.png',
    sameAs: [
      'https://twitter.com/nextzensoftware',
      'https://www.linkedin.com/company/nextzensoftware',
      'https://github.com/nextzen'
    ],
    description: "NextzenSoftware (nextzensoftware) is a leading provider of web development, cloud solutions, and digital strategy services. Expert in SaaS, enterprise software, and digital transformation.",
    keywords: 'nextzensoftware, NextzenSoftware, web development, cloud solutions, SaaS, digital transformation',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US'
    },
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
