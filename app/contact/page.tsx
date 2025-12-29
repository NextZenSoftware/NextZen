import { Section } from "@/components/layout/Section"
import { ContactForm } from "@/components/contact/ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us - NextzenSoftware",
  description: "Get in touch with NextzenSoftware for your next project.",
}

export default function ContactPage() {
  return (
    <>
      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600">
            Have a project in mind? We'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-600">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-600">hello@nextzen.com</p>
                  <p className="text-slate-600">support@nextzen.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-slate-600">Mon-Fri 9am to 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-slate-600">
                    123 Tech Park, Innovation Street<br />
                    Silicon Valley, CA 94043
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
