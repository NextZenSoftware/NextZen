"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { PenTool, LayoutTemplate, Palette, Eye, Component, Smile } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function UIUXDesignPageClient() {
  return (
    <>
      <Section className="bg-slate-50 pt-24 pb-16">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               <span className="text-pink-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Service</span>
               <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                  UI/UX Design
               </h1>
               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We create user-centric designs that are both beautiful and functional. Enhance user satisfaction and engagement with our expert design services.
               </p>
               <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
                  <Link href="/contact">Start Designing</Link>
               </Button>
            </motion.div>
         </div>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { icon: <LayoutTemplate className="w-8 h-8 text-pink-500" />, title: "Wireframing", desc: "Creating structural blueprints to define the layout and functionality of your product." },
               { icon: <Palette className="w-8 h-8 text-purple-500" />, title: "Visual Design", desc: "Crafting the aesthetics, including color schemes, typography, and imagery." },
               { icon: <Component className="w-8 h-8 text-blue-500" />, title: "Prototyping", desc: "Building interactive prototypes to test flows and gather user feedback." },
               { icon: <Eye className="w-8 h-8 text-cyan-500" />, title: "User Research", desc: "Understanding your audience through interviews, surveys, and usability testing." },
               { icon: <PenTool className="w-8 h-8 text-orange-500" />, title: "Design Systems", desc: "Creating scalable design libraries for consistent branding across products." },
               { icon: <Smile className="w-8 h-8 text-green-500" />, title: "Interaction Design", desc: "Designing engaging animations and micro-interactions that delight users." },
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
