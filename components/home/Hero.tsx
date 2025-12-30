"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cloud, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-32 md:pb-24 lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center">
      {/* pt-20 pb-16 md:pt-32 md:pb-24 lg:min-h-screen  */}
      {/* Background Gradient Blob */}
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-200/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-primary-600 text-sm font-medium mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Trusted Digital & Software Solutions Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 animate-gradient bg-300%">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed"
          >
            We help businesses design, build, and scale secure digital products.
From cloud infrastructure and DevOps to high-performance web applications,
NextZen delivers reliable, future-ready technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" rounded="full" className="flex w-full sm:w-auto text-base gap-2 shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform" asChild>
              <Link className="flex flex-row" href="/contact">
                Start Your Project 
                <ArrowRight className="mt-1 ml-2 w-5 h-5" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" rounded="full" className="w-full sm:w-auto text-slate-500 hover:bg-slate-100" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-4 text-sm text-slate-500 grayscale opacity-70"
          >
             <p>Trusted by industry leaders</p>
             <div className="h-px bg-slate-300 w-12" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center p-8"
        >
           <div className="relative w-full aspect-square max-w-[600px]">
              {/* Main Illustration */}
              <Image 
                src="/images/hero-illustration.png" 
                alt="Cloud Computing Illustration" 
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 md:top-10 md:left-0 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-md border border-slate-100 flex items-center gap-3 z-20"
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
                className="absolute bottom-10 -right-4 md:right-0 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
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
