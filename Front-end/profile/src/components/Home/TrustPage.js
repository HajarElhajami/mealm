// import { motion } from 'framer-motion';
// import { Star, ShieldCheck, BadgeCheck, Clock, Award, Heart } from 'lucide-react';

// const TrustPage = () => {
//   const trustFeatures = [
//     {
//       icon: <ShieldCheck className="w-8 h-8" />,
//       title: "حماية العميل",
//       description: "نضمن حقوقك كاملة ونحمي معلوماتك الشخصية بمعايير أمنية عالية"
//     },
//     {
//       icon: <BadgeCheck className="w-8 h-8" />,
//       title: "خدمات موثقة",
//       description: "جميع الخدمات تمر عبر مراحل تأهيل وفحص دقيقة لضمان الجودة"
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "التزام بالتوقيت",
//       description: "نلتزم بالمواعيد المتفق عليها ونعوضك عن أي تأخير غير مبرر"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "خبراء معتمدون",
//       description: "فريقنا من المحترفين المعتمدين ذوي الخبرة الواسعة في مجالاتهم"
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "رضاء مضمون",
//       description: "ضمان استرداد المبلغ إذا لم تكن راضياً عن الخدمة المقدمة"
//     },
//     {
//       icon: <Star className="w-8 h-8" />,
//       title: "تقييم شفاف",
//       description: "نظام تقييم واضح وعادل يعكس جودة الخدمة الحقيقية"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "أحمد السيد",
//       role: "عميل مميز",
//       comment: "وفرت لي المنصة أفضل المحترفين في مجالهم، جميعهم التزموا بمعايير الجودة والوقت المتفق عليه",
//       rating: 5,
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       name: "نورا محمد",
//       role: "عميلة دائمة",
//       comment: "الشيء الأفضل هو نظام الحماية الذي يضمن حقوقي كعميلة، أشعر بأمان تام أثناء التعامل",
//       rating: 5,
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//     }
//   ];

//   // تأثيرات ثلاثية الأبعاد للبطاقات
//   const cardVariants = {
//     offscreen: {
//       y: 100,
//       rotateX: -15,
//       opacity: 0,
//       scale: 0.9
//     },
//     onscreen: {
//       y: 0,
//       rotateX: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.8
//       }
//     },
//     hover: {
//       y: -10,
//       rotateY: 5,
//       rotateX: 2,
//       scale: 1.03,
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   // تأثيرات ثلاثية الأبعاد للعناصر الرئيسية
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   return (
//     <div className="relative overflow-hidden  min-h-screen">
//       {/* عناصر زخرفية ثلاثية الأبعاد */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-100 opacity-20 blur-3xl"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, -30, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-100 opacity-20 blur-3xl"
//           animate={{
//             x: [0, -40, 0],
//             y: [0, 20, 0],
//             scale: [1, 1.2, 1]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* القسم الرئيسي */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500">
//               ثقة تبدأ من أول لقاء
//             </span>
//           </motion.h1>
          
//           <motion.p
//             className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             نقدم نظامًا متكاملًا يضمن حقوق الجميع ويبني جسور الثقة بين العملاء ومقدمي الخدمة
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <motion.button
//               className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-xl text-lg inline-flex items-center group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10">اكتشف كيف نضمن حقوقك</span>
//               <span className="relative z-10 mr-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* ميزات بناء الثقة */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28"
//         >
//           {trustFeatures.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               className="perspective-1000"
//             >
//               <div className="relative h-full transform-style-preserve-3d">
//                 <motion.div 
//                   className="bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-100 flex flex-col items-center text-center"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     backfaceVisibility: 'hidden'
//                   }}
//                   whileHover="hover"
//                 >
//                   <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-amber-100 flex items-center justify-center mb-6 text-teal-600">
//                     {feature.icon}
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
                  
//                   {/* تأثير ثلاثي الأبعاد عند التحويم */}
//                   <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-50 to-amber-50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* نظام التقييم والثقة */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-teal-600 to-amber-500 rounded-3xl p-0.5 mb-28"
//         >
//           <div className="bg-white rounded-[calc(1.5rem-1px)] p-8 md:p-12">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                   نظام التقييم الشفاف
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-6">
//                   نضمن لك تقييمًا عادلًا وشفافًا لمقدم الخدمة بناءً على معايير دقيقة تشمل الجودة، الالتزام بالمواعيد، الاحترافية، ورضاء العملاء.
//                 </p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-full p-1 text-teal-600 mr-3">
//                       <Check className="w-4 h-4" />
//                     </div>
//                     <span className="text-gray-700">تقييمات حقيقية من عملاء سابقين</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-full p-1 text-teal-600 mr-3">
//                       <Check className="w-4 h-4" />
//                     </div>
//                     <span className="text-gray-700">تحليل دقيق لجميع التعليقات</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-full p-1 text-teal-600 mr-3">
//                       <Check className="w-4 h-4" />
//                     </div>
//                     <span className="text-gray-700">نظام تصنيف متعدد المعايير</span>
//                   </li>
//                 </ul>
//               </div>
              
//               <div className="md:w-1/2">
//                 <motion.div 
//                   className="relative"
//                   initial={{ rotateY: 30, opacity: 0.8 }}
//                   whileInView={{ rotateY: 0, opacity: 1 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-2xl opacity-20 blur-lg"></div>
//                   <div className="relative bg-white rounded-xl shadow-xl p-6 transform-style-preserve-3d">
//                     <div className="flex justify-between items-start mb-6">
//                       <div>
//                         <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mb-3">
//                           <img 
//                             src="https://randomuser.me/api/portraits/men/75.jpg" 
//                             alt="مقدم خدمة" 
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <h4 className="font-bold text-gray-900">خالد محمود</h4>
//                         <p className="text-sm text-gray-500">مقدم خدمة مميز</p>
//                       </div>
//                       <div className="bg-gradient-to-r from-amber-400 to-teal-500 text-white px-3 py-1 rounded-full flex items-center">
//                         <span className="font-bold">4.9</span>
//                         <Star className="w-4 h-4 ml-1 fill-white" />
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-center mb-6">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`w-6 h-6 mx-1 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
//                         />
//                       ))}
//                     </div>
                    
//                     <div className="space-y-4 mb-6">
//                       <div>
//                         <div className="flex justify-between text-sm text-gray-500 mb-1">
//                           <span>الجودة</span>
//                           <span>4.8</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div className="bg-teal-500 h-2 rounded-full" style={{ width: '96%' }}></div>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="flex justify-between text-sm text-gray-500 mb-1">
//                           <span>الالتزام بالوقت</span>
//                           <span>5.0</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div className="bg-amber-400 h-2 rounded-full" style={{ width: '100%' }}></div>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="flex justify-between text-sm text-gray-500 mb-1">
//                           <span>التواصل</span>
//                           <span>4.7</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div className="bg-teal-500 h-2 rounded-full" style={{ width: '94%' }}></div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="text-center text-sm text-gray-500">
//                       37 تقييمًا | 92% رضاء
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* آراء العملاء */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-28"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//             ماذا يقول عملاؤنا؟
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="perspective-1000"
//               >
//                 <div className="relative h-full transform-style-preserve-3d">
//                   <motion.div 
//                     className="bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-100"
//                     whileHover={{
//                       y: -10,
//                       rotateY: 3,
//                       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
//                     }}
//                   >
//                     <div className="flex items-center mb-6">
//                       <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 shadow-md">
//                         <img 
//                           src={testimonial.avatar} 
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="mr-4">
//                         <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                         <p className="text-sm text-gray-500">{testimonial.role}</p>
//                       </div>
//                       <div className="flex items-center bg-gradient-to-r from-amber-400 to-teal-500 text-white px-2.5 py-1 rounded-full ml-auto">
//                         <span className="text-sm font-bold">{testimonial.rating}</span>
//                         <Star className="w-4 h-4 mr-1 fill-white" />
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                    
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
//                         />
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* دعوة للعمل */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             مستعد لبدء تجربتك بكل ثقة؟
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             انضم إلى آلاف العملاء الراضين الذين وجدوا الحل الأمثل لاحتياجاتهم
//           </p>
          
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center gap-4"
//           >
//             <motion.button
//               className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-xl text-lg inline-flex items-center group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10">ابحث عن مقدم الخدمة المثالي</span>
//               <span className="relative z-10 mr-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </motion.button>
            
//             <motion.button
//               className="relative overflow-hidden bg-white text-teal-600 px-8 py-4 rounded-full font-bold shadow-xl text-lg inline-flex items-center group border border-gray-200"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10">كيف نضمن حقوقك</span>
//               <span className="relative z-10 mr-2">
//                 <ShieldCheck className="w-5 h-5" />
//               </span>
//               <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
      
//       {/* تأثيرات CSS */}
//       <style jsx global>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//       `}</style>
//     </div>
//   );
// };

// // مكون مساعد للأيقونة
// const Check = ({ className }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
//     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//   </svg>
// );

// export default TrustPage;






































// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FaBolt, FaTools, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

// // function BusinessServices() {
// //   const services = [
// //     {
// //       title: "تركيب أنظمة كهربائية",
// //       price: "ابتداءً من 1500 درهم",
// //       description: "تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة والسلامة.",
// //       duration: "2-3 أيام",
// //       icon: <FaBolt className="text-blue-500" />,
// //       accent: "from-blue-100/20 to-blue-200/20"
// //     },
// //     {
// //       title: "إصلاح أعطال كهربائية",
// //       price: "ابتداءً من 500 درهم",
// //       description: "تشخيص وإصلاح سريع لجميع أنواع الأعطال الكهربائية باحترافية عالية.",
// //       duration: "1-2 يوم",
// //       icon: <FaTools className="text-teal-500" />,
// //       accent: "from-teal-100/20 to-teal-200/20"
// //     },
// //     {
// //       title: "صيانة دورية",
// //       price: "ابتداءً من 800 درهم",
// //       description: "برامج صيانة وقائية للأنظمة الكهربائية لضمان الأداء الأمثل.",
// //       duration: "1 يوم",
// //       icon: <FaShieldAlt className="text-indigo-500" />,
// //       accent: "from-indigo-100/20 to-indigo-200/20"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
// //       {/* Subtle 3D floating circles background */}
// //       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
// //         {[...Array(10)].map((_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute rounded-full bg-blue-800/30"
// //             style={{
// //               width: `${Math.random() * 300 + 100}px`,
// //               height: `${Math.random() * 300 + 100}px`,
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //             }}
// //             animate={{
// //               y: [0, (Math.random() - 20.5) * 40],
// //               x: [0, (Math.random() - 20.5) * 40],
// //               opacity: [0.1, 0.3, 0.1],
// //             }}
// //             transition={{
// //               duration: Math.random() * 15 + 10,
// //               repeat: Infinity,
// //               repeatType: "reverse",
// //               ease: "easeInOut"
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* 3D Animated Title */}
// //         <motion.div 
// //           className="relative mb-20 text-center"
// //           initial={{ opacity: 0, y: -40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
// //         >
// //           <motion.div
// //             className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl -z-10"
// //             animate={{
// //               scale: [1, 1.1, 1],
// //               opacity: [0.2, 0.4, 0.2]
// //             }}
// //             transition={{
// //               duration: 8,
// //               repeat: Infinity,
// //               ease: "easeInOut"
// //             }}
// //           />
          
// //           <motion.h2 
// //             className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#177e89] mb-4"
// //             whileHover={{
// //               textShadow: "0 0 10px rgba(0, 0, 0, 0.05)"
// //             }}
// //           >
// //             حلولنا بالاحترافية
// //           </motion.h2>
          
// //           <motion.p
// //             className="text-lg text-[#a2ad59] max-w-2xl mx-auto"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.3, duration: 0.8 }}
// //           >
// //             خدمات متكاملة بمعايير عالمية مع ضمان الجودة والسلامة
// //           </motion.p>
          
// //           <motion.div 
// //             className="w-40 h-1 bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] mx-auto mt-8 rounded-full"
// //             initial={{ scaleX: 0 }}
// //             animate={{ scaleX: 1 }}
// //             transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
// //           />
// //         </motion.div>

// //         {/* 3D Services Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 60, rotateX: 15 }}
// //               whileInView={{ opacity: 10, y: 0, rotateX: 0 }}
// //               transition={{ 
// //                 duration: 0.8,
// //                 delay: index * 0.15,
// //                 type: "spring",
// //                 stiffness: 100,
// //                 damping: 12
// //               }}
// //               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
// //               whileHover={{ 
// //                 y: -15,
// //                 rotateY: 3,
// //                 transition: { type: "spring", stiffness: 300 }
// //               }}
// //               className="relative perspective-1000"
// //             >
// //               {/* 3D Card Depth Effect */}
// //               <motion.div 
// //                 className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-3xl shadow-lg blur-lg -z-10`}
// //                 initial={{ rotateX: 10, rotateY: -5, y: 30, opacity: 0.3 }}
// //                 whileHover={{ rotateX: 15, rotateY: -8, y: 40, opacity: 0.5 }}
// //                 transition={{ duration: 0.6 }}
// //               />
              
// //               {/* Main 3D Card */}
// //               <motion.div
// //                 className="relative bg-[#f6e54c]/1 backdrop-blur-xl rounded-3xl p-8 h-full border border-[#f6e54c] shadow-lg overflow-hidden transform-style-preserve-3d"
// //                 whileHover={{ 
// //                   boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
// //                   borderColor: "rgba(100, 200, 255, 0.3)"
// //                 }}
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 {/* Floating 3D Icon */}
// //                 <motion.div
// //                   className="absolute -bottom-1 -left-10 text-6xl opacity-20 text-[#748b77] "
// //                   initial={{ rotate: 15, scale: 5 }}
// //                   whileHover={{ 
// //                     rotate: 55,
// //                     scale: 4.4,
// //                     opacity: 1.2
// //                   }}
// //                 >
// //                   {service.icon}
// //                 </motion.div>
                
// //                 {/* Card Content */}
// //                 <div className="relative z-10 h-full flex flex-col">
// //                   <div className="flex justify-between items-start mb-6">
// //                     <motion.h3 
// //                       className="text-2xl font-bold text-[#106f74]"
// //                       whileHover={{ x: 5 }}
// //                     >
// //                       {service.title}
// //                     </motion.h3>
// //                     <motion.span 
// //                       className="bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
// //                       whileHover={{ scale: 1.05 }}
// //                     >
// //                       {service.price}
// //                     </motion.span>
// //                   </div>
                  
// //                   <motion.p 
// //                     className="text-[#598381] mb-8 leading-relaxed flex-grow"
// //                     whileHover={{ x: 3 }}
// //                   >
// //                     {service.description}
// //                   </motion.p>
                  
// //                   <div className="flex justify-between items-center mt-auto">
// //                     <motion.div
// //                       className="text-sm bg-gradient-to-r from-[#94D1C3] to-[#f6e54c] px-3 py-1 rounded-full border border-gray-200 flex items-center gap-2"
// //                       whileHover={{ scale: 1.05 }}
// //                     >
// //                       <span>⏳ {service.duration}</span>
// //                     </motion.div>
                    
// //                     {/* <motion.button 
// //                       className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white py-2 px-5 rounded-full text-sm font-medium shadow-md flex items-center gap-2 group"
// //                       whileHover={{ 
// //                         scale: 1.05,
// //                         boxShadow: "0 0 15px rgba(100, 200, 255, 0.3)"
// //                       }}
// //                       whileTap={{ scale: 0.95 }}
// //                     >
// //                       <span>طلب الخدمة</span>
// //                       <motion.span
// //                         className="group-hover:translate-x-1 transition-transform"
// //                       >
// //                         <FaArrowRight className="text-xs" />
// //                       </motion.span>
// //                     </motion.button> */}
// //                   </div>
// //                 </div>
                
// //                 {/* 3D Hover Light Effect */}
// //                 <motion.div 
// //                   className="absolute inset-0 pointer-events-none overflow-hidden"
// //                   initial={{ opacity: 0 }}
// //                   whileHover={{ 
// //                     opacity: 0.3,
// //                     background: "radial-gradient(circle at center, rgba(200, 230, 255, 0.1) 0%, transparent 70%)"
// //                   }}
// //                   transition={{ duration: 0.5 }}
// //                 />
// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* 3D Floating CTA */}
// //         <motion.div 
// //           className="mt-16 text-center"
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.5, duration: 0.8 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.div 
// //             className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 p-0.5 rounded-full shadow-lg"
// //             whileHover={{ scale: 1.03 }}
// //             whileTap={{ scale: 0.98 }}
// //           >
// //             <motion.button 
// //               className="bg-white text-gray-800 px-10 py-4 rounded-full font-medium text-lg flex items-center gap-3 mx-auto group"
// //               whileHover={{ 
// //                 backgroundColor: "#f8fafc",
// //                 transition: { duration: 0.3 }
// //               }}
// //             >
// //               <span> عرض جميع الأعمال</span>
// //               <motion.div
// //                 className="group-hover:translate-x-2 transition-transform"
// //                 animate={{ 
// //                   x: [0, 9, 0],
// //                   transition: { duration: 2, repeat: Infinity } 
// //                 }}
// //               >
// //                 <FaArrowRight />
// //               </motion.div>
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default BusinessServices;










































































import './Style.css';
import { ShieldCheck, Headset, CheckCircle, BadgeCheck, Award, HeartHandshake } from "lucide-react";
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function TrustSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  
  return (
    <div 
      ref={ref}
      className="relative bg-gradient-to-br from-[#2a5c55] to-[#1a3a34] py-16 px-6 md:px-20 overflow-hidden"
    >
      {/* تأثيرات الخلفية ثلاثية الأبعاد */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ 
          backgroundImage: "url('/images/3d-grid-pattern.png')",
          y: yBg
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div style={{ y: yText }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            ثقتكم <span className="text-amber-300">بنا</span> هي <span className="text-emerald-300">أساس</span> نجاحنا
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            نقدم ضمانات حقيقية وشفافية كاملة لراحتكم واطمئنانكم
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* بطاقة 3D الأولى */}
          <motion.div 
            className="trust-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="icon-wrapper bg-blue-500/20">
              <ShieldCheck className="icon-style text-blue-400" size={40} />
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl pointer-events-none"></div>
            </div>
            <h3 className="card-title">حماية وأمان</h3>
            <p className="card-text">
              جميع معاملاتك محمية بتقنيات التشفير الحديثة لضمان أقصى درجات الأمان
            </p>
            <div className="trust-badge">
              <BadgeCheck className="mr-2" />
              <span>مضمون بنسبة 100%</span>
            </div>
          </motion.div>

          {/* بطاقة 3D الثانية */}
          <motion.div 
            className="trust-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="icon-wrapper bg-emerald-500/20">
              <Headset className="icon-style text-emerald-400" size={40} />
              <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-xl pointer-events-none"></div>
            </div>
            <h3 className="card-title">دعم فوري</h3>
            <p className="card-text">
              فريق دعم فني متاح على مدار الساعة لمساعدتك في أي استفسار أو مشكلة
            </p>
            <div className="trust-badge">
              <Award className="mr-2" />
              <span>خدمة 24/7</span>
            </div>
          </motion.div>

          {/* بطاقة 3D الثالثة */}
          <motion.div 
            className="trust-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="icon-wrapper bg-amber-500/20">
              <HeartHandshake className="icon-style text-amber-400" size={40} />
              <div className="absolute inset-0 border-2 border-amber-400/30 rounded-xl pointer-events-none"></div>
            </div>
            <h3 className="card-title">رضا مضمون</h3>
            <p className="card-text">
              إذا لم تكن راضياً عن خدمتنا، سنعيد لك أموالك بدون أي تعقيدات
            </p>
            <div className="trust-badge">
              <CheckCircle className="mr-2" />
              <span>ضمان استرداد الأموال</span>
            </div>
          </motion.div>
        </div>

        {/* إحصاءات الثقة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-white mb-2">+10K</div>
            <div className="text-gray-300">عميل راضٍ</div>
          </motion.div>
          
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-300">معدل رضا</div>
          </motion.div>
          
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">دعم فني</div>
          </motion.div>
          
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">حماية وأمان</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}