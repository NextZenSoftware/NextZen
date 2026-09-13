"use client"

import { Section } from "@/components/layout/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Monitor, Server, Shield, Globe, Cpu, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Web Development",
    description: "We design and develop high-performance, scalable websites and web applications using modern technologies such as Next.js, React, and advanced UI frameworks.",
    icon: <Monitor className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "Cloud Services",
    description: "We deliver secure and scalable cloud infrastructure solutions on AWS and Azure, including migration, optimization, monitoring, and cloud-native DevOps practices.",
    icon: <Server className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "Security Audits",
    description: "We perform in-depth security audits and risk assessments to identify vulnerabilities, strengthen defenses, and ensure compliance with industry standards.",
    icon: <Shield className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "SEO Optimization",
    description: "We implement data-driven SEO strategies that improve search rankings, enhance website performance, and drive high-quality organic traffic to your business.",
    icon: <Globe className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "DevOps Solutions",
    description: "We build automated CI/CD pipelines and infrastructure solutions that accelerate deployments, improve reliability, and enable efficient, scalable development workflows.",
    icon: <Cpu className="w-10 h-10 text-primary-500" />,
  },
  {
    title: "Mobile Apps",
    description: "We create secure, scalable native and cross-platform mobile applications that deliver seamless performance and exceptional user experiences across devices.",
    icon: <Smartphone className="w-10 h-10 text-primary-500" />,
  },
]

export function ServicesSection() {
  return (
    <Section background="gray">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow mb-4">What we do</p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }} 
          className="text-lg text-slate-600 max-w-4xl mx-auto"
        >
          End-to-end digital solutions designed to scale your business, secure your infrastructure, and accelerate innovation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            // whileHover={{ y: -8 }}
          >
            <Card className="group h-full border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-slate-900/5">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 transition-colors duration-300">
                  <div className=" text-primary-500 transition-colors duration-200">
                    {/* The icon itself doesn't need to change props if handled by parent color, but lucide icons use currentColor */}
                    {/* We need to clone element to change color or rely on text color class */}
                    <div className="current-color">{service.icon}</div>
                  </div>
                </div>
                <CardTitle className="transition-colors group-hover:text-primary-500">{service.title}</CardTitle>
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
