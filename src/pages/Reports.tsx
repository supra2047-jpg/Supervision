import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileSignature, Search, Plus, MoreVertical, X, Trash2, Edit } from "lucide-react";

interface Report {
  id: string;
  school: string;
  date: string;
  status: "รออนุมัติ" | "อนุมัติแล้ว";
}

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([
    { id: "LOG-2024-01", school: "โรงเรียนอนุบาลเมือง", date: "ต.ค. 15, 2024", status: "อนุมัติแล้ว" },
    { id: "LOG-2024-02", school: "โรงเรียนพัฒนาวิทยา", date: "ต.ค. 18, 2024", status: "รออนุมัติ" },
    { id: "LOG-2024-03", school: "โรงเรียนวัดใหญ่", date: "ต.ค. 20, 2024", status: "รออนุมัติ" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [formData, setFormData] = useState<Partial<Report>>({ school: "", date: "", status: "รออนุมัติ" });
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSave = () => {
    if (!formData.school || !formData.date) return;
    
    if (editingReport) {
      setReports(reports.map(r => r.id === editingReport.id ? { ...r, ...formData } as Report : r));
    } else {
      const newId = `LOG-${new Date().getFullYear()}-${String(reports.length + 1).padStart(2, '0')}`;
      setReports([...reports, { ...formData, id: newId } as Report]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    setReports(reports.filter(r => r.id !== id));
    setDropdownOpen(null);
  };

  const openModal = (report?: Report) => {
    if (report) {
      setEditingReport(report);
      setFormData(report);
    } else {
      setEditingReport(null);
      setFormData({ 
        school: "", 
        date: new Date().toLocaleDateString('th-TH', { month: 'short', day: 'numeric', year: 'numeric' }), 
        status: "รออนุมัติ" 
      });
    }
    setIsModalOpen(true);
    setDropdownOpen(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingReport(null);
  };

  const toggleStatus = (id: string) => {
    setReports(reports.map(r => {
      if (r.id === id) {
        return { ...r, status: r.status === "อนุมัติแล้ว" ? "รออนุมัติ" : "อนุมัติแล้ว" };
      }
      return r;
    }));
    setDropdownOpen(null);
  };

  const filteredReports = reports.filter(r => r.school.toLowerCase().includes(searchTerm.toLowerCase()) || r.id.toLowerCase().includes(searchTerm.toLowerCase()));

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
        <button 
          onClick={() => openModal()}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all outline-none border border-indigo-500 flex items-center justify-center gap-2"
        >
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-50 placeholder:text-slate-600 font-bold"
            />
          </div>
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
              {filteredReports.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-slate-300">{item.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-bold text-slate-50">{item.school}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold border ${item.status === "รออนุมัติ" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                    <button 
                      onClick={() => setDropdownOpen(dropdownOpen === item.id ? null : item.id)}
                      className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {dropdownOpen === item.id && (
                      <div className="absolute right-8 top-10 mt-0 w-44 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-20 overflow-hidden text-left">
                        <button onClick={() => toggleStatus(item.id)} className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                          อัปเดตสถานะ
                        </button>
                        <button onClick={() => openModal(item)} className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                          <Edit className="w-4 h-4" /> แก้ไข
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="w-full text-left px-4 py-2.5 text-sm text-rose-400 hover:bg-slate-700 flex items-center gap-2">
                          <Trash2 className="w-4 h-4" /> ลบ
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {filteredReports.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500 font-medium">
                    ไม่พบข้อมูลบันทึก
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-full max-w-md relative z-10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-50">{editingReport ? "แก้ไขบันทึก" : "บันทึกการนิเทศใหม่"}</h2>
                <button onClick={closeModal} className="text-slate-500 hover:text-slate-300 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">โรงเรียนที่รับการนิเทศ</label>
                  <input 
                    type="text" 
                    value={formData.school}
                    onChange={(e) => setFormData({...formData, school: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="ระบุชื่อโรงเรียน..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">วันที่</label>
                  <input 
                    type="text" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="ต.ค. 15, 2024"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">สถานะ</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value as "รออนุมัติ" | "อนุมัติแล้ว"})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="รออนุมัติ">รออนุมัติ</option>
                    <option value="อนุมัติแล้ว">อนุมัติแล้ว</option>
                  </select>
                </div>

                <div className="pt-4 flex gap-3">
                  <button onClick={closeModal} className="flex-1 px-4 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-700 transition-colors">
                    ยกเลิก
                  </button>
                  <button onClick={handleSave} className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 transition-colors">
                    บันทึกข้อมูล
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
