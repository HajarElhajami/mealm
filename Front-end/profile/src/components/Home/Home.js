// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Section from "./Section";
// import TrustPage from './TrustPage';
// import Business from './Business';
// import Ratings from "./Ratings";
// import Slider from "./Slider";
// import { motion } from "framer-motion";

// function Home() {
//   const { workerId } = useParams();
//   const navigate = useNavigate();
//   const [isValidWorker, setIsValidWorker] = useState(null);

//   // التحقق من صحة workerId
//   useEffect(() => {
//     const checkWorkerId = async () => {
//       try {
//         if (workerId) {
//           // هنا يمكنك إضافة API call للتحقق من صحة workerId
//           // const response = await axios.get(`/api/workers/validate/${workerId}`);
//           // في هذا المثال سنفترض أن workerId صحيح إذا كان موجودًا
//           setIsValidWorker(true);
//         } else {
//           setIsValidWorker(false);
//         }
//       } catch (error) {
//         setIsValidWorker(false);
//         navigate('/error', { state: { message: 'العامل غير موجود' } });
//       }
//     };

//     checkWorkerId();
//   }, [workerId, navigate]);

//   // تأثير الخلفية المتحركة
//   const FloatingBackground = () => (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-blue-800/30"
//           style={{
//             width: `${Math.random() * 300 + 100}px`,
//             height: `${Math.random() * 300 + 100}px`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, (Math.random() - 0.5) * 40],
//             x: [0, (Math.random() - 0.5) * 40],
//             opacity: [0.1, 0.3, 0.1],
//           }}
//           transition={{
//             duration: Math.random() * 15 + 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//         />
//       ))}
//     </div>
//   );

//   if (isValidWorker === null) {
//     // عرض تحميل أثناء التحقق من workerId
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0f4c5c]"></div>
//       </div>
//     );
//   }

//   if (isValidWorker === false) {
//     // عرض صفحة خطأ إذا كان workerId غير صحيح
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-red-600 mb-4">خطأ في تحميل الصفحة</h2>
//           <p className="text-gray-700 mb-6">العامل المطلوب غير موجود أو حدث خطأ في البيانات</p>
//           <button 
//             onClick={() => navigate('/')}
//             className="bg-[#0f4c5c] text-white px-6 py-2 rounded-lg hover:bg-[#5f0f40] transition"
//           >
//             العودة للصفحة الرئيسية
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div dir="rtl" className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-7xl mx-auto bg-white overflow-hidden font-sans relative">
//       {/* إضافة تأثير الخلفية المتحركة */}
//       <FloatingBackground />
      
//       <div className="relative z-10">
//         {/* نعرض مكون Section مع بيانات العامل إذا كان هناك workerId */}
//         {workerId && <Section workerId={workerId} />}
        
//         {/* نعرض باقي المكونات في جميع الحالات */}
//         <TrustPage />
//         <Business workerId={workerId}/>
//         <Ratings workerId={workerId}/>
//         <Slider />
//       </div>
//     </div>
//   );
// }

// export default Home;





































import React from "react";
import { useParams } from "react-router-dom";
import Section from "./Section";
import TrustPage from './TrustPage';
import Business from './Business';
import Ratings from "./Ratings";
import Slider from "./Slider";
import { motion, AnimatePresence } from 'framer-motion';


function Home() {
  const { workerId } = useParams();

  return (
    <div dir="rtl" className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-7xl mx-auto bg-white overflow-hidden font-sans">

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


      {/* نعرض مكون Section مع بيانات العامل إذا كان هناك workerId */}
      <Section workerId={workerId} />
      
      {/* نعرض باقي المكونات في جميع الحالات */}
      <TrustPage workerId={workerId}/>
      <Business workerId={workerId}/>
      <Ratings  workerId={workerId}/>
      {/* <Slider /> */}
    </div>
  );
}

export default Home;
