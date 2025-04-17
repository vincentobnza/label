import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { EllipsisVertical, MessageCircle } from "lucide-react";
import { AvatarComponent } from "../shared/avatar";
export function CommentDialog({
  id,
  name,
  content,
  img_url,
}: {
  id?: string;
  name: string;
  content: string;
  img_url?: string;
}) {
  return (
    <Dialog key={id}>
      <DialogTrigger asChild>
        <MessageCircle className="h-5 w-5 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-screen-sm [&>button]:hidden outline-none p-0">
        <DialogHeader className="flex justify-center items-center p-6 border-b border-slate-200 dark:border-slate-800 text-center">
          <DialogTitle>{name}'s Post</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col items-center gap-4 py-5">
          <div className="w-full flex items-center justify-between px-6">
            <div className="flex items-center gap-6">
              <AvatarComponent img_url="https://tse1.mm.bing.net/th?id=OIP.fdqly0Q8BL_NR_ZozUAHYgHaHa&pid=Api" />
              <div className="space-y-1">
                <h2 className="text-lg font-medium">{name}</h2>
                <p className="text-xs opacity-70">April 13, 2025</p>
              </div>
            </div>
            <EllipsisVertical className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
        {/* post */}
        <div className="space-y-2 mb-8">
          {content && <p className="text-md font-normal px-6">{content}</p>}
          {img_url && (
            <div className="w-full h-80 p-5">
              <img
                src={img_url}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
