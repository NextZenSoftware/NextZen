import { Hero } from "@/components/home/Hero"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TrustedBy } from "@/components/home/TrustedBy"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { CTASection } from "@/components/home/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
