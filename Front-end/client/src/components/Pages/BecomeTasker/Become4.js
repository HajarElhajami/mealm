import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaFileAlt, FaCheckCircle, FaMoneyBillWave, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "قم بالتسجيل",
    description: "قم بإنشاء حسابك وابدأ رحلتك في العمل الحر مع 'معلم'.",
    icon: <FaUserPlus />,
  },
  {
    id: 2,
    title: "قم ببناء ملفك الشخصي",
    description: "حدد الخدمات التي تريد تقديمها وأين.",
    icon: <FaFileAlt />,
  },
  {
    id: 3,
    title: "التحقق من أهليتك للمهمة",
    description: "قم بتأكيد هويتك وإرسال التحقق من نشاطك التجاري حسب الحاجة.",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    title: "دفع رسوم التسجيل",
    description: "في بعض المدن، قد يكون هناك رسوم تسجيل لدعم جودة الخدمات.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 5,
    title: "حدد جدولك ومنطقة عملك",
    description: "قم بتعيين توافرك الأسبوعي واختر المنطقة التي تود العمل بها.",
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 6,
    title: "ابدأ في الحصول على وظائف",
    description: "تلقَّ العروض وابدأ العمل بشروطك الخاصة مع عملاء موثوقين.",
    icon: <FaBriefcase />,
  },
];

const Become4 = () => {
  return (
    <div className="bg-[#EAF9F6] py-16 px-6 text-right" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* عنوان الصفحة */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-[#406F67] mb-16 text-center"
        >
          ابدأ مع "معلم" بخطوات سهلة
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {steps.map((step, index) => (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start text-right border-l-4 border-[#86C4B8] hover:shadow-2xl transition duration-300"
    >
      <div className="text-4xl text-orange-400 mb-4">{step.icon}</div>
      
      <h3 className="text-xl font-bold text-[#406F67]">
        {step.id}. {step.title}
      </h3>
      
      <p className="text-gray-600 mt-2">{step.description}</p>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Become4;
