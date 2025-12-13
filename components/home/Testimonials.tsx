"use client"

import { Section } from "@/components/layout/Section"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Nextzen transformed our digital presence. Their team is incredibly skilled and delivered our project ahead of schedule.",
    author: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    rating: 5,
  },
  {
    quote: "The cloud migration service was seamless. We've seen a 40% reduction in infrastructure costs since moving to AWS with Nextzen.",
    author: "Michael Chen",
    role: "VP of Engineering, CloudScale",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and technically brilliant. The best development partner we've worked with in years.",
    author: "Amanda Williams",
    role: "Product Manager, InnovateNow",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Trust is earned. Here&apos;s why leading companies choose Nextzen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <Card key={index} className="border-none shadow-md bg-white dark:bg-slate-800">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800" />
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.author}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {item.role}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
