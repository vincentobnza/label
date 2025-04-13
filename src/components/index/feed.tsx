import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  EllipsisVertical,
  ThumbsUp,
  MessageCircle,
  Rss,
  Send,
} from "lucide-react";
import { Input } from "../ui/input";
type FeedProps = {
  avatar_url: string;
  name: string;
  description?: string;
  img?: string;
};

export const Feed = ({ avatar_url, name, description, img }: FeedProps) => {
  return (
    <div className="space-y-2">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-5 p-6 bg-white dark:bg-slate-800/30 rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="size-10">
              <AvatarImage src={avatar_url} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-xs opacity-70">1 min ago</p>
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
          <p>{description}</p>
        </div>

        {img && (
          <div>
            <img src={img} alt="name" className="w-full h-80" />
          </div>
        )}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="h-8 rounded">
              <ThumbsUp className="h-5 w-5" />
              Like
            </Button>
            <Button variant="ghost" className="h-8 rounded">
              <MessageCircle className="h-5 w-5" />
              Comment
            </Button>
          </div>
          <div className="flex items-center gap-4 pr-5">
            <p className="text-xs opacity-70">1 Like</p>
            <p className="text-xs opacity-70">0 Comments</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full">
        <Avatar className="size-10">
          <AvatarImage
            src="https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/491058861_1872395456927710_8529157611979072610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_dwnGM5EalqZ8jcu0DWY-Q4BtPDWyE6tDgG08NbITq1kAtP6SJDaEtnjbAGNMlmNQWVQo_Dl2GzUrJdumWo6v&_nc_ohc=BRAagHNoJ2sQ7kNvwH81I6t&_nc_oc=AdnNbHPJGSLx1Q04-L2hhKl75gfZTo8pf7PDX7K2P5kTArayfgIBkPfBS5UYNqRzGthj_OT1dkWIFFmCZSpsf3uF&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=CdktUKzvDRET6q90sBRHdQ&oh=00_AfHJAbmFxP2wHhSmLuQDt1ZFbScXMAc_PDz8xdqXPkdeAg&oe=6801402C"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full flex items-center gap-1">
          <Input
            placeholder={`Post a comment on ${name}'s post`}
            className="dark:bg-slate-800/20 h-10"
          />
          <Button variant="outline" className="h-10">
            <Send
              className="text-neutral-900 dark:text-indigo-400"
              strokeWidth={3}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
