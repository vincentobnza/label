import { supabase } from "@/services/supabase-client";
import { Notification } from "@/types/schema.types.";

export async function getNotification(): Promise<Notification[]> {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data as Notification[];
}
