import { NextResponse } from "next/server"
import { validateEnquiry } from "@/lib/chat/enquiry-validation"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!validateEnquiry(body)) {
      return NextResponse.json(
        { error: "Please complete every enquiry field and accept the consent notice." },
        { status: 400 }
      )
    }

    return NextResponse.json({
      message:
        "Thanks. Your enquiry details are ready for the NextzenSoftware team. Please use the contact page to complete the submission.",
    })
  } catch {
    return NextResponse.json(
      { error: "We could not process the enquiry right now." },
      { status: 400 }
    )
  }
}
