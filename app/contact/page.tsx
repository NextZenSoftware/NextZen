import { Section } from "@/components/layout/Section"
import { ContactForm } from "@/components/contact/ContactForm"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export const metadata: Metadata = {
  title: "Contact Us - NextzenSoftware | nextzensoftware - Get Expert IT Consultation",
  description: "Contact NextzenSoftware (nextzensoftware) for expert web development, cloud solutions, and digital transformation services. Get free consultation from our IT experts. Reach out via email, phone, or contact form. We're here to help transform your business digitally.",
  keywords: ["nextzensoftware", "NextzenSoftware", "contact nextzensoftware", "IT consultation", "web development contact", "cloud solutions contact", "digital transformation consultation", "nextzen contact", "software development contact"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/contact',
  },
  openGraph: {
    title: "Contact NextzenSoftware - Expert IT Consultation | nextzensoftware",
    description: "Get in touch with NextzenSoftware (nextzensoftware) for expert web development, cloud solutions, and digital transformation services. Free consultation available.",
    url: "https://www.nextzensoftware.com/contact",
    siteName: "NextzenSoftware",
  },
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.nextzensoftware.com/contact',
    name: 'NextzenSoftware',
    alternateName: 'nextzensoftware',
    description: 'NextzenSoftware (nextzensoftware) - Expert web development, cloud solutions, and digital transformation services. Contact us for IT consultation and enterprise software solutions.',
    url: 'https://www.nextzensoftware.com',
    telephone: '+1-555-123-4567',
    email: 'hello@nextzensoftware.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Park, Innovation Street',
      addressLocality: 'Silicon Valley',
      addressRegion: 'CA',
      postalCode: '94043',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.3875',
      longitude: '-122.0575'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
      timeZone: 'America/Los_Angeles'
    },
    areaServed: 'Worldwide',
    priceRange: '$$',
    sameAs: [
      'https://twitter.com/nextzensoftware',
      'https://www.linkedin.com/company/nextzensoftware'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Get in Touch with NextzenSoftware
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Ready to Transform Your Business Digitally? Let's Build Something Amazing Together
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Contact NextzenSoftware (nextzensoftware) today for expert consultation on web development, cloud solutions, SaaS development, and digital transformation. Our team is here to help you achieve your business goals.
          </p>
        </div>
      </Section>

      {/* Why Contact Us Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose NextzenSoftware for Your Project?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're not just developers—we're your strategic technology partner committed to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary-600" />,
                title: "Expert Team",
                description: "50+ experienced developers, designers, and cloud engineers ready to tackle your project"
              },
              {
                icon: <Award className="w-8 h-8 text-primary-600" />,
                title: "100+ Projects Delivered",
                description: "Proven track record of successful digital transformations across industries"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary-600" />,
                title: "Fast Response",
                description: "Get a response within 24 hours. We value your time and business"
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-primary-600" />,
                title: "Free Consultation",
                description: "No obligation consultation to discuss your project requirements and goals"
              }
            ].map((item, index) => (
              <Card key={index} className="border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Contact Information</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Reach out to NextzenSoftware (nextzensoftware) through any of these channels. We're available Monday through Friday, 9 AM to 6 PM EST. For urgent matters, please use our contact form and we'll respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Email Us</h3>
                  <p className="text-slate-600 mb-1">
                    <a href="mailto:hello@nextzensoftware.com" className="hover:text-primary-600 transition-colors">
                      hello@nextzensoftware.com
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a href="mailto:support@nextzensoftware.com" className="hover:text-primary-600 transition-colors">
                      support@nextzensoftware.com
                    </a>
                  </p>
                  <p className="text-sm text-slate-500 mt-2">For general inquiries and project proposals</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Call Us</h3>
                  <p className="text-slate-600 mb-1">
                    <a href="tel:+15551234567" className="hover:text-primary-600 transition-colors font-medium">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="text-slate-600 mb-2">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-sm text-slate-500">Speak directly with our team for immediate assistance</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Visit Our Office</h3>
                  <p className="text-slate-600 leading-relaxed">
                    123 Tech Park, Innovation Street<br />
                    Silicon Valley, CA 94043<br />
                    United States
                  </p>
                  <p className="text-sm text-slate-500 mt-2">Schedule a visit by calling ahead or emailing us</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Quick Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/pricing" className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition-colors text-sm">
                  <ArrowRight size={16} /> View Pricing Plans
                </Link>
                <Link href="/services" className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition-colors text-sm">
                  <ArrowRight size={16} /> Our Services
                </Link>
                <Link href="/about" className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition-colors text-sm">
                  <ArrowRight size={16} /> About NextzenSoftware
                </Link>
                <Link href="/case-studies" className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition-colors text-sm">
                  <ArrowRight size={16} /> Case Studies
                </Link>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Send Us a Message</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fill out the form below and our team at NextzenSoftware (nextzensoftware) will get back to you within 24 hours. Whether you need web development, cloud solutions, or digital transformation services, we're here to help.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about working with NextzenSoftware (nextzensoftware)
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly will NextzenSoftware respond to my inquiry?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +1 (555) 123-4567 during business hours (Mon-Fri, 9 AM - 6 PM EST)."
              },
              {
                question: "What services does NextzenSoftware offer?",
                answer: "NextzenSoftware (nextzensoftware) specializes in web development, mobile app development, cloud solutions, SaaS development, SEO optimization, UI/UX design, and digital transformation. We provide end-to-end IT services for businesses of all sizes."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer a free, no-obligation consultation to discuss your project requirements, business goals, and how NextzenSoftware can help you achieve digital transformation. Contact us via the form, email, or phone to schedule your consultation."
              },
              {
                question: "What is the typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Simple websites may take 4-6 weeks, while enterprise applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
              },
              {
                question: "Can I visit your office in Silicon Valley?",
                answer: "Yes! We welcome visitors at our Silicon Valley office. Please schedule your visit in advance by calling us or sending an email so we can ensure someone from our team is available to meet with you."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-slate-200 hover:border-primary-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Still have questions? Don't hesitate to reach out to us.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
