// supabase-types.ts
export type Profile = {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  website: string | null;
  created_at: string;
};

export type Post = {
  id: string;
  user_id: string;
  display_name: string;
  content: string;
  avatar_url?: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
};

export type PostLike = {
  user_id: string;
  post_id: string;
  created_at: string;
};

export type CommentLike = {
  user_id: string;
  comment_id: string;
  created_at: string;
};

export type Follow = {
  follower_id: string;
  following_id: string;
  created_at: string;
};

export type Notification = {
  id: string;
  recipient_id: string;
  sender_id: string | null;
  type: "like" | "comment" | "follow";
  post_id: string | null;
  is_read: boolean;
  created_at: string;
};

export type Media = {
  id: string;
  post_id: string;
  file_url: string;
  file_type: string | null;
  created_at: string;
};
