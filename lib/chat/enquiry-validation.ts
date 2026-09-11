export type EnquiryPayload = {
  name: string
  email: string
  project: string
  consent: boolean
  source?: "contact" | "chatbot"
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEnquiry(value: unknown): value is EnquiryPayload {
  if (!value || typeof value !== "object") {
    return false
  }

  const enquiry = value as Partial<EnquiryPayload>

  return (
    typeof enquiry.name === "string" &&
    enquiry.name.trim().length >= 2 &&
    enquiry.name.length <= 100 &&
    typeof enquiry.email === "string" &&
    emailPattern.test(enquiry.email.trim()) &&
    enquiry.email.length <= 200 &&
    typeof enquiry.project === "string" &&
    enquiry.project.trim().length >= 10 &&
    enquiry.project.length <= 2000 &&
    enquiry.consent === true
  )
}
