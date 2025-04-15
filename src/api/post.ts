import { supabase } from "@/services/supabase-client";
import { Post } from "@/types/schema.types.";

export async function getPost(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data as Post[];
}

export async function getPostById(id: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data as Post | null;
}

export async function createPost(post: { content: string }): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .insert(post)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return data as Post;
}
