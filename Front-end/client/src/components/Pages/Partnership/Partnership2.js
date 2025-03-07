
// import { FaClock, FaGlobe, FaStar } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function PartnershipPage() {
//   return (
//     <div className="container mx-auto py-16 px-6 text-center">
//       <h2 className="text-4xl font-bold text-[#234B44] mb-12">
//         لماذا الشراكة مع <span className="text-[#86C4B8]">معلم</span>؟
//       </h2>
//       <div className="grid md:grid-cols-3 gap-12">
//         {/* عنصر 1 */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-t-4 border-[#406F67]"
//         >
//           <FaClock className="text-6xl text-[#ffbc42] mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">مرونة في الخدمة</h3>
//           <p className="text-gray-600">
//             معلم يوفر لك حرية اختيار الوقت المناسب للحصول على الخدمة بكل سهولة وراحة
//           </p>
//         </motion.div>

//         {/* عنصر 2 */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-t-4 border-[#406F67]"
//         >
//           <FaGlobe className="text-6xl text-[#ffbc42] mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">التغطية في جميع أنحاء المغرب</h3>
//           <p className="text-gray-600">
//             معلم يغطي جميع المدن المغربية، مما يسهل عليك الوصول إلى أفضل المهنيين أينما كنت
//           </p>
//         </motion.div>

//         {/* عنصر 3 */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.1 }}
//           className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-t-4 border-[#406F67]"
//         >
//           <FaStar className="text-6xl text-[#ffbc42] mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">أفضل المهنيين بتقييمات عالية</h3>
//           <p className="text-gray-600">
//             يضم معلم مجموعة من أمهر المهنيين الذين حصلوا على تقييمات ممتازة من العملاء لضمان الجودة والاحترافية
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



























import { FaHandshake, FaUsers, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PartnershipPage() {
  return (
    <div className="container mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-[#234B44] mb-12">
        لماذا يجب أن تصبح شريكًا في <span className="text-[#86C4B8]">معلم</span>؟
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* عنصر 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-t-4 border-[#406F67]"
        >
          <FaHandshake className="text-6xl text-[#ffbc42] mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">شراكة مربحة</h3>
          <p className="text-gray-600">
            انضم إلى معلم واستفد من زيادة العملاء والمداخيل من خلال شراكة طويلة الأمد قائمة على الثقة والنجاح المتبادل.
          </p>
        </motion.div>

        {/* عنصر 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-t-4 border-[#406F67]"
        >
          <FaUsers className="text-6xl text-[#ffbc42] mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">وصول إلى قاعدة عملاء ضخمة</h3>
          <p className="text-gray-600">
            استفد من منصة تضم آلاف العملاء الباحثين عن خدمات احترافية، مما يزيد من فرص نجاح أعمالك.
          </p>
        </motion.div>

        {/* عنصر 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center border-t-4 border-[#406F67]"
        >
          <FaChartLine className="text-6xl text-[#ffbc42] mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">زيادة الأرباح والنمو السريع</h3>
          <p className="text-gray-600">
            وفر عليك تكاليف التسويق وانضم إلى معلم، حيث نوفر لك منصة جاهزة للنمو، مع أدوات تحليلية لمتابعة تقدم أعمالك.
          </p>
        </motion.div>
      </div>
      {/* <div className="mt-12">
        <motion.a
          href="/register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ffbc42] text-[#234B44] font-semibold py-3 px-6 rounded-full shadow-md text-lg"
        >
          انضم الآن وابدأ نجاحك!
        </motion.a>
      </div> */}
    </div>
  );
}
