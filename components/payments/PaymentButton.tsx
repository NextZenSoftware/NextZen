"use client"

import { FormEvent, useState } from "react"
import { ArrowRight, LoaderCircle, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

type RazorpayResponse = {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

type RazorpayInstance = {
  open: () => void
}

type RazorpayConstructor = new (options: {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  prefill: { name: string; email: string }
  theme: { color: string }
  handler: (response: RazorpayResponse) => void
  modal: { ondismiss: () => void }
}) => RazorpayInstance

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor
  }
}

const razorpayScript = "https://checkout.razorpay.com/v1/checkout.js"

function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement("script")
    script.src = razorpayScript
    script.onload = () => resolve(Boolean(window.Razorpay))
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

type PaymentButtonProps = {
  planId: string
  planName: string
  amount: number
  label: string
}

export function PaymentButton({ planId, planName, amount, label }: PaymentButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle")
  const [error, setError] = useState("")

  async function startPayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setError("")

    try {
      const orderResponse = await fetch("/api/payments/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId, name, email }),
      })
      const order = (await orderResponse.json()) as { key?: string; orderId?: string; amount?: number; currency?: string; error?: string }
      if (!orderResponse.ok || !order.key || !order.orderId || !order.amount || !order.currency) {
        throw new Error(order.error ?? "Unable to start payment.")
      }

      if (!(await loadRazorpay()) || !window.Razorpay) {
        throw new Error("Payment window could not load. Please try again.")
      }

      const razorpay = new window.Razorpay({
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: "NextzenSoftware",
        description: `${planName} starting payment`,
        order_id: order.orderId,
        prefill: { name, email },
        theme: { color: "#4f46e5" },
        handler: async (response) => {
          const verifyResponse = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          })
          if (!verifyResponse.ok) {
            setError("Payment received but confirmation failed. Please contact our team.")
            setStatus("error")
            return
          }
          setStatus("success")
        },
        modal: {
          ondismiss: () => setStatus("idle"),
        },
      })
      setStatus("idle")
      razorpay.open()
    } catch (paymentError) {
      setError(paymentError instanceof Error ? paymentError.message : "Unable to start payment.")
      setStatus("error")
    }
  }

  return (
    <>
      <Button type="button" className="w-full gap-2 text-base font-semibold" size="lg" onClick={() => setIsOpen(true)}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setIsOpen(false)}>
          <section className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-2xl" onClick={(event) => event.stopPropagation()} aria-labelledby={`${planId}-payment-title`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Secure checkout</p>
                <h2 id={`${planId}-payment-title`} className="mt-2 text-xl font-bold text-slate-950">Pay for {planName}</h2>
                <p className="mt-1 text-sm text-slate-500">Starting amount: INR {amount.toLocaleString("en-IN")}. Final scope is confirmed separately.</p>
              </div>
              <button type="button" aria-label="Close payment form" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><X size={18} /></button>
            </div>
            {status === "success" ? (
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800" role="status">Payment verified. Our team will contact you with the next steps.</div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={startPayment}>
                <label className="block text-sm font-medium text-slate-700">Your name<input required minLength={2} maxLength={100} value={name} onChange={(event) => setName(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" /></label>
                <label className="block text-sm font-medium text-slate-700">Email address<input required type="email" maxLength={200} value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" /></label>
                {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p>}
                <Button type="submit" disabled={status === "loading"} className="w-full gap-2">{status === "loading" && <LoaderCircle size={16} className="animate-spin" />}{status === "loading" ? "Preparing secure checkout..." : `Continue to payment`}</Button>
                <p className="text-center text-xs leading-relaxed text-slate-500">Razorpay will show available UPI, card, netbanking, and wallet options.</p>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  )
}
