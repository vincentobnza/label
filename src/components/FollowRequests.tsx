import { Link } from "react-router-dom";

export const FollowRequests = () => {
  return (
    <div className="w-full border-b border-slate-200 dark:border-slate-800">
      <div className="w-full p-6 text-slate-800 dark:text-slate-200">
        <h1 className="text-md font-bold">Follow Requests</h1>

        <div className="mt-4 space-y-4">
          <p className="text-sm opacity-60">
            You have no follow requests at the moment.
          </p>

          <Link
            to="/"
            className="px-0 text-sm font-bold text-neutral-900 dark:text-indigo-400 hover:underline hover:bg-transparent"
          >
            Find people to follow
          </Link>
        </div>
      </div>
    </div>
  );
};
