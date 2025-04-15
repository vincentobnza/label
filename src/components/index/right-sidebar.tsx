import { FollowRequests } from "./follow-requests";
import { ProfileCard } from "../cards/profile-card";

const RightSidebar = () => {
  return (
    <div className="fixed right-0 top-14 h-[calc(100vh-40px)] flex flex-col gap-4 w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-4">
      <ProfileCard />
      <FollowRequests />
    </div>
  );
};

export default RightSidebar;
