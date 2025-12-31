import { Hero } from "@/components/home/Hero"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TrustedBy } from "@/components/home/TrustedBy"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { CTASection } from "@/components/home/CTASection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NextzenSoftware - Digital Transformation Partner",
  description: "Accelerate your business growth with NextzenSoftware's expert web development, cloud solutions, and strategic digital consulting.",
  alternates: {
    canonical: 'https://www.nextzensoftware.com',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextzenSoftware',
    url: 'https://www.nextzensoftware.com',
    logo: 'https://www.nextzensoftware.com/images/logo.png',
    sameAs: [
      'https://twitter.com/nextzensoftware',
      'https://www.linkedin.com/company/nextzensoftware',
      'https://github.com/nextzen'
    ],
    description: "NextzenSoftware is a leading provider of web development, cloud solutions, and digital strategy services.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco', // Placeholder
      addressRegion: 'CA',
      addressCountry: 'US'
    }
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
