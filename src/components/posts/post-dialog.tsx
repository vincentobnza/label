import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/api/post";

export function PostDialog() {
  const [postContent, setPostContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log("Post created:", data);
      setPostContent(""); // reset after post
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", autoResizeTextarea);
      autoResizeTextarea();

      return () => {
        textarea.removeEventListener("input", autoResizeTextarea);
      };
    }
  }, []);

  const handlePostSubmit = () => {
    if (postContent.trim() === "") return;

    mutate({
      id: "1314dsfsfs", // Generate temporary ID
      content: postContent,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      user_id: "user-id-placeholder",
      display_name: "Vincent Obenza",
      avatar_url: "https://github.com/shadcn.png",
      image_url: null, // Add the missing image_url property
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-12 flex items-center justify-start px-4 bg-slate-50 dark:bg-slate-800 cursor-pointer rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
          <h1 className="text-sm font-medium opacity-80">
            What's on your mind today, Vincent?
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>

        <DialogDescription className="mt-2">
          <div className="flex items-center space-x-8">
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Vincent Obenza</h1>
              <Badge className="h-6 text-xs rounded bg-transparent border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold">
                Public Post
              </Badge>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <textarea
              ref={textareaRef}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              onInput={autoResizeTextarea}
              className="w-full p-2 h-24 text-sm text-slate-600 dark:text-slate-300 outline-none placeholder:text-[16px] text-[16px] resize-none"
              placeholder="Write something here..."
              spellCheck="false"
            />
          </div>
        </DialogDescription>

        <DialogFooter>
          <Button
            onClick={handlePostSubmit}
            disabled={isPending || postContent.trim() === ""}
            className="w-full h-12 text-md font-bold"
          >
            {isPending ? "Posting..." : "Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
