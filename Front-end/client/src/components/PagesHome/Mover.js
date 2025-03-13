// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import img5 from '../Image/5.jpg';

// const Mover = () => {
//   return (
//     <div className="relative overflow-hidden bg-white min-h-screen p-6" dir="rtl">
//       <motion.div
//         className="absolute top-90  right-[40%] w-80 h-60 rounded-full"
//         style={{
//           background: "linear-gradient(135deg, #CFF5EC, #94D1C3)",
//         }}
//         animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />

//      <motion.div
//         className="absolute top-[83%] right-8 w-[17%] h-[17%] rounded-full"
//         style={{
//           background: "linear-gradient(135deg, #CFF5EC, #406F67)",
//         }}
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//       />

//       <div className="absolute left-10 top-[50%] grid grid-cols-3 gap-8">
//         {[...Array(9)].map((_, i) => (
//           <div key={i} className="w-2 h-2 bg-primaryDarkest rounded-full"></div>
//         ))}
//       </div>

//       <div className="absolute top-80 right-20 grid grid-cols-3 gap-5">
//         {[...Array(9)].map((_, i) => (
//           <div key={i} className="w-2 h-2 bg-light rounded-full"></div>
//         ))}
//       </div>

//       <div className="relative z-10">
//         <div className="mb-20 max-w-7xl mx-auto grid grid-cols-4 gap-7">
//          <Link to="/WaterHeaters" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             نقل الأثاث والأغراض المنزلية 
//           </Link>
//           <Link to="/WaterSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             نقل البضائع التجارية  
//           </Link>
//           <Link to="/LeakRepair" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات التوصيل السريع 
//           </Link>
//           <Link to="/Drainage" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات النقل المخصصة  
//           </Link>
//           <Link to="/HeatingSystems" className="text-[#406F67] pt-6 border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات النقل للشركات
//           </Link>
//           <Link to="/SystemInspection" className="text-[#406F67] pt-6 border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات النقل للسياح
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات النقل بالشاحنات الصغيرة أو الكبيرة
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات النقل بالدراجات النارية أو السيارات الصغيرة  
//           </Link>          <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             خدمات النقل للمناطق النائية
//           </Link>
//           <Link to="/AdditionalServices" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             الخدمات الإضافية
//           </Link>
//         </div>

//         <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-10">
//           <img src={img5} alt="Plumber" className="rounded-lg w-[90%] mx-auto" />
//           <div className="pt-3 max-w-4xl mr-[86px] bg-white rounded-lg p-7 mt-6">
//             <h1 className="text-[#406F67] text-4xl font-bold mb-5 text-right">
//               عمل الصباغ 
//             </h1>
//             <p className="text-[#406F67] text-[17px] text-right">
//                يقوم بنقل الأثاث والأغراض المنزلية بين المنازل أو المدن بكل أمان.<br/>
//                يوفر خدمات تغليف الأثاث والأغراض لحمايتها من التلف أثناء النقل.<br/>
//                يقوم بتفكيك وتركيب الأثاث الكبير مثل الخزانات والطاولات لتسهيل عملية النقل.<br/>
//                يوفر خدمات التوصيل السريع للطرود والمستندات داخل المدن أو بينها.<br/>
//                يقدم خدمات تخزين آمنة للأثاث أو البضائع لفترات طويلة أو قصيرة.<br/>
//                يوفر خدمات نقل المركبات أو المعدات الثقيلة عبر شاحنات مخصصة.<br/>
//                يقوم بنقل المحاصيل الزراعية من المزارع إلى الأسواق أو مراكز التوزيع.<br/>
//                يوفر خدمات نقل الأمتعة والمعدات للسياح والمسافرين.<br/>
//                يوفر خدمات نقل مؤقتة للفعاليات والمناسبات الخاصة.<br/>
//                ينقل الكتب والمعدات التعليمية بين المدارس والجامعات.<br/>
//                يستخدم وسائل نقل صديقة للبيئة لتقليل الانبعاثات الضارة.<br/>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mover;
  
































import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img5 from "../Image/5.jpg";

const Mover = () => {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen p-6" dir="rtl">
      <motion.div
        className="absolute top-80 right-[40%] w-80 h-60 rounded-full"
        style={{ background: "linear-gradient(135deg, #CFF5EC, #94D1C3)" }}
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[83%] right-8 w-[17%] h-[17%] rounded-full"
        style={{ background: "linear-gradient(135deg, #CFF5EC, #406F67)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="mb-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[
     "نقل الأثاث والأغراض المنزلية",
     "نقل البضائع التجارية",
     "خدمات التوصيل السريع",
     "خدمات النقل المخصصة",
     "خدمات النقل للشركات",
     "خدمات النقل للسياح",
     "النقل بالشاحنات الصغيرة أو الكبيرة",
     "النقل بالدراجات النارية ",
     "النقل بالسيارات الصغيرة ",
      "النقل للمناطق النائية",
         ].map((text, index) => (
         <Link
            key={index}
            to="/l1/request"
            state={{ serviceName: text }}
            className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
         >
           {text}
         </Link>
          ))}
           </div>
            <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-5 sm:p-10">
                 <img src={img5} alt="Gardener" className="rounded-lg w-full sm:w-[90%] mx-auto" />
                 <div className="pt-3 max-w-4xl mx-auto bg-white rounded-lg p-5 sm:p-7 mt-6">
                 <h1 className="text-[#406F67] text-2xl sm:text-4xl font-bold mb-5 text-right">
                   عامل التوصيل
                   </h1>
           <p className="text-[#406F67] text-[17px] text-right">
               نقل الأثاث والأغراض المنزلية بين المنازل أو المدن بأمان.<br />
               توفير خدمات تغليف الأثاث للحماية أثناء النقل.<br />
               تفكيك وتركيب الأثاث الكبير لتسهيل النقل.<br />
               التوصيل السريع للطرود والمستندات داخل المدن.<br />
               خدمات تخزين الأثاث أو البضائع لفترات مختلفة.<br />
               نقل المركبات والمعدات الثقيلة عبر شاحنات مخصصة.<br />
               نقل المحاصيل الزراعية من المزارع إلى الأسواق.<br />
               نقل الأمتعة والمعدات للسياح والمسافرين.<br />
               النقل المؤقت للفعاليات والمناسبات الخاصة.<br />
               استخدام وسائل نقل صديقة للبيئة لتقليل الانبعاثات الضارة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mover;
