import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { isSupabaseConfigured } from "@/lib/supabase/client";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Returns null when Supabase isn't configured, so Server Components/Actions
// can render a friendly notice instead of throwing during render.
export async function supabaseServer() {
  if (!isSupabaseConfigured || !SUPABASE_URL || !SUPABASE_ANON_KEY) return null;

  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Called from a Server Component render, where cookies can't be
          // mutated. proxy.ts refreshes the session cookie on navigation
          // instead, so this is safe to ignore here.
        }
      },
    },
  });
}
