import React from "react";
import { motion } from "motion/react";
import { FileSignature, Search, Plus, MoreVertical, Filter } from "lucide-react";

export default function Reports() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50">บันทึกการนิเทศ</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">ทบทวนและส่งรายงานการนิเทศ</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all outline-none border border-indigo-500 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          สร้างบันทึกใหม่
        </button>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="ค้นหาบันทึก..." 
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-50 placeholder:text-slate-600 font-bold"
            />
          </div>
          <button className="bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3 text-[10px] uppercase font-bold tracking-widest outline-none text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors">
            <Filter className="w-4 h-4" />
            กรองบันทึก
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left ml-0.5">
            <thead className="bg-slate-950/50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 rounded-tl-2xl">รหัสบันทึก</th>
                <th className="px-6 py-4">โรงเรียน</th>
                <th className="px-6 py-4">วันที่</th>
                <th className="px-6 py-4">สถานะ</th>
                <th className="px-6 py-4 text-right rounded-tr-2xl">การกระทำ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-slate-300">LOG-230{item}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-bold text-slate-50">โรงเรียนตัวอย่าง {item}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium whitespace-nowrap">ต.ค. {20 - item}, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold border ${item % 2 === 0 ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"}`}>
                      {item % 2 === 0 ? "รออนุมัติ" : "อนุมัติแล้ว"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
