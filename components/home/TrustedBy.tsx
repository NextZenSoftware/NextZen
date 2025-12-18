"use client"

import { Section } from "@/components/layout/Section"
import { motion } from "framer-motion"

export function TrustedBy() {
  // Placeholder logos - in a real app these would be SVGs or Images
  const companies = [
    "TechCorp", "InnovateLabs", "CloudSystems", "DevScale", "AlphaWave", "FutureNet"
  ]

  return (
    <Section className="py-12 border-b border-slate-100">
      <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
        Trusted by Innovative Companies
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {companies.map((company, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-xl md:text-2xl font-bold text-slate-400 select-none"
          >
            {company}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
