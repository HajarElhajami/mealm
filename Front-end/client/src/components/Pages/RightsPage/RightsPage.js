import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHandshake, FaBalanceScale, FaUserLock, FaFileContract, FaHeadset } from "react-icons/fa";

const RightsPage = () => {
  const rightsFeatures = [
    {
      icon: <FaShieldAlt className="text-4xl mb-4" />,
      title: "حماية البيانات",
      description: "نضمن سرية وأمان بياناتك الشخصية ولا نشاركها مع أي طرف ثالث بدون موافقتك."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4" />,
      title: "معاملات آمنة",
      description: "جميع المعاملات المالية تتم عبر قنوات آمنة مع توثيق كامل للدفعات."
    },
    {
      icon: <FaBalanceScale className="text-4xl mb-4" />,
      title: "توازن الحقوق",
      description: "نضمن حقوق جميع الأطراف من خلال سياسات واضحة وشفافة تحمي الجميع."
    },
    {
      icon: <FaUserLock className="text-4xl mb-4" />,
      title: "حسابات موثقة",
      description: "جميع المعلمين والحرفيين يخضعون لعمليات توثيق صارمة لضمان جودة الخدمة."
    },
    {
      icon: <FaFileContract className="text-4xl mb-4" />,
      title: "عقود واضحة",
      description: "نوفر عقودًا واضحة تحدد جميع التفاصيل والالتزامات قبل بدء أي خدمة."
    },
    {
      icon: <FaHeadset className="text-4xl mb-4" />,
      title: "دعم مستمر",
      description: "فريق دعم متاح على مدار الساعة لمساعدتك في أي استفسار أو مشكلة تواجهك."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a1a1f] to-[#0a0e12] text-white overflow-hidden">
      {/* تأثيرات ثلاثية الأبعاد للخلفية */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ x: -100, y: -100, rotate: 0 }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1e3d47] opacity-20 rounded-lg transform rotate-45"
          style={{ boxShadow: '0 0 80px 40px rgba(74, 179, 185, 0.1)' }}
        />
        
        <motion.div 
          initial={{ x: 100, y: 100, rotate: 45 }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0], rotate: [45, 60, 45] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#2a4a54] opacity-15 rounded-full"
          style={{ boxShadow: '0 0 100px 50px rgba(74, 179, 185, 0.1)' }}
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* العنوان الرئيسي */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ab3b9] to-[#a8e6e9]">
              اكتشف كيف نضمن حقوقك
            </span>
          </h1>
          <p className="text-xl text-[#a8e6e9] max-w-3xl mx-auto">
            في منصتنا، نؤمن بأهمية حماية حقوق جميع المستخدمين. إليك كيف نضمن لك تجربة آمنة وعادلة.
          </p>
        </motion.div>

        {/* ميزات حماية الحقوق */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {rightsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#0f252b] bg-opacity-60 backdrop-blur-sm rounded-2xl border border-[#3a9ba1] border-opacity-30 p-8 transition-all duration-300 hover:border-opacity-70 hover:bg-opacity-80"
            >
              <div className="text-[#4ab3b9]">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-[#a8e6e9] mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* قسم الخطوات */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f252b] bg-opacity-60 backdrop-blur-sm rounded-2xl border border-[#3a9ba1] border-opacity-30 p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-[#a8e6e9] mb-8 text-center">
            خطوات حماية حقوقك
          </h2>
          
          <div className="relative">
            {/* خط التوصيل */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4ab3b9] to-[#2a8389] transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "التسجيل الآمن",
                  description: "إنشاء حساب مع التحقق من الهوية لضمان موثوقية جميع المستخدمين."
                },
                {
                  title: "التواصل المباشر",
                  description: "التواصل مع المعلمين عبر المنصة مع حفظ جميع المحادثات كسجل مرجعي."
                },
                {
                  title: "تقييم الخدمة",
                  description: "إمكانية تقييم الخدمة بعد الانتهاء لضمان الجودة والشفافية."
                },
                {
                  title: "حل النزاعات",
                  description: "فريق متخصص لحل أي نزاعات قد تنشأ بين الأطراف."
                }
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* الدائرة */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4ab3b9] to-[#2a8389] flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 md:mr-8 md:ml-8 z-10">
                    {index + 1}
                  </div>
                  
                  {/* المحتوى */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-[#a8e6e9] mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* قسم الأسئلة الشائعة */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f252b] bg-opacity-60 backdrop-blur-sm rounded-2xl border border-[#3a9ba1] border-opacity-30 p-12"
        >
          <h2 className="text-3xl font-bold text-[#a8e6e9] mb-8 text-center">
            الأسئلة الشائعة
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "كيف يتم حماية بياناتي الشخصية؟",
                answer: "نستخدم تقنيات تشفير متقدمة ونلتزم بأعلى معايير الأمن السيبراني لحماية جميع البيانات."
              },
              {
                question: "ماذا لو لم أكن راضيًا عن الخدمة؟",
                answer: "يمكنك تقديم شكوى عبر المنصة وسيقوم فريقنا بالتحقيق واتخاذ الإجراءات المناسبة."
              },
              {
                question: "هل يمكنني التواصل مع المعلم خارج المنصة؟",
                answer: "ننصح بالتواصل فقط عبر المنصة للحفاظ على حقوقك وتوثيق جميع التفاصيل."
              },
              {
                question: "كيف يتم التعامل مع الدفعات المالية؟",
                answer: "جميع الدفعات تتم عبر المنصة بطريقة آمنة ويتم تحرير المبلغ للمعلم بعد إكمال العمل."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="bg-[#1a4a44] bg-opacity-50 rounded-xl p-6 border border-[#3a9ba1] border-opacity-30"
              >
                <h3 className="text-xl font-bold text-[#a8e6e9] mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RightsPage;