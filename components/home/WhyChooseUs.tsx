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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto lg:text-nowrap lg:pb-12">
            Why Choose NextZen as Your Technology Partner  ?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We go beyond development to deliver secure, scalable, and high-impact digital solutions.
By combining technical expertise with a business-first approach, we help organizations
achieve long-term growth, efficiency, and innovation.
          </p>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
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
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-3xl transform rotate-3 scale-105 opacity-10 blur-2xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100">
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
