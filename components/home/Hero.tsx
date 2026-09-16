"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] pb-16 pt-24 md:pb-24 md:pt-32 lg:flex lg:min-h-[calc(100vh-76px)] lg:items-center">
      {/* pt-20 pb-16 md:pt-32 md:pb-24 lg:min-h-screen  */}
      {/* Background Gradient Blob */}
      <div className="pointer-events-none absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-cyan-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-100/50 blur-[90px]" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-kicker"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Digital systems for ambitious teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-7xl"
          >
            Building digital products
            <br />
            <span className="text-primary-600">
              people choose to use.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            We help growing businesses turn complex ideas into fast, reliable web apps, mobile experiences, and cloud infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button size="lg" rounded="full" className="flex w-full gap-2 text-base shadow-lg shadow-primary-500/20 transition-transform hover:-translate-y-0.5 sm:w-auto" asChild>
              <Link className="flex flex-row" href="/contact">
                Start Your Project 
                <ArrowRight className="mt-1 ml-2 w-5 h-5" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" rounded="full" className="w-full border-slate-300 bg-white text-slate-700 sm:w-auto" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em] text-slate-400"
          >
             <p>Web · Apps · Cloud · Growth</p>
             <div className="h-px bg-slate-300 w-12" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center p-2 sm:p-8 lg:h-[600px]"
        >
           <div className="relative aspect-square w-full max-w-[600px]">
              {/* Main Illustration */}
              <Image 
                src="/images/hero-illustration.png" 
                alt="Cloud Computing Illustration" 
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-contain drop-shadow-xl"
                priority
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-1 top-3 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur md:left-0 md:top-10 md:p-4"
              >
                 <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Cloud size={24} />
                 </div>
                 <div>
                    <div className="text-xs font-semibold text-slate-500">Uptime</div>
                    <div className="text-lg font-bold text-slate-900">99.99%</div>
                 </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-1 bottom-4 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur md:right-0 md:p-4"
              >
                 <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Code size={24} />
                 </div>
                 <div>
                    <div className="text-xs font-semibold text-slate-500">Code Quality</div>
                    <div className="text-lg font-bold text-slate-900">Clean & Scalable</div>
                 </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}
