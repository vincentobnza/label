import { useComments } from "@/hooks/useComments";
import { useParams } from "react-router-dom";

export const CommentsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: comments, isLoading, error } = useComments({ postId: id! });

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">
        Comments{" "}
        <span className="text-sm opacity-70 ml-2">{comments?.length}</span>
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-md">
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <div>No comments found.</div>
      )}
    </div>
  );
};

export default CommentsPage;
