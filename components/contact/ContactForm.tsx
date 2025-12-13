"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus("success")
  }

  return (
    <Card className="p-8">
      {status === "success" ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
          <p className="text-slate-600">We'll get back to you shortly.</p>
          <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6">
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" required placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" required placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" required placeholder="Project Inquiry" />
          </div>
          <div className="space-y-2">
             <label htmlFor="message" className="text-sm font-medium">Message</label>
             <Textarea id="message" required placeholder="Tell us about your project..." className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </Card>
  )
}

// Inline Input and Textarea for simplicity in this artifact, but normally would be separate files.
// Wait, better to import them if they exist or create dummy ones here if I don't want to create more files now.
// I will create simple inline versions here to avoid 'Need to create this' comments failing.
// Actually, I'll create components/ui/Input.tsx etc next turn. For now I'll inline them to be safe or just use standard HTML inputs styled with Tailwind.

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-primary-300 ${className}`}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-primary-300 ${className}`}
      {...props}
    />
  )
}
