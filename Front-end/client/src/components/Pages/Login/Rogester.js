import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; 
import ThreeScene from "./ThreeScene";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]); // تعريف المتغير setUsers و users

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(username , email , password);

    if (!username || !email || !password) {
      alert("❌ يرجى ملء جميع الحقول");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users", { 
        name: username, 
        email, 
        password,
        role: "customer"
      });

      alert("✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
      setUsername("");
      setEmail("");
      setPassword("");
      if (response.data.success) {
        alert(`مرحبًا ${response.data.username}!✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.`);
        // إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
        window.location.href = "/login"; 
      }
    } catch (error) {
      console.error("❌ خطأ في التسجيل:", error);
      alert(error.response?.data?.message || "❌ حدث خطأ أثناء التسجيل");
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id)); // تحديث القائمة بعد الحذف
      alert("✅ تم حذف المستخدم بنجاح");
    } catch (error) {
      console.error("❌ خطأ في حذف المستخدم:", error);
      alert("❌ حدث خطأ أثناء حذف المستخدم");
    }
  };
  
  return (
    <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
      <ThreeScene />
      <div className="relative bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-5 h-[75%] w-[90%] sm:w-[40%] sm:h-[73%] sm:p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-9">تسجيل </h1>

        <form onSubmit={handleRegister}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-6">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <button type="submit" className="w-full bg-[#406F67] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition">
            تسجيل الدخول
          </button>

          <div className="text-center text-white mt-6">
            <p> لديك حساب؟ <a href="login" className="font-semibold underline">أدخل الآن</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
