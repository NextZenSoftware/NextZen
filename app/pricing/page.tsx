import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"

export const metadata = {
  title: "Pricing - NextzenSoftware",
  description: "Transparent pricing plans for our comprehensive IT services.",
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
  return (
    <>
      <Section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600">
            Choose the plan that best fits your business needs. No hidden fees.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col ${
                plan.popular 
                  ? "border-primary-500 shadow-xl scale-105 z-10" 
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-medium text-slate-600">
                  {plan.name}
                </CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 mt-6">
                <p className="text-center text-slate-600 mb-6 text-sm">
                  {plan.description}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">{plan.cta}</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
