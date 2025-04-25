import { Button } from "../../ui/button";
import { Send } from "lucide-react";
import { Input } from "../../ui/input";
import { AvatarComponent } from "../../shared/avatar";
import { useInputFocus } from "@/hooks/useInputFocus";

export const PostComment = ({ name }: { name: string }) => {
  const ref = useInputFocus();
  return (
    <div className="flex items-center gap-4 w-full">
      <AvatarComponent img_url="https://cdn-icons-png.flaticon.com/128/9408/9408175.png" />
      <div className="w-full flex items-center gap-1">
        <Input
          ref={ref}
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
  );
};
