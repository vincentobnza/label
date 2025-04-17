import { Post } from "@/types/schema.types.";

type PostAction = {
  type: "created_post" | "deleted_post";
  payload: Post;
};

type PostState = {
  posts: Post[];
};

export function PostReducers(state: PostState, action: PostAction): PostState {
  switch (action.type) {
    case "created_post":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "deleted_post":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    default:
      return state;
  }
}
