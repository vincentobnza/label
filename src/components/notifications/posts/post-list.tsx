import { PostCard } from "../../cards/post-card";
import { usePosts } from "@/hooks/usePosts";
import { Frown } from "lucide-react";
import { SkeletonLoading } from "../../utility/skeleton";
import { useState } from "react";

export const PostList = () => {
  const [isOpenComment, setIsOpenComment] = useState<string | null>(null);
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
        // Skeleton loading state
        <SkeletonLoading count={10} />
      ) : posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <PostCard
              id={post.id}
              avatar_url={post.avatar_url || ""}
              name={post.display_name || "Vincent Obenza"}
              content={post.content}
              img_url={post.image_url || ""}
              isCommentInputOpen={isOpenComment === post.id}
              onToggleComment={() =>
                setIsOpenComment((prevId: string | null) =>
                  prevId === post.id ? null : post.id || null
                )
              }
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
              className="ml-1 text-sm text-indigo-600 dark:text-indigo-400 font-semibold cursor-pointer underline"
            >
              Refresh Page
            </span>
          </p>
        </div>
      )}
    </section>
  );
};
