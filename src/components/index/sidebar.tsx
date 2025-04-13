import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Compass,
  Bell,
  MessageSquare,
  Bookmark,
  User,
  Gamepad2,
  Megaphone,
  CreditCard,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Feed", path: "/", color: "#4f46e5" }, // Indigo
    { icon: Compass, label: "Explore", path: "/explore", color: "#0ea5e9" }, // Sky indigo
    {
      icon: Bell,
      label: "Notifications",
      path: "/notifications",
      color: "#f59e0b",
    }, // Amber
    {
      icon: MessageSquare,
      label: "Messages",
      path: "/messages",
      color: "#10b981",
    }, // Emerald
    {
      icon: Bookmark,
      label: "Bookmarks",
      path: "/bookmarks",
      color: "#8b5cf6",
    }, // Violet
    { icon: User, label: "Profile", path: "/profile", color: "#ef4444" }, // Red
  ];

  const earnItems = [
    { icon: Gamepad2, label: "Play Games", path: "/games", color: "#eed155" }, // yellow
    { icon: Megaphone, label: "Watch Ads", path: "/ads", color: "#0ea5e9" }, // Sky indigo
  ];

  const subscription = [
    {
      icon: CreditCard,
      label: "Buy Subscription",
      path: "/games",
      color: "#4f46e5",
    }, // Indigo
  ];

  return (
    <div className="fixed left-0 top-14 h-[calc(100vh-40px)] p-6 flex flex-col gap-4 w-80 bg-white dark:bg-slate-900">
      <ul>
        <label className="text-xs opacity-70">Platform</label>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `no-underline font-medium ${
                isActive ? "bg-slate-100 dark:bg-slate-800" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex items-center gap-5 p-2 my-1 rounded cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm ${
                  isActive
                    ? "bg-slate-100 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900"
                    : ""
                }`}
              >
                <item.icon
                  size={16}
                  strokeWidth={isActive ? 3.5 : 3}
                  color={item.color}
                />
                <span>{item.label}</span>
                {isActive && (
                  <div
                    className="ml-auto w-1 h-5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </ul>

      <ul>
        <label className="text-xs opacity-70">Earn Credits</label>
        {earnItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `no-underline font-medium ${
                isActive ? "bg-slate-100 dark:bg-slate-800" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex items-center gap-5 p-2 my-1 rounded cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm ${
                  isActive
                    ? "bg-slate-100 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900"
                    : ""
                }`}
              >
                <item.icon
                  size={16}
                  strokeWidth={isActive ? 3.5 : 3}
                  color={item.color}
                />
                <span>{item.label}</span>
                {isActive && (
                  <div
                    className="ml-auto w-1 h-5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </ul>

      <ul>
        <label className="text-xs opacity-70">Subscription</label>
        {subscription.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `no-underline font-medium ${
                isActive ? "bg-slate-100 dark:bg-slate-800" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex items-center gap-5 p-2 my-1 rounded cursor-pointer text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm ${
                  isActive
                    ? "bg-slate-100 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900"
                    : ""
                }`}
              >
                <item.icon
                  size={16}
                  strokeWidth={isActive ? 3.5 : 3}
                  color={item.color}
                />
                <span>{item.label}</span>
                {isActive && (
                  <div
                    className="ml-auto w-1 h-5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
