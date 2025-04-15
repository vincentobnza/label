import { useState } from "react";
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
import { queryClient } from "@/services/queryClient";
import { useAutoResizeTextarea } from "@/hooks/useAutoResizeTextArea";
import { Image } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export function PostDialog() {
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState<string>("");
  const textareaRef = useAutoResizeTextarea();
  const [showPictureCard, setShowPictureCard] = useState<boolean>(false);

  const { mutateAsync: createPostMutation, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast("Post Created!", {
        description: "Your post has been successfully created.",
      });
    },
  });

  const handleSubmit = async () => {
    await createPostMutation({
      content: postContent as string,
    });
    setPostContent("");
    setOpen(false);
  };

  const handlePictureCard = () => {
    setShowPictureCard((prev) => !prev);
  };

  const handleOpenChange = (newOpenState: boolean) => {
    setOpen(newOpenState);
    if (!newOpenState) {
      setShowPictureCard(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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
          <div className="w-full flex justify-between">
            <div className="flex items-center space-x-8">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-semibold">Vincent Obenza</h1>
                <Badge className="h-6 text-xs rounded bg-transparent border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold">
                  Public Post
                </Badge>
              </div>
            </div>

            <Button
              onClick={handlePictureCard}
              variant="outline"
              className="h-8 text-sm font-semibold"
            >
              <Image />
              Photo
            </Button>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <textarea
              ref={textareaRef}
              required
              onFocus={(e) => e.target.select()}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full p-2 h-24 text-sm text-slate-600 dark:text-slate-300 outline-none placeholder:text-[16px] text-[16px] resize-none border-t border-slate-200 dark:border-slate-800 scrollbar-hide"
              placeholder="Write something about this post..."
              spellCheck="false"
            />
          </div>

          {/* PICTURE SECTION */}
          {showPictureCard && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 w-full h-48 bg-slate-100 dark:bg-slate-800/40 border-2 border-slate-200 dark:border-slate-800"
            ></motion.div>
          )}
        </DialogDescription>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="w-full h-12 text-md font-bold"
          >
            {isPending ? "Posting..." : "Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
