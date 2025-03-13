import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import ThreeScene from "./ThreeScene";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:5000/api/login/login", { email, password });

      if (response.data.success) {
        alert(`مرحبًا ${response.data.username}! تم تسجيل الدخول بنجاح.`);
        // إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
        window.location.href = "/"; 
      } else {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
    } catch (err) {
      setError("حدث خطأ أثناء عملية تسجيل الدخول. يرجى المحاولة لاحقًا");
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
      <ThreeScene />
      <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-12 h-[75%] w-[90%] sm:w-[37%] sm:h-[60%] sm:p-5">
        <h1 className="text-3xl font-bold text-center text-white mb-10">تسجيل الدخول</h1>

        <form onSubmit={handleLogin}>
          <div className="relative mb-7">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-7">
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          {error && <div className="text-orange-300 font-bold text-center mb-4">{error}</div>}

          <button
            type="submit"
            className="w-full bg-[#406F67] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition"
          >
            تسجيل الدخول
          </button>

          <div className="text-center text-white mt-7">
            <p>
              ليس لديك حساب؟ <a href="/register" className="font-semibold underline">سجل الآن</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

