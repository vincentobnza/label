import { PostCard } from "../cards/post-card";
import { usePosts } from "@/hooks/usePosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Frown } from "lucide-react";

export const PostList = () => {
  const { data: posts, isLoading, isError, error } = usePosts();

  if (isLoading) {
    console.log("Loading posts...");
  }

  if (isError) {
    console.log("Error loading posts:", error);
  }

  return (
    <section className="space-y-4">
      {isError && (
        <div className="text-center text-red-500">
          <p>Error loading posts: {error?.message || "Unknown error"}</p>
        </div>
      )}
      {isLoading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-40 w-full rounded-md" />
          </div>
        ))
      ) : posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <PostCard
              avatar_url={post.avatar_url || ""}
              name={post.display_name || "Vincent Obenza"}
              content={post.content}
              img_url={post.image_url || ""}
            />
          </div>
        ))
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center">
          <Frown />
          <p className="mt-4 text-center text-sm" aria-live="polite">
            No posts available for viewing.{" "}
            <span
              onClick={() => window.location.reload()}
              className="ml-1 text-sm text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer underline"
            >
              Refresh Page
            </span>
          </p>
        </div>
      )}
    </section>
  );
};
