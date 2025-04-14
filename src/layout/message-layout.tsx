import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navs/navbar";
import Sidebar from "@/components/index/sidebar";

export function MessageLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="ml-80 p-4 flex-1 space-y-4 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
