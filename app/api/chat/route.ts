import { GoogleGenAI } from "@google/genai"
import { NextResponse } from "next/server"
import { mariaSystemPrompt } from "@/lib/chat/system-prompt"

type IncomingMessage = {
  role: "user" | "assistant"
  content: string
}

const maxMessages = 20
const maxMessageLength = 1000

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
    return NextResponse.json(
      { error: "Maria is temporarily unavailable. Please try again later." },
      { status: 503 }
    )
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
