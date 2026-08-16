"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Code2, Monitor, Database, Layout, Smartphone, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function WebDevelopmentPageClient() {
  return (
    <>
      <Section className="bg-slate-50 pt-24 pb-16">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Service</span>
               <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                  Custom Web Development
               </h1>
               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We build high-performance, scalable, and secure websites that drive business growth. From simple landing pages to complex enterprise web applications.
               </p>
               <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
               </Button>
            </motion.div>
         </div>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { icon: <Monitor className="w-8 h-8 text-blue-500" />, title: "Responsive Design", desc: "Websites that look amazing on all devices, ensuring a seamless user experience." },
               { icon: <Code2 className="w-8 h-8 text-purple-500" />, title: "Modern Tech Stack", desc: "Built with Next.js, React, and Node.js for blazing fast performance." },
               { icon: <Database className="w-8 h-8 text-green-500" />, title: "CMS Integration", desc: "Easy content management with customized CMS solutions like Sanity or Strapi." },
               { icon: <Layout className="w-8 h-8 text-orange-500" />, title: "E-Commerce", desc: "Robust online stores with secure payment gateways and inventory management." },
               { icon: <Smartphone className="w-8 h-8 text-cyan-500" />, title: "PWA Development", desc: "Progressive Web Apps that offer native app-like experience on the web." },
               { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Speed Optimization", desc: "Optimized for Core Web Vitals to ensure top search engine rankings." },
            ].map((item, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                   <div className="mb-4">{item.icon}</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-slate-600">{item.desc}</p>
                </motion.div>
            ))}
         </div>
      </Section>
    </>
  )
}
