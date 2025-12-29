"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Check, ArrowRight, CloudCog, Database, Server, ShieldCheck, Cloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CloudSolutionsPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-24 pb-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm">
                    <Cloud className="w-5 h-5" /> Cloud Native Solutions
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Scale Your Business <br/> into the <span className="text-cyan-400">Cloud</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                    Migrate, modernize, and manage your infrastructure with our expert cloud services. We partner with AWS, Azure, and Google Cloud.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0" asChild>
                        <Link href="/contact">Get a Consultation</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-slate-700 text-gray-600 hover:bg-slate-800 hover:text-white" asChild>
                        <Link href="#features">Learn More</Link>
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
                 <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                 <Image 
                    src="/images/cloud-illustration.png" 
                    alt="Cloud Server Infrastructure" 
                    width={800} 
                    height={600} 
                    className="relative w-full h-auto drop-shadow-2xl z-10"
                />
            </motion.div>
         </div>
      </Section>

      <Section id="features" className="bg-slate-50">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Explore Our Capabilities</h2>
              <p className="text-lg text-slate-600">From simple migrations to complex multi-cloud architectures, we have the expertise to handle it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {[
                { 
                    title: "Cloud Migration", 
                    desc: "Seamlessly move your legacy applications to the cloud with zero downtime strategies.",
                    icon: <Server className="w-6 h-6 text-white" />,
                    bg: "bg-blue-500"
                },
                { 
                    title: "DevOps Automation", 
                    desc: "Accelerate delivery with CI/CD, infrastructure as code (Terraform), and container orchestration.",
                    icon: <CloudCog className="w-6 h-6 text-white" />,
                    bg: "bg-purple-500"
                },
                { 
                    title: "Data Warehousing", 
                    desc: "Build scalable data lakes and warehouses to unlock actionable insights from your data.",
                    icon: <Database className="w-6 h-6 text-white" />,
                    bg: "bg-green-500"
                },
                { 
                    title: "Cloud Security", 
                    desc: "Implement zero-trust architecture, identity management, and real-time threat detection.",
                    icon: <ShieldCheck className="w-6 h-6 text-white" />,
                    bg: "bg-red-500"
                },
             ].map((feature, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start"
                >
                    <div className={`p-4 rounded-2xl ${feature.bg} shadow-lg shrink-0`}>
                        {feature.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            {feature.desc}
                        </p>
                        <ul className="space-y-2">
                            {["Scalable", "Secure", "Cost-Effective"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                    <Check size={14} className="text-cyan-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
             ))}
          </div>
      </Section>
      <Section className="bg-slate-950 text-white border-t border-slate-800">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Technologies</h2>
            <p className="text-slate-400">We work with the industry's leading cloud platforms and tools.</p>
         </div>
         
         <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for logos since we don't have SVGs handy, styled to look like logos */}
             {["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"].map((tech, idx) => (
                 <div key={idx} className="text-2xl font-bold text-slate-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" /> {tech}
                 </div>
             ))}
         </div>
      </Section>
    </>
  )
}
