import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 backdrop-blur-md grid place-items-center z-50 transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        <Bouncy size="45" speed="1.75" color="#4f46e5" />
        <div className="animate-pulse text-white/80 text-sm font-medium tracking-wide">
          Loading please wait...
        </div>
      </div>
    </div>
  );
};
