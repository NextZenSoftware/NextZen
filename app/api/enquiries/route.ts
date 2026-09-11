import { NextResponse } from "next/server"
import { validateEnquiry } from "@/lib/chat/enquiry-validation"
import { getSupabaseConfig } from "@/lib/supabase/config"
import { createSupabaseServiceClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!validateEnquiry(body)) {
      return NextResponse.json(
        { error: "Please complete every enquiry field and accept the consent notice." },
        { status: 400 }
      )
    }

    if (!getSupabaseConfig().isConfigured) {
      return NextResponse.json(
        { error: "Enquiries are not configured yet. Please try again later." },
        { status: 503 }
      )
    }

    const supabase = createSupabaseServiceClient()
    const { error } = await supabase.from("enquiries").insert({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      project: body.project.trim(),
      source: body.source ?? "contact",
    })

    if (error) {
      console.error("Enquiry persistence failed", error.message)
      return NextResponse.json(
        { error: "We could not save your enquiry right now. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: "Thanks. Your enquiry has been sent to the NextzenSoftware team.",
    })
  } catch {
    return NextResponse.json(
      { error: "We could not process the enquiry right now." },
      { status: 400 }
    )
  }
}
