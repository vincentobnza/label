import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { EllipsisVertical, ThumbsUp, Rss, Bookmark } from "lucide-react";
import TimeAgo from "timeago-react";
import React from "react";
import { useCommentCount } from "@/hooks/useComments";
import { PostComment } from "../notifications/posts/post-comment";
import { CommentDialog } from "../notifications/posts/post-comment-modal";

type PostCardProps = {
  id?: string;
  avatar_url: string;
  name: string;
  content?: string;
  img_url?: string;
  created_at?: string;
  isCommentInputOpen?: boolean;
  onToggleComment?: () => void;
};

export const PostCard = React.memo(
  ({
    id,
    avatar_url,
    name,
    content,
    img_url,
    created_at,
    isCommentInputOpen,
  }: PostCardProps) => {
    const { data } = useCommentCount({ postId: id! });
    return (
      <div className="space-y-2">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-5 p-6 bg-white dark:bg-slate-800/30 rounded border border-slate-200 dark:border-slate-800">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="size-10">
                <AvatarImage src={avatar_url} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium">{name}</h2>
                <p className="text-xs opacity-70">
                  <TimeAgo
                    datetime={created_at || new Date().toISOString()}
                    locale="en_US"
                    live={false}
                  />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button className="h-7 rounded">
                <Rss strokeWidth={3} />
                Follow
              </Button>
              <Button variant="ghost" className="h-8 rounded">
                <EllipsisVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="w-full text-md">
            <p>{content}</p>
          </div>

          {img_url && (
            <div className="w-full h-90">
              <img
                src={img_url}
                alt="post_name"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="mt-2 w-full flex items-center justify-between">
            <div className="w-full space-y-5">
              <div className="w-full justify-between flex items-center">
                <div className="flex items-center gap-4">
                  <ThumbsUp className="h-5 w-5" />
                  {id && (
                    <CommentDialog
                      id={id}
                      name={name}
                      content={content ?? ""}
                      img_url={img_url}
                    />
                  )}
                </div>

                <Bookmark className="h-5 w-5" />
              </div>

              {/* LIKES COUNT */}

              <div className="text-sm font-thin flex items-center gap-3">
                <p className="opacity-80">0 Like</p>

                {data !== undefined && (
                  <p className="opacity-80">
                    {data > 0 ? (
                      <>
                        {data}
                        {data > 1 ? " Comments" : " Comment"}
                      </>
                    ) : (
                      "Be the first to comment"
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {isCommentInputOpen && <PostComment name={name} />}
      </div>
    );
  }
);
