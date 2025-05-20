


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBolt, FaTools, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

// function BusinessServices() {
//   const services = [
//     {
//       title: "تركيب أنظمة كهربائية",
//       price: "ابتداءً من 1500 درهم",
//       description: "تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة والسلامة.",
//       duration: "2-3 أيام",
//       icon: <FaBolt className="text-blue-500" />,
//       accent: "from-blue-100/20 to-blue-200/20"
//     },
//     {
//       title: "إصلاح أعطال كهربائية",
//       price: "ابتداءً من 500 درهم",
//       description: "تشخيص وإصلاح سريع لجميع أنواع الأعطال الكهربائية باحترافية عالية.",
//       duration: "1-2 يوم",
//       icon: <FaTools className="text-teal-500" />,
//       accent: "from-teal-100/20 to-teal-200/20"
//     },
//     {
//       title: "صيانة دورية",
//       price: "ابتداءً من 800 درهم",
//       description: "برامج صيانة وقائية للأنظمة الكهربائية لضمان الأداء الأمثل.",
//       duration: "1 يوم",
//       icon: <FaShieldAlt className="text-indigo-500" />,
//       accent: "from-indigo-100/20 to-indigo-200/20"
//     }
//   ];

//   return (
//     <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* /* Subtle 3D floating circles background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-blue-800/30"
//             style={{
//               width: `${Math.random() * 300 + 100}px`,
//               height: `${Math.random() * 300 + 100}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, (Math.random() - 20.5) * 40],
//               x: [0, (Math.random() - 20.5) * 40],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: Math.random() * 15 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div> 

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* 3D Animated Title */}
//         <motion.div 
//           className="relative mb-20 text-center"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//         >
//           <motion.div
//             className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl -z-10"
//             animate={{
//               scale: [1, 1.1, 1],
//               opacity: [0.2, 0.4, 0.2]
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
          
//           <motion.h2 
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#177e89] mb-4"
//             whileHover={{
//               textShadow: "0 0 10px rgba(0, 0, 0, 0.05)"
//             }}
//           >
//             حلولنا بالاحترافية
//           </motion.h2>
          
//           <motion.p
//             className="text-lg text-[#a2ad59] max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             خدمات متكاملة بمعايير عالمية مع ضمان الجودة والسلامة
//           </motion.p>
          
//           <motion.div 
//             className="w-40 h-1 bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] mx-auto mt-8 rounded-full"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
//           />
//         </motion.div>

//         {/* 3D Services Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60, rotateX: 15 }}
//               whileInView={{ opacity: 10, y: 0, rotateX: 0 }}
//               transition={{ 
//                 duration: 0.8,
//                 delay: index * 0.15,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 12
//               }}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//               whileHover={{ 
//                 y: -15,
//                 rotateY: 3,
//                 transition: { type: "spring", stiffness: 300 }
//               }}
//               className="relative perspective-1000"
//             >
//               {/* 3D Card Depth Effect */}
//               <motion.div 
//                 className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-3xl shadow-lg blur-lg -z-10`}
//                 initial={{ rotateX: 10, rotateY: -5, y: 30, opacity: 0.3 }}
//                 whileHover={{ rotateX: 15, rotateY: -8, y: 40, opacity: 0.5 }}
//                 transition={{ duration: 0.6 }}
//               />
              
//               {/* Main 3D Card */}
//               <motion.div
//                 className="relative bg-[#f6e54c]/1 backdrop-blur-xl rounded-3xl p-8 h-full border border-[#f6e54c] shadow-lg overflow-hidden transform-style-preserve-3d"
//                 whileHover={{ 
//                   boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
//                   borderColor: "rgba(100, 200, 255, 0.3)"
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {/* Floating 3D Icon */}
//                 <motion.div
//                   className="absolute -bottom-1 -left-10 text-6xl opacity-20 text-[#748b77] "
//                   initial={{ rotate: 15, scale: 5 }}
//                   whileHover={{ 
//                     rotate: 55,
//                     scale: 4.4,
//                     opacity: 1.2
//                   }}
//                 >
//                   {service.icon}
//                 </motion.div>
                
//                 {/* Card Content */}
//                 <div className="relative z-10 h-full flex flex-col">
//                   <div className="flex justify-between items-start mb-6">
//                     <motion.h3 
//                       className="text-2xl font-bold text-[#106f74]"
//                       whileHover={{ x: 5 }}
//                     >
//                       {service.title}
//                     </motion.h3>
//                     <motion.span 
//                       className="bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       {service.price}
//                     </motion.span>
//                   </div>
                  
//                   <motion.p 
//                     className="text-[#598381] mb-8 leading-relaxed flex-grow"
//                     whileHover={{ x: 3 }}
//                   >
//                     {service.description}
//                   </motion.p>
                  
//                   <div className="flex justify-between items-center mt-auto">
//                     <motion.div
//                       className="text-sm bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] px-3 py-1 rounded-full border border-gray-200 flex items-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <span>⏳ {service.duration}</span>
//                     </motion.div>
                    
//                     {/* <motion.button 
//                       className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white py-2 px-5 rounded-full text-sm font-medium shadow-md flex items-center gap-2 group"
//                       whileHover={{ 
//                         scale: 1.05,
//                         boxShadow: "0 0 15px rgba(100, 200, 255, 0.3)"
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span>طلب الخدمة</span>
//                       <motion.span
//                         className="group-hover:translate-x-1 transition-transform"
//                       >
//                         <FaArrowRight className="text-xs" />
//                       </motion.span>
//                     </motion.button> */}
//                   </div>
//                 </div>
                
//                 {/* 3D Hover Light Effect */}
//                 <motion.div 
//                   className="absolute inset-0 pointer-events-none overflow-hidden"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ 
//                     opacity: 0.3,
//                     background: "radial-gradient(circle at center, rgba(200, 230, 255, 0.1) 0%, transparent 70%)"
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3D Floating CTA */}
//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.div 
//             className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 p-0.5 rounded-full shadow-lg"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <motion.button 
//               className="bg-white text-gray-800 px-10 py-4 rounded-full font-medium text-lg flex items-center gap-3 mx-auto group"
//               whileHover={{ 
//                 backgroundColor: "#f8fafc",
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <span> عرض جميع الأعمال</span>
//               <motion.div
//                 className="group-hover:translate-x-2 transition-transform"
//                 animate={{ 
//                   x: [0, 9, 0],
//                   transition: { duration: 2, repeat: Infinity } 
//                 }}
//               >
//                 <FaArrowRight />
//               </motion.div>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default BusinessServices;










































































import { ShieldCheck, Headset, HeartHandshake, BadgeCheck, Award, CheckCircle } from "lucide-react";
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function TrustSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <div 
      ref={ref}
      className="relative  py-16 px-6 md:px-20 overflow-hidden"
    >
      {/* تأثيرات الخلفية */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          y: yBg
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            نكسب <span className="text-blue-600">ثقتكم</span> بكل <span className="text-green-600">شفافية</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            ضمانات حقيقية وخدمات مميزة نقدمها لراحتكم واطمئنانكم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* بطاقة زرقاء */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border-2 border-blue-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 relative">
              <ShieldCheck className="text-blue-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">حماية وأمان</h3>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              جميع معاملاتك محمية بتقنيات التشفير الحديثة لضمان أقصى درجات الأمان
            </p>
            <div className="flex items-center justify-center bg-blue-600/10 text-blue-700 rounded-full py-2 px-4 text-sm font-medium w-max mx-auto">
              <BadgeCheck className="ml-2 w-5 h-5" />
              <span>مضمون بنسبة 100%</span>
            </div>
          </motion.div>

          {/* بطاقة خضراء */}
          <motion.div 
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border-2 border-green-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 relative">
              <Headset className="text-green-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">دعم فوري</h3>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              فريق دعم فني متاح على مدار الساعة لمساعدتك في أي استفسار أو مشكلة
            </p>
            <div className="flex items-center justify-center bg-green-600/10 text-green-700 rounded-full py-2 px-4 text-sm font-medium w-max mx-auto">
              <Award className="ml-2 w-5 h-5" />
              <span>خدمة 24/7</span>
            </div>
          </motion.div>

          {/* بطاقة برتقالية */}
          <motion.div 
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border-2 border-amber-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6 relative">
              <HeartHandshake className="text-amber-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">رضا مضمون</h3>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              إذا لم تكن راضياً عن خدمتنا، سنعيد لك أموالك بدون أي تعقيدات
            </p>
            <div className="flex items-center justify-center bg-amber-600/10 text-amber-700 rounded-full py-2 px-4 text-sm font-medium w-max mx-auto">
              <CheckCircle className="ml-2 w-5 h-5" />
              <span>ضمان استرداد الأموال</span>
            </div>
          </motion.div>
        </div>

        {/* إحصاءات الثقة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          <motion.div 
            className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">+10K</div>
            <div className="text-gray-600">عميل راضٍ</div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600">معدل رضا</div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-gray-600">دعم فني</div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">حماية وأمان</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}