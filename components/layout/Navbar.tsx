"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Cloud Solutions", href: "/cloud-solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full border-b transition-all duration-300",
      scrolled
        ? "border-slate-200/80 bg-[#f7f8fb]/90 shadow-[0_8px_30px_rgba(23,32,51,0.06)] backdrop-blur-xl"
        : "border-transparent bg-[#f7f8fb]/80 backdrop-blur-md"
    )}>
      <div className="container-custom flex h-[76px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-slate-950" aria-label="NextzenSoftware home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-950/15">N</span>
          <span className="text-lg font-bold tracking-tight">Nextzen<span className="text-primary-600">Software</span></span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors hover:text-primary-700",
                pathname === link.href
                  ? "text-slate-950 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary-600"
                  : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
           <Button variant="default" size="sm" rounded="full" className="gap-1.5" asChild>
             <Link href="/contact">Start a project <ArrowUpRight size={15} /></Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="overflow-hidden border-b border-slate-200 bg-[#f7f8fb] md:hidden"
          >
            <div className="container-custom flex flex-col gap-2 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-primary-700",
                    pathname === link.href
                      ? "bg-white text-primary-700 shadow-sm"
                      : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-3 w-full gap-1.5" rounded="full" asChild>
                <Link href="/contact">Start a project <ArrowUpRight size={15} /></Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}