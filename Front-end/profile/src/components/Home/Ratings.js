

// function Ratings() {
//   return (
//     <div>
// {/* قسم التقييمات */}
// <div className="mt-12 px-8">
//           <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">تقييمات العملاء</h2>
          
//           <div className="mt-6 grid md:grid-cols-2 gap-6">
//             <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md">
//               <div className="flex justify-between">
//                 <div>
//                   <h4 className="font-bold text-[#406F67]">علي محمد</h4>
//                   <div className="text-yellow-400 text-sm mt-1">
//                     ★★★★★
//                   </div>
//                 </div>
//                 <span className="text-sm text-gray-500">منذ أسبوع</span>
//               </div>
//               <p className="mt-3 text-gray-700">عمل ممتاز ودقة في المواعيد، النظام الكهربائي يعمل بشكل رائع!</p>
//             </div>
//           </div>
          
//           <button className="mt-6 w-full py-3 border-2 border-[#A9E7DA] rounded-lg text-[#406F67] font-medium hover:bg-[#EAF9F6] transition">
//             عرض الكل
//           </button>
//         </div>
//     </div>
//   );
// }

// export default Ratings;
































import { motion } from 'framer-motion';

function Ratings() {
  const reviews = [
    {
      id: 1,
      name: "علي محمد",
      rating: 5,
      date: "منذ أسبوع",
      comment: "عمل ممتاز ودقة في المواعيد، النظام الكهربائي يعمل بشكل رائع!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "سميرة أحمد",
      rating: 4,
      date: "منذ 3 أيام",
      comment: "خدمة احترافية وسريعة، أنصح بالتعامل معهم",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <div className="py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#115e59] to-[#ffe53b]">
            آراء عملائنا
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            اكتشف ما يقوله عملاؤنا عن جودة خدماتنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="relative perspective-1000"
            >
              {/* طبقة الظل ثلاثية الأبعاد */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd60a] to-[#ffd60a] rounded-2xl shadow-xl transform rotate-1 -z-10 opacity-2" />
              
              {/* البطاقة الرئيسية */}
              <div className="relative bg-white rounded-2xl p-8 h-full border border-[#ffd60a] shadow-lg overflow-hidden transform-style-preserve-3d">
                {/* تأثير الإضاءة */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd60a]/10 to-[#9b2226]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#9b2226] shadow-md"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img 
                          src={review.avatar} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="mr-4">
                        <h4 className="font-bold text-lg text-gray-800">{review.name}</h4>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.svg
                              key={i}
                              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              whileHover={{ scale: 1.2 }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-white bg-[#9b2226] px-2.5 py-1 rounded-full">
                      {review.date}
                    </span>
                  </div>
                  
                  <motion.p 
                    className="mt-6 text-gray-600 leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    "{review.comment}"
                  </motion.p>
                </div>
                
                {/* عناصر زخرفية */}
                <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-[#115e59] rounded-full opacity-10" />
                <div className="absolute -top-5 -right-4 w-16 h-16 bg-[#115e59] rounded-full opacity-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#ffe53b] to-[#115e59] hover:from-[#115e59] hover:to-[#ffe53b] text-white px-8 py-3 rounded-full font-medium shadow-lg inline-flex items-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(13, 148, 136, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>عرض جميع التقييمات</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Ratings;