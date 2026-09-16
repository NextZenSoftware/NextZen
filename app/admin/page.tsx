import { redirect } from "next/navigation"
import { getAdminUser } from "@/lib/admin-auth"
import { getSupabaseConfig } from "@/lib/supabase/config"
import { createSupabaseServiceClient } from "@/lib/supabase/server"
import { AdminDashboard } from "./AdminDashboard"

export default async function AdminPage() {
  const config = getSupabaseConfig()
  const user = await getAdminUser()

  if (!config.isConfigured) {
    return <SetupNotice />
  }

  if (!user) {
    redirect("/admin/login")
  }

  const supabase = createSupabaseServiceClient()
  const { data: enquiries, error } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false }).limit(100)

  return <AdminDashboard adminEmail={user.email ?? "Admin"} enquiries={error ? [] : enquiries ?? []} hasDatabaseError={Boolean(error)} />
}

function SetupNotice() {
  return <main className="flex min-h-screen items-center justify-center px-6"><div className="max-w-lg rounded-3xl border border-amber-300/20 bg-amber-400/10 p-8 text-center"><h1 className="text-2xl font-semibold text-white">Admin setup required</h1><p className="mt-3 text-sm leading-relaxed text-slate-300">Add the Supabase environment variables and apply `supabase/schema.sql` before using the admin workspace.</p></div></main>
}
