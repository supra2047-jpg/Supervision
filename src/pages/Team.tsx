import React from "react";
import { motion } from "motion/react";
import { Users, Search, Plus, Mail } from "lucide-react";

export default function Team() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50">ผลงานทีม</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">จัดการผู้นิเทศและดู KPI</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all outline-none border border-indigo-500 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          เพิ่มสมาชิก
        </button>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="ค้นหาสมาชิกทีม..." 
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-50 placeholder:text-slate-600 font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-slate-950/30 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-colors flex flex-col items-center text-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden relative z-10">
                <img 
                  src={`https://i.pravatar.cc/150?img=${item + 10}`} 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-slate-50 text-base">สมาชิกคนที่ {item}</h3>
                <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">ผู้นิเทศอาวุโส</p>
              </div>
              <div className="flex justify-center gap-2 mt-2 relative z-10 w-full pt-4 border-t border-slate-800/50">
                <div className="text-center flex-1">
                  <p className="text-xl font-bold tracking-tighter text-slate-50">4{item}</p>
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">การเยี่ยมชม</p>
                </div>
                <div className="text-center flex-1 border-l border-slate-800/50">
                  <p className="text-xl font-bold tracking-tighter text-emerald-400">9{item}%</p>
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">ความแม่นยำ</p>
                </div>
              </div>
              <button className="w-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 transition-colors py-2.5 rounded-xl text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 relative z-10 mt-2">
                <Mail className="w-4 h-4" /> ข้อความ
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
