import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pntajlvxplasxnohnurq.supabase.co" as string;
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBudGFqbHZ4cGxhc3hub2hudXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MTc4OTgsImV4cCI6MjA2MDA5Mzg5OH0.tl9b4xJD4jEkfs2yuA9BUIbIVb4uK_ueYYYAI4JgTsA" as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
