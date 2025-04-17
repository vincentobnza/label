import { countComments, fetchComments } from "@/api/comments";
import { useQuery } from "@tanstack/react-query";

export function useComments({ postId }: { postId: string }) {
  return useQuery({
    queryKey: ["comments"],
    queryFn: () => fetchComments(postId),
    enabled: !!postId,
  });
}

export function useCommentCount({ postId }: { postId: string }) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => countComments(postId),
    enabled: !!postId,
  });
}
