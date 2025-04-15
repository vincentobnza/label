import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { Rss } from "lucide-react";

type FollowRequestCardProps = {
  img_url: string;
  name: string;
  followers: number;
};

export const FollowRequestCard = ({
  img_url,
  name,
  followers,
}: FollowRequestCardProps) => {
  return (
    <div className="w-full">
      <div className="w-full justify-between flex">
        <div className="flex items-center gap-6">
          <Avatar className="size-9">
            <AvatarImage src={img_url} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold">{name}</h1>
            <p className="text-xs opacity-50">{followers} followers</p>
          </div>
        </div>

        <Rss
          size={18}
          strokeWidth={3}
          className="text-indigo-600 dark:text-indigo-400"
        />
      </div>
    </div>
  );
};
