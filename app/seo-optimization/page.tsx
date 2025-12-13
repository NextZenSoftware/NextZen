"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Search, BarChart, TrendingUp, Globe, FileText, Target } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SEOPage() {
  return (
    <>
      <Section className="bg-slate-50 dark:bg-slate-900 pt-24 pb-16">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Service</span>
               <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                  SEO Optimization
               </h1>
               <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Boost your rankings and drive organic traffic. We use data-driven strategies to ensure your business gets found by the right audience.
               </p>
               <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href="/contact">Get Free Audit</Link>
               </Button>
            </motion.div>
         </div>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { icon: <Search className="w-8 h-8 text-green-500" />, title: "Keyword Research", desc: "Identifying high-value keywords that align with your business goals and user intent." },
               { icon: <FileText className="w-8 h-8 text-blue-500" />, title: "On-Page SEO", desc: "Optimizing content, meta tags, and HTML structure for maximum search visibility." },
               { icon: <Globe className="w-8 h-8 text-purple-500" />, title: "Technical SEO", desc: "Improving site speed, mobile-friendliness, and crawlability for search engines." },
               { icon: <TrendingUp className="w-8 h-8 text-orange-500" />, title: "Link Building", desc: "Acquiring high-quality backlinks to increase your domain authority and trust." },
               { icon: <Target className="w-8 h-8 text-red-500" />, title: "Local SEO", desc: "Optimizing your presence for local search results and Google Maps." },
               { icon: <BarChart className="w-8 h-8 text-cyan-500" />, title: "Analytics & Reporting", desc: "Transparent weekly reports to track growth, rankings, and ROI." },
            ].map((item, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow"
                >
                   <div className="mb-4">{item.icon}</div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">{item.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </motion.div>
            ))}
         </div>
      </Section>
    </>
  )
}
