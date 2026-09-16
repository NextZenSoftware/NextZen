"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { Bot, Check, ClipboardList, MessageCircle, Plus, Send, Sparkles, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ChatMessage } from "./chat-types"
import { VoiceControls } from "./VoiceControls"

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return { id: `${role}-${Date.now()}-${Math.random()}`, role, content }
}

export function MariaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [enquiryStatus, setEnquiryStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [enquiry, setEnquiry] = useState({ name: "", email: "", project: "", consent: false })
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const lastAssistantMessage = [...messages].reverse().find((message) => message.role === "assistant")

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedInput = input.trim()
    if (!trimmedInput || isSending) return

    const userMessage = createMessage("user", trimmedInput)
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput("")
    setError("")
    setIsSending(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.map(({ role, content }) => ({ role, content })) }),
      })
      const data = (await response.json()) as { message?: string; error?: string }
      if (!response.ok || !data.message) throw new Error(data.error ?? "Maria could not respond right now.")
      setMessages([...nextMessages, createMessage("assistant", data.message)])
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Maria could not respond right now.")
    } finally {
      setIsSending(false)
    }
  }

  function startNewConversation() {
    setMessages([])
    setInput("")
    setError("")
    setIsEnquiryOpen(false)
    setEnquiryStatus("idle")
    setEnquiry({ name: "", email: "", project: "", consent: false })
  }

  async function handleEnquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnquiryStatus("submitting")
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...enquiry, source: "chatbot" }),
      })
      if (!response.ok) {
        setEnquiryStatus("idle")
        return
      }
      setEnquiryStatus("success")
    } catch {
      setEnquiryStatus("idle")
    }
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] flex flex-col items-end gap-3 sm:inset-x-auto sm:bottom-6 sm:right-6">
      {isOpen && (
        <section aria-label="Chat with Maria" className="flex h-[min(720px,calc(100dvh-92px))] w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 sm:h-[min(680px,calc(100vh-120px))] sm:w-[min(440px,calc(100vw-3rem))]">
          <header className="flex shrink-0 items-center justify-between bg-slate-950 px-4 py-3.5 text-white sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 shadow-lg shadow-primary-500/25"><Sparkles size={19} aria-hidden="true" /></div>
              <div className="min-w-0"><h2 className="font-semibold">Maria</h2><p className="truncate text-xs text-slate-300">NextzenSoftware assistant</p></div>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" aria-label="Start a new conversation" title="New conversation" onClick={startNewConversation} className="rounded-md p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Plus size={18} aria-hidden="true" /></button>
              <button type="button" aria-label="Close Maria chat" onClick={() => setIsOpen(false)} className="rounded-md p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><X size={19} aria-hidden="true" /></button>
            </div>
          </header>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-slate-50 p-3.5 sm:p-4" aria-live="polite" aria-label="Chat messages">
            {messages.length === 0 && <div className="flex min-h-full flex-col items-center justify-center px-4 py-8 text-center"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700"><Bot size={23} aria-hidden="true" /></div><h3 className="text-lg font-semibold text-slate-900">Start a conversation with Maria</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">Ask about our services, share a project idea, or request help from the NextzenSoftware team.</p></div>}
            {messages.map((message) => <div key={message.id} className={cn("flex gap-2", message.role === "user" && "justify-end")}>{message.role === "assistant" && <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700"><Bot size={15} aria-hidden="true" /></div>}<p className={cn("max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed", message.role === "user" ? "rounded-br-sm bg-primary-600 text-white" : "rounded-bl-sm border border-slate-200 bg-white text-slate-700")}>{message.content}</p></div>)}
            {isSending && <div className="flex items-center gap-2 text-sm text-slate-500"><div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700"><Bot size={15} aria-hidden="true" /></div>Maria is thinking...</div>}
            {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700" role="alert">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className="shrink-0 border-t border-slate-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-3.5">
            <p className="mb-2 px-1 text-[11px] text-slate-500">Please do not share passwords or confidential information.</p>
            {!isEnquiryOpen && <button type="button" className="mb-3 inline-flex items-center gap-1.5 px-1 text-xs font-medium text-primary-700 hover:text-primary-900" onClick={() => setIsEnquiryOpen(true)}><ClipboardList size={14} aria-hidden="true" />Start an enquiry</button>}
            {isEnquiryOpen && <div className="mb-3 rounded-xl border border-primary-100 bg-primary-50/50 p-3">{enquiryStatus === "success" ? <div className="space-y-2 text-sm text-slate-700"><p className="flex items-center gap-2 font-medium text-primary-800"><Check size={15} aria-hidden="true" />Enquiry details captured.</p><p className="text-xs leading-relaxed">Please use the contact page to complete delivery to our team.</p><button type="button" className="text-xs font-medium text-primary-700 underline" onClick={() => { setIsEnquiryOpen(false); setEnquiryStatus("idle") }}>Return to chat</button></div> : <form className="space-y-2" onSubmit={handleEnquirySubmit}><p className="text-xs font-semibold text-slate-800">Tell us about your project</p><label className="sr-only" htmlFor="maria-enquiry-name">Your name</label><input id="maria-enquiry-name" required maxLength={100} placeholder="Your name" value={enquiry.name} onChange={(event) => setEnquiry({ ...enquiry, name: event.target.value })} className="h-9 w-full rounded-md border border-slate-300 px-3 text-xs outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" /><label className="sr-only" htmlFor="maria-enquiry-email">Your email</label><input id="maria-enquiry-email" required type="email" maxLength={200} placeholder="Your email" value={enquiry.email} onChange={(event) => setEnquiry({ ...enquiry, email: event.target.value })} className="h-9 w-full rounded-md border border-slate-300 px-3 text-xs outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" /><label className="sr-only" htmlFor="maria-enquiry-project">Project details</label><textarea id="maria-enquiry-project" required maxLength={2000} placeholder="What would you like to build?" value={enquiry.project} onChange={(event) => setEnquiry({ ...enquiry, project: event.target.value })} className="min-h-16 w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-xs outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" /><label className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-600"><input type="checkbox" required checked={enquiry.consent} onChange={(event) => setEnquiry({ ...enquiry, consent: event.target.checked })} className="mt-0.5 accent-primary-600" />I agree to share these details for this enquiry.</label><button type="submit" disabled={enquiryStatus === "submitting"} className="h-9 w-full rounded-md bg-primary-600 text-xs font-medium text-white hover:bg-primary-700 disabled:opacity-60">{enquiryStatus === "submitting" ? "Preparing..." : "Submit enquiry"}</button></form>}</div>}
            <form className="flex items-center gap-2" onSubmit={handleSubmit}><label className="sr-only" htmlFor="maria-message">Message Maria</label><input ref={inputRef} id="maria-message" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Maria something..." autoComplete="off" autoCorrect="off" spellCheck="true" maxLength={1000} disabled={isSending} className="h-11 min-w-0 flex-1 rounded-full border border-slate-300 px-4 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" /><button type="submit" aria-label="Send message" disabled={isSending || !input.trim()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><Send size={17} aria-hidden="true" /></button></form>
            <div className="mt-1 flex justify-end"><VoiceControls text={lastAssistantMessage?.content ?? ""} onTranscript={setInput} /></div>
          </div>
        </section>
      )}
      <button type="button" aria-label={isOpen ? "Close Maria chat" : "Open chat with Maria"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="flex h-14 w-14 items-center justify-center self-end rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 transition hover:scale-105 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"><>{isOpen ? <X size={23} aria-hidden="true" /> : <MessageCircle size={23} aria-hidden="true" />}</></button>
    </div>
  )
}
