import { Bell } from "lucide-react";
import { Notification } from "./Notification";
import { ToggleTheme } from "./Toggle-theme";
import { Input } from "./ui/input";
import { NavLink } from "react-router-dom";
import { Credits } from "./Credits";
import { useLocation } from "react-router-dom";

type NavbarItems = {
  name: string;
  href: string;
};

const navbarItems: NavbarItems[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore  ",
    href: "/explore",
  },
  {
    name: "Notifications",
    href: "/notifications",
  },
];

export const Navbar = () => {
  const location = useLocation();

  const isInTab =
    location.pathname.includes("/messages") ||
    location.pathname.includes("/explore") ||
    location.pathname.includes("/notifications");
  return (
    <nav className="sticky top-0 w-full p-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40  flex justify-center items-center z-50 backdrop-blur-lg">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center space-x-12">
          <NavLink
            to="/"
            className="logo-font text-lg text-neutral-900 dark:bg-gradient-to-r dark:from-indigo-500 dark:to-purple-500 dark:bg-clip-text dark:text-transparent px-6 tracking-widest italic lowercase"
          >
            LABEL.
          </NavLink>

          <ul className="flex space-x-4">
            {navbarItems.map((item) => (
              <li
                key={item.name}
                className="inline-block text-xs font-medium text-slate-700 dark:text-slate-200"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <Credits />
          {!isInTab && (
            <Input
              placeholder="Search anything here..."
              className="h-8 w-80 placeholder:text-sm placeholder:opacity-70"
            />
          )}
          <Bell size={18} strokeWidth={3} className="opacity-80" />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};
