import { Section } from "@/components/layout/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - NextzenSoftware | nextzensoftware - Portfolio & Projects",
  description: "Explore NextzenSoftware (nextzensoftware) portfolio of successful projects and digital transformations. See how we've helped businesses with web development, cloud migration, mobile apps, and e-commerce solutions. Real results from real clients.",
  keywords: ["nextzensoftware", "NextzenSoftware", "case studies", "portfolio", "projects", "web development projects", "cloud migration examples", "mobile app development", "e-commerce solutions", "digital transformation projects", "nextzen portfolio"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/case-studies',
  },
  openGraph: {
    title: "Case Studies - NextzenSoftware | nextzensoftware",
    description: "Explore NextzenSoftware (nextzensoftware) portfolio of successful projects and digital transformations. Real results from real clients.",
    url: "https://www.nextzensoftware.com/case-studies",
    siteName: "NextzenSoftware",
  },
}

const projects = [
  {
    title: "EcoFintech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial dashboard for a sustainable fintech startup, featuring real-time data visualization and secure transaction processing.",
    image: "/projects/project1.jpg", // Placeholder
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    title: "CloudScale Migration",
    category: "Cloud Solutions",
    description: "Successfully migrated a legacy enterprise ERP system to AWS, resulting in 40% reduced operational costs and 99.99% uptime.",
    image: "/projects/project2.jpg", // Placeholder
    tags: ["AWS", "Docker", "Terraform"],
  },
  {
    title: "healthPlus Mobile App",
    category: "Mobile Development",
    description: "A patient-centric mobile application for healthcare providers, offering telemedicine features and secure medical record access.",
    image: "/projects/project3.jpg", // Placeholder
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "UrbanRetail E-commerce",
    category: "E-commerce",
    description: "A high-performance headless e-commerce platform built for a fashion retailer, integrated with Shopify and a custom CMS.",
    image: "/projects/project4.jpg", // Placeholder
    tags: ["Next.js", "Shopify", "Tailwind"],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600">
            We take pride in delivering exceptional results. Explore how we've helped businesses transform and grow.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-video bg-slate-200 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  {project.title} Preview
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Button variant="secondary" className="gap-2">
                      View Case Study <ArrowRight size={16} />
                   </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-primary-600 mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
