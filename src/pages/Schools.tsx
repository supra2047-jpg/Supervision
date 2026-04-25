import React from "react";
import { motion } from "motion/react";
import { Building2, Search, Plus, MoreVertical } from "lucide-react";

export default function Schools() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50">School Directory</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">Manage and view schools in your district</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all outline-none border border-indigo-500 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add School
        </button>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search schools..." 
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-50 placeholder:text-slate-600 font-bold"
            />
          </div>
          <div className="flex gap-2">
            <select className="bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3 text-[10px] uppercase font-bold tracking-widest outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-300">
              <option>All Districts</option>
              <option>District 1</option>
              <option>District 2</option>
            </select>
            <select className="bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3 text-[10px] uppercase font-bold tracking-widest outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-300">
              <option>Any Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-slate-950/30 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/20">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-50 text-sm">School Name {item}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ID: SCH-2024-{item.toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-slate-300 p-1">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest">Active</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">District 1</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
