import { Outlet, NavLink } from "react-router-dom";
import {
  Menu,
  Home,
  Building2,
  FileSignature,
  Users,
  Sliders,
  Dashboard as DashboardIcon,
  Briefcase
} from "lucide-react";
import { cn } from "../../lib/utils";

export default function AppLayout() {
  return (
    <div className="bg-slate-950 text-slate-50 mb-20 md:mb-0 min-h-screen">
      {/* TopAppBar */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 docked full-width top-0 z-50 sticky transition-all">
        <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors">
              <Menu className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-xl font-bold text-slate-50 uppercase tracking-tight">ระบบนิเทศการศึกษา</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-slate-50">
                ดร. สมชาย ใจดี
              </p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">รหัสผู้นิเทศ: 99283</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-800">
              <img
                alt="User Profile Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp2KEhnvrnMABakp9m-4frUzWtaZRsHL1_9YZ5rDZ4otlBaoYnB4ZLYNuX2ss5YoiIkX-saiiG67RgP5RYeByVpvdlOTaDZkcOQC0YGhqNhX4EDU7IGFv6umsgUdhMFgtulstK-nYZcOr0p0uIymetboXXQuFgGluxzSASG567xgxXdXDaqclkJmHBb8ik8OSoDWb4loAo7xUBd8lwz_g7eoalMkLlgYIIcQ17iLD2p6R6MY9TxYuQbkSRlXcTm9gU3-DWHNEMGD0"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-4 py-8 md:flex md:gap-8 min-h-[calc(100vh-4rem)] relative">
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden md:block w-72 shrink-0">
          <nav className="bg-slate-900 h-[calc(100vh-8rem)] rounded-3xl border border-slate-800 flex flex-col py-6 sticky top-24">
            <div className="px-6 mb-8">
              <h2 className="text-slate-50 font-bold text-lg uppercase tracking-tight">หัวหน้าผู้นิเทศ</h2>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">หน่วยงานการศึกษา</p>
            </div>
            
            <div className="flex flex-col gap-1">
              <NavLink
                to="/app/dashboard"
                className={({ isActive }) => cn(
                  "mx-2 my-1 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out flex items-center gap-3 text-xs font-bold uppercase tracking-widest",
                  isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                )}
              >
                <Home className="w-5 h-5" /> ภาพรวม
              </NavLink>

              <NavLink
                to="/app/schools"
                className={({ isActive }) => cn(
                  "mx-2 my-1 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-left",
                  isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                )}
              >
                <Building2 className="w-5 h-5" /> ทะเบียนโรงเรียน
              </NavLink>
              
              <NavLink
                to="/app/reports"
                className={({ isActive }) => cn(
                  "mx-2 my-1 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-left",
                  isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                )}
              >
                <FileSignature className="w-5 h-5" /> บันทึกการนิเทศ
              </NavLink>
              
              <NavLink
                to="/app/team"
                className={({ isActive }) => cn(
                  "mx-2 my-1 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-left",
                  isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                )}
              >
                <Users className="w-5 h-5" /> ผลงานทีม
              </NavLink>
              
              <NavLink
                to="/app/profile"
                className={({ isActive }) => cn(
                  "mx-2 my-1 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out flex items-center gap-3 text-xs font-bold uppercase tracking-widest",
                  isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                )}
              >
                <Sliders className="w-5 h-5" /> ตั้งค่าระบบ
              </NavLink>
            </div>

             <div className="mt-auto px-6 py-4 border-t border-slate-800 w-full flex items-center gap-3 justify-start">
                <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px] tracking-tighter" title="หัวหน้าผู้นิเทศ">LS</div>
                <div className="truncate flex-1">
                    <p className="text-xs font-bold text-slate-50 uppercase tracking-widest truncate">หัวหน้าผู้นิเทศ</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest truncate">รหัส: 99283</p>
                </div>
                </div>
            </div>
          </nav>
        </aside>

        {/* Profile/Dashboard Content (Outlet) */}
        <div className="flex-1 w-full max-w-full lg:max-w-[calc(100%-18rem)]">
           <Outlet />
        </div>
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 border-t bg-slate-950 border-slate-800 h-16 px-2 flex justify-around items-center">
        <NavLink
            to="/app/dashboard"
            className={({ isActive }) => cn(
                 "flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-transform duration-150 active:scale-95",
                 isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-500 hover:text-indigo-400"
            )}
        >
          <Home className="w-6 h-6 mb-0.5" />
          <span className="font-sans text-[8px] uppercase tracking-widest font-bold">หน้าแรก</span>
        </NavLink>
        <NavLink
            to="/app/schools"
            className={({ isActive }) => cn(
                 "flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-transform duration-150 active:scale-95",
                 isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-500 hover:text-indigo-400"
            )}
        >
          <Building2 className="w-6 h-6 mb-0.5" />
          <span className="font-sans text-[8px] uppercase tracking-widest font-bold">โรงเรียน</span>
        </NavLink>
        <NavLink
            to="/app/reports"
            className={({ isActive }) => cn(
                 "flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-transform duration-150 active:scale-95",
                 isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-500 hover:text-indigo-400"
            )}
        >
          <FileSignature className="w-6 h-6 mb-0.5" />
          <span className="font-sans text-[8px] uppercase tracking-widest font-bold">รายงาน</span>
        </NavLink>
        <NavLink
            to="/app/profile"
            className={({ isActive }) => cn(
                 "flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-transform duration-150 active:scale-95",
                 isActive ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "text-slate-500 hover:text-indigo-400"
            )}
        >
          <Sliders className="w-6 h-6 mb-0.5" />
          <span className="font-sans text-[8px] uppercase tracking-widest font-bold">ตั้งค่า</span>
        </NavLink>
      </nav>
    </div>
  );
}
