
// import React from 'react';

// function Business() {
//   return (
//     <div className="mt-12 px-8">
//       <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">
//         الخدمات التي أقدمها
//       </h2>

//       <div className="mt-6 grid md:grid-cols-3 gap-6">
//         <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
//           <div className="flex justify-between items-start">
//             <h3 className="font-bold text-lg text-[#406F67]">تركيب أنظمة كهربائية</h3>
//             <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
//               ابتداءً من 1500 درهم
//             </span>
//           </div>
//           <p className="text-gray-600 mt-3">
//             تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة.
//           </p>
//           <div className="mt-4 flex justify-between items-center">
//             <span className="text-sm text-gray-500">مدة التنفيذ: 2-3 أيام</span>
//             <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
//               اطلب الخدمة
//             </button>
//           </div>
//         </div>

//         <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
//           <div className="flex justify-between items-start">
//             <h3 className="font-bold text-lg text-[#406F67]">إصلاح أعطال كهربائية</h3>
//             <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
//               ابتداءً من 500 درهم
//             </span>
//           </div>
//           <p className="text-gray-600 mt-3">
//             تشخيص وإصلاح جميع أنواع الأعطال الكهربائية بسرعة واحترافية.
//           </p>
//           <div className="mt-4 flex justify-between items-center">
//             <span className="text-sm text-gray-500">مدة التنفيذ: 1-2 يوم</span>
//             <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
//               اطلب الخدمة
//             </button>
//           </div>
//         </div>

//         <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
//           <div className="flex justify-between items-start">
//             <h3 className="font-bold text-lg text-[#406F67]">صيانة دورية</h3>
//             <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
//               ابتداءً من 800 درهم
//             </span>
//           </div>
//           <p className="text-gray-600 mt-3">
//             صيانة دورية للأنظمة الكهربائية لضمان سلامتها واستمرار عملها.
//           </p>
//           <div className="mt-4 flex justify-between items-center">
//             <span className="text-sm text-gray-500">مدة التنفيذ: 1 يوم</span>
//             <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
//               اطلب الخدمة
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Business;






















// import React from 'react';
// import { motion } from 'framer-motion';

// function Business() {
//   const services = [
//     {
//       title: "تركيب أنظمة كهربائية",
//       price: "ابتداءً من 1500 درهم",
//       description: "تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة.",
//       duration: "2-3 أيام",
//       icon: "⚡"
//     },
//     {
//       title: "إصلاح أعطال كهربائية",
//       price: "ابتداءً من 500 درهم",
//       description: "تشخيص وإصلاح جميع أنواع الأعطال الكهربائية بسرعة واحترافية.",
//       duration: "1-2 يوم",
//       icon: "🔧"
//     },
//     {
//       title: "صيانة دورية",
//       price: "ابتداءً من 800 درهم",
//       description: "صيانة دورية للأنظمة الكهربائية لضمان سلامتها واستمرار عملها.",
//       duration: "1 يوم",
//       icon: "🛠️"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2 
//           className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           حلولنا الكهربائية المتكاملة
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ 
//                 duration: 0.6,
//                 delay: index * 0.15,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15
//               }}
//               whileHover={{ 
//                 y: -15,
//                 rotateY: 5,
//                 rotateX: -3
//               }}
//               className="relative perspective-1000"
//             >
//               {/* الطبقة الخلفية ثلاثية الأبعاد */}
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl shadow-2xl blur-md -z-10"
//                 initial={{ rotateX: 15, rotateY: -10, y: 30 }}
//                 whileHover={{ rotateX: 20, rotateY: -15, y: 40 }}
//                 transition={{ duration: 0.5 }}
//               />
              
//               {/* البطاقة الرئيسية */}
//               <motion.div
//                 className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 h-full border border-gray-700/50 shadow-xl overflow-hidden transform-style-preserve-3d"
//                 whileHover={{ 
//                   boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.25)",
//                   borderColor: "rgba(34, 211, 238, 0.5)"
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {/* أيقونة ثلاثية الأبعاد */}
//                 <motion.div
//                   className="absolute -top-10 -right-10 text-8xl opacity-10"
//                   initial={{ rotate: 15 }}
//                   whileHover={{ 
//                     rotate: 25,
//                     scale: 1.2,
//                     opacity: 0.2
//                   }}
//                 >
//                   {service.icon}
//                 </motion.div>
                
//                 {/* محتوى البطاقة */}
//                 <div className="relative z-10">
//                   <div className="flex justify-between items-start mb-6">
//                     <motion.h3 
//                       className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
//                       whileHover={{ x: 5 }}
//                     >
//                       {service.title}
//                     </motion.h3>
//                     <motion.span 
//                       className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-bold border border-cyan-400/20"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       {service.price}
//                     </motion.span>
//                   </div>
                  
//                   <motion.p 
//                     className="text-gray-300 mb-8 leading-relaxed"
//                     whileHover={{ x: 3 }}
//                   >
//                     {service.description}
//                   </motion.p>
                  
//                   <div className="flex justify-between items-center">
//                     <motion.div
//                       className="text-sm bg-gray-700/50 text-cyan-300 px-3 py-1 rounded-full border border-gray-600/50"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       ⏳ {service.duration}
//                     </motion.div>
                    
//                     <motion.button 
//                       className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-2 px-6 rounded-full text-sm font-medium shadow-lg flex items-center gap-2"
//                       whileHover={{ 
//                         scale: 1.05,
//                         boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)"
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span>اطلب الخدمة</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </motion.button>
//                   </div>
//                 </div>
                
//                 {/* تأثيرات ضوئية */}
//                 <motion.div 
//                   className="absolute inset-0 pointer-events-none"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ 
//                     opacity: 1,
//                     background: "radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%)"
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Business;








































import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaTools, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

function BusinessServices() {
  const services = [
    {
      title: "تركيب أنظمة كهربائية",
      price: "ابتداءً من 1500 درهم",
      description: "تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة والسلامة.",
      duration: "2-3 أيام",
      icon: <FaBolt className="text-blue-500" />,
      accent: "from-blue-100/20 to-blue-200/20"
    },
    {
      title: "إصلاح أعطال كهربائية",
      price: "ابتداءً من 500 درهم",
      description: "تشخيص وإصلاح سريع لجميع أنواع الأعطال الكهربائية باحترافية عالية.",
      duration: "1-2 يوم",
      icon: <FaTools className="text-teal-500" />,
      accent: "from-teal-100/20 to-teal-200/20"
    },
    {
      title: "صيانة دورية",
      price: "ابتداءً من 800 درهم",
      description: "برامج صيانة وقائية للأنظمة الكهربائية لضمان الأداء الأمثل.",
      duration: "1 يوم",
      icon: <FaShieldAlt className="text-indigo-500" />,
      accent: "from-indigo-100/20 to-indigo-200/20"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle 3D floating circles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-800/30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 20.5) * 40],
              x: [0, (Math.random() - 20.5) * 40],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 3D Animated Title */}
        <motion.div 
          className="relative mb-20 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#177e89] mb-4"
            whileHover={{
              textShadow: "0 0 10px rgba(0, 0, 0, 0.05)"
            }}
          >
            حلولنا بالاحترافية
          </motion.h2>
          
          <motion.p
            className="text-lg text-[#a2ad59] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            خدمات متكاملة بمعايير عالمية مع ضمان الجودة والسلامة
          </motion.p>
          
          <motion.div 
            className="w-40 h-1 bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
          />
        </motion.div>

        {/* 3D Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 10, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ 
                y: -15,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative perspective-1000"
            >
              {/* 3D Card Depth Effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-3xl shadow-lg blur-lg -z-10`}
                initial={{ rotateX: 10, rotateY: -5, y: 30, opacity: 0.3 }}
                whileHover={{ rotateX: 15, rotateY: -8, y: 40, opacity: 0.5 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Main 3D Card */}
              <motion.div
                className="relative bg-[#f6e54c]/1 backdrop-blur-xl rounded-3xl p-8 h-full border border-[#f6e54c] shadow-lg overflow-hidden transform-style-preserve-3d"
                whileHover={{ 
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(100, 200, 255, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Floating 3D Icon */}
                <motion.div
                  className="absolute -bottom-1 -left-10 text-6xl opacity-20 text-[#748b77] "
                  initial={{ rotate: 15, scale: 5 }}
                  whileHover={{ 
                    rotate: 55,
                    scale: 4.4,
                    opacity: 1.2
                  }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <motion.h3 
                      className="text-2xl font-bold text-[#106f74]"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.span 
                      className="bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.price}
                    </motion.span>
                  </div>
                  
                  <motion.p 
                    className="text-[#598381] mb-8 leading-relaxed flex-grow"
                    whileHover={{ x: 3 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <motion.div
                      className="text-sm bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] px-3 py-1 rounded-full border border-gray-200 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>⏳ {service.duration}</span>
                    </motion.div>
                    
                    {/* <motion.button 
                      className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white py-2 px-5 rounded-full text-sm font-medium shadow-md flex items-center gap-2 group"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(100, 200, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>طلب الخدمة</span>
                      <motion.span
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <FaArrowRight className="text-xs" />
                      </motion.span>
                    </motion.button> */}
                  </div>
                </div>
                
                {/* 3D Hover Light Effect */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.3,
                    background: "radial-gradient(circle at center, rgba(200, 230, 255, 0.1) 0%, transparent 70%)"
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 3D Floating CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 p-0.5 rounded-full shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button 
              className="bg-white text-gray-800 px-10 py-4 rounded-full font-medium text-lg flex items-center gap-3 mx-auto group"
              whileHover={{ 
                backgroundColor: "#f8fafc",
                transition: { duration: 0.3 }
              }}
            >
              <span> عرض جميع الأعمال</span>
              <motion.div
                className="group-hover:translate-x-2 transition-transform"
                animate={{ 
                  x: [0, 9, 0],
                  transition: { duration: 2, repeat: Infinity } 
                }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default BusinessServices;