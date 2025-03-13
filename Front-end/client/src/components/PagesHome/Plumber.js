
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img2 from '../Image/2.jpg';


const Plumber = () => {
  return (
    <div className="relative overflow-hidden bg-min-h-screen p-6" dir="rtl">
      <motion.div
        className="absolute top-90 right-[40%] w-80 h-60 rounded-full"
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

      <div className="absolute left-10 top-[50%] grid grid-cols-3 gap-8 sm:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primaryDarkest rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-80 right-20 grid grid-cols-3 gap-5 sm:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-light rounded-full"></div>
        ))}
      </div>

      <div className="relative z-10">
      <div className="mb-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link to="/l1/request" state={{ serviceName: "  تركيب أنظمة المياه" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            تركيب أنظمة المياه
          </Link>
          <Link to="/l1/request" state={{ serviceName: " إصلاح التسريبات" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            إصلاح التسريبات
          </Link>
          <Link to="/l1/request" state={{ serviceName: " صيانة أنظمة الصرف الصحي" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            صيانة أنظمة الصرف الصحي
          </Link>
          <Link to="/l1/request" state={{ serviceName: "تركيب سخانات المياه" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            تركيب سخانات المياه
          </Link>
          <Link to="/l1/request" state={{ serviceName: "  تركيب أنظمة التدفئة" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            تركيب أنظمة التدفئة
          </Link>
          <Link to="/l1/request" state={{ serviceName: "  فحص الأنظمة" }}  className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            فحص الأنظمة
          </Link>
          <Link to="/l1/request" state={{ serviceName: "  التعامل مع حالات الطوارئ" }}  className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            التعامل مع حالات الطوارئ
          </Link>
          {/* <Link to="/l1/request" state={{ serviceName: "تنظيف الحدائق" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white"
          >
            الخدمات الإضافية
          </Link> */}
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
