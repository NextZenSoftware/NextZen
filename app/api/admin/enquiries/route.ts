import { NextResponse } from "next/server"
import { getAdminUser } from "@/lib/admin-auth"
import { createSupabaseServiceClient } from "@/lib/supabase/server"

const validStatuses = new Set(["new", "contacted", "converted", "closed"])

export async function GET() {
  const user = await getAdminUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const supabase = createSupabaseServiceClient()
  const { data, error } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false }).limit(100)
  if (error) return NextResponse.json({ error: "Unable to load enquiries." }, { status: 500 })
  return NextResponse.json({ enquiries: data })
}

export async function PATCH(request: Request) {
  const user = await getAdminUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const body = (await request.json()) as { id?: unknown; status?: unknown }
    if (typeof body.id !== "string" || typeof body.status !== "string" || !validStatuses.has(body.status)) {
      return NextResponse.json({ error: "Invalid enquiry update." }, { status: 400 })
    }

    const supabase = createSupabaseServiceClient()
    const { error } = await supabase.from("enquiries").update({ status: body.status }).eq("id", body.id)
    if (error) return NextResponse.json({ error: "Unable to update enquiry." }, { status: 500 })
    return NextResponse.json({ message: "Enquiry updated." })
  } catch {
    return NextResponse.json({ error: "Unable to process update." }, { status: 400 })
  }
}
