"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <Section className="bg-primary-900 !py-24">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-primary-100 mb-10 leading-relaxed">
          Let's build something amazing together. Review our portfolio or get a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" rounded="full" className="text-base font-semibold" asChild>
            <Link href="/contact">
              Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" rounded="full" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white" asChild>
             <Link href="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
