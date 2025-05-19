
// import Stayle from './Stayle.css'
// import { ShieldCheck, Headset, CheckCircle } from "lucide-react";

// export default function Features() {
//   return (
//     <div className="relative bg-gradient-to-br from-[#406F67] to-[#406F67] py-9 px-6 md:px-20">
//       <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/background-pattern.svg')" }}></div>

//       <div className="max-w-5xl mx-auto text-center relative">
//         <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md">
//            رضاكم هو أولويتنا  
//         </h2>
//         <p className="text-gray-300 text-lg max-w-3xl mx-auto">
//           خدمات عالية الجودة، دعم متواصل، وراحة تامة، لأنكم تستحقون الأفضل 
//         </p>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10 relative">
//         <div className="glass-card">
//           <ShieldCheck className="icon-style text-blue-500" />
//           <h3 className="card-title">المهام المعتمدة</h3>
//           <p className="card-text">
//             يتم فحص خلفيات العاملين بدقة لضمان أعلى معايير الأمان والجودة.
//           </p>
//           <span className="inline-block">مضمون  %100</span>
//         </div>

//         <div className="glass-card">
//           <Headset className="icon-style text-green-500" />
//           <h3 className="card-title">دعم مخصص 24/7</h3>
//           <p className="card-text">
//             دعم متاح طوال اليوم لحل مشاكلكم بسرعة واحترافية.
//           </p>
//           <span className="inline-block">24/7</span>
//         </div>

//         <div className="glass-card">
//           <CheckCircle className="icon-style text-yellow-500" />
//           <h3 className="card-title">تعهد السعادة</h3>
//           <p className="card-text">
//             نلتزم بتحقيق رضاكم الكامل أو استعادة أموالك.
//           </p>
//           <span className="inline-block">ضمان الرضا</span>
//         </div>
//       </div>
//     </div>
//   );
// }



































































import { motion } from 'framer-motion';
import { Star, ShieldCheck, BadgeCheck, Clock, Award, Heart } from 'lucide-react';

const TrustPage = () => {
  const trustFeatures = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "حماية العميل",
      description: "نضمن حقوقك كاملة ونحمي معلوماتك الشخصية بمعايير أمنية عالية"
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "خدمات موثقة",
      description: "جميع الخدمات تمر عبر مراحل تأهيل وفحص دقيقة لضمان الجودة"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "التزام بالتوقيت",
      description: "نلتزم بالمواعيد المتفق عليها ونعوضك عن أي تأخير غير مبرر"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "خبراء معتمدون",
      description: "فريقنا من المحترفين المعتمدين ذوي الخبرة الواسعة في مجالاتهم"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "رضاء مضمون",
      description: "ضمان استرداد المبلغ إذا لم تكن راضياً عن الخدمة المقدمة"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "تقييم شفاف",
      description: "نظام تقييم واضح وعادل يعكس جودة الخدمة الحقيقية"
    }
  ];

  const testimonials = [
    {
      name: "أحمد السيد",
      role: "عميل عقارات",
      comment: "لقد تفاجأت بمستوى الاحترافية! لم يكن مجرد تنفيذ للعمل، بل إبداع حقيقي. التزم المختص بكل التفاصيل التي ناقشناها وزاد عليها من خبرته.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      project: "تصميم شقة سكنية"
    },
    {
      name: "نورا محمد",
      role: "صاحبة مشروع تجاري",
      comment: "الشيء الأكثر إبهاراً هو الشفافية في التعامل. كل خطوة كانت موثقة وواضحة. شعرت أنني بأمان طوال فترة التعامل.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      project: "تسويق إلكتروني"
    },
    {
      name: "خالد عبدالرحمن",
      role: "مدير شركة",
      comment: "السرعة في الاستجابة والدقة في التنفيذ جعلتني أعتمد عليهم لجميع أعمالي. الأهم أنهم يقدمون حلولاً وليس فقط خدمات.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      project: "تطوير نظام إداري"
    },
    {
      name: "لمى فاروق",
      role: "مستثمرة",
      comment: "كنت متخوفة في البداية ولكن نظام التقييم الشفاف والمتابعة المستمرة جعلت التجربة سلسة. النتائج فاقت توقعاتي بمراحل!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      project: "استشارات استثمارية"
    },
    {
      name: "ياسر ناصر",
      role: "أب لأسرة",
      comment: "الأمانة في التسعير والالتزام بالمواعيد نادر هذه الأيام. الأكثر إثارة للإعجاب هو متابعتهم بعد انتهاء الخدمة للاطمئنان على رضائي.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      project: "ترميم منزل"
    },
    {
      name: "سارة الغامدي",
      role: "مدونة",
      comment: "لم أتوقع هذا المستوى من الإبداع! استطاع المختص فهم شخصية علامتي التجارية أكثر مني. العمل معهم كان نقطة تحول في مشواري.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      project: "تصميم هوية بصرية"
    }
  ];

  // تأثيرات ثلاثية الأبعاد للبطاقات
  const cardVariants = {
    offscreen: {
      y: 100,
      rotateX: -15,
      opacity: 0,
      scale: 0.9
    },
    onscreen: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      rotateY: 5,
      rotateX: 2,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3
      }
    }
  };

  // تأثيرات ثلاثية الأبعاد للعناصر الرئيسية
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="relative overflow-hidden  min-h-screen">
      {/* عناصر زخرفية ثلاثية الأبعاد */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-100 opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-100 opacity-20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* القسم الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent text-4xl bg-gradient-to-r from-teal-600 to-amber-500">
              ثقة تبدأ من أول لقاء
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            نقدم نظامًا متكاملًا يضمن حقوق الجميع ويبني جسور الثقة بين العملاء ومقدمي الخدمة
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-xl text-lg inline-flex items-center group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">اكتشف كيف نضمن حقوقك</span>
              <span className="relative z-10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ميزات بناء الثقة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28"
        >
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="perspective-1000"
            >
              <div className="relative h-full transform-style-preserve-3d">
                <motion.div 
                  className="bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-100 flex flex-col items-center text-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                  whileHover="hover"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-amber-100 flex items-center justify-center mb-6 text-teal-600">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {/* تأثير ثلاثي الأبعاد عند التحويم */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-50 to-amber-50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* نظام التقييم والثقة */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-amber-500 rounded-3xl p-0.5 mb-28"
        >
          <div className="bg-white rounded-[calc(1.5rem-1px)] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  نظام التقييم الشفاف
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  نضمن لك تقييمًا عادلًا وشفافًا لمقدم الخدمة بناءً على معايير دقيقة تشمل الجودة، الالتزام بالمواعيد، الاحترافية، ورضاء العملاء.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-full p-1 text-teal-600 mr-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">تقييمات حقيقية من عملاء سابقين</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-full p-1 text-teal-600 mr-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">تحليل دقيق لجميع التعليقات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-full p-1 text-teal-600 mr-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">نظام تصنيف متعدد المعايير</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <motion.div 
                  className="relative"
                  initial={{ rotateY: 30, opacity: 0.8 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-2xl opacity-20 blur-lg"></div>
                  <div className="relative bg-white rounded-xl shadow-xl p-6 transform-style-preserve-3d">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mb-3">
                          <img 
                            src="https://randomuser.me/api/portraits/men/75.jpg" 
                            alt="مقدم خدمة" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-gray-900">خالد محمود</h4>
                        <p className="text-sm text-gray-500">مقدم خدمة مميز</p>
                      </div>
                      <div className="bg-gradient-to-r from-amber-400 to-teal-500 text-white px-3 py-1 rounded-full flex items-center">
                        <span className="font-bold">4.9</span>
                        <Star className="w-4 h-4 ml-1 fill-white" />
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 mx-1 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                          <span>الجودة</span>
                          <span>4.8</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-teal-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                          <span>الالتزام بالوقت</span>
                          <span>5.0</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                          <span>التواصل</span>
                          <span>4.7</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-teal-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-gray-500">
                      37 تقييمًا | 92% رضاء
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* آراء العملاء */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ماذا يقول عملاؤنا؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <div className="relative h-full transform-style-preserve-3d">
                  <motion.div 
                    className="bg-white rounded-3xl p-8 h-full shadow-lg border border-gray-100"
                    whileHover={{
                      y: -10,
                      rotateY: 3,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 shadow-md">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mr-4">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center bg-gradient-to-r from-amber-400 to-teal-500 text-white px-2.5 py-1 rounded-full ml-auto">
                        <span className="text-sm font-bold">{testimonial.rating}</span>
                        <Star className="w-4 h-4 mr-1 fill-white" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* دعوة للعمل */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            مستعد لبدء تجربتك بكل ثقة؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            انضم إلى آلاف العملاء الراضين الذين وجدوا الحل الأمثل لاحتياجاتهم
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-xl text-lg inline-flex items-center group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">ابحث عن مقدم الخدمة المثالي</span>
              <span className="relative z-10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
            
            <motion.button
              className="relative overflow-hidden bg-white text-teal-600 px-8 py-4 rounded-full font-bold shadow-xl text-lg inline-flex items-center group border border-gray-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">كيف نضمن حقوقك</span>
              <span className="relative z-10 mr-2">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* تأثيرات CSS */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

// مكون مساعد للأيقونة
const Check = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default TrustPage;


