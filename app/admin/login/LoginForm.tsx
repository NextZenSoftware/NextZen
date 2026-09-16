"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react"
import { createSupabaseBrowserClient } from "@/lib/supabase/browser"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const supabase = createSupabaseBrowserClient()
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
      if (signInError) throw signInError
      router.push("/admin")
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Unable to sign in. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.22),_transparent_38%)]" />
      <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.08] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"><ShieldCheck size={24} /></div>
          <div><p className="text-sm font-semibold text-cyan-300">NextzenSoftware</p><h1 className="text-2xl font-semibold tracking-tight text-white">Admin workspace</h1></div>
        </div>
        <p className="mb-8 text-sm leading-relaxed text-slate-300">Sign in to manage enquiries and keep your client pipeline moving.</p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div><label htmlFor="admin-email" className="mb-2 block text-sm font-medium text-slate-200">Work email</label><input id="admin-email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" placeholder="you@company.com" /></div>
          <div><label htmlFor="admin-password" className="mb-2 block text-sm font-medium text-slate-200">Password</label><div className="relative"><LockKeyhole size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input id="admin-password" type="password" required autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="h-12 w-full rounded-xl border border-white/15 bg-white/10 pl-11 pr-4 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" placeholder="Enter your password" /></div></div>
          {error && <p role="alert" className="rounded-xl border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</p>}
          <button type="submit" disabled={isLoading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-60">{isLoading ? "Signing in..." : "Continue to dashboard"}<ArrowRight size={17} /></button>
        </form>
        <p className="mt-8 text-center text-xs text-slate-400">Protected workspace. Access is limited to approved admin accounts.</p>
      </section>
    </main>
  )
}
