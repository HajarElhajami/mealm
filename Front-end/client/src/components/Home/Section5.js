import { useState, useRef } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function FloatingIcons() {
  const iconsRef = useRef([]);
  
  useFrame(({ clock }) => {
    iconsRef.current.forEach((icon, i) => {
      icon.rotation.y = clock.getElapsedTime() * (0.2 + i * 0.05);
      icon.position.y = Math.sin(clock.getElapsedTime() * 0.5 + i) * 0.3;
    });
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={el => iconsRef.current[0] = el} position={[-2, 0, 0]}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial color="#4FD1C5" metalness={0.3} roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={0.7} floatIntensity={1.2}>
        <mesh ref={el => iconsRef.current[1] = el} position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial color="#2C7A7B" metalness={0.3} roughness={0.1} />
        </mesh>
      </Float>
    </>
  );
}

export default function HolographicContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [activeField, setActiveField] = useState(null);
  const controls = useAnimation();

  const handleFocus = (field) => {
    setActiveField(field);
    controls.start({
      scale: 1.03,
      boxShadow: "0 0 30px rgba(79, 209, 197, 0.3)",
      transition: { duration: 0.3 }
    });
  };

  const handleBlur = () => {
    setActiveField(null);
    controls.start({
      scale: 1,
      boxShadow: "0 0 20px rgba(79, 209, 197, 0.1)",
      transition: { duration: 0.3 }
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* مشهد ثلاثي الأبعاد */}
      <div className="absolute inset-0 h-full w-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingIcons />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* طبقة التعتيم */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* بطاقة النموذج ثلاثية الأبعاد */}
      <motion.div 
        className="relative z-10 w-full max-w-md mx-4 p-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 mb-3">
            تواصل معنا
          </h2>
          <p className="text-gray-300">املأ النموذج وسنرد عليك قريبًا</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* حقل الاسم */}
          <motion.div
            animate={activeField === 'fullName' ? controls : {}}
            className="relative"
          >
            <div className="absolute right-3 top-3 text-cyan-400">
              <User size={20} />
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="الاسم الكامل"
              onFocus={() => handleFocus('fullName')}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full p-4 pr-12 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 transition-all"
              required
            />
            {activeField === 'fullName' && (
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>

          {/* حقل البريد الإلكتروني */}
          <motion.div
            animate={activeField === 'email' ? controls : {}}
            className="relative"
          >
            <div className="absolute right-3 top-3 text-cyan-400">
              <Mail size={20} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full p-4 pr-12 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 transition-all"
              required
            />
            {activeField === 'email' && (
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>

          {/* حقل الرسالة */}
          <motion.div
            animate={activeField === 'message' ? controls : {}}
            className="relative"
          >
            <div className="absolute right-3 top-3 text-cyan-400">
              <MessageSquare size={20} />
            </div>
            <textarea
              name="message"
              placeholder="رسالتك..."
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full p-4 pr-12 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 h-32 transition-all"
              required
            />
            {activeField === 'message' && (
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>

          {/* زر الإرسال */}
          <motion.button
            type="submit"
            whileHover={{ 
              y: -3,
              boxShadow: "0 0 30px rgba(79, 209, 197, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-cyan-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <Send size={20} />
            <span>إرسال الرسالة</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}






















// import { useState } from "react";
// import { Send } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Section5() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);
//     try {
//       const response = await fetch("http://localhost:5000/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setStatus({ type: "success", message: data.message });
//         setFormData({ fullName: "", email: "", message: "" }); // clear form
//       } else {
//         setStatus({ type: "error", message: data.message || "حدث خطأ ما" });
//       }
//     } catch (error) {
//       setStatus({ type: "error", message: "فشل الاتصال بالخادم" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section dir="rtl" className="relative text-primaryDarkest py-5 px-8 flex items-center justify-center overflow-hidden">
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
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">أرسل لنا رسالتك</h3>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="الاسم الكامل"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full p-3 border text-black rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="البريد الإلكتروني"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border text-black rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] transition"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="رسالتك..."
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border text-black rtl border-gray-300 rounded-lg focus:outline-none focus:border-[#234B44] h-32 transition"
//               required
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-[#A9E7DA] to-[#406F67] text-white py-3 rounded-lg font-bold hover:text-[#234B44] transition duration-300 flex items-center justify-center gap-3 shadow-md"
//             >
//               {loading ? "جاري الإرسال..." : <>
//                 <Send size={20} /> إرسال الرسالة
//               </>}
//             </button>
//           </form>

//           {status && (
//             <p className={`mt-4 text-center ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
//               {status.message}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
