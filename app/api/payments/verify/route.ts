import { createHmac, timingSafeEqual } from "node:crypto"
import { NextResponse } from "next/server"
import { getSupabaseConfig } from "@/lib/supabase/config"
import { createSupabaseServiceClient } from "@/lib/supabase/server"

function signaturesMatch(expected: string, received: string) {
  const expectedBuffer = Buffer.from(expected)
  const receivedBuffer = Buffer.from(received)
  return expectedBuffer.length === receivedBuffer.length && timingSafeEqual(expectedBuffer, receivedBuffer)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      razorpay_order_id?: unknown
      razorpay_payment_id?: unknown
      razorpay_signature?: unknown
    }

    if (
      typeof body.razorpay_order_id !== "string" ||
      typeof body.razorpay_payment_id !== "string" ||
      typeof body.razorpay_signature !== "string"
    ) {
      return NextResponse.json({ error: "Invalid payment verification details." }, { status: 400 })
    }

    const secret = process.env.RAZORPAY_KEY_SECRET
    if (!getSupabaseConfig().isConfigured || !secret) {
      return NextResponse.json({ error: "Payment verification is not configured." }, { status: 503 })
    }

    const expectedSignature = createHmac("sha256", secret)
      .update(`${body.razorpay_order_id}|${body.razorpay_payment_id}`)
      .digest("hex")

    if (!signaturesMatch(expectedSignature, body.razorpay_signature)) {
      return NextResponse.json({ error: "Payment verification failed." }, { status: 400 })
    }

    const supabase = createSupabaseServiceClient()
    const { error } = await supabase
      .from("payments")
      .update({
        razorpay_payment_id: body.razorpay_payment_id,
        razorpay_signature: body.razorpay_signature,
        status: "paid",
        paid_at: new Date().toISOString(),
      })
      .eq("razorpay_order_id", body.razorpay_order_id)

    if (error) {
      console.error("Payment verification persistence failed", error.message)
      return NextResponse.json({ error: "Payment received but confirmation could not be saved." }, { status: 500 })
    }

    return NextResponse.json({ message: "Payment verified successfully." })
  } catch {
    return NextResponse.json({ error: "Unable to verify this payment." }, { status: 400 })
  }
}
