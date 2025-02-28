// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import img2 from '../Image/2.jpg';

// const Plumber = () => {
//   return (
//     <div className="relative overflow- bg- min-h-screen p-6" dir="rtl">
//       <motion.div
//         className="absolute top-90  right-[40%] w-80 h-60 rounded-full"
//         style={{
//           background: "linear-gradient(135deg, #CFF5EC, #94D1C3)",
//         }}
//         animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />

//       <motion.div
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
//           <Link to="/WaterSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب أنظمة المياه
//           </Link>
//           <Link to="/LeakRepair" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             إصلاح التسريبات
//           </Link>
//           <Link to="/Drainage" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             صيانة أنظمة الصرف الصحي
//           </Link>
//           <Link to="/WaterHeaters" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب سخانات المياه
//           </Link>
//           <Link to="/HeatingSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب أنظمة التدفئة
//           </Link>
//           <Link to="/SystemInspection" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             فحص الأنظمة
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             التعامل مع حالات الطوارئ
//           </Link>
//           <Link to="/AdditionalServices" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             الخدمات الإضافية
//           </Link>
//         </div>

//         <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-10">
//           <img src={img2} alt="Plumber" className="rounded-lg w-[90%] mx-auto" />
//           <div className="pt-3 max-w-4xl mr-[86px] bg-white rounded-lg p-7 mt-6">
//             <h1 className="text-[#406F67] text-4xl font-bold mb-5 text-right">
//               عمل السباك
//             </h1>
//             <p className="text-[#406F67] text-[17px] text-right">
//                تركيب وإصلاح أنظمة المياه والصرف الصحي<br />
//                إصلاح التسريبات واستبدال الأدوات التالفة<br />
//                تركيب سخانات المياه وأنظمة التدفئة<br />
//                فحص وتقييم أنظمة المياه والصرف الصحي<br />
//                التعامل مع حالات الطوارئ مثل انفجار الأنابيب أو الفيضانات<br />
//                تركيب فلاتر المياه وأنظمة الري الحديثة<br />
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Plumber;
  





























import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img2 from '../Image/2.jpg';

const Plumber = () => {
  return (
    <div className="relative overflow-hidden bg-min-h-screen p-6" dir="rtl">
      <motion.div
        className="absolute top-[90%] right-[40%] w-80 h-60 rounded-full"
        style={{
          background: "linear-gradient(135deg, #CFF5EC, #94D1C3)",
        }}
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[83%] right-8 w-[17%] h-[17%] rounded-full"
        style={{
          background: "linear-gradient(135deg, #CFF5EC, #406F67)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="absolute left-10 top-[50%] grid grid-cols-3 gap-8 sm:grid-cols-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primaryDarkest rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-80 right-20 grid grid-cols-3 gap-5 sm:grid-cols-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-light rounded-full"></div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="mb-20 max-w-7xl mx-auto grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          <Link to="/WaterSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تركيب أنظمة المياه
          </Link>
          <Link to="/LeakRepair" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            إصلاح التسريبات
          </Link>
          <Link to="/Drainage" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            صيانة أنظمة الصرف الصحي
          </Link>
          <Link to="/WaterHeaters" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تركيب سخانات المياه
          </Link>
          <Link to="/HeatingSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تركيب أنظمة التدفئة
          </Link>
          <Link to="/SystemInspection" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            فحص الأنظمة
          </Link>
          <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            التعامل مع حالات الطوارئ
          </Link>
          <Link to="/AdditionalServices" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            الخدمات الإضافية
          </Link>
        </div>

        <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-5 sm:p-10">
          <img src={img2} alt="Gardener" className="rounded-lg w-full sm:w-[90%] mx-auto" />
          <div className="pt-3 max-w-4xl mx-auto bg-white rounded-lg p-5 sm:p-7 mt-6">
            <h1 className="text-[#406F67] text-2xl sm:text-4xl font-bold mb-5 text-right">
              عمل السباك
            </h1>
            <p className="text-[#406F67] text-[17px] text-right">
               تركيب وإصلاح أنظمة المياه والصرف الصحي<br />
               إصلاح التسريبات واستبدال الأدوات التالفة<br />
               تركيب سخانات المياه وأنظمة التدفئة<br />
               فحص وتقييم أنظمة المياه والصرف الصحي<br />
               التعامل مع حالات الطوارئ مثل انفجار الأنابيب أو الفيضانات<br />
               تركيب فلاتر المياه وأنظمة الري الحديثة<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plumber;
