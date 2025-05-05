
// import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Section5() {
//   return (
//     <section className="relative text-primaryDarkest py-5 px-8 flex items-center justify-center overflow-hidden">
      
//       <div className="absolute inset-0 bg-[#EAF9F6] bg-opacity-20 backdrop-blur-4xl rounded-lg"></div>

//       <motion.div 
//         animate={{ scale: [1, 1.2, 1] }} 
//         transition={{ duration: 6, repeat: Infinity }} 
//         className="absolute top-[-90px] right-[-90px] w-[400px] h-[400px] bg-[#6BA89D] opacity-30 rounded-full filter blur-3xl"
//       ></motion.div>
//       <motion.div 
//         animate={{ scale: [1, 1.3, 1] }} 
//         transition={{ duration: 7, repeat: Infinity }} 
//         className="absolute bottom-[-90px] left-[-90px] w-[400px] h-[400px] bg-[#6BA89D] opacity-30 rounded-full filter blur-3xl"
//       ></motion.div>

//       <div className="relative z-10 max-w-5xl mx-auto text-right rtl">
//         <h2 className="text-4xl font-bold text-[#234B44] mb-6 text-center">
//           تواصل معنا 
//         </h2>
//         <p className="text-[#3B6D61] text-lg text-center mb-8">
//           نحن هنا لمساعدتك، لا تتردد في التواصل معنا لأي استفسار أو طلب خدمة
//         </p>

//         <div className="bg-primaryMid bg-opacity-20 backdrop-blur-7xl p-6 rounded-lg shadow-lg transition transform">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4"> أرسل لنا رسالتك</h3>
//           <form className="space-y-5">
//             {["الاسم الكامل", "البريد الإلكتروني"].map((placeholder, index) => (
//               <input
//                 key={index}
//                 type={index === 1 ? "email" : "text"}
//                 placeholder={placeholder}
//                 className="w-full p-3 border text-right rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
//               />
//             ))}
//             <textarea
//               placeholder="رسالتك..."
//               className="w-full p-3 border text-right rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] h-32 transition"
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#234B44] text-white py-3 rounded-lg font-bold hover:bg-white hover:text-[#234B44] transition duration-300 flex items-center justify-center gap-3 shadow-md"
//             >
//               <Send size={20} /> إرسال الرسالة
//             </button>
//           </form>
//         </div>
// {/* 
//         <div className="text-center mt-10">
//           <a
//             href="https://wa.me/212600000000"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg flex items-center justify-center gap-3 mx-auto max-w-xs hover:bg-green-600 transition duration-300 hover:scale-110"
//           >
//             <MessageCircle size={24} className="animate-bounce" /> تواصل معنا عبر واتساب
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// }






















import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Section5() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ fullName: "", email: "", message: "" }); // clear form
      } else {
        setStatus({ type: "error", message: data.message || "حدث خطأ ما" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "فشل الاتصال بالخادم" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section dir="rtl" className="relative text-primaryDarkest py-5 px-8 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#EAF9F6] bg-opacity-20 backdrop-blur-4xl rounded-lg"></div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 6, repeat: Infinity }} 
        className="absolute top-[-90px] right-[-90px] w-[400px] h-[400px] bg-[#6BA89D] opacity-30 rounded-full filter blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.3, 1] }} 
        transition={{ duration: 7, repeat: Infinity }} 
        className="absolute bottom-[-90px] left-[-90px] w-[400px] h-[400px] bg-[#6BA89D] opacity-30 rounded-full filter blur-3xl"
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-right rtl">
        <h2 className="text-4xl font-bold text-[#234B44] mb-6 text-center">
          تواصل معنا 
        </h2>
        <p className="text-[#3B6D61] text-lg text-center mb-8">
          نحن هنا لمساعدتك، لا تتردد في التواصل معنا لأي استفسار أو طلب خدمة
        </p>

        <div className="bg-primaryMid bg-opacity-20 backdrop-blur-7xl p-6 rounded-lg shadow-lg transition transform">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">أرسل لنا رسالتك</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              placeholder="الاسم الكامل"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border text-black rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border text-black rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
              required
            />
            <textarea
              name="message"
              placeholder="رسالتك..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border text-black rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] h-32 transition"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#A9E7DA] to-[#406F67] text-white py-3 rounded-lg font-bold hover:text-[#234B44] transition duration-300 flex items-center justify-center gap-3 shadow-md"
            >
              {loading ? "جاري الإرسال..." : <>
                <Send size={20} /> إرسال الرسالة
              </>}
            </button>
          </form>

          {status && (
            <p className={`mt-4 text-center ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
