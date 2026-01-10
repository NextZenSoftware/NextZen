"use client"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Smartphone, Tablet, Layers, Wifi, Lock, Code } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function AppDevelopmentPageClient() {
  return (
    <>
      <Section className="bg-slate-900 text-white pt-24 pb-16 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6 }}
            >
               <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Service</span>
               <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Mobile App Development
               </h1>
               <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Turn your ideas into powerful mobile applications. We create intuitive, feature-rich iOS and Android apps that users love.
               </p>
               <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-0" asChild>
                  <Link href="/contact">Build Your App</Link>
               </Button>
            </motion.div>
         </div>
      </Section>

      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { icon: <Smartphone className="w-8 h-8 text-purple-500" />, title: "iOS Development", desc: "Native iOS apps built with Swift for maximum performance and user experience." },
               { icon: <Tablet className="w-8 h-8 text-green-500" />, title: "Android Development", desc: "Scalable Android applications using Kotlin and modern architecture components." },
               { icon: <Layers className="w-8 h-8 text-blue-500" />, title: "Cross-Platform", desc: "React Native and Flutter solutions to reach both platforms with a single codebase." },
               { icon: <Wifi className="w-8 h-8 text-cyan-500" />, title: "IoT Integration", desc: "Connect your mobile app to smart devices and IoT ecosystems seamlessly." },
               { icon: <Lock className="w-8 h-8 text-red-500" />, title: "Secure Data", desc: "Enterprise-grade security implementation to protect sensitive user data." },
               { icon: <Code className="w-8 h-8 text-orange-500" />, title: "Custom APIs", desc: "Robust backend API development to power your mobile application." },
            ].map((item, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                   <div className="mb-4">{item.icon}</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-slate-600">{item.desc}</p>
                </motion.div>
            ))}
         </div>
      </Section>
    </>
  )
}
