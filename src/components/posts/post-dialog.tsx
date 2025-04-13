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

export function PostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-12 flex items-center justify-start px-4 bg-slate-50 dark:bg-slate-800 cursor-pointer rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
          <h1 className="text-sm  font-medium opacity-80">
            What's on your mind today, Vincent?
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>{" "}
        </DialogHeader>

        <DialogDescription className="mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-8">
              <Avatar className="size-10">
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
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <textarea
              className="w-full p-2 h-24 text-sm text-slate-600 dark:text-slate-300 outline-none placeholder:text-[16px] text-[16px]"
              placeholder="Write something here..."
              spellCheck="false"
            ></textarea>
          </div>
        </DialogDescription>

        <DialogFooter>
          <Button type="submit" className="w-full h-12 text-md font-bold">
            Drop it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
