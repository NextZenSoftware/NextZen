"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Check, ArrowRight, CloudCog, Database, Server, ShieldCheck, Cloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function CloudSolutionsPageClient() {
    return (
        <>
            <Section className="bg-slate-50 text-gray-700 pt-24 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4 tracking-wider uppercase text-sm">
                            <Cloud className="w-5 h-5" /> Cloud & DevOps Services
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Enterprise-Ready <br /> Cloud Solutions That Scale With<span className="text-blue-700">Your Business</span>

                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                            We help businesses migrate, modernize, and manage secure cloud infrastructure using AWS, Microsoft Azure, and Google Cloud.
                            Our cloud-native approach ensures high availability, performance optimization, and cost efficiency — so you can scale with confidence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0" asChild>
                                <Link href="/contact">Explore Our Cloud services</Link>
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
                            className="relative w-full h-auto drop-shadow-2xl z-10 rounded-2xl"
                        />
                    </motion.div>
                </div>
            </Section>

            <Section id="features" className="bg-white">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">End-to-End Cloud & DevOps Capabilities</h2>
                    <p className="text-lg text-slate-600">From cloud migration to automation and security, we deliver reliable, scalable, and future-ready cloud solutions designed to support business growth, innovation, and long-term success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Cloud Migration & Modernization",
                            desc: "Seamlessly migrate your legacy systems and applications to the cloud with minimal downtime.We modernize architectures to improve performance, scalability, and long-term maintainability.",
                            icon: <Server className="w-6 h-6 text-white" />,
                            bg: "bg-blue-500",
                            bullets: ["Highly Scalable", "Enterprise-Grade Security", "Cost Optimized"]
                        },
                        {
                            title: "DevOps & Automation",
                            desc: "Accelerate your software delivery lifecycle with CI/CD pipelines, infrastructure as code, and container orchestration.We help teams deploy faster, reduce errors, and improve system reliability.",
                            icon: <CloudCog className="w-6 h-6 text-white" />,
                            bg: "bg-purple-500",
                            bullets: ["Faster Deployments", "Automated Infrastructure", "Improved Reliability"]
                        },
                        {
                            title: "Data & Analytics Platforms",
                            desc: "Design and manage secure data lakes and cloud data warehouses that turn raw data into actionable insights.Enable smarter decisions with scalable, cloud-native data architectures.",
                            icon: <Database className="w-6 h-6 text-white" />,
                            bg: "bg-green-500",
                            bullets: ["Scalable Data Pipelines", "High Performance Analytics", "Secure Data Management"]
                        },
                        {
                            title: "Cloud Security & Compliance",
                            desc: "Protect your cloud environment with identity management, zero-trust security models, and continuous monitoring.We help ensure compliance while keeping your systems resilient against threats.",
                            icon: <ShieldCheck className="w-6 h-6 text-white" />,
                            bg: "bg-red-500",
                            bullets: ["Zero-Trust Architecture", "Continuous Monitoring", "Compliance Ready"]
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
                                    {feature.bullets.map((item, i) => (
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
            <Section className="bg-slate-50 text-gray-700 border-t border-slate-200">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Work With</h2>
                    <p className="text-slate-500">We partner with industry-leading cloud platforms and modern DevOps tools to build secure, scalable, and high-performance cloud solutions.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Text placeholders for logos since we don't have SVGs handy, styled to look like logos */}
                    {["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"].map((tech, idx) => (
                        <div key={idx} className="text-2xl font-bold text-slate-600 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-slate-600" /> {tech}
                        </div>
                    ))}
                </div>
            </Section>
        </>
    )
}
