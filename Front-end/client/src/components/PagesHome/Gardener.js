// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import img5 from '../Image/8.jpg';

// const Gardener = () => {
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
//          <Link to="/WaterHeaters" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             زراعة النباتات والأشجار  
//           </Link>
//           <Link to="/WaterSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//           العناية بالنباتات 
//           </Link>
//           <Link to="/LeakRepair" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//           تقليم الأشجار والشجيرات
//           </Link>
//           <Link to="/Drainage" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//           تصميم الحدائق 
//           </Link>
//           <Link to="/HeatingSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//           تركيب أنظمة الري
//           </Link>
//           <Link to="/SystemInspection" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//           تنظيف الحدائق
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//            صيانة المسطحات الخضراء
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//           تزيين الحدائق 
//           </Link>          <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//            مكافحة الأمراض الشجيرات
//           </Link>
//           <Link to="/AdditionalServices" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             الخدمات الإضافية
//           </Link>
//         </div>

//         <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-10">
//           <img src={img5} alt="Plumber" className="rounded-lg w-[90%] mx-auto" />
//           <div className="pt-3 max-w-4xl mr-[86px] bg-white rounded-lg p-7 mt-6">
//             <h1 className="text-[#406F67] text-4xl font-bold mb-5 text-right">
//               عمل البستاني 
//             </h1>
//             <p className="text-[#406F67] text-[17px] text-right">
//               يقوم بزراعة النباتات والأشجار والعناية بها.<br/>
//               يعتني بتقليم الأشجار ومكافحة الآفات.<br/>
//               يصمم الحدائق ويزينها لتبدو جذابة.<br/>
//               يقدم نصائح حول كيفية العناية بالمساحات الخضراء.<br/>
//               استخدام أنظمة الري الحديثة.<br/>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gardener;






























import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img5 from '../Image/8.jpg';

const Gardener = () => {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen p-6 sm:p-10" dir="rtl">
      <motion.div
        className="absolute top-90 right-[40%] w-80 h-60 rounded-full"
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

      <div className="relative z-10">
      <div className="mb-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Link to="/l1/request" state={{ serviceName: "زراعة النباتات والأشجار" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        زراعة النباتات والأشجار
      </Link>

      <Link to="/l1/request" state={{ serviceName: "العناية بالنباتات" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        العناية بالنباتات
      </Link>

      <Link to="/l1/request" state={{ serviceName: "تقليم الأشجار والشجيرات" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        تقليم الأشجار والشجيرات
      </Link>

      <Link to="/l1/request" state={{ serviceName: "تصميم الحدائق" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        تصميم الحدائق
      </Link>

      <Link to="/l1/request" state={{ serviceName: "تركيب أنظمة الري" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        تركيب أنظمة الري
      </Link>

      <Link to="/l1/request" state={{ serviceName: "تنظيف الحدائق" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        تنظيف الحدائق
      </Link>

      <Link to="/l1/request" state={{ serviceName: "صيانة المسطحات الخضراء" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        صيانة المسطحات الخضراء
      </Link>

      <Link to="/l1/request" state={{ serviceName: "تزيين الحدائق" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        تزيين الحدائق
      </Link>

      <Link to="/l1/request" state={{ serviceName: "مكافحة أمراض الشجيرات" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
        مكافحة أمراض الشجيرات
      </Link>

      {/* {["زراعة النباتات والأشجار", "العناية بالنباتات", "تقليم الأشجار والشجيرات", "تصميم الحدائق", "تركيب أنظمة الري", "تنظيف الحدائق", "صيانة المسطحات الخضراء", "تزيين الحدائق", "مكافحة الأمراض الشجيرات", "الخدمات الإضافية"].map((text, i) => (
            <Link key={i} to="/Service"
              className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
              {text}
            </Link>
          ))} */}
        </div>

        <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-5 sm:p-10">
          <img src={img5} alt="Gardener" className="rounded-lg w-full sm:w-[90%] mx-auto" />
          <div className="pt-3 max-w-4xl mx-auto bg-white rounded-lg p-5 sm:p-7 mt-6">
          <h1 className="text-[#406F67] text-2xl sm:text-4xl font-bold mb-5 text-right">
            عمل البستاني
            </h1>
            <p className="text-[#406F67] text-[17px] text-right">
               يقوم بزراعة النباتات والأشجار والعناية بها.<br/>
               يعتني بتقليم الأشجار ومكافحة الآفات.<br/>
               يصمم الحدائق ويزينها لتبدو جذابة.<br/>
               يقدم نصائح حول كيفية العناية بالمساحات الخضراء.<br/>
               استخدام أنظمة الري الحديثة.<br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gardener;
  
