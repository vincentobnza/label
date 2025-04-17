import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { DotPatternCard } from "../shared/dot-pattern";

export const ProfileCard = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-8 px-5 bg-white dark:bg-slate-800/30 rounded border border-slate-200 dark:border-slate-800 relative">
      <DotPatternCard />
      <div className="flex items-center gap-6">
        <Avatar className="size-10">
          <AvatarImage
            src="https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/491058861_1872395456927710_8529157611979072610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_dwnGM5EalqZ8jcu0DWY-Q4BtPDWyE6tDgG08NbITq1kAtP6SJDaEtnjbAGNMlmNQWVQo_Dl2GzUrJdumWo6v&_nc_ohc=BRAagHNoJ2sQ7kNvwH81I6t&_nc_oc=AdnNbHPJGSLx1Q04-L2hhKl75gfZTo8pf7PDX7K2P5kTArayfgIBkPfBS5UYNqRzGthj_OT1dkWIFFmCZSpsf3uF&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=CdktUKzvDRET6q90sBRHdQ&oh=00_AfHJAbmFxP2wHhSmLuQDt1ZFbScXMAc_PDz8xdqXPkdeAg&oe=6801402C"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <h1 className="text-md font-semibold">Vincent Obenza</h1>
          <p className="text-xs opacity-70">Joined on 12th March 2025</p>
        </div>
      </div>

      <Button className="w-full h-8">
        <LogOut strokeWidth={3} />
        Logout
      </Button>
    </div>
  );
};
