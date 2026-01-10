import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Check, Star, ArrowRight, Shield, Clock, Users, Award, Zap, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans - NextzenSoftware | nextzensoftware - Transparent IT Service Pricing",
  description: "Transparent pricing plans from NextzenSoftware (nextzensoftware) for web development, cloud solutions, SaaS development, and digital transformation. Choose from Startup ($999), Business ($2,499), or Enterprise (Custom) plans. No hidden fees, flexible options.",
  keywords: ["nextzensoftware", "NextzenSoftware", "pricing", "web development pricing", "cloud solutions pricing", "SaaS pricing", "IT services pricing", "software development cost", "nextzen pricing", "affordable web development"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/pricing',
  },
  openGraph: {
    title: "Pricing Plans - NextzenSoftware | nextzensoftware",
    description: "Transparent pricing plans for web development, cloud solutions, and digital transformation services from NextzenSoftware (nextzensoftware). Startup, Business, and Enterprise options available.",
    url: "https://www.nextzensoftware.com/pricing",
    siteName: "NextzenSoftware",
  },
}

const plans = [
  {
    name: "Startup",
    price: "$999",
    period: "/project",
    description: "Perfect for small businesses looking to establish a digital presence.",
    features: [
      "Responsive Website (5 Pages)",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "1 Month Support",
      "Mobile Friendly Design",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "$2,499",
    period: "/project",
    description: "Comprehensive solution for growing companies needing scalable systems.",
    features: [
      "Custom Web Application",
      "Advanced SEO & Analytics",
      "CMS Integration",
      "3 Months Support",
      "Performance Optimization",
      "Cloud Hosting Setup",
    ],
    cta: "Choose Business",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements.",
    features: [
      "Dedicated Dev Team",
      "Enterprise Grade Security",
      "24/7 Priority Support",
      "Cloud Architecture Design",
      "DevOps & Automation",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'NextzenSoftware IT Services Pricing',
    provider: {
      '@type': 'Organization',
      name: 'NextzenSoftware',
      alternateName: 'nextzensoftware',
      url: 'https://www.nextzensoftware.com'
    },
    areaServed: 'Worldwide',
    serviceType: ['Web Development', 'Cloud Solutions', 'SaaS Development', 'Digital Transformation'],
    offers: [
      {
        '@type': 'Offer',
        name: 'Startup Plan',
        price: '999',
        priceCurrency: 'USD',
        description: 'Perfect for small businesses looking to establish a digital presence.',
        url: 'https://www.nextzensoftware.com/pricing#startup'
      },
      {
        '@type': 'Offer',
        name: 'Business Plan',
        price: '2499',
        priceCurrency: 'USD',
        description: 'Comprehensive solution for growing companies needing scalable systems.',
        url: 'https://www.nextzensoftware.com/pricing#business'
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Plan',
        price: 'Custom',
        priceCurrency: 'USD',
        description: 'Tailored solutions for large organizations with complex requirements.',
        url: 'https://www.nextzensoftware.com/pricing#enterprise'
      }
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
            Transparent Pricing Plans for NextzenSoftware Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Choose the Perfect Plan for Your Business Needs
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            NextzenSoftware (nextzensoftware) offers transparent, flexible pricing plans for web development, cloud solutions, SaaS development, and digital transformation. No hidden fees. No surprises. Just quality service that fits your budget.
          </p>
        </div>
      </Section>

      {/* Key Benefits Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose NextzenSoftware Pricing Plans?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every pricing plan at NextzenSoftware (nextzensoftware) includes these essential benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary-600" />,
                title: "No Hidden Fees",
                description: "Transparent pricing with no surprises or additional charges"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary-600" />,
                title: "Fast Delivery",
                description: "Agile development process ensuring on-time project delivery"
              },
              {
                icon: <Users className="w-8 h-8 text-primary-600" />,
                title: "Expert Team",
                description: "Experienced developers and designers working on your project"
              },
              {
                icon: <Award className="w-8 h-8 text-primary-600" />,
                title: "Quality Guaranteed",
                description: "100% satisfaction guarantee with ongoing support included"
              }
            ].map((item, index) => (
              <Card key={index} className="border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit mx-auto">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Cards Section */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Select Your Perfect Plan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              NextzenSoftware (nextzensoftware) offers flexible pricing options to suit businesses of all sizes. All plans include free consultation and dedicated support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                id={plan.name.toLowerCase().replace(' ', '-')}
                className={`relative flex flex-col transition-all duration-300 ${
                  plan.popular 
                    ? "border-primary-500 shadow-2xl scale-105 z-10 bg-white" 
                    : "border-slate-200 hover:border-primary-300 hover:shadow-xl bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-bold uppercase tracking-wide py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-lg text-slate-500">{plan.period}</span>
                    )}
                  </div>
                  {plan.name === "Enterprise" && (
                    <p className="text-sm text-slate-500 mt-2">Contact us for custom pricing</p>
                  )}
                </CardHeader>
                <CardContent className="flex-1 px-6">
                  <p className="text-center text-slate-600 mb-6 text-base leading-relaxed min-h-[60px]">
                    {plan.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6 pb-8 px-6">
                  <Button 
                    className="w-full text-base font-semibold py-6" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-slate-600 mb-4 leading-relaxed">
              <strong className="text-slate-900">Not sure which plan is right for you?</strong> Contact NextzenSoftware (nextzensoftware) for a free consultation. Our team will help you choose the perfect plan based on your specific business requirements, budget, and goals.
            </p>
            <Button size="lg" variant="outline" asChild className="mt-4">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Comparison Table Section */}
      <Section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Plan Comparison: NextzenSoftware Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare what's included in each NextzenSoftware (nextzensoftware) pricing plan
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900">Features</th>
                  <th className="text-center p-4 font-bold text-slate-900">Startup</th>
                  <th className="text-center p-4 font-bold text-primary-600 bg-primary-50">Business</th>
                  <th className="text-center p-4 font-bold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Pages/Components", startup: "5 Pages", business: "Unlimited", enterprise: "Unlimited" },
                  { feature: "SEO Optimization", startup: "Basic", business: "Advanced", enterprise: "Enterprise-Grade" },
                  { feature: "Support Duration", startup: "1 Month", business: "3 Months", enterprise: "24/7 Priority" },
                  { feature: "Mobile Responsive", startup: "✓", business: "✓", enterprise: "✓" },
                  { feature: "CMS Integration", startup: "-", business: "✓", enterprise: "✓" },
                  { feature: "Cloud Hosting", startup: "-", business: "Setup Included", enterprise: "Dedicated Setup" },
                  { feature: "Analytics & Tracking", startup: "-", business: "✓", enterprise: "Advanced Analytics" },
                  { feature: "Performance Optimization", startup: "Basic", business: "✓", enterprise: "Enterprise-Level" },
                  { feature: "Security Features", startup: "Basic", business: "Standard", enterprise: "Enterprise-Grade" },
                  { feature: "Dedicated Team", startup: "-", business: "-", enterprise: "✓" },
                  { feature: "Custom SLA", startup: "-", business: "-", enterprise: "✓" },
                  { feature: "DevOps & Automation", startup: "-", business: "-", enterprise: "✓" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-slate-700">{row.feature}</td>
                    <td className="p-4 text-center text-slate-600">{row.startup}</td>
                    <td className="p-4 text-center text-slate-700 bg-primary-50/50 font-medium">{row.business}</td>
                    <td className="p-4 text-center text-slate-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions About Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about NextzenSoftware (nextzensoftware) pricing plans and services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What's included in the Startup plan at $999?",
                answer: "The Startup plan from NextzenSoftware (nextzensoftware) includes a responsive website with up to 5 pages, basic SEO optimization, contact form integration, mobile-friendly design, and 1 month of support. Perfect for small businesses establishing their digital presence."
              },
              {
                question: "Is the Business plan at $2,499 the best value?",
                answer: "Yes! The Business plan at NextzenSoftware (nextzensoftware) is our most popular choice, offering unlimited pages, advanced SEO & analytics, CMS integration, 3 months of support, performance optimization, and cloud hosting setup. It's ideal for growing companies that need scalable systems."
              },
              {
                question: "How does Enterprise custom pricing work?",
                answer: "Enterprise pricing at NextzenSoftware (nextzensoftware) is customized based on your specific requirements, project scope, timeline, and complexity. It includes a dedicated development team, enterprise-grade security, 24/7 priority support, cloud architecture design, DevOps & automation, and custom SLA. Contact us for a personalized quote."
              },
              {
                question: "Are there any hidden fees or additional costs?",
                answer: "No! NextzenSoftware (nextzensoftware) believes in transparent pricing. All plans include clearly stated features with no hidden fees. The only additional costs would be third-party services (like domain registration or premium hosting), which we'll discuss upfront during consultation."
              },
              {
                question: "Can I upgrade or downgrade my plan later?",
                answer: "Absolutely! NextzenSoftware (nextzensoftware) offers flexible plan adjustments. If your business grows and you need additional features, you can upgrade to a higher plan. Similarly, if your needs change, we can adjust your plan accordingly. Contact our team to discuss plan changes."
              },
              {
                question: "What payment methods does NextzenSoftware accept?",
                answer: "NextzenSoftware (nextzensoftware) accepts various payment methods including credit cards, bank transfers, and checks. Payment terms are flexible and can be discussed based on your project size. Enterprise clients may qualify for custom payment schedules."
              },
              {
                question: "Do you offer discounts for long-term contracts?",
                answer: "Yes! NextzenSoftware (nextzensoftware) offers special pricing for annual contracts, multi-project engagements, and long-term partnerships. Enterprise clients working with us on ongoing projects receive competitive rates. Contact us to discuss your specific needs and potential discounts."
              },
              {
                question: "What happens if I need features not included in my plan?",
                answer: "NextzenSoftware (nextzensoftware) offers add-on services for features not included in your selected plan. You can purchase additional features, extended support, or specific services as needed. Our team will work with you to ensure you get exactly what you need within your budget."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-primary-50 rounded-2xl border border-primary-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions About NextzenSoftware Pricing?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our team at NextzenSoftware (nextzensoftware) is here to help. Get a free consultation to discuss your project requirements, understand which plan fits best, and receive a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
