import { useQuery, useMutation } from "@tanstack/react-query";
import { createPost, getPost, getPostById } from "@/api/post";
import { queryClient } from "@/services/queryClient";
import { toast } from "sonner";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPost(),
    enabled: true,
  });
};

export const usePostById = (id: string) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Your post has been created!");
    },
  });
};
