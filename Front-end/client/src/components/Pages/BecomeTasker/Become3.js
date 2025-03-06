
import React from "react";
import { motion } from "framer-motion";

const Become3 = () => {
  return (
    <div className="relative text-primaryDarkest py-12 px-8 flex items-center justify-around overflow-hidden">
      
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
          className="mt-10 text-center"
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
