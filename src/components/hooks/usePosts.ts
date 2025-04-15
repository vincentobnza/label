import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/api/post";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPost(),
  });
};
