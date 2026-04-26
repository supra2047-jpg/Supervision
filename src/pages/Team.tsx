import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Search, Plus, Mail, MoreVertical, Edit, Trash2, X } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  visits: number;
  accuracy: number;
  avatarId: number;
}

export default function Team() {
  const [members, setMembers] = useState<TeamMember[]>([
    { id: "1", name: "วิชัย สมบูรณ์", role: "ผู้นิเทศอาวุโส", visits: 45, accuracy: 98, avatarId: 11 },
    { id: "2", name: "สุนิสา ใจดี", role: "ผู้นิเทศ", visits: 38, accuracy: 95, avatarId: 12 },
    { id: "3", name: "สมชาย รักเรียน", role: "ผู้นิเทศ", visits: 42, accuracy: 92, avatarId: 13 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState<Partial<TeamMember>>({ name: "", role: "ผู้นิเทศ" });
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSave = () => {
    if (!formData.name) return;
    
    if (editingMember) {
      setMembers(members.map(m => m.id === editingMember.id ? { ...m, ...formData } as TeamMember : m));
    } else {
      const newMember: TeamMember = {
        id: String(Date.now()),
        name: formData.name || "",
        role: formData.role || "ผู้นิเทศ",
        visits: 0,
        accuracy: 100,
        avatarId: Math.floor(Math.random() * 50) + 1,
      };
      setMembers([...members, newMember]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
    setDropdownOpen(null);
  };

  const openModal = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member);
      setFormData(member);
    } else {
      setEditingMember(null);
      setFormData({ name: "", role: "ผู้นิเทศ" });
    }
    setIsModalOpen(true);
    setDropdownOpen(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMember(null);
  };

  const filteredMembers = members.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
        <button 
          onClick={() => openModal()}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all outline-none border border-indigo-500 flex items-center justify-center gap-2"
        >
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-50 placeholder:text-slate-600 font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((item) => (
            <div key={item.id} className="bg-slate-950/30 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-colors flex flex-col items-center text-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={() => setDropdownOpen(dropdownOpen === item.id ? null : item.id)}
                  className="text-slate-500 hover:text-slate-300 p-1 bg-slate-950/50 rounded-full backdrop-blur-sm"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
                {dropdownOpen === item.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden text-left">
                    <button onClick={() => openModal(item)} className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2">
                       <Edit className="w-3 h-3" /> แก้ไข
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="w-full text-left px-4 py-2 text-xs text-rose-400 hover:bg-slate-700 flex items-center gap-2">
                       <Trash2 className="w-3 h-3" /> ลบ
                    </button>
                  </div>
                )}
              </div>

              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden relative z-10">
                <img 
                  src={`https://i.pravatar.cc/150?img=${item.avatarId}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-slate-50 text-base">{item.name}</h3>
                <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">{item.role}</p>
              </div>
              <div className="flex justify-center gap-2 mt-2 relative z-10 w-full pt-4 border-t border-slate-800/50">
                <div className="text-center flex-1">
                  <p className="text-xl font-bold tracking-tighter text-slate-50">{item.visits}</p>
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">การเยี่ยมชม</p>
                </div>
                <div className="text-center flex-1 border-l border-slate-800/50">
                  <p className="text-xl font-bold tracking-tighter text-emerald-400">{item.accuracy}%</p>
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">ความแม่นยำ</p>
                </div>
              </div>
              <button className="w-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 transition-colors py-2.5 rounded-xl text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 relative z-10 mt-2">
                <Mail className="w-4 h-4" /> ส่งข้อความ
              </button>
            </div>
          ))}
          {filteredMembers.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 font-medium">
              ไม่พบรายชื่อผู้นิเทศ
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
                <h2 className="text-xl font-bold text-slate-50">{editingMember ? "แก้ไขข้อมูลสมาชิก" : "เพิ่มสมาชิกใหม่"}</h2>
                <button onClick={closeModal} className="text-slate-500 hover:text-slate-300 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">ชื่อ-นามสกุล</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="ระบุชื่อ-นามสกุล..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">ตำแหน่ง / บทบาท</label>
                  <select 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="ผู้นิเทศ">ผู้นิเทศ</option>
                    <option value="ผู้นิเทศอาวุโส">ผู้นิเทศอาวุโส</option>
                    <option value="หัวหน้างานนิเทศ">หัวหน้างานนิเทศ</option>
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
