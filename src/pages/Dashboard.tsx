import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from "recharts";
import { 
  ClipboardList, 
  School, 
  Clock, 
  CheckCircle, 
  MoreVertical, 
  PlusCircle, 
  History, 
  FileText, 
  Bell, 
  BarChart2, 
  Calendar,
  Headset,
  Plus
} from "lucide-react";
import { motion } from "motion/react";

const chartData = [
  { name: 'MAY', value: 45 },
  { name: 'JUN', value: 72 },
  { name: 'JUL', value: 60 },
  { name: 'AUG', value: 94 },
  { name: 'SEP', value: 50 },
  { name: 'OCT', value: 108 },
];

export default function Dashboard() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-1 tracking-tight">Dashboard</h2>
        <p className="text-on-surface-variant text-sm">Welcome back. Here is your supervision overview for October 2023.</p>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Supervisions",
            value: "1,284",
            icon: ClipboardList,
            iconBg: "bg-indigo-500/20 text-indigo-400",
            badge: "+12%",
            badgeColor: "text-emerald-400 bg-emerald-500/20"
          },
          {
            title: "Schools Visited",
            value: "42",
            icon: School,
            iconBg: "bg-indigo-500/20 text-indigo-400",
            badge: "Static",
            badgeColor: "text-slate-400 bg-slate-800"
          },
          {
            title: "Pending Approval",
            value: "18",
            icon: Clock,
            iconBg: "bg-amber-500/20 text-amber-400",
            badge: "Critical",
            badgeColor: "text-red-400 bg-red-500/20"
          },
          {
            title: "Completed",
            value: "1,266",
            icon: CheckCircle,
            iconBg: "bg-emerald-500/20 text-emerald-400",
            badge: "+5%",
            badgeColor: "text-emerald-400 bg-emerald-500/20"
          }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-xl ${stat.iconBg}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${stat.badgeColor}`}>
                {stat.badge}
              </span>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.title}</p>
            <p className="text-3xl font-bold tracking-tighter text-slate-50">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Data Visualization & Recent Activity */}
        <div className="xl:col-span-2 space-y-8">
          {/* Chart Section */}
          <section className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col">
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <h3 className="font-bold tracking-tight text-slate-50 text-lg">กิจกรรมการนิเทศรายเดือน</h3>
              <select className="text-[10px] font-bold uppercase tracking-widest border-slate-800 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 py-2 pl-3 pr-8 bg-slate-800 text-slate-400">
                <option>6 เดือนล่าสุด</option>
                <option>ปีล่าสุด</option>
              </select>
            </div>
            <div className="h-64 bg-slate-950/50 rounded-2xl border border-slate-800 p-4 -mx-2 sm:mx-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} 
                    dy={10} 
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div className="bg-indigo-600 text-white text-[10px] uppercase tracking-widest px-3 py-2 rounded-xl font-bold">
                                    {payload[0].value} ครั้ง
                                </div>
                            );
                        }
                        return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                    {
                      chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#6366f1' : '#334155'} />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-950/20">
              <h3 className="font-bold text-slate-50 text-lg tracking-tight">รายงานการนิเทศล่าสุด</h3>
              <button className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest hover:text-indigo-300">ดูทั้งหมด</button>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left ml-0.5">
                <thead className="bg-slate-900 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">ชื่อโรงเรียน</th>
                    <th className="px-6 py-4">วันที่</th>
                    <th className="px-6 py-4">ผู้นิเทศ</th>
                    <th className="px-6 py-4">สถานะ</th>
                    <th className="px-6 py-4 text-right">การกระทำ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-bold text-slate-50">Saint Mary Academy</p>
                      <p className="text-xs text-slate-500 mt-0.5">ID: SCH-2023-01</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 font-medium whitespace-nowrap">24 ต.ค. 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          className="w-8 h-8 rounded-full object-cover border border-slate-700 shadow-sm" 
                          alt="Dr. Sarah J." 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLAR1DkLA6fWg8AjKIu65PJR-OQnZzIjdyUNxq1Y6uXPSMFnvItNDfIqGoynJ8Rq1KB5p5Ozw-wuzKIan-aXs1hekcUbQbPAc8vu2Y9Mo-PFk-H-dO9DhfUWKEzSDoUC1xTLrgAQKxp3eIcZgOS3bOuX-slwFMaIgT2-lnrdpvE-ytO3FxElt1sD97O0fYGGvXgf0o-xAkTyNgA4P74a13FNGY8ZXtyGsdBpeeKcbSU-r4JAaJwf3rXGFpTWdgookwbkuP2i_b6IE" 
                        />
                        <span className="text-sm font-medium text-slate-300">ดร. สมหญิง</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        อนุมัติแล้ว
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-bold text-slate-50">Northern Technical High</p>
                      <p className="text-xs text-slate-500 mt-0.5">ID: SCH-2023-45</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 font-medium whitespace-nowrap">23 ต.ค. 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          className="w-8 h-8 rounded-full object-cover border border-slate-700 shadow-sm" 
                          alt="James Wilson" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBGgOlj6K4xth5Z16ky20gAfAECAJldfcJFbhzic6EMVlYJRp_bp_H-oZj9Znb2dBd3JLTUQtws9_utOYUnYOJTwFqPlz_cufun1Nkjo8gGWgICpvmnHlpTdBFawkh4-duNaDIAsqyuEhzNO6ZQeITpzdGNBqQ2dYeXzq31uCdwFwTd0YerOns-_erkpFRcAWMNhuZcByzdzvcZT_ZSDvnWGFtCJP5B9njEXjezuWf7snwUf4Rl5acFdTOPoq7eVGdaPfePHhc7FM" 
                        />
                        <span className="text-sm font-medium text-slate-300">เจมส์ วิลสัน</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        รออนุมัติ
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-bold text-slate-50">Riverside Elementary</p>
                      <p className="text-xs text-slate-500 mt-0.5">ID: SCH-2023-12</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 font-medium whitespace-nowrap">22 ต.ค. 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          className="w-8 h-8 rounded-full object-cover border border-slate-700 shadow-sm" 
                          alt="Maria Garcia" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi0feRWsU5n16XRxA9W7gUz5Kv76nQ4Q2ARhSL-ibbO9-DsmaBFkqeF1IOJslsboJXPkIVjkSBiISuZPc1zqLS5TwVCGcpmSNr5xvcBsv0iXYanZZFnaVvrgp-ua4GxhkEoCSN3SdB-XZJ-UwC8GurvjU80EWYzSVMY_4qz_wMlMbn4Qyj6Qk2C5Kyq4hekZCb6PPEHfbeHFDVZ-u3vJRbLxvkbg1LmLnFM8wKBQU-nn-M8YBmJebJ4UHbcrBesnTrYp8gsJoo6bE" 
                        />
                        <span className="text-sm font-medium text-slate-300">ดร. มาเรีย</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold bg-slate-800 text-slate-400 border border-slate-700">
                        ร่างบันทึก
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Quick Menu & Schedule */}
        <div className="space-y-8 flex flex-col pt-1">
          {/* Quick Menu */}
          <section>
            <h3 className="font-bold text-slate-50 mb-4 text-lg tracking-tight">เมนูด่วน</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-indigo-600 text-white rounded-2xl border border-indigo-500 shadow-sm hover:bg-indigo-700 active:scale-[0.98] transition-all group">
                <PlusCircle className="w-8 h-8 mb-3 opacity-90 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-bold tracking-widest">เพิ่มรายงาน</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 text-slate-400 rounded-2xl shadow-sm hover:bg-slate-800 hover:text-slate-300 active:scale-[0.98] transition-all group">
                <History className="w-8 h-8 mb-3 opacity-80 group-hover:scale-110 transition-transform text-indigo-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest">ประวัติ</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 text-slate-400 rounded-2xl shadow-sm hover:bg-slate-800 hover:text-slate-300 active:scale-[0.98] transition-all group">
                <FileText className="w-8 h-8 mb-3 opacity-80 group-hover:scale-110 transition-transform text-indigo-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest">ส่งออก PDF</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 text-slate-400 rounded-2xl shadow-sm hover:bg-slate-800 hover:text-slate-300 active:scale-[0.98] transition-all group">
                <Bell className="w-8 h-8 mb-3 opacity-80 group-hover:scale-110 transition-transform text-indigo-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest">การแจ้งเตือน</span>
              </button>
            </div>
            <button className="w-full mt-3 p-3.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-indigo-500/20 active:scale-[0.98] transition-all">
              <BarChart2 className="w-5 h-5" />
              สรุปผลรายเดือน
            </button>
          </section>

          {/* Upcoming Schedule */}
          <section className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-50 tracking-tight text-lg">Schedule</h3>
              <button className="text-slate-400 hover:text-indigo-400 transition-colors p-1 rounded-lg hover:bg-slate-800">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start relative pb-4 after:content-[''] after:absolute after:left-[11px] after:top-8 after:bottom-0 after:w-0.5 after:bg-slate-800">
                <div className="z-10 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center ring-4 ring-slate-900 shrink-0">
                  <span className="text-[10px] text-white font-bold">25</span>
                </div>
                <div className="flex-1 -mt-1">
                  <p className="text-sm font-bold text-slate-50">Oakwood Preparatory</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-0.5">09:00 AM • Site Observation</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start relative pb-4 after:content-[''] after:absolute after:left-[11px] after:top-8 after:bottom-0 after:w-0.5 after:bg-slate-800">
                <div className="z-10 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center ring-4 ring-slate-900 shrink-0">
                  <span className="text-[10px] text-white font-bold">26</span>
                </div>
                <div className="flex-1 -mt-1">
                  <p className="text-sm font-bold text-slate-50">Valley View Academy</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-0.5">01:30 PM • Faculty Interview</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="z-10 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center ring-4 ring-slate-900 shrink-0">
                  <span className="text-[10px] text-slate-400 font-bold">28</span>
                </div>
                <div className="flex-1 -mt-1">
                  <p className="text-sm font-bold text-slate-50">St. Jude's Secondary</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-0.5">10:00 AM • Progress Review</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-2.5 border border-dashed border-slate-700 rounded-xl text-[10px] uppercase font-bold tracking-widest text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 transition-colors flex items-center justify-center gap-1">
                <Plus className="w-4 h-4" /> Add Appointment
            </button>
          </section>

           {/* Info Card - Support */}
           <div className="relative overflow-hidden rounded-3xl bg-indigo-600 p-6 text-white shadow-xl border border-indigo-500">
            <div className="relative z-10">
              <h4 className="font-bold text-lg mb-2 tracking-tight">ความช่วยเหลือระบบ</h4>
              <p className="text-xs text-indigo-100 mb-5 opacity-90 leading-relaxed font-medium uppercase tracking-widest">พบปัญหาในการใช้รายงานผลใช่ไหม?<br/>ให้ทีมความช่วยเหลือของเราช่วยคุณ</p>
              <button className="bg-slate-950 text-slate-50 px-5 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-slate-900 active:scale-95 transition-all outline-none ring-2 ring-indigo-400/50">
                ติดต่อศูนย์ช่วยเหลือ
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
              <Headset className="w-40 h-40" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button (Mobile Only) */}
      <button className="md:hidden fixed bottom-20 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
        <Plus className="w-8 h-8" />
      </button>
    </motion.div>
  );
}
