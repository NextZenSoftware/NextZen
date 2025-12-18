"use client"

import { Section } from "@/components/layout/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Monitor, Server, Shield, Globe, Cpu, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Web Development",
    description: "Custom, high-performance websites built with the latest technologies like Next.js and React.",
    icon: <Monitor className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure management on AWS and Azure. Migration, optimization, and DevOps.",
    icon: <Server className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "Security Audits",
    description: "Comprehensive security assessments to protect your digital assets and ensure compliance.",
    icon: <Shield className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to increase visibility and drive organic traffic to your business.",
    icon: <Globe className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "DevOps Solutions",
    description: "Streamlined CI/CD pipelines and automated infrastructure for faster deployment cycles.",
    icon: <Cpu className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    icon: <Smartphone className="w-10 h-10 text-primary-500" />,
  },
]

export function ServicesSection() {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }} 
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We offer a comprehensive suite of IT solutions designed to help your business thrive in the digital age.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 bg-white group">
              <CardHeader>
                <div className="mb-4 bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white text-primary-500 transition-colors duration-300">
                    {/* The icon itself doesn't need to change props if handled by parent color, but lucide icons use currentColor */}
                    {/* We need to clone element to change color or rely on text color class */}
                    <div className="current-color">{service.icon}</div>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary-600 transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
