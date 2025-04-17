import { Comment } from "./../types/schema.types.";
import { supabase } from "@/services/supabase-client";

export async function countComments(postId: string): Promise<number> {
  const { count, error } = await supabase
    .from("comments")
    .select("", { count: "exact", head: true })
    .eq("post_id", postId);
  if (error) throw new Error(error.message);
  return count || 0;
}
export async function fetchComments(postId: string): Promise<Comment[]> {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data as Comment[];
}
