"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-950 leading-none select-none">
          404
        </h1>
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
           <p className="text-slate-400 max-w-md mx-auto mb-8">
             Oops! It seems you've ventured into the digital void. The page you are looking for doesn't exist or has been moved.
           </p>
           <div className="flex gap-4 justify-center">
             <Button variant="default" size="lg" asChild>
                <Link href="/" className="gap-2">
                   <Home size={18} /> Back Home
                </Link>
             </Button>
             <Button variant="outline" size="lg" onClick={() => window.history.back()} className="gap-2 text-white border-slate-700 hover:bg-slate-800">
                <ArrowLeft size={18} /> Go Back
             </Button>
           </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
