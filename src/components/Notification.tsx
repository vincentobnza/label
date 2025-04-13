import { Bell } from "lucide-react";

export const Notification = () => {
  return (
    <button>
      <Bell size={20} className="text-slate-600 dark:text-slate-400" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
};
