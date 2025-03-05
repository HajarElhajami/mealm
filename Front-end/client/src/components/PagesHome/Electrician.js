// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import img9 from '../Image/9.jpg';

// const Electrician = () => {
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

//        <motion.div
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
//            تركيب التجهيزات الكهربائية 
//           </Link>
//           <Link to="/WaterSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تمديد الأسلاك والكابلات
//           </Link>
//           <Link to="/LeakRepair" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             إصلاح الأعطال الكهربائية
//           </Link>
//           <Link to="/Drainage" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب أنظمة الإنارة
//           </Link>
//           <Link to="/HeatingSystems" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب أنظمة الطاقة الشمسية
//           </Link>
//           <Link to="/SystemInspection" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             صيانة الأنظمة الكهربائية
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب أنظمة الأمان والمراقبة
//           </Link>
//           <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             تركيب أنظمة التدفئة والتبريد
//           </Link>          <Link to="/Emergencies" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             استشارات كهربائية 
//           </Link>
//           <Link to="/AdditionalServices" className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
//             الخدمات الإضافية
//           </Link>
//         </div>

//         <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-10">
//           <img src={img9} alt="Plumber" className="rounded-lg w-[90%] mx-auto" />
//           <div className="pt-3 max-w-4xl mr-[86px] bg-white rounded-lg p-7 mt-6">
//             <h1 className="text-[#406F67] text-4xl font-bold mb-5 text-right">
//               عمل الكهربائي  
//             </h1>
//             <p className="text-[#406F67] text-[17px] text-right">
//                يقوم بتركيب وصيانة التمديدات الكهربائية في المنازل والمحلات التجارية. <br/>  
//                يصلح الأعطال الكهربائية ويستبدل الأسلاك التالفة. <br/>  
//                يقوم بتركيب وصيانة القواطع الكهربائية والمفاتيح والمآخذ. <br/>  
//                يفحص الدوائر الكهربائية لضمان السلامة والكفاءة. <br/>  
//                يقوم بتركيب أنظمة الإنارة الداخلية والخارجية. <br/>  
//                يركب أنظمة الحماية مثل القواطع التفاضلية وأجهزة الحماية من الصواعق. <br/>  
//                يثبت الألواح الشمسية ويوصلها بالشبكة الكهربائية. <br/>  
//                يقدم استشارات حول ترشيد استهلاك الطاقة وتحسين كفاءة الأنظمة الكهربائية. <br/>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Electrician;
  























import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img9 from '../Image/9.jpg';

const Electrician = () => {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen p-6" dir="rtl">
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
      {["تركيب التجهيزات الكهربائية", "تمديد الأسلاك والكابلات", "إصلاح الأعطال الكهربائية", "تركيب أنظمة الإنارة", "تركيب أنظمة الطاقة الشمسية", "صيانة الأنظمة الكهربائية", "تركيب أنظمة الأمان والمراقبة", "تركيب أنظمة التدفئة والتبريد", "استشارات كهربائية", "الخدمات الإضافية"].map((service, i) => (
            <Link 
              key={i} 
              to={`/service${i + 1}`} 
              className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
            >
              {service}
            </Link>
          ))}
        </div>

        <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-6 sm:p-10">
          <img src={img9} alt="Electrician" className="rounded-lg w-full max-w-[90%] mx-auto" />
          <div className="pt-3 bg-white rounded-lg p-5 sm:p-7 mt-6 flex flex-col items-center">
            <h1 className="text-[#406F67] text-2xl md:text-4xl font-bold mb-4 text-center">
              عمل الكهربائي  
            </h1>
            <p className="text-[#406F67] text-[17px] text-right">
               يقوم بتركيب وصيانة التمديدات الكهربائية في المنازل والمحلات التجارية. <br/>  
               يصلح الأعطال الكهربائية ويستبدل الأسلاك التالفة. <br/>  
               يقوم بتركيب وصيانة القواطع الكهربائية والمفاتيح والمآخذ. <br/>  
               يفحص الدوائر الكهربائية لضمان السلامة والكفاءة. <br/>
               يقوم بتركيب أنظمة الإنارة الداخلية والخارجية. <br/>
               يركب أنظمة الحماية مثل القواطع التفاضلية وأجهزة الحماية من الصواعق. <br/>
               يثبت الألواح الشمسية ويوصلها بالشبكة الكهربائية. <br/>
               يقدم استشارات حول ترشيد استهلاك الطاقة وتحسين كفاءة الأنظمة الكهربائية. <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electrician;
