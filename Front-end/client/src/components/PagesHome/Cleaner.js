import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img10 from '../Image/10.webp';

const Cleaner = () => {
  return (
    <div className="relative overflow- bg- min-h-screen p-6" dir="rtl">
      <motion.div
        className="absolute top-90  right-[40%] w-80 h-60 rounded-full"
        style={{
          background: "linear-gradient(135deg, #CFF5EC, #94D1C3)",
        }}
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[82%] right-8 w-[17%] h-[17%] rounded-full"
        style={{
          background: "linear-gradient(135deg, #CFF5EC, #406F67)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="absolute left-10 top-[50%] grid grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primaryDarkest rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-80 right-20 grid grid-cols-3 gap-5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-light rounded-full"></div>
        ))}
      </div>

      <div className="relative z-10">
      <div className="mb-20 max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-2 gap-7">
          <Link to="/l1/request" state={{ serviceName: "تنظيف المنزل بالكامل" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف المنزل بالكامل
          </Link>
          <Link to="/l1/request" state={{ serviceName: "تنظيف الأرضيات" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف الأرضيات
          </Link>
          <Link to="/l1/request" state={{ serviceName: "تنظيف الغرف" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف الغرف
          </Link>
          <Link to="/l1/request" state={{ serviceName: " تنظيف الحمامات" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف الحمامات
          </Link>
          <Link to="/l1/request" state={{ serviceName: " غسل الملابس وكيها " }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            غسل الملابس وكيها
          </Link>
          <Link to="/l1/request" state={{ serviceName: "  تنظيف الأثاث" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف الأثاث
          </Link>
          <Link to="/l1/request" state={{ serviceName: "إزالة الروائح الكريهة " }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
           إزالة الروائح الكريهة
          </Link>
          <Link to="/l1/request" state={{ serviceName: "تنظيف السجاد والموكيت" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف السجاد والموكيت
          </Link>
          <Link to="/l1/request" state={{ serviceName: " تنظيف الساحات الخارجية " }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-2 px-3 text-center text-sm md:py-3 md:px-5 md:text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            تنظيف الساحات الخارجية 
          </Link>
          {/* <Link to="/l1/request" state={{ serviceName: " خدمات إضافية حسب الطلب" }} className="text-[#406F67] border border-[#94D1C3] rounded-3xl py-3 px-5 text-center text-xl font-semibold hover:bg-primaryDarkest hover:text-white">
            خدمات إضافية حسب الطلب
          </Link> */}
        </div>

        <div className="max-w-6xl mx-auto bg-[#CFF5EC] rounded-lg p-5 sm:p-10">
          <img src={img10} alt="Plumber" className="rounded-lg w-[90%] mx-auto" />
          <div className="pt-3 max-w-4xl mx-auto bg-white rounded-lg p-5 sm:p-7 mt-6">
          <h1 className="text-[#406F67] text-2xl sm:text-4xl font-bold mb-5 text-right">
           عمل عمال النظافة
            </h1>
            <p className="text-[#406F67] text-[17px] text-right">
               يقوم بتنظيف الأرضيات وإزالة الغبار من جميع الغرف. <br/>
               يغسل الأواني وينظف المطبخ والأجهزة الكهربائية. <br/>
               يرتب الأثاث ويعيد تنظيم المساحات المنزلية. <br/>
               يغسل الملابس ويكويها بعناية. <br/>
               ينظف النوافذ والأبواب ويزيل البقع منها. <br/>
               يعقم الحمامات ويضمن نظافتها التامة. <br/>
               يفرغ سلال المهملات ويستبدل أكياس القمامة. <br/>
               يعتني بالسجاد وينظفه باستخدام المعدات المناسبة. <br/>
               يقدم خدمات تنظيف عميق للمنازل عند الحاجة. <br/>
               يستخدم مواد تنظيف آمنة وصديقة للبيئة. <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cleaner;
