// import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

// export default function Section5() {
//   return (
//     <section className="bg-gradient py-10 px-8 text-right rtl">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-[#234B44] mb-6 tracking-wide text-center">
//           تواصل معنا 📞
//         </h2>
//         <p className="text-[#3B6D61] text-lg text-center mb-8">
//           نحن هنا لمساعدتك, لا تتردد في التواصل معنا لأي استفسار أو طلب خدمة
//         </p>

//         {/* <div className="grid md:grid-cols-2 gap-10">
//           <div className="space-y-6">
//             {[{ icon: Phone, title: "اتصل بنا", value: "+212 600 000 000" },
//               { icon: Mail, title: "البريد الإلكتروني", value: "contact@example.com" },
//               { icon: MapPin, title: "العنوان", value: "الدار البيضاء، المغرب" }].map((item, index) => (
//               <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-lg transition transform hover:scale-105">
//                 <item.icon className="text-[#234B44]" size={28} />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//                   <p className="text-gray-600">{item.value}</p>
//                 </div>
//               </div>
//             ))}
//           </div> */}

//           <div className="bg-primary p-6 rounded-lg shadow-lg transition transform">
//             <h3 className="text-xl font-semibold text-gray-700 mb-4"> أرسل لنا رسالتك</h3>
//             <form className="space-y-5">
//               {["الاسم الكامل", "البريد الإلكتروني"].map((placeholder, index) => (
//                 <input
//                   key={index}
//                   type={index === 1 ? "email" : "text"}
//                   placeholder={placeholder}
//                   className="w-full p-3 border text-right rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
//                 />
//               ))}
//               <textarea
//                 placeholder="رسالتك..."
//                 className="w-full p-3 border  text-right rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] h-32 transition"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-[#234B44] text-white py-3 rounded-lg font-bold hover:bg-white hover:text-[#234B44]  transition duration-300 flex items-center justify-center gap-3 shadow-md"
//               >
//                 <Send size={20} /> إرسال الرسالة
//               </button>
//             </form>
//           </div>
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
//     </section>
//   );
// }


































import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Section5() {
  return (
    <section className="relative text-primaryDarkest py-5 px-8 flex items-center justify-center overflow-hidden">
      
      {/* الخلفية الضبابية */}
      <div className="absolute inset-0 bg-[#EAF9F6] bg-opacity-20 backdrop-blur-4xl rounded-lg"></div>

      {/* الأشكال الدائرية المتحركة */}
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

      {/* محتوى التواصل */}
      <div className="relative z-10 max-w-5xl mx-auto text-right rtl">
        <h2 className="text-4xl font-bold text-[#234B44] mb-6 text-center">
          تواصل معنا 
        </h2>
        <p className="text-[#3B6D61] text-lg text-center mb-8">
          نحن هنا لمساعدتك، لا تتردد في التواصل معنا لأي استفسار أو طلب خدمة
        </p>

        <div className="bg-primaryMid bg-opacity-20 backdrop-blur-7xl p-6 rounded-lg shadow-lg transition transform">
          <h3 className="text-xl font-semibold text-gray-700 mb-4"> أرسل لنا رسالتك</h3>
          <form className="space-y-5">
            {["الاسم الكامل", "البريد الإلكتروني"].map((placeholder, index) => (
              <input
                key={index}
                type={index === 1 ? "email" : "text"}
                placeholder={placeholder}
                className="w-full p-3 border text-right rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
              />
            ))}
            <textarea
              placeholder="رسالتك..."
              className="w-full p-3 border text-right rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] h-32 transition"
            />
            <button
              type="submit"
              className="w-full bg-[#234B44] text-white py-3 rounded-lg font-bold hover:bg-white hover:text-[#234B44] transition duration-300 flex items-center justify-center gap-3 shadow-md"
            >
              <Send size={20} /> إرسال الرسالة
            </button>
          </form>
        </div>
{/* 
        <div className="text-center mt-10">
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg flex items-center justify-center gap-3 mx-auto max-w-xs hover:bg-green-600 transition duration-300 hover:scale-110"
          >
            <MessageCircle size={24} className="animate-bounce" /> تواصل معنا عبر واتساب
          </a>
        </div> */}
      </div>
    </section>
  );
}

