"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { BarChart3, CheckCircle2, Clock3, LogOut, Mail, Menu, Search, Shield, X, type LucideIcon } from "lucide-react"
import { createSupabaseBrowserClient } from "@/lib/supabase/browser"

type Enquiry = {
  id: string
  name: string
  email: string
  project: string
  source: string
  status: "new" | "contacted" | "converted" | "closed"
  created_at: string
  admin_notes: string
}

type StatCard = { label: string; count: number; Icon: LucideIcon }

const statusLabels = { new: "New", contacted: "Contacted", converted: "Converted", closed: "Closed" }

export function AdminDashboard({ adminEmail, enquiries: initialEnquiries, hasDatabaseError }: { adminEmail: string; enquiries: Enquiry[]; hasDatabaseError: boolean }) {
  const [enquiries, setEnquiries] = useState(initialEnquiries)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selected, setSelected] = useState<Enquiry | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  const filtered = useMemo(() => enquiries.filter((enquiry) => {
    const matchesStatus = statusFilter === "all" || enquiry.status === statusFilter
    const searchable = `${enquiry.name} ${enquiry.email} ${enquiry.project}`.toLowerCase()
    return matchesStatus && searchable.includes(query.toLowerCase())
  }), [enquiries, query, statusFilter])

  const counts = {
    all: enquiries.length,
    new: enquiries.filter((item) => item.status === "new").length,
    contacted: enquiries.filter((item) => item.status === "contacted").length,
    converted: enquiries.filter((item) => item.status === "converted").length,
  }

  const statCards: StatCard[] = [
    { label: "Total enquiries", count: counts.all, Icon: BarChart3 },
    { label: "New leads", count: counts.new, Icon: Clock3 },
    { label: "Contacted", count: counts.contacted, Icon: Mail },
    { label: "Converted", count: counts.converted, Icon: CheckCircle2 },
  ]

  async function updateStatus(id: string, status: Enquiry["status"]) {
    const response = await fetch("/api/admin/enquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    if (!response.ok) return
    setEnquiries((current) => current.map((item) => item.id === id ? { ...item, status } : item))
    setSelected((current) => current?.id === id ? { ...current, status } : current)
  }

  async function signOut() {
    const supabase = createSupabaseBrowserClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <aside className={`fixed inset-y-0 left-0 z-30 w-72 border-r border-white/10 bg-slate-900 p-6 transition-transform lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <div><p className="text-sm font-semibold text-cyan-300">NextzenSoftware</p><p className="mt-1 text-xl font-semibold text-white">Admin workspace</p></div>
          <button className="rounded-lg p-2 text-slate-400 lg:hidden" onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar"><X size={19} /></button>
        </div>
        <nav className="mt-12 space-y-2"><div className="flex items-center gap-3 rounded-xl bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300"><BarChart3 size={18} />Enquiries</div></nav>
        <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-5"><p className="truncate text-xs text-slate-400">{adminEmail}</p><button onClick={signOut} className="mt-4 flex items-center gap-2 text-sm text-slate-300 hover:text-white"><LogOut size={16} />Sign out</button></div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/10 bg-slate-950/90 px-5 backdrop-blur-xl sm:px-8">
          <button className="rounded-lg p-2 text-slate-300 lg:hidden" onClick={() => setIsSidebarOpen(true)} aria-label="Open sidebar"><Menu size={21} /></button>
          <div className="hidden lg:block"><p className="text-sm text-slate-400">Operations overview</p><h1 className="text-xl font-semibold text-white">Enquiry pipeline</h1></div>
          <div className="flex items-center gap-2 text-sm text-slate-400"><Shield size={16} className="text-cyan-300" /> Secure admin area</div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="mb-8 lg:hidden"><p className="text-sm text-slate-400">Operations overview</p><h1 className="mt-1 text-2xl font-semibold text-white">Enquiry pipeline</h1></div>
          {hasDatabaseError && <div className="mb-6 rounded-xl border border-amber-300/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">The enquiry table could not be loaded. Check the Supabase schema and service role configuration.</div>}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{statCards.map(({ label, count, Icon }) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"><div className="flex items-center justify-between"><p className="text-sm text-slate-400">{label}</p><Icon size={18} className="text-cyan-300" /></div><p className="mt-4 text-3xl font-semibold text-white">{count}</p></div>)}</div>

          <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold text-white">Recent enquiries</h2><p className="mt-1 text-sm text-slate-400">Review and update your incoming leads.</p></div><div className="flex flex-col gap-2 sm:flex-row"><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search enquiries" className="h-10 w-full rounded-lg border border-white/10 bg-slate-900 pl-9 pr-3 text-sm text-white outline-none focus:border-cyan-300 sm:w-52" /></div><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-10 rounded-lg border border-white/10 bg-slate-900 px-3 text-sm text-slate-300 outline-none focus:border-cyan-300"><option value="all">All statuses</option>{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-5 py-4 font-medium">Lead</th><th className="px-5 py-4 font-medium">Source</th><th className="px-5 py-4 font-medium">Status</th><th className="px-5 py-4 font-medium">Received</th><th className="px-5 py-4" /></tr></thead><tbody className="divide-y divide-white/10">{filtered.map((enquiry) => <tr key={enquiry.id} className="text-slate-300"><td className="px-5 py-4"><p className="font-medium text-white">{enquiry.name}</p><p className="mt-1 text-xs text-slate-500">{enquiry.email}</p></td><td className="px-5 py-4 capitalize">{enquiry.source}</td><td className="px-5 py-4"><select value={enquiry.status} onChange={(event) => updateStatus(enquiry.id, event.target.value as Enquiry["status"])} className="rounded-lg border border-white/10 bg-slate-900 px-2.5 py-2 text-xs text-slate-200 outline-none focus:border-cyan-300">{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></td><td className="px-5 py-4 text-xs text-slate-500">{new Date(enquiry.created_at).toLocaleDateString()}</td><td className="px-5 py-4 text-right"><button onClick={() => setSelected(enquiry)} className="font-medium text-cyan-300 hover:text-cyan-200">View</button></td></tr>)}{filtered.length === 0 && <tr><td colSpan={5} className="px-5 py-16 text-center text-slate-500">No enquiries match your filters.</td></tr>}</tbody></table></div>
          </section>
        </main>
      </div>

      {selected && <div className="fixed inset-0 z-40 flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setSelected(null)}><article className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl sm:rounded-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-4"><div><p className="text-sm text-cyan-300">{selected.source} lead</p><h2 className="mt-1 text-2xl font-semibold text-white">{selected.name}</h2><a href={`mailto:${selected.email}`} className="mt-1 block text-sm text-slate-400 hover:text-cyan-300">{selected.email}</a></div><button onClick={() => setSelected(null)} className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close enquiry"><X size={18} /></button></div><div className="mt-6 rounded-xl bg-white/[0.05] p-4"><p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">{selected.project}</p></div><div className="mt-6"><p className="text-xs uppercase tracking-wider text-slate-500">Update status</p><div className="mt-3 flex flex-wrap gap-2">{Object.entries(statusLabels).map(([value, label]) => <button key={value} onClick={() => updateStatus(selected.id, value as Enquiry["status"])} className={`rounded-lg px-3 py-2 text-sm ${selected.status === value ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-300 hover:bg-white/15"}`}>{label}</button>)}</div></div></article></div>}
    </div>
  )
}
