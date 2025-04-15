import { PostCard } from "./post-card"; // Import the memoized PostCard
import { usePosts } from "@/components/hooks/usePosts";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Skeleton } from "@/components/ui/skeleton";

export const PostList = () => {
  const { data: posts, isLoading, isError, error } = usePosts();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const { isIntersecting } = entry || {};

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
          <div key={index} ref={index === posts.length - 1 ? ref : null}>
            {isIntersecting && (
              <PostCard
                avatar_url={post.avatar_url || ""}
                name={post.display_name || "Vincent Obenza"}
                content={post.content}
                img_url={post.image_url || ""}
              />
            )}
          </div>
        ))
      ) : (
        <p className="mt-10 text-center" aria-live="polite">
          No posts available for viewing.
        </p>
      )}
    </section>
  );
};
