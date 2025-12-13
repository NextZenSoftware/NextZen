import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="font-bold text-2xl text-primary-600 dark:text-primary-400 mb-4 block">
              Nextzen
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              Empowering businesses with modern cloud solutions and cutting-edge web development. We build the future of your digital presence.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/web-development">Web Development</FooterLink>
              <FooterLink href="/app-development">App Development</FooterLink>
              <FooterLink href="/cloud-solutions">Cloud Solutions</FooterLink>
              <FooterLink href="/seo-optimization">SEO Optimization</FooterLink>
              <FooterLink href="/ui-ux-design">UI/UX Design</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-500" />
                <span>123 Tech Park, Innovation Street, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <Phone size={18} className="shrink-0 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <Mail size={18} className="shrink-0 text-primary-500" />
                <span>hello@nextzen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NextzenSoftware Solution Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
            <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        {children}
      </Link>
    </li>
  )
}
