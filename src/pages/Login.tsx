import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { School, User, Lock, Eye, EyeOff, Check, LogIn, Landmark, Loader2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("somchai.jai@moe.go.th");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setIsLoading(false);
      setError("กรุณากรอกชื่อผู้ใช้งานที่และรหัสผ่าน");
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      if (username === "admin" && password !== "admin") {
         setError("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
      } else {
         navigate("/app/dashboard");
      }
    }, 1500);
  };

  return (
    <div className="bg-slate-950 text-slate-50 selection:bg-indigo-500/30 selection:text-indigo-400 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]"></div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1200px] grid md:grid-cols-2 gap-0 bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800"
      >
        {/* Left Side: Visual/Branding */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-indigo-600 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-indigo-500/30">
                <School className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest">Nexus.Studio</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-6 tracking-tight">
              ยกระดับคุณภาพ<br />การศึกษาไทย<br />ด้วยการนิเทศมืออาชีพ
            </h1>
            <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-widest max-w-sm">
              เข้าถึงข้อมูล รายงาน และการติดตามผลการจัดการเรียนรู้อย่างเป็นระบบและมีประสิทธิภาพ
            </p>
          </div>
          
          <motion.div 
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             className="relative z-10 mt-12 bg-indigo-500/20 backdrop-blur-md p-6 rounded-3xl border border-indigo-400/20"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Professional female educator"
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmq8Cm8Dso1tfg8mejllO8dhjX4IXzPKyB42t89SjqMsGL42AJrmZsD6vLp9iO_X0KIlJKTK_0iDMqSHEgMQBTJywm_8UA7pkDDnpJkegBVYSakyrX7B0Vv03qbgxDuwXMDxb1uGagmIML5sN9yJZkWB62uSVWwvsLvgDv4tUzp2OPIIenPMTQHhm1IIvMar0jvnbwodoIPb0Lgiiv5J_1X9YXLFQdPGJxUBBW3lqhDE9W23suFNYJJs9aupySOXR33ihEsdjve1w"
              />
              <div>
                <p className="text-sm font-bold text-white">นิเทศก์ต้นแบบปี 2567</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-200 mt-0.5">"ระบบช่วยให้การสรุปรายงานรวดเร็วขึ้นถึง 70%"</p>
              </div>
            </div>
          </motion.div>
          
          {/* Abstract Shape Overlay */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-2xl"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-slate-900">
          <div className="max-w-md w-full mx-auto">
            {/* Mobile Logo Only */}
            <div className="flex md:hidden justify-center mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg border border-indigo-500">
                <School className="text-white w-8 h-8" />
              </div>
            </div>
            
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-50 mb-2 tracking-tight">เข้าสู่ระบบ</h2>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">ระบบรายงานผลการนิเทศ</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleLogin}>
              {error && (
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3 rounded-2xl flex items-start gap-3">
                   <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                   <p className="text-sm font-bold">{error}</p>
                </div>
              )}

              {/* Username Field */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 mt-2" htmlFor="username">ชื่อผู้ใช้งาน</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600 font-bold text-slate-50"
                    id="username"
                    name="username"
                    placeholder="กรอกชื่อผู้ใช้งาน หรืออีเมล"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center mb-2 mt-4">
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400" htmlFor="password">รหัสผ่าน</label>
                  <a className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors" href="#">ลืมรหัสผ่าน?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600 font-bold tracking-widest text-slate-50"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              {/* Remember Me & Actions */}
              <div className="flex items-center pt-2">
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input className="sr-only peer" type="checkbox" disabled={isLoading} />
                    <div className="w-5 h-5 border border-slate-700 bg-slate-950/50 rounded-md peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
                      <Check className="text-white w-3 h-3 scale-0 peer-checked:scale-100 transition-transform stroke-[3]" />
                    </div>
                  </div>
                  <span className="ml-3 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-slate-300 transition-colors">จดจำการเข้าสู่ระบบ</span>
                </label>
              </div>
              
              <button
                className="w-full bg-indigo-600 text-white py-4 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:pointer-events-none"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>กำลังเข้าสู่ระบบ...</span>
                  </>
                ) : (
                  <>
                    <span>เข้าสู่ระบบ</span>
                    <LogIn className="w-4 h-4 mb-0.5" />
                  </>
                )}
              </button>
            </form>
            
            {/* Third Party Login or Footer info */}
            <div className="mt-10 pt-8 border-t border-slate-800 text-center">
              <p className="text-xs font-bold text-slate-500">
                มีปัญหาการเข้าสู่ระบบ? <a className="text-indigo-400 hover:underline hover:text-indigo-300" href="#">ติดต่อผู้ดูแลระบบ</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Global Footer */}
      <footer className="mt-auto pt-8 pb-4 px-4 text-center">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Landmark className="w-5 h-5 text-indigo-500/60" />
            <span className="text-[10px] uppercase font-bold tracking-widest">สำนักงานเขตพื้นที่การศึกษาประถมศึกษา (สพป.)</span>
          </div>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            © 2024 Supervision Report System. สงวนลิขสิทธิ์ตามพระราชบัญญัติคอมพิวเตอร์
          </p>
          <div className="flex gap-6 mt-2">
            <a className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors" href="#">นโยบายความเป็นส่วนตัว</a>
            <a className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors" href="#">เงื่อนไขการใช้งาน</a>
            <a className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors" href="#">ความช่วยเหลือ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
