import { DotPatternCard } from "@/components/shared/dot-pattern";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 relative">
      <DotPatternCard />
      <Outlet />
    </div>
  );
};
