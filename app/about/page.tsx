"use client"

import { Section } from "@/components/layout/Section"
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <Section className="bg-slate-50 border-b border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            We Are NextZen — Building Scalable Digital Solutions
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            NextZen is a technology-driven company specializing in building secure, scalable,
                            and high-performance digital solutions. Our team of experienced developers,
                            designers, and cloud engineers helps businesses modernize systems, accelerate
                            growth, and stay competitive in a rapidly evolving digital world.

                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary-600">10+</span>
                                <span className="text-sm text-slate-500">Years of Industry Experience</span>
                            </div>
                            <div className="w-px bg-slate-300 h-12" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary-600">100+</span>
                                <span className="text-sm text-slate-500">Projects Successfully Delivered</span>
                            </div>
                            <div className="w-px bg-slate-300 h-12" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary-600">50+</span>
                                <span className="text-sm text-slate-500">Technology Experts Worldwide</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary-100 rounded-3xl transform rotate-6 scale-95 opacity-50 blur-xl"></div>
                        <Image
                            src="/images/about-illustration.png"
                            alt="Nextzen Team Office"
                            width={800}
                            height={600}
                            className="relative rounded-3xl shadow-2xl border border-slate-100 w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Values Section */}
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values That Drive Excellence
                    </h2>
                    <p className="text-slate-600">Our values define how we work, innovate, and deliver results.
                        They guide every solution we build and every partnership we form.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8 text-blue-500" />, title: "Precision",
                            desc: "We focus on engineering excellence, delivering clean, reliable, and thoroughly tested solutions that meet the highest quality standards."
                        },

                        {
                            icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, title: "Innovation",
                            desc: "We continuously adopt modern technologies and best practices to deliver future-ready solutions that keep our clients ahead."
                        },

                        {
                            icon: <Users className="w-8 h-8 text-green-500" />, title: "Collaboration",
                            desc: "We work closely with our clients as strategic partners,ensuring transparency, alignment, and shared success."
                        },

                        {
                            icon: <TrendingUp className="w-8 h-8 text-purple-500" />, title: "Growth",
                            desc: "We design scalable architectures that support long-term growth, performance, and evolving business needs."
                        },

                    ].map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform"
                        >
                            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
            {/* Team/Leadership Section */}
            <Section className="bg-white border-t border-slate-200">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Driving Innovation at NextZen
                    </h2>
                    <p className="text-slate-600">Experienced leaders guiding our vision, strategy, and technical excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "David Chen", role: "CEO & Founder", bio: "Technology leader with over 15 years of experience in software engineering, product development, and building high-performing technical teams." },
                        { name: "Sarah Johnson", role: "CTO", bio: "Expert in cloud architecture and scalable systems, focused on building secure and reliable enterprise platforms." },
                        { name: "Michael Rossi", role: "Head of Design", bio: "UX and product design specialist with a strong focus on usability, accessibility, and human-centered digital experiences." },
                    ].map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative">
                                {/* Placeholder for team headshots */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-4xl font-bold bg-slate-100 group-hover:bg-primary-100 transition-colors">
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                            <p className="text-slate-500 text-sm max-w-xs mx-auto">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    )
}
