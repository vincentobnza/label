import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostDialog } from "../posts/post-dialog";
import { Button } from "../ui/button";
import { Image, SmilePlus, Headset, Video } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export const Header = () => {
  const { user } = useAuth();
  return (
    <nav className="w-full max-w-screen-lg mx-auto flex flex-col gap-6 p-6 bg-white dark:bg-slate-800/30 rounded border border-slate-200 dark:border-slate-800">
      <div className="w-full flex items-center jsutify-between space-x-6">
        <Avatar className="size-10">
          <AvatarImage src={user?.user_metadata.avatar_url} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <PostDialog />
      </div>

      <ActionButton />
    </nav>
  );
};

const ActionButton = () => {
  const actions = [
    { icon: <Image className="text-green-400" />, text: "Photo / Memories" },
    { icon: <SmilePlus className="text-amber-400" />, text: "Feelings / Emotions" },
    { icon: <Video className="text-rose-400" />, text: "Video Clip" },
    { icon: <Headset className="text-indigo-400" />, text: "Listening to Music" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="ghost"
          className="text-sm font-normal text-slate-800 dark:text-slate-300"
        >
          {action.icon}
          {action.text}
        </Button>
      ))}
    </div>
  );
};
