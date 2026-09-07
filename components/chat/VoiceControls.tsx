"use client"

import { useRef, useState, useSyncExternalStore } from "react"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"

type SpeechRecognitionLike = {
  continuous: boolean
  interimResults: boolean
  lang: string
  onresult: ((event: unknown) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
}

type SpeechRecognitionWindow = Window & {
  SpeechRecognition?: new () => SpeechRecognitionLike
  webkitSpeechRecognition?: new () => SpeechRecognitionLike
}

type VoiceControlsProps = {
  text: string
  onTranscript: (transcript: string) => void
}

const subscribeToBrowser = () => () => {}
const getSpeechRecognitionSupport = () => {
  const speechWindow = window as SpeechRecognitionWindow
  return Boolean(speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition)
}
const getSpeechSynthesisSupport = () => "speechSynthesis" in window
const getServerSupport = () => false

export function VoiceControls({ text, onTranscript }: VoiceControlsProps) {
  const isSupported = useSyncExternalStore(
    subscribeToBrowser,
    getSpeechRecognitionSupport,
    getServerSupport
  )
  const hasSpeechSynthesis = useSyncExternalStore(
    subscribeToBrowser,
    getSpeechSynthesisSupport,
    getServerSupport
  )
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)

  function toggleListening() {
    const speechWindow = window as SpeechRecognitionWindow
    const Recognition = speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition

    if (!Recognition) {
      return
    }

    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }

    const recognition = new Recognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US"
    recognition.onresult = (event) => {
      const result = event as { results?: ArrayLike<ArrayLike<{ transcript: string }>> }
      const transcript = result.results?.[0]?.[0]?.transcript
      if (transcript) {
        onTranscript(transcript)
      }
    }
    recognition.onerror = () => setIsListening(false)
    recognition.onend = () => setIsListening(false)
    recognitionRef.current = recognition
    recognition.start()
    setIsListening(true)
  }

  function toggleSpeaking() {
    if (!("speechSynthesis" in window) || !text.trim()) {
      return
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }

  if (!isSupported && !hasSpeechSynthesis) {
    return null
  }

  return (
    <div className="flex items-center gap-1">
      {isSupported && (
        <button
          type="button"
          aria-label={isListening ? "Stop voice input" : "Start voice input"}
          title={isListening ? "Stop voice input" : "Start voice input"}
          onClick={toggleListening}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          {isListening ? <MicOff size={16} aria-hidden="true" /> : <Mic size={16} aria-hidden="true" />}
        </button>
      )}
      {hasSpeechSynthesis && (
        <button
          type="button"
          aria-label={isSpeaking ? "Stop Maria voice" : "Listen to Maria"}
          title={isSpeaking ? "Stop Maria voice" : "Listen to Maria"}
          onClick={toggleSpeaking}
          disabled={!text.trim()}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-40"
        >
          {isSpeaking ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
        </button>
      )}
    </div>
  )
}
