import { useReducer, useState } from "react";
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
import { useAutoResizeTextarea } from "@/hooks/useAutoResizeTextArea";
import { Image, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { PostReducers } from "../../reducers/post-reducers";
import { useCreatePost } from "@/hooks/usePosts";
import { useAuth } from "@/context/auth-context";

export function PostDialog() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState<string>("");
  const textareaRef = useAutoResizeTextarea();
  const [showPictureCard, setShowPictureCard] = useState<boolean>(false);
  const [state, dispatch] = useReducer(PostReducers, {
    posts: [],
  });

  const { mutateAsync: createPostMutation, isPending } = useCreatePost();

  const handleSubmit = async () => {
    if (textareaRef.current?.value.length === 0) {
      toast.error("Please write something before posting.");
      return;
    }
    try {
      const newPost = await createPostMutation({
        content: postContent,
      });
      dispatch({ type: "created_post", payload: newPost });
      setPostContent("");
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong while creating the post.");
    }
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

  const display_name =
    user?.user_metadata?.full_name || user?.user_metadata?.email;
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <div className="w-full h-12 flex items-center justify-start px-4 bg-slate-50 dark:bg-slate-800 cursor-pointer rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
          <h1 className="text-sm font-medium opacity-80">
            What's on your mind today, Vincent?
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-xl">
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
                {user ? (
                  <h1 className="text-lg font-medium">{display_name}</h1>
                ) : null}
                <Badge className="h-6 text-xs rounded bg-transparent border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold">
                  Public Post
                </Badge>
              </div>
            </div>
            <Button
              onClick={handlePictureCard}
              variant="outline"
              className="h-8 text-sm font-medium"
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
              className="w-full p-2 h-32 text-sm text-slate-600 dark:text-slate-300 outline-none placeholder:text-[16px] text-[16px] resize-none border-t border-slate-200 dark:border-slate-800 scrollbar-hide"
              placeholder="Write something about this post..."
              spellCheck="false"
            />
          </div>
          {/* PICTURE SECTION */}
          {showPictureCard && (
            <div className="mt-3 w-full h-48 bg-slate-100 dark:bg-slate-800/40 border-2 border-slate-200 dark:border-slate-800"></div>
          )}
        </DialogDescription>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full h-12 text-md font-semibold"
          >
            Post
            {isPending ? <Loader2 className="animate-spin" /> : null}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
