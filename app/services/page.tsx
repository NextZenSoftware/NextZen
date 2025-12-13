"use client"

import { Section } from "@/components/layout/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Monitor, Server, Shield, Globe, Cpu, Smartphone, Code2, Database, CloudLightning } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications built with React, Next.js, and Node.js. High performance and SEO optimized.",
    icon: <Monitor className="w-8 h-8 text-cyan-500" />,
  },
  {
    title: "Mobile App Dev",
    description: "Native iOS and Android applications using React Native and Flutter for seamless cross-platform experiences.",
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS & Azure architecture design, serverless computing, and scalable infrastructure management.",
    icon: <CloudLightning className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines, containerization (Docker/Kubernetes), and infrastructure as code.",
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Cybersecurity",
    description: "Penetration testing, security audits, and compliance implementations (GDPR, HIPAA, SOC2).",
    icon: <Shield className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Database Design",
    description: "SQL & NoSQL database architecture, optimization, and migration services for data-intensive apps.",
    icon: <Database className="w-8 h-8 text-green-500" />,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1 rounded-full bg-primary-900/50 border border-primary-700 text-primary-300 text-sm font-medium mb-6">
                    End-to-End Solutions
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Technology that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Moves You Forward</span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 max-w-lg">
                    We leverage the latest tech stack to build robust, scalable, and secure digital products tailored to your business needs.
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
                    className="w-full h-auto drop-shadow-2xl animate-float"
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
                    <Card className="h-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
                        <CardHeader>
                            <div className="mb-4 p-3 bg-white dark:bg-slate-800 rounded-xl w-fit shadow-sm">
                                {service.icon}
                            </div>
                            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                                {service.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </Section>
      <Section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Our Development Process</h2>
           <p className="text-lg text-slate-600 dark:text-slate-400">A proven methodology that ensures transparency, quality, and timely delivery.</p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                 { step: "01", title: "Discovery", desc: "We dive deep into your requirements and business goals." },
                 { step: "02", title: "Design", desc: "Creating intuitive UI/UX prototypes for your approval." },
                 { step: "03", title: "Development", desc: "Agile coding sprints with regular updates and feedback." },
                 { step: "04", title: "Launch", desc: "Thorough testing, deployment, and post-launch support." },
              ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-lg"
                 >
                    <div className="w-12 h-12 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-primary-500/30">
                       {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </Section>
    </>
  )
}
