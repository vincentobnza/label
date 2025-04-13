import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="mx-80 p-4 flex-1 space-y-4 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}
