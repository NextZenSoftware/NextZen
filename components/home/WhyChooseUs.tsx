"use client"

import { Section } from "@/components/layout/Section"
import { CheckCircle2, Zap, Users, Trophy } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const features = [
  {
    title: "Expert Team",
    description: "Our team is made up of experienced engineers, architects, and consultants who specialize in building enterprise-grade, scalable, and secure technology solutions.",
    icon: <Users className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "Fast Delivery",
    description: "We follow agile development practices and automated CI/CD pipelines to deliver projects faster, maintain quality, and adapt quickly to changing business requirements.",
    icon: <Zap className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "Proven Track Record",
    description: "We have successfully delivered hundreds of projects for startups, growing businesses, and enterprise clients across multiple industries and technologies.",
    icon: <Trophy className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team provides continuous monitoring and reliable assistance to ensure your systems remain stable, secure, and fully operational around the clock.",
    icon: <CheckCircle2 className="w-6 h-6 text-primary-600" />,
  },
]

export function WhyChooseUs() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Built for momentum</p>
          <h2 className="mb-6 max-w-xl text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            A technical partner who thinks beyond launch.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We pair product thinking with dependable engineering so your next release is easier to ship, easier to use, and ready to grow.
          </p>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
          <div className="absolute inset-0 rotate-3 scale-95 rounded-3xl bg-primary-100 opacity-60 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
             <Image 
                src="/images/team-illustration.png" 
                alt="Nextzen Team Collaboration" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-4xl font-bold mb-1">500+</div>
                    <div className="text-slate-300 transform">Successful Projects</div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold mb-1">98%</div>
                    <div className="text-slate-300">Client Satisfaction</div>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
