import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Star, ArrowRight, Shield, Clock, Users, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
import { createPageMetadata } from "@/lib/seo"
import { PaymentButton } from "@/components/payments/PaymentButton"

export const metadata = createPageMetadata({
  title: "Web and Software Development Pricing",
  description: "Review NextzenSoftware service packages and project pricing options for websites, apps, cloud solutions, and digital products.",
  path: "/pricing",
  keywords: ["web development pricing", "software development pricing", "app development cost"],
})

const plans = [
  {
    name: "Starter Website",
    price: "INR 35,000",
    period: "starting from",
    description: "A polished, responsive website for a new or growing business.",
    features: [
      "Up to 5 responsive pages",
      "Custom UI direction and implementation",
      "Contact form and basic SEO setup",
      "Analytics and deployment support",
      "14 days post-launch support",
    ],
    cta: "Plan my website",
    paymentPlanId: "starter",
    amount: 35000,
    popular: false,
  },
  {
    name: "Growth Platform",
    price: "INR 1,25,000",
    period: "starting from",
    description: "A scalable web application for teams that need more than a brochure site.",
    features: [
      "Custom web application experience",
      "CMS, dashboard, or API integration",
      "Advanced SEO, analytics, and performance",
      "Cloud hosting setup",
      "30 days post-launch support",
    ],
    cta: "Discuss my platform",
    paymentPlanId: "growth",
    amount: 125000,
    popular: true,
  },
  {
    name: "Scale & Cloud",
    price: "INR 3,50,000",
    period: "starting from",
    description: "Product engineering, cloud architecture, and automation for complex systems.",
    features: [
      "Dedicated product engineering scope",
      "Cloud architecture and migration plan",
      "CI/CD, observability, and security baseline",
      "Integration and data strategy",
      "90 days priority support",
    ],
    cta: "Talk to an architect",
    paymentPlanId: "scale",
    amount: 350000,
    popular: false,
  },
  {
    name: "Enterprise Custom",
    price: "Custom quote",
    period: "",
    description: "A tailored team and delivery plan for high-volume or regulated environments.",
    features: [
      "Dedicated engineering team",
      "Enterprise security and compliance planning",
      "Custom SLA and delivery governance",
      "24/7 support options",
      "Multi-product or long-term engagement",
    ],
    cta: "Request a proposal",
    paymentPlanId: null,
    amount: null,
    popular: false,
  },
]

const serviceRates = [
  { service: "Web development", price: "INR 35,000+", amount: 35000, unit: "per project" },
  { service: "Mobile app development", price: "INR 2,50,000+", amount: 250000, unit: "per app MVP" },
  { service: "UI/UX design", price: "INR 45,000+", amount: 45000, unit: "per product scope" },
  { service: "SEO optimization", price: "INR 20,000+", amount: 20000, unit: "per month" },
  { service: "Cloud and DevOps", price: "INR 75,000+", amount: 75000, unit: "per engagement" },
  { service: "Security audit", price: "INR 60,000+", amount: 60000, unit: "per assessment" },
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
    offers: serviceRates.map((item) => ({
      '@type': 'Offer',
      name: item.service,
      price: item.amount,
      priceCurrency: 'INR',
      description: `${item.price} ${item.unit}`,
      url: 'https://www.nextzensoftware.com/pricing',
    })),
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
            Clear starting prices for digital products
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Built around the service you actually need
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Indicative project pricing in INR for common scopes. Every engagement starts with a short discovery call so the final proposal matches your goals, integrations, and delivery timeline.
          </p>
        </div>
      </Section>

      {/* Key Benefits Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What every project includes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every engagement starts with these fundamentals
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
              Choose a starting point
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose a starting point, then we will shape the scope with you. Prices exclude GST, domain fees, paid software, cloud usage, and third-party licences unless stated in the proposal.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                  {plan.name === "Enterprise Custom" && (
                    <p className="text-sm text-slate-500 mt-2">Final price depends on scope and team structure</p>
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
                  {plan.paymentPlanId && plan.amount ? (
                    <PaymentButton planId={plan.paymentPlanId} planName={plan.name} amount={plan.amount} label={plan.cta} />
                  ) : (
                    <Button className="w-full gap-2 text-base font-semibold" variant="outline" size="lg" asChild>
                      <Link href="/contact">{plan.cta}<ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Service starting points</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">Price the work, not a vague package</h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">These ranges are starting points for standard scopes. Complex integrations and ongoing retainers are quoted separately.</p>
            </div>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceRates.map((item) => (
                <div key={item.service} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <div><p className="font-medium text-slate-800">{item.service}</p><p className="text-xs text-slate-500">{item.unit}</p></div>
                  <p className="whitespace-nowrap text-sm font-bold text-primary-700">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">Reference: Clutch&apos;s 2026 web development pricing guide reports most agency rates at $25-$49/hour and India-based listings below $25/hour. Our starting points translate typical Indian project scopes into an easier planning number, not a guaranteed quote.</p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-slate-600 mb-4 leading-relaxed">
              <strong className="text-slate-900">Not sure which service fits?</strong> Contact NextzenSoftware for a free discovery call. We will map your requirements, recommend a realistic scope, and share a written proposal.
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
              Compare what&apos;s included in each NextzenSoftware (nextzensoftware) pricing plan
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900">Features</th>
                  <th className="text-center p-4 font-bold text-slate-900">Starter</th>
                  <th className="text-center p-4 font-bold text-primary-600 bg-primary-50">Growth</th>
                  <th className="text-center p-4 font-bold text-slate-900">Scale</th>
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
                question: "What is included in the Starter Website price?",
                answer: "The Starter Website package starts at INR 35,000 for up to five responsive pages, a custom UI direction, contact form, basic SEO, analytics, deployment support, and 14 days of post-launch support."
              },
              {
                question: "What does the Growth Platform price cover?",
                answer: "The Growth Platform starts at INR 1,25,000 and covers a custom web application scope with CMS, dashboard, or API integration, advanced SEO and analytics, performance work, hosting setup, and 30 days of support."
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
