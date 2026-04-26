import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Mail, 
  Phone, 
  History, 
  GraduationCap,
  Save,
  X,
  LogOut
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("ดร. สมชาย ใจดี");
  const [title, setTitle] = useState("ศึกษานิเทศก์ชำนาญการพิเศษ");

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <motion.div 
      className="space-y-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Bento Layout Profile Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Identity Card */}
        <div className="lg:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 -mr-16 -mt-16 rounded-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 border-4 border-slate-800 shadow-md z-10 relative">
            <img 
              alt={name} 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9T3_X1ne4XuVn195x0O21tH9ttt4lqWFg2KAi5ys5XvkLztTiVeMCMLG82lyu5SQzYf0f7K2mCeGDhHJdxDXUWSao7-f8mOKO3Te6F2QGqYuAGQ6_hHz1tcFzqmCmT7VRk8d8RCr702Q1fJ6PmLOSod33lqQi5nJGE9mEBGWlAtVIhwTsp6vkkbfjL8PO1G35gseW-5XibrhU_TLeH820TaZIX8pFu-9ukKkcES5T-jjiVc1mpoic9TnbufzsdQFKGRBo0jopus"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-2xl font-bold text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs font-bold text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-slate-50 tracking-tight leading-tight">{name}</h2>
                    <p className="text-indigo-400 font-bold text-[10px] uppercase tracking-widest mt-1">{title}</p>
                  </>
                )}
              </div>
              
              <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
                {isEditing ? (
                   <>
                      <button onClick={() => setIsEditing(false)} className="px-4 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-700 active:scale-[0.98] transition-all shadow-md flex-1 md:flex-none flex items-center justify-center gap-1">
                        <X className="w-3 h-3" /> ยกเลิก
                      </button>
                      <button onClick={() => setIsEditing(false)} className="px-4 py-3 bg-indigo-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-md flex-1 md:flex-none flex items-center justify-center gap-1">
                        <Save className="w-3 h-3" /> บันทึก
                      </button>
                   </>
                ) : (
                   <button onClick={() => setIsEditing(true)} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-md w-full md:w-auto">
                      แก้ไขข้อมูลส่วนตัว
                   </button>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-[10px] uppercase tracking-widest font-bold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                ยืนยันตัวตนแล้ว
              </span>
              <span className="px-4 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-[10px] uppercase tracking-widest font-bold text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-400" />
                ปฏิบัติงานมาแล้ว 12 ปี
              </span>
            </div>
          </div>
        </div>
        
        {/* Stats/Brief Info Card */}
        <div className="bg-indigo-600 border border-indigo-500 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 top-12 opacity-10 pointer-events-none">
             <BarChart className="w-48 h-48 rotate-12" />
          </div>
          <div className="relative z-10">
            <p className="text-indigo-200 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
               ภาพรวมการประเมิน
            </p>
            <h3 className="text-5xl font-black mb-1 tracking-tighter">124</h3>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-90 text-indigo-100 mt-1">รายงานการนิเทศปีนี้</p>
          </div>
          <div className="mt-8 pt-6 border-t border-indigo-500 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-90">ประสิทธิภาพเฉลี่ย</span>
              <span className="text-xs tracking-widest font-black">94%</span>
            </div>
            <div className="w-full bg-indigo-950/50 h-2 rounded-full overflow-hidden">
              <motion.div 
               className="bg-indigo-400 h-full rounded-full" 
               initial={{ width: 0 }}
               animate={{ width: "94%" }}
               transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Contact Information */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
               <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-50 tracking-tight">ข้อมูลการติดต่อ</h3>
          </div>
          
          <ul className="space-y-5">
            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group">
              <div className="p-2 bg-slate-800 text-slate-500 rounded-lg group-hover:bg-slate-700 group-hover:text-indigo-400 transition-colors mt-0.5">
                  <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">หน่วยงานต้นสังกัด</p>
                <p className="text-sm font-bold text-slate-50 leading-snug">สำนักงานเขตพื้นที่การศึกษาประถมศึกษา (สพป.) เขต 1</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group">
              <div className="p-2 bg-slate-800 text-slate-500 rounded-lg group-hover:bg-slate-700 group-hover:text-indigo-400 transition-colors mt-0.5">
                  <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">อีเมล</p>
                <p className="text-sm font-bold text-slate-50 leading-snug">somchai.jai@moe.go.th</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group">
              <div className="p-2 bg-slate-800 text-slate-500 rounded-lg group-hover:bg-slate-700 group-hover:text-indigo-400 transition-colors mt-0.5">
                  <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">เบอร์โทรศัพท์</p>
                <p className="text-sm font-bold text-slate-50 leading-snug">081-234-5678</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Supervision History Brief */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
                 <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-50 tracking-tight">ประวัติการนิเทศล่าสุด</h3>
            </div>
            <a className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-all px-3 py-1 rounded-xl hover:bg-slate-800/50" href="#">
                ดูทั้งหมด
            </a>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-slate-800 rounded-2xl hover:border-slate-700 hover:bg-slate-800/20 transition-colors bg-slate-950/20">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-50 truncate">โรงเรียนอนุบาลวัดท่าซุง</h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5 truncate">20 ต.ค. 2566 • การสอนคณิตศาสตร์</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] uppercase font-bold tracking-widest rounded-full shrink-0">
                  สำเร็จ
              </span>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-slate-800 rounded-2xl hover:border-slate-700 hover:bg-slate-800/20 transition-colors bg-slate-950/20">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-50 truncate">โรงเรียนเทศบาล 3</h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5 truncate">18 ต.ค. 2566 • การใช้สื่อเทคโนโลยี</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] uppercase font-bold tracking-widest rounded-full shrink-0">
                  สำเร็จ
              </span>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-slate-800 rounded-2xl hover:border-slate-700 hover:bg-slate-800/20 transition-colors bg-slate-950/20">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-50 truncate">โรงเรียนบ้านหนองบัว</h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5 truncate">15 ต.ค. 2566 • ติดตามผลประเมินครู</p>
              </div>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] uppercase font-bold tracking-widest rounded-full shrink-0">
                  ร่าง
              </span>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-8">
        <button 
          onClick={handleLogout}
          className="w-full sm:w-auto bg-slate-900 text-rose-400 border border-rose-500/20 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-rose-500/20"
        >
          <LogOut className="w-5 h-5" />
          ออกจากระบบ
        </button>
      </div>
    </motion.div>
  );
}

// Added the missing icon here locally to keep standard matching with Recharts icon
function BarChart(props: React.ComponentProps<"svg">) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" x2="18" y1="20" y2="10" />
            <line x1="12" x2="12" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
    );
}
