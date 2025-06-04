import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/database";

export function createSupabaseClient() {
  return createClient<Database, "lms_saas_app">(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      async accessToken() {
        return (await auth()).getToken();
      },
      db: {
        schema: "lms_saas_app",
      },
    }
  );
}
