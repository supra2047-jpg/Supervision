import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Search, Plus, MoreVertical, X, Edit, Trash2 } from "lucide-react";

interface School {
  id: string;
  name: string;
  district: string;
  status: "Active" | "Inactive";
}

export default function Schools() {
  const [schools, setSchools] = useState<School[]>([
    { id: "SCH-2024-01", name: "โรงเรียนอนุบาลเมือง", district: "เขต 1", status: "Active" },
    { id: "SCH-2024-02", name: "โรงเรียนวัดใหญ่", district: "เขต 2", status: "Active" },
    { id: "SCH-2024-03", name: "โรงเรียนพัฒนาวิทยา", district: "เขต 1", status: "Inactive" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchool, setEditingSchool] = useState<School | null>(null);
  const [formData, setFormData] = useState<Partial<School>>({ name: "", district: "เขต 1", status: "Active" });
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSave = () => {
    if (!formData.name) return;
    
    if (editingSchool) {
      setSchools(schools.map(s => s.id === editingSchool.id ? { ...s, ...formData } as School : s));
    } else {
      const newId = `SCH-${new Date().getFullYear()}-${String(schools.length + 1).padStart(2, '0')}`;
      setSchools([...schools, { ...formData, id: newId } as School]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    setSchools(schools.filter(s => s.id !== id));
    setDropdownOpen(null);
  };

  const openModal = (school?: School) => {
    if (school) {
      setEditingSchool(school);
      setFormData(school);
    } else {
      setEditingSchool(null);
      setFormData({ name: "", district: "เขต 1", status: "Active" });
    }
    setIsModalOpen(true);
    setDropdownOpen(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSchool(null);
  };

  const filteredSchools = schools.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50">รายชื่อโรงเรียน</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">จัดการและดูโรงเรียนในเขตพื้นที่</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all outline-none border border-indigo-500 flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          เพิ่มโรงเรียน
        </button>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="ค้นหาโรงเรียน..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-50 placeholder:text-slate-600 font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredSchools.map((school) => (
            <div key={school.id} className="bg-slate-950/30 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors flex flex-col gap-4 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/20 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-50 text-sm line-clamp-1">{school.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">รหัส: {school.id}</p>
                  </div>
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setDropdownOpen(dropdownOpen === school.id ? null : school.id)}
                    className="text-slate-500 hover:text-slate-300 p-1"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                  
                  {dropdownOpen === school.id && (
                    <div className="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-20 overflow-hidden">
                      <button onClick={() => openModal(school)} className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                        <Edit className="w-4 h-4" /> แก้ไข
                      </button>
                      <button onClick={() => handleDelete(school.id)} className="w-full text-left px-4 py-2.5 text-sm text-rose-400 hover:bg-slate-700 flex items-center gap-2">
                        <Trash2 className="w-4 h-4" /> ลบ
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 border rounded-full text-[10px] font-bold uppercase tracking-widest ${school.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-slate-800 text-slate-400 border-slate-700"}`}>
                  {school.status}
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{school.district}</span>
              </div>
            </div>
          ))}
          {filteredSchools.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 font-medium">
              ไม่พบข้อมูลโรงเรียน
            </div>
          )}
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
                <h2 className="text-xl font-bold text-slate-50">{editingSchool ? "แก้ไขข้อมูลโรงเรียน" : "เพิ่มโรงเรียนใหม่"}</h2>
                <button onClick={closeModal} className="text-slate-500 hover:text-slate-300 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">ชื่อโรงเรียน</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="เช่น โรงเรียนพัฒนาวิทยา"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">เขตพื้นที่</label>
                  <select 
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="เขต 1">เขต 1</option>
                    <option value="เขต 2">เขต 2</option>
                    <option value="เขต 3">เขต 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">สถานะ</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value as "Active" | "Inactive"})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="Active">เปิดใช้งาน (Active)</option>
                    <option value="Inactive">ปิดใช้งาน (Inactive)</option>
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
