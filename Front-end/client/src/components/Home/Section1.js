
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
// import PopularServices from "../PagesHome/PopularServices"; 
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// import img11 from "../Image/11.jpg";
// import img12 from "../Image/12.jpg";
// import img13 from "../Image/13.jpg";
// import img14 from "../Image/14.jpg";
// import img15 from "../Image/15.jpg";
// import img16 from "../Image/16.jpg";
// import img17 from "../Image/17.jpg";
// import img18 from "../Image/18.jpg";
// import img19 from "../Image/19.jpg";
// import img20 from "../Image/20.jpg";
// import img21 from "../Image/21.jpg";
// import img22 from "../Image/22.jpg";
// import img23 from "../Image/23.jpg";
// import img24 from "../Image/24.jpg";
// import img25 from "../Image/25.jpg";
// import img26 from "../Image/26.jpg";
// import img27 from "../Image/27.jpg";
// import img28 from "../Image/28.jpg";
// import img29 from "../Image/29.jpg";
// import img30 from "../Image/30.jpg";

// const services = [
//   { id: 1, image: img11, title: "تنظيف المنازل", description: "تنظيف شامل للمنازل بأسعار تنافسية", link: "#" },
//   { id: 2, image: img12, title: "إصلاح الأعطال الكهربائية", description: "إصلاح سريع وفعال لأي عطل كهربائي", link: "#" },
//   { id: 3, image: img13, title: "تركيب أنظمة الطاقة الشمسية", description: "حلول متكاملة لتوفير الطاقة النظيفة", link: "#" },
//   { id: 4, image: img14, title: "خدمات السباكة", description: "إصلاح تسريبات المياه وصيانة الأنابيب", link: "#" },
//   { id: 5, image: img15, title: "تركيب الأدوات الصحية", description: "تركيب الأحواض، الدش، والمراحيض", link: "#" },
//   { id: 6, image: img16, title: "تنظيف السجاد", description: "تنظيف عميق للسجاد باستخدام أحدث التقنيات", link: "#" },
//   { id: 7, image: img17, title: "صيانة التكييف", description: "تنظيف وصيانة مكيفات الهواء لضمان الأداء المثالي", link: "#" },
//   { id: 8, image: img18, title: "طلاء المنازل", description: "خدمات الطلاء الداخلي والخارجي بجودة عالية", link: "#" },
//   { id: 9, image: img19, title: "تنسيق الحدائق", description: "تصميم وصيانة الحدائق والمساحات الخضراء", link: "#" },
//   { id: 10, image: img20, title: "نقل الأثاث", description: "نقل وتركيب الأثاث بأمان وسرعة", link: "#" },
//   { id: 11, image: img21, title: "صيانة وإصلاح الأجهزة المنزلية", description: "تصليح الغسالات، الثلاجات، والأفران", link: "#" },
//   { id: 12, image: img22, title: "مكافحة الحشرات", description: "خدمات إبادة الحشرات بطرق آمنة وفعالة", link: "#" },
//   { id: 13, image: img23, title: "تنظيف وتعقيم المسابح", description: "صيانة دورية وتعقيم للمسابح", link: "#" },
//   { id: 14, image: img24, title: "خدمات النقل والتوصيل", description: "نقل البضائع والطرود بسرعة وأمان", link: "#" },
//   { id: 15, image: img25, title: "إصلاح وصيانة الأبواب والنوافذ", description: "تصليح وتركيب الأبواب الخشبية والزجاجية", link: "#" },
//   { id: 16, image: img26, title: "تركيب أنظمة الأمان والمراقبة", description: "كاميرات مراقبة وإنذارات أمان حديثة", link: "#" },
//   { id: 17, image: img27, title: "تلميع وتنظيف الأرضيات", description: "تنظيف وتلميع الرخام والسيراميك والخشب", link: "#" },
//   { id: 18, image: img28, title: "تنظيف واجهات المباني", description: "غسيل وتنظيف الواجهات الزجاجية والألمنيوم", link: "#" },
//   { id: 19, image: img29, title: "إزالة الرطوبة والعفن", description: "حلول فعالة للتخلص من الرطوبة والعفن داخل المنازل", link: "#" },
//   { id: 20, image: img30, title: "تصميم وتنفيذ الديكورات الداخلية", description: "أفكار وتصاميم عصرية لديكور منزلك", link: "#" },
// ];

// const Section1 = () => {
//   return (
//     <div className=""> 
//       <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12"> 
//         الخدمات الأكثر طلبًا
//       </h2>

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         loop={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         spaceBetween={10}
//         slidesPerView={4}
//         breakpoints={{
//           320: { slidesPerView: 1 }, 
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 }, 
//           1024: { slidesPerView: 4 }, 
//         }}
//         className="px-10"
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-primary shadow-md rounded-lg p-3 text-center hover:shadow-xl transition duration-300">
//               <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
//               <h3 className="text-2xl font-semibold text-[#406F67]">{service.title}</h3> 
//               <p className="text-[#406F67] text-sm my-2">{service.description}</p> 
//               <a 
//                 href={service.link} 
//                 className="bg-[#406F67] text-white px-5 py-3 rounded-full inline-block mt-3 hover:bg-[#6BA89D] transition">
//                 اطلب الخدمة
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="flex justify-center mt-8">
//         <Link to="/PopularServices" 
//         className="bg-[#406F67] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6BA89D] transition text-lg">
//           عرض جميع الخدمات
//         </Link>
//       </div><br/><br/>
//     </div>
//   );
// };

// export default Section1;















































// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
// import PopularServices from "../PagesHome/PopularServices"; 
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// import img11 from "../Image/11.jpg";
// import img12 from "../Image/12.jpg";
// import img13 from "../Image/13.jpg";
// import img14 from "../Image/14.jpg";
// import img15 from "../Image/15.jpg";
// import img16 from "../Image/16.jpg";
// import img17 from "../Image/17.jpg";
// import img18 from "../Image/18.jpg";
// import img19 from "../Image/19.jpg";
// import img20 from "../Image/20.jpg";
// import img21 from "../Image/21.jpg";
// import img22 from "../Image/22.jpg";
// import img23 from "../Image/23.jpg";
// import img24 from "../Image/24.jpg";
// import img25 from "../Image/25.jpg";
// import img26 from "../Image/26.jpg";
// import img27 from "../Image/27.jpg";
// import img28 from "../Image/28.jpg";
// import img29 from "../Image/29.jpg";
// import img30 from "../Image/30.jpg";

// const services = [
//   { id: 1, image: img11, title: "تنظيف المنازل", description: "تنظيف شامل للمنازل بأسعار تنافسية", link: "/l1/request", serviceName: "تنظيف المنزل بالكامل" },
//   { id: 2, image: img12, title: "إصلاح الأعطال الكهربائية", description: "إصلاح سريع وفعال لأي عطل كهربائي", link: "/l1/request", serviceName: "إصلاح الأعطال الكهربائية" },
//   { id: 3, image: img13, title: "تركيب أنظمة الطاقة الشمسية", description: "حلول متكاملة لتوفير الطاقة النظيفة", link: "/l1/request", serviceName: "تركيب أنظمة الطاقة الشمسية" },
//   { id: 4, image: img14, title: "خدمات السباكة", description: "إصلاح تسريبات المياه وصيانة الأنابيب", link: "/l1/request", serviceName: "خدمات السباكة" },
//   { id: 5, image: img15, title: "تركيب الأدوات الصحية", description: "تركيب الأحواض، الدش، والمراحيض", link: "/l1/request", serviceName: "تركيب الأدوات الصحية" },
//   { id: 6, image: img16, title: "تنظيف السجاد", description: "تنظيف عميق للسجاد باستخدام أحدث التقنيات", link: "/l1/request", serviceName: "تنظيف السجاد" },
//   { id: 7, image: img17, title: "صيانة التكييف", description: "تنظيف وصيانة مكيفات الهواء لضمان الأداء المثالي", link: "/l1/request", serviceName: "صيانة التكييف" },
//   { id: 8, image: img18, title: "طلاء المنازل", description: "خدمات الطلاء الداخلي والخارجي بجودة عالية", link: "/l1/request", serviceName: "طلاء المنازل" },
//   { id: 9, image: img19, title: "تنسيق الحدائق", description: "تصميم وصيانة الحدائق والمساحات الخضراء", link: "/l1/request", serviceName: "تنسيق الحدائق" },
//   { id: 10, image: img20, title: "نقل الأثاث", description: "نقل وتركيب الأثاث بأمان وسرعة", link: "/l1/request", serviceName: "نقل الأثاث" },
//   { id: 11, image: img21, title: "صيانة وإصلاح الأجهزة المنزلية", description: "تصليح الغسالات، الثلاجات، والأفران", link: "/l1/request", serviceName: "صيانة وإصلاح الأجهزة المنزلية" },
//   { id: 12, image: img22, title: "مكافحة الحشرات", description: "خدمات إبادة الحشرات بطرق آمنة وفعالة", link: "/l1/request", serviceName: "مكافحة الحشرات" },
//   { id: 13, image: img23, title: "تنظيف وتعقيم المسابح", description: "صيانة دورية وتعقيم للمسابح", link: "/l1/request", serviceName: "تنظيف وتعقيم المسابح" },
//   { id: 14, image: img24, title: "خدمات النقل والتوصيل", description: "نقل البضائع والطرود بسرعة وأمان", link: "/l1/request", serviceName: "خدمات النقل والتوصيل" },
//   { id: 15, image: img25, title: "إصلاح وصيانة الأبواب والنوافذ", description: "تصليح وتركيب الأبواب الخشبية والزجاجية", link: "/l1/request", serviceName: "إصلاح وصيانة الأبواب والنوافذ" },
//   { id: 16, image: img26, title: "تركيب أنظمة الأمان والمراقبة", description: "كاميرات مراقبة وإنذارات أمان حديثة", link: "/l1/request", serviceName: "تركيب أنظمة الأمان والمراقبة" },
//   { id: 17, image: img27, title: "تلميع وتنظيف الأرضيات", description: "تنظيف وتلميع الرخام والسيراميك والخشب", link: "/l1/request", serviceName: "تلميع وتنظيف الأرضيات" },
//   { id: 18, image: img28, title: "تنظيف واجهات المباني", description: "غسيل وتنظيف الواجهات الزجاجية والألمنيوم", link: "/l1/request", serviceName: "تنظيف واجهات المباني" },
//   { id: 19, image: img29, title: "إزالة الرطوبة والعفن", description: "حلول فعالة للتخلص من الرطوبة والعفن داخل المنازل", link: "/l1/request", serviceName: "إزالة الرطوبة والعفن" },
//   { id: 20, image: img30, title: "تصميم وتنفيذ الديكورات الداخلية", description: "أفكار وتصاميم عصرية لديكور منزلك", link: "/l1/request", serviceName: "تصميم وتنفيذ الديكورات الداخلية" },
// ];

// const Section1 = () => {
//   return (
//     <div className=""> 
//       <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12"> 
//         الخدمات الأكثر طلبًا
//       </h2>

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         loop={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         spaceBetween={10}
//         slidesPerView={4}
//         breakpoints={{
//           320: { slidesPerView: 1 }, 
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 }, 
//           1024: { slidesPerView: 4 }, 
//         }}
//         className="px-10"
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-primary shadow-md rounded-lg p-3 text-center hover:shadow-xl transition duration-300">
//               <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
//               <h3 className="text-2xl font-semibold text-[#406F67]">{service.title}</h3> 
//               <p className="text-[#406F67] text-sm my-2">{service.description}</p> 
//               <Link 
//                 to={service.link} 
//                 state={{ serviceName: service.serviceName }}
//                 className="bg-gradient-to-r from-[#94D1C3] to-[#406F67] text-white px-5 py-3 rounded-full inline-block mt-3 hover:bg-[#6BA89D] transition">
//                 اطلب الخدمة
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="flex justify-center mt-8">
//         <Link to="/PopularServices" 
//         className="bg-gradient-to-r from-[#94D1C3] to-[#406F67] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6BA89D] transition text-lg">
//           عرض جميع الخدمات
//         </Link>
//       </div><br/><br/>
//     </div>
//   );
// };

// export default Section1;

















































import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// استيراد الصور
import img11 from "../Image/11.jpg";
import img12 from "../Image/12.jpg";
import img13 from "../Image/13.jpg";
import img14 from "../Image/14.jpg";
import img15 from "../Image/15.jpg";
import img16 from "../Image/16.jpg";
import img17 from "../Image/17.jpg";
import img18 from "../Image/18.jpg";
import img19 from "../Image/19.jpg";
import img20 from "../Image/20.jpg";

const services = [
  { id: 1, image: img11, title: "تنظيف المنازل", description: "تنظيف شامل للمنازل بأسعار تنافسية", link: "/l1/request", serviceName: "تنظيف المنزل بالكامل" },
  { id: 2, image: img12, title: "إصلاح الأعطال الكهربائية", description: "إصلاح سريع وفعال لأي عطل كهربائي", link: "/l1/request", serviceName: "إصلاح الأعطال الكهربائية" },
  { id: 3, image: img13, title: "تركيب الطاقة الشمسية", description: "حلول متكاملة لتوفير الطاقة النظيفة", link: "/l1/request", serviceName: "تركيب أنظمة الطاقة الشمسية" },
  { id: 4, image: img14, title: "خدمات السباكة", description: "إصلاح تسريبات المياه وصيانة الأنابيب", link: "/l1/request", serviceName: "خدمات السباكة" },
  { id: 5, image: img15, title: "تركيب الأدوات الصحية", description: "تركيب الأحواض، الدش، والمراحيض", link: "/l1/request", serviceName: "تركيب الأدوات الصحية" },
  { id: 6, image: img16, title: "تنظيف السجاد", description: "تنظيف عميق للسجاد باستخدام أحدث التقنيات", link: "/l1/request", serviceName: "تنظيف السجاد" },
  { id: 7, image: img17, title: "صيانة التكييف", description: "تنظيف وصيانة مكيفات الهواء", link: "/l1/request", serviceName: "صيانة التكييف" },
  { id: 8, image: img18, title: "طلاء المنازل", description: "خدمات الطلاء الداخلي والخارجي بجودة عالية", link: "/l1/request", serviceName: "طلاء المنازل" },
  { id: 9, image: img19, title: "تنسيق الحدائق", description: "تصميم وصيانة الحدائق والمساحات الخضراء", link: "/l1/request", serviceName: "تنسيق الحدائق" },
  { id: 10, image: img20, title: "نقل الأثاث", description: "نقل وتركيب الأثاث بأمان وسرعة", link: "/l1/request", serviceName: "نقل الأثاث" },
];

const Section1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative py-16 overflow-hidden bg-gradient-to-b from-[#f0f9f7] to-[#e0f3ef]">
      {/* تأثيرات الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#406F67]"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2a5a52] mb-16">
          <span className="relative inline-block">
            <span className="relative z-10">الخدمات الأكثر طلبًا</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#94D1C3] opacity-40 -z-1"></span>
          </span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[EffectCards, Autoplay, Pagination]}
            effect="cards"
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-[500px] md:h-[600px]"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className={`relative h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                    activeIndex === index ? "scale-100" : "scale-90"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        to={service.link}
                        state={{ serviceName: service.serviceName }}
                        className="inline-block bg-[#406F67] hover:bg-[#2a5a52] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        اطلب الخدمة الآن
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-10">
            <Link
              to="/PopularServices"
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#94D1C3] to-[#406F67] text-white rounded-full font-bold text-lg overflow-hidden group"
            >
              <span className="relative z-10">عرض جميع الخدمات</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#406F67] to-[#2a5a52] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute right-0 w-8 h-8 -mr-2 bg-white rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:mr-4"></span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section1;