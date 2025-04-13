import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostDialog } from "./PostDialog";
import { Button } from "./ui/button";
import { Image, SmilePlus, Headset, Video } from "lucide-react";

export const Header = () => {
  return (
    <nav className="w-full max-w-screen-lg mx-auto flex flex-col gap-6 p-6 bg-white dark:bg-slate-800/30 rounded-lg border border-slate-200 dark:border-slate-800">
      <div className="w-full flex items-center jsutify-between space-x-6">
        <Avatar className="size-10">
          <AvatarImage
            src="https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/491058861_1872395456927710_8529157611979072610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_dwnGM5EalqZ8jcu0DWY-Q4BtPDWyE6tDgG08NbITq1kAtP6SJDaEtnjbAGNMlmNQWVQo_Dl2GzUrJdumWo6v&_nc_ohc=BRAagHNoJ2sQ7kNvwH81I6t&_nc_oc=AdnNbHPJGSLx1Q04-L2hhKl75gfZTo8pf7PDX7K2P5kTArayfgIBkPfBS5UYNqRzGthj_OT1dkWIFFmCZSpsf3uF&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=CdktUKzvDRET6q90sBRHdQ&oh=00_AfHJAbmFxP2wHhSmLuQDt1ZFbScXMAc_PDz8xdqXPkdeAg&oe=6801402C"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <PostDialog />
      </div>

      <ActionButton />
    </nav>
  );
};

const ActionButton = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button variant="ghost">
        <Image className="text-green-400" />
        Photo / Memories
      </Button>
      <Button variant="ghost">
        <SmilePlus className="text-amber-400" />
        Feelings / Emotions
      </Button>
      <Button variant="ghost">
        <Video className="text-rose-400" />
        Video Clip
      </Button>
      <Button variant="ghost">
        <Headset className="text-indigo-400" />
        Listening to Music
      </Button>
    </div>
  );
};
