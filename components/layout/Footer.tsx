import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { company } from "@/lib/company"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#eef1f6] pb-8 pt-16">
      <div className="container-custom">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 text-lg font-bold tracking-tight text-slate-950">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm text-white">N</span>
              Nextzen<span className="text-primary-600">Software</span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-600">
              Digital products, cloud systems, and websites built with clarity, craft, and measurable outcomes.
            </p>
            <div className="flex gap-4">
              <SocialLink href={company.social.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href={company.social.twitter} icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href={company.social.facebook} icon={<Facebook size={20} />} label="Facebook" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Services</h3>
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
            <h3 className="font-semibold text-slate-900 mb-6">Company</h3>
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
            <h3 className="font-semibold text-slate-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-500" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <Phone size={18} className="shrink-0 text-primary-500" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary-600 transition-colors">{company.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <Mail size={18} className="shrink-0 text-primary-500" />
                <a href={`mailto:${company.email}`} className="hover:text-primary-600 transition-colors">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
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
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-slate-600 text-sm hover:text-primary-600 transition-colors">
        {children}
      </Link>
    </li>
  )
}
