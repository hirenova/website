import { createClient } from "@supabase/supabase-js"

if (typeof process.env.NEXT_PUBLIC_SUPABASE_URL !== "string") {
  throw Error("NEXT_PUBLIC_SUPABASE_URL was not specified")
}

if (typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== "string") {
  throw Error("NEXT_PUBLIC_SUPABASE_ANON_KEY was not specified")
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default supabase
