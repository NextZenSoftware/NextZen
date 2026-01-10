"use client"

import { Section } from "@/components/layout/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Monitor, Server, Shield, Globe, Cpu, Smartphone, Code2, Database, CloudLightning } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Web Development",
    description: "High-performance, SEO-optimized web applications built with React, Next.js, and Node.js. We deliver fast, secure, and scalable platforms designed to convert users and grow revenue.",
    icon: <Monitor className="w-8 h-8 text-cyan-500" />,
  },
  {
    title: "Mobile App Dev",
    description: "Robust iOS and Android applications developed using React Native and Flutter, ensuring seamless performance, intuitive UX, and faster time-to-market across platforms.",
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure, scalable cloud architectures on AWS and Azure, which includes serverless solutions, cloud migration, cost optimization, monitoring, and high-availability system design.",
    icon: <CloudLightning className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated CI/CD pipelines, Docker & Kubernetes orchestration, and Infrastructure as Code to accelerate releases, improve reliability, and reduce deployment risks.",
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions which includes penetration testing, vulnerability assessments, and compliance implementation (GDPR, HIPAA, SOC 2) to protect critical assets.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Database Design",
    description: "High-availability SQL & NoSQL database architecture, performance tuning, and seamless migration strategies for data-driven and enterprise applications.",
    icon: <Database className="w-8 h-8 text-green-500" />,
  },
]

export function ServicesPageClient() {
  return (
    <>
      <Section className="bg-slate-50 text-slate-900 overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
         <div className="absolute top-0 right-0  rounded-full pointer-events-none"></div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 border border-primary-400 text-white text-sm font-medium mb-6">
                    End-to-End Digital Engineering Services
                </div>
                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Technology That Powers Innovation , <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">Scalable & Secure.</span>
                </h1>
                <p className="text-xl text-slate-700 mb-8 max-w-xl leading-relaxed">
                    We design, develop, and scale high-performance digital solutions for modern businesses.
From cloud-native infrastructure and DevOps automation to enterprise-grade web and mobile applications, NextZen helps organizations innovate faster, reduce operational risk, and achieve sustainable growth.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                 <Image 
                    src="/images/services-illustration.png" 
                    alt="Nextzen Tech Stack" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto drop-shadow-2xl rounded-2xl"
                />
            </motion.div>
         </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                >
                    <Card className="h-full bg-slate-50 border-slate-200 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
                        <CardHeader>
                            <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">
                                {service.icon}
                            </div>
                            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-600 text-base">
                                {service.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>
      <Section className="bg-slate-50 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Proven Development Process</h2>
           <p className="text-lg text-slate-600">A transparent, agile, and results-driven approach that ensures quality, efficiency, and on-time delivery—every time.</p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                 { step: "01", title: "Discovery", desc: "We analyze your business goals, technical requirements, and market challenges to define a clear roadmap for success." },
                 { step: "02", title: "Design", desc: "Our UX/UI experts craft intuitive, user-centric designs that enhance engagement and align with your brand identity." },
                 { step: "03", title: "Development", desc: "Agile development cycles with clean, scalable code, continuous testing, and regular progress updates for complete transparency." },
                 { step: "04", title: "Launch", desc: "Rigorous QA testing, smooth deployment, and ongoing monitoring to ensure long-term stability, performance, and scalability." },
              ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-lg"
                 >
                    <div className="w-12 h-12 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-primary-500/30">
                       {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </Section>
    </>
  )
}
