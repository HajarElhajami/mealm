// import React from "react";
// import { motion } from "framer-motion";

// const Become3 = () => {
//   return (
//     <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-6 overflow-hidden">
//       {/* تموج في الخلفية */}
//       <div className="absolute inset-0 w-full h-full bg-opacity-50 z-0">
//         <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="white"
//             fillOpacity="0.1"
//             d="M0,64L60,74.7C120,85,240,107,360,128C480,149,600,171,720,176C840,181,960,171,1080,165.3C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       {/* المحتوى الرئيسي */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center">
//         <motion.h1
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-5xl font-extrabold leading-tight"
//         >
//           انضم إلى "معلم" وابدأ العمل الحر بسهولة
//         </motion.h1>

//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-6 text-lg text-white opacity-90"
//         >
//           تحكم في وقتك، حدد أسعارك، وابدأ عملك الحر مع "معلم" بطريقة مرنة وآمنة *
//           <br/> لدينا :

//         </motion.p>
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-6 text-lg text-white opacity-90"
//         >
//         <h2 className="text-xl font-semibold text-white">حرية العمل</h2>
//          <p className="text-white text-center mt-2">
//             اختر مجالك، حدد أوقاتك، وكن مدير نفسك دون قيود أو التزامات.
//           </p> 
//         </motion.p>
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-6 text-lg text-white opacity-90"
//         >
//           <h2 className="text-xl font-semibold text-white"> أرباحك %100 مضمونة</h2>
//           <p className="text-white text-center mt-2">
//             احصل على دخلك الكامل دون عمولات، وحدد أسعارك بنفسك.
//           </p>
//         </motion.p>
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-6 text-lg text-white opacity-90"
//         >
//           <h2 className="text-xl font-semibold text-white">تواصل سهل وآمن</h2>
//          <p className="text-white text-center mt-2">
//            منصة تضمن تواصلًا آمنًا مع العملاء دون أي تعقيدات.
//          </p>
//         </motion.p>

//         {/* زر الدعوة إلى الإجراء */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//           className="mt-8"
//         >
//           <a
//             href="BecomeTasker"
//             className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
//           >
//             انضم الآن وابدأ العمل
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Become3;



























// import React from "react";
// import { motion } from "framer-motion";

// const Become3RTL = () => {
//   return (
//     <div className="relative bg-gradient-to-br from-[#1E293B] to-[#334155] text-white py-24 px-8 flex items-center justify-center overflow-hidden">
      
//       {/* تأثير زجاجي على الخلفية */}
//       <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg"></div>

//       {/* أشكال زخرفية */}
//       <div className="absolute top-[-80px] right-[-100px] w-[250px] h-[250px] bg-[#94A3B8] opacity-20 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-[-80px] left-[-100px] w-[200px] h-[200px] bg-[#64748B] opacity-20 rounded-full filter blur-2xl"></div>

//       {/* المحتوى الرئيسي */}
//       <div className="relative z-10 max-w-3xl text-right" dir="rtl">
//         <motion.h1
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-5xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E2E8F0]"
//         >
//           انضم إلى "معلم" وابدأ العمل بحرية!
//         </motion.h1>

//         <motion.p
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-6 text-lg opacity-80 leading-relaxed"
//         >
//           تحكم في وقتك، حدد أسعارك، وابدأ عملك الحر مع "معلم" بطريقة مرنة وآمنة.
//         </motion.p>

//         {/* الميزات الرئيسية */}
//         <div className="mt-12 space-y-6">
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="flex items-center gap-4 justify-end"
//           >
//             <p className="text-lg">⚡ <strong>حرية العمل:</strong> اختر مجالك وكن مدير نفسك.</p>
//             <span className="w-3 h-3 bg-[#E2E8F0] rounded-full"></span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="flex items-center gap-4 justify-end"
//           >
//             <p className="text-lg">💰 <strong>أرباحك مضمونة:</strong> بدون عمولات، وبدون قيود.</p>
//             <span className="w-3 h-3 bg-[#CBD5E0] rounded-full"></span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="flex items-center gap-4 justify-end"
//           >
//             <p className="text-lg">🔒 <strong>تواصل آمن:</strong> منصة تسهّل عليك الوصول للعملاء بسهولة.</p>
//             <span className="w-3 h-3 bg-[#A0AEC0] rounded-full"></span>
//           </motion.div>
//         </div>

//         {/* زر التسجيل */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.5 }}
//           className="mt-10 text-right"
//         >
//           <a
//             href="BecomeTasker"
//             className="relative inline-block px-8 py-3 text-lg font-bold rounded-full shadow-md transition duration-300 ease-in-out bg-gradient-to-r from-[#CBD5E0] to-[#E2E8F0] text-[#1E293B] hover:opacity-90"
//           >
//             انضم الآن وابدأ العمل
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Become3RTL;












// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaWallet, FaHandshake } from "react-icons/fa";

// const MaalemForWorkers = () => {
//   return (
//     <div className="relative bg-[#EAF9F6] text-[#406F67] overflow-hidden py-20 px-6">
//       {/* تأثير الخلفية المتداخلة */}
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="w-[90vw] h-[90vh] bg-[#A9E7DA] rounded-full blur-[120px] opacity-30"></div>
//       </div>

//       <div className="relative max-w-5xl mx-auto text-center">
//         {/* العنوان الرئيسي */}
//         <motion.h1 
//           initial={{ opacity: 0, y: -50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8 }} 
//           className="text-5xl font-bold mb-6">
//           انضم إلى "معلم" وابدأ العمل الحر بسهولة
//         </motion.h1>

//         <motion.p 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8, delay: 0.2 }} 
//           className="text-lg text-[#6BA89D] mb-12">
//           تحكم في وقتك، حدد أسعارك، وابدأ عملك الحر مع "معلم" بطريقة مرنة وآمنة.
//         </motion.p>

//         {/* عرض المزايا بأسلوب عصري */}
//         <div className="grid md:grid-cols-3 gap-12">
//           <motion.div 
//             whileHover={{ scale: 1.05 }} 
//             initial={{ opacity: 0, y: 50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.6, delay: 0.3 }} 
//             className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl">
//             <FaBriefcase className="text-5xl text-[#406F67] mb-4" />
//             <h2 className="text-xl font-semibold text-[#406F67]">حرية العمل</h2>
//             <p className="text-[#6BA89D] text-center mt-2">
//               اختر مجالك، حدد أوقاتك، وكن مدير نفسك دون قيود أو التزامات.
//             </p>
//           </motion.div>

//           <motion.div 
//             whileHover={{ scale: 1.05 }} 
//             initial={{ opacity: 0, y: 50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.6, delay: 0.5 }} 
//             className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl">
//             <FaWallet className="text-5xl text-[#406F67] mb-4" />
//             <h2 className="text-xl font-semibold text-[#406F67]">أرباحك 100%</h2>
//             <p className="text-[#6BA89D] text-center mt-2">
//               احصل على دخلك الكامل دون عمولات، وحدد أسعارك بنفسك.
//             </p>
//           </motion.div>

//           <motion.div 
//             whileHover={{ scale: 1.05 }} 
//             initial={{ opacity: 0, y: 50 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.6, delay: 0.7 }} 
//             className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl">
//             <FaHandshake className="text-5xl text-[#406F67] mb-4" />
//             <h2 className="text-xl font-semibold text-[#406F67]">تواصل سهل وآمن</h2>
//             <p className="text-[#6BA89D] text-center mt-2">
//               منصة تضمن تواصلًا آمنًا مع العملاء دون أي تعقيدات.
//             </p>
//           </motion.div>
//         </div>

//         {/* زر التسجيل بأسلوب حديث */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8, delay: 0.9 }} 
//           className="mt-12">
//           <a
//             href="#"
//             className="bg-[#86C4B8] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#6BA89D] transition duration-300 text-lg">
//             انضم الآن وابدأ العمل
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MaalemForWorkers;





























import React from "react";
import { motion } from "framer-motion";

const Become3 = () => {
  return (
    <div className="relative text-primaryDarkest py-24 px-8 flex items-center justify-around overflow-hidden">
      
      <div className="absolute inset-0 bg-[#EAF9F6] bg-opacity-10 backdrop-blur-2xl rounded-lg"></div>

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

      <div className="relative z-10 max-w-3xl text-right" dir="rtl">
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl pb-5 font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primaryDarkest to-[#406F67]"
        >
          انضم إلى "معلم" وابدأ العمل بحرية
        </motion.h1>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg opacity-90 leading-relaxed text-[#6BA89D]"
        >
          تحكم في وقتك، حدد أسعارك، وابدأ عملك الحر مع "معلم" بطريقة مرنة وآمنة.
        </motion.p>

        <div className="mt-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-4 justify-end"
          >
            <span className="w-4 h-4 bg-[#CFF5EC] rounded-full shadow-lg"></span>
            <p className="text-lg pl-[37%]">⚡ <strong>حرية العمل:<br/></strong> اختر مجالك وكن مدير نفسك.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4 justify-end"
          >
           <span className="w-4 h-4 bg-[#94D1C3] rounded-full shadow-lg"></span>
            <p className="text-lg pl-[34%]">💰 <strong>أرباحك مضمونة:<br/></strong> بدون عمولات، وبدون قيود.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-4 justify-end"
          >
             <span className="w-4 h-4 bg-[#6BA89D] rounded-full shadow-lg"></span>
            <p className="text-lg pl-[20%] ">🔒 <strong>تواصل آمن:<br/></strong> منصة تسهّل عليك الوصول للعملاء بسهولة.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10 text-right"
        >
          <a
            href="BecomeTasker"
            className="relative inline-block px-10 py-4 text-lg font-bold rounded-full shadow-xl transition-all duration-300 ease-in-out bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] text-[#406F67] hover:shadow-2xl transform hover:scale-105"
          >
            انضم الآن وابدأ العمل 
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Become3;
