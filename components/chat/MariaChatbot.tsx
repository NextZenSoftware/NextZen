"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ChatMessage } from "./chat-types"

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I am Maria, NextzenSoftware's virtual assistant. I can answer questions about our services or help you start an enquiry.",
}

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return { id: `${role}-${Date.now()}`, role, content }
}

export function MariaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedInput = input.trim()

    if (!trimmedInput || isSending) {
      return
    }

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
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      })
      const data = (await response.json()) as { message?: string; error?: string }

      if (!response.ok || !data.message) {
        throw new Error(data.error ?? "Maria could not respond right now.")
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("assistant", data.message as string),
      ])
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Maria could not respond right now."
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Chat with Maria"
          className="flex h-[min(600px,calc(100vh-120px))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20"
        >
          <header className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
                <Sparkles size={19} aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-semibold">Maria</h2>
                <p className="text-xs text-slate-300">NextzenSoftware assistant</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close Maria chat"
              className="rounded-md p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={19} aria-hidden="true" />
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2",
                  message.role === "user" && "justify-end"
                )}
              >
                {message.role === "assistant" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Bot size={15} aria-hidden="true" />
                  </div>
                )}
                <p
                  className={cn(
                    "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    message.role === "user"
                      ? "rounded-br-sm bg-primary-600 text-white"
                      : "rounded-bl-sm border border-slate-200 bg-white text-slate-700"
                  )}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {isSending && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Bot size={15} aria-hidden="true" />
                </div>
                Maria is thinking...
              </div>
            )}
            {error && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                {error}
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <p className="mb-2 px-1 text-[11px] text-slate-500">
              Please do not share passwords or confidential information.
            </p>
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="maria-message">
                Message Maria
              </label>
              <input
                ref={inputRef}
                id="maria-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Maria something..."
                maxLength={1000}
                disabled={isSending}
                className="h-10 min-w-0 flex-1 rounded-full border border-slate-300 px-4 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={isSending || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Close Maria chat" : "Open chat with Maria"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 transition hover:scale-105 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      >
        {isOpen ? (
          <X size={23} aria-hidden="true" />
        ) : (
          <MessageCircle size={23} aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
