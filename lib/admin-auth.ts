import { createSupabaseServerClient } from "@/lib/supabase/server"
import { getAdminEmails, isAllowedAdminEmail } from "@/lib/supabase/config"

export async function getAdminUser() {
  if (getAdminEmails().length === 0) {
    return null
  }

  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || !isAllowedAdminEmail(user.email)) {
    return null
  }

  return user
}
