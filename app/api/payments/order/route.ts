import { NextResponse } from "next/server"
import Razorpay from "razorpay"
import { getPaymentPlan } from "@/lib/payment-plans"
import { getSupabaseConfig } from "@/lib/supabase/config"
import { createSupabaseServiceClient } from "@/lib/supabase/server"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      plan?: unknown
      name?: unknown
      email?: unknown
    }
    const plan = getPaymentPlan(body.plan)
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""

    if (!plan || name.length < 2 || name.length > 100 || !emailPattern.test(email) || email.length > 200) {
      return NextResponse.json({ error: "Please provide a valid plan, name, and email." }, { status: 400 })
    }

    const config = getSupabaseConfig()
    if (!config.isConfigured || !process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Online payments are not configured yet. Please contact our team." }, { status: 503 })
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })
    const order = await razorpay.orders.create({
      amount: plan.amount * 100,
      currency: "INR",
      receipt: `nextzen_${Date.now()}`,
      notes: { plan: body.plan as string, customer_email: email },
    })

    const supabase = createSupabaseServiceClient()
    const { error } = await supabase.from("payments").insert({
      razorpay_order_id: order.id,
      plan: body.plan,
      amount_paise: plan.amount * 100,
      currency: "INR",
      customer_name: name,
      customer_email: email,
      status: "created",
    })

    if (error) {
      console.error("Payment order persistence failed", error.message)
      return NextResponse.json({ error: "We could not prepare this payment. Please try again." }, { status: 500 })
    }

    return NextResponse.json({
      key: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      planName: plan.name,
    })
  } catch (error) {
    console.error("Payment order creation failed", error instanceof Error ? error.message : "unknown error")
    return NextResponse.json({ error: "We could not start the payment. Please try again." }, { status: 500 })
  }
}
