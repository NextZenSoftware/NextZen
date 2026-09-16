import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { getSupabaseConfig } from "./config"

export async function createSupabaseServerClient() {
  const cookieStore = await cookies()
  const { url, anonKey } = getSupabaseConfig()

  if (!url || !anonKey) {
    throw new Error("Supabase is not configured.")
  }

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Server Components cannot always write cookies; middleware refreshes sessions.
        }
      },
    },
  })
}

export function createSupabaseServiceClient() {
  const { url, serviceRoleKey } = getSupabaseConfig()

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase service role is not configured.")
  }

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
