import { GoogleGenAI } from "@google/genai"
import { NextResponse } from "next/server"
import { mariaSystemPrompt } from "@/lib/chat/system-prompt"

type IncomingMessage = {
  role: "user" | "assistant"
  content: string
}

const maxMessages = 20
const maxMessageLength = 1000

function getDemoResponse(messages: IncomingMessage[]) {
  const latestMessage = messages[messages.length - 1].content.toLowerCase()

  if (
    latestMessage.includes("hotel") ||
    (latestMessage.includes("react") &&
      latestMessage.includes("next") &&
      latestMessage.includes("node"))
  ) {
    return "That sounds like a great project. For a hotel website, we can plan a responsive Next.js frontend with room listings, image galleries, booking or enquiry flows, and a Node.js backend for availability and content management. Would you like to start with a booking system, an enquiry-only website, or both?"
  }

  if (latestMessage.includes("price") || latestMessage.includes("cost")) {
    return "Our pricing depends on your project scope. You can start an enquiry with your name, email, and project details, and our team can prepare the right next step."
  }

  if (latestMessage.includes("service") || latestMessage.includes("offer")) {
    return "NextzenSoftware helps with web development, mobile apps, cloud solutions, SEO, UI/UX design, and digital transformation. What are you planning to build?"
  }

  if (latestMessage.includes("contact") || latestMessage.includes("enquiry") || latestMessage.includes("inquiry")) {
    return "I can help you start an enquiry. Use the Start an enquiry option below to share your name, email, and project details."
  }

  return "Thanks for sharing that. I can help shape the project scope, suggest a React/Next.js and Node.js setup, and guide you through an enquiry. Tell me what you want to build, who will use it, and the most important feature."
}

function isValidMessages(value: unknown): value is IncomingMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= maxMessages &&
    value.every(
      (message) =>
        typeof message === "object" &&
        message !== null &&
        (message as IncomingMessage).role in { user: true, assistant: true } &&
        typeof (message as IncomingMessage).content === "string" &&
        (message as IncomingMessage).content.trim().length > 0 &&
        (message as IncomingMessage).content.length <= maxMessageLength
    )
  )
}

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    try {
      const body = (await request.json()) as { messages?: unknown }

      if (!isValidMessages(body.messages)) {
        return NextResponse.json(
          { error: "Please send a valid message." },
          { status: 400 }
        )
      }

      return NextResponse.json({ message: getDemoResponse(body.messages) })
    } catch {
      return NextResponse.json(
        { error: "Please send a valid message." },
        { status: 400 }
      )
    }
  }

  try {
    const body = (await request.json()) as { messages?: unknown }

    if (!isValidMessages(body.messages)) {
      return NextResponse.json(
        { error: "Please send a valid message." },
        { status: 400 }
      )
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
    const contents = body.messages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content.trim() }],
    }))
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite",
      contents,
      config: {
        systemInstruction: mariaSystemPrompt,
        maxOutputTokens: 300,
        temperature: 0.4,
      },
    })

    const text = response.text?.trim()

    if (!text) {
      return NextResponse.json(
        { error: "Maria could not prepare a response. Please try again." },
        { status: 502 }
      )
    }

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("Maria chat request failed", error instanceof Error ? error.message : "unknown error")
    return NextResponse.json(
      { error: "Maria is temporarily unavailable. Please try again later." },
      { status: 502 }
    )
  }
}
