import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Ratings3D() {
  const reviews = [
    {
      id: 1,
      name: "سارة عبدالله",
      rating: 5,
      date: "منذ يومين",
      comment: "أعجبني جداً الاهتمام بالتفاصيل والدقة في التنفيذ، أنصح الجميع بهذه الخدمة المميزة",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      name: "خالد سعيد",
      rating: 4,
      date: "منذ أسبوع",
      comment: "خدمة سريعة واحترافية، فريق العمل كان متعاوناً جداً وحققوا ما وعدوا به",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 3,
      name: "نورا محمد",
      rating: 5,
      date: "منذ 3 أيام",
      comment: "تجربة رائعة! تم إنجاز العمل قبل الموعد المحدد وبجودة عالية تفوق التوقعات",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 4,
      name: "أحمد علي",
      rating: 5,
      date: "منذ شهر",
      comment: "الأسعار مناسبة جداً مقارنة بالجودة المقدمة، سأعتمد عليهم في جميع مشاريعي القادمة",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  // تأثيرات متغيرة لكل بطاقة
  const cardVariants = {
    offscreen: {
      y: 100,
      rotateX: -45,
      opacity: 0
    },
    onscreen: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      rotateY: 5,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* عناصر زخرفية خلفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500">
              آراء عملائنا
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            انطباعات حقيقية من عملاء راضين عن خدماتنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="perspective-1000"
            >
              <div className="relative h-full transform-style-preserve-3d">
                {/* وجه البطاقة الأمامي */}
                <motion.div 
                  className="bg-white rounded-3xl p-6 h-full shadow-xl border border-gray-100 flex flex-col"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 shadow-md">
                          <img 
                            src={review.avatar} 
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1 shadow-sm">
                          <Star className="w-3 h-3 text-white fill-white" />
                        </div>
                      </div>
                      <div className="mr-3">
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-amber-400 to-teal-500 text-white px-2 py-1 rounded-full">
                      <span className="text-sm font-bold">{review.rating}</span>
                      <Star className="w-4 h-4 ml-1 fill-white" />
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">"{review.comment}"</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">#{review.id.toString().padStart(2, '0')}</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* تأثير إضاءة خلف البطاقة */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-100 to-amber-50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-amber-500 text-white px-8 py-4 rounded-full font-medium shadow-lg inline-flex items-center group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">عرض المزيد من التقييمات</span>
            <span className="relative z-10 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* تأثيرات CSS للعناصر المتحركة */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

export default Ratings3D;
































// import { motion } from 'framer-motion';

// function Ratings() {
//   const reviews = [
//     {
//       id: 1,
//       name: "علي محمد",
//       rating: 5,
//       date: "منذ أسبوع",
//       comment: "عمل ممتاز ودقة في المواعيد، النظام الكهربائي يعمل بشكل رائع!",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       id: 2,
//       name: "سميرة أحمد",
//       rating: 4,
//       date: "منذ 3 أيام",
//       comment: "خدمة احترافية وسريعة، أنصح بالتعامل معهم",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//     }
//   ];

//   return (
//     <div className="py-7 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#115e59] to-[#ffe53b]">
//             آراء عملائنا
//           </h2>
//           <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//             اكتشف ما يقوله عملاؤنا عن جودة خدماتنا
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {reviews.map((review, index) => (
//             <motion.div
//               key={review.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 0.6,
//                 delay: index * 0.2,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               whileHover={{ 
//                 y: -10,
//                 rotateY: 5,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//               }}
//               className="relative perspective-1000"
//             >
//               {/* طبقة الظل ثلاثية الأبعاد */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#ffd60a] to-[#ffd60a] rounded-2xl shadow-xl transform rotate-1 -z-10 opacity-2" />
              
//               {/* البطاقة الرئيسية */}
//               <div className="relative bg-white rounded-2xl p-8 h-full border border-[#ffd60a] shadow-lg overflow-hidden transform-style-preserve-3d">
//                 {/* تأثير الإضاءة */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#ffd60a]/10 to-[#9b2226]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center">
//                       <motion.div 
//                         className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#9b2226] shadow-md"
//                         whileHover={{ scale: 1.1 }}
//                       >
//                         <img 
//                           src={review.avatar} 
//                           alt={review.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </motion.div>
//                       <div className="mr-4">
//                         <h4 className="font-bold text-lg text-gray-800">{review.name}</h4>
//                         <div className="flex mt-1">
//                           {[...Array(5)].map((_, i) => (
//                             <motion.svg
//                               key={i}
//                               className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                               fill="currentColor"
//                               viewBox="0 0 20 20"
//                               whileHover={{ scale: 1.2 }}
//                             >
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </motion.svg>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <span className="text-sm text-white bg-[#9b2226] px-2.5 py-1 rounded-full">
//                       {review.date}
//                     </span>
//                   </div>
                  
//                   <motion.p 
//                     className="mt-6 text-gray-600 leading-relaxed"
//                     whileHover={{ x: 5 }}
//                   >
//                     "{review.comment}"
//                   </motion.p>
//                 </div>
                
//                 {/* عناصر زخرفية */}
//                 <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-[#115e59] rounded-full opacity-10" />
//                 <div className="absolute -top-5 -right-4 w-16 h-16 bg-[#115e59] rounded-full opacity-10" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="mt-12 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <motion.button
//             className="bg-gradient-to-r from-[#ffe53b] to-[#115e59] hover:from-[#115e59] hover:to-[#ffe53b] text-white px-8 py-3 rounded-full font-medium shadow-lg inline-flex items-center"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 0 20px rgba(13, 148, 136, 0.3)"
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>عرض جميع التقييمات</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Ratings;