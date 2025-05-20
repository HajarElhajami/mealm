
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Link } from "react-router-dom";

// import logo1 from "../Image/33.png";
// import logo2 from "../Image/34.png";
// import logo3 from "../Image/35.png";
// import logo4 from "../Image/36.png";
// import logo5 from "../Image/37.png";

// const partners = [logo1, logo2, logo3, logo4, logo5];

// export default function PartnersSection() {
//   return (
//     <section className="bg-gradient-to-r from-[#94D1C3] to-[#EAF9F6] py-10 text-center">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-[#234B44] mb-10 tracking-wide transition duration-500 ">
//           شركاؤنا في النجاح
//         </h2>
//         <p className="text-[#406F67] text-xl mb-12 font-light leading-relaxed">
//            نحن نفتخر بشراكتنا مع شركات مغربية رائدة تقدم خدمات النقل والتوصيل، وعمال النظافة المحترفين، وشركات للصباغة بامتياز وشركات اخرى
//            <br />
//           إذا كنت صاحب شركة وترغب في الانضمام إلى شبكتنا القوية من الشركاء، لا تفوت الفرصة
//         </p>
        
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           loop={true}
//           slidesPerView={4}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           className="pb-10"
//         >
//           {partners.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center items-center bg-white p-2 md:p-6 rounded-xl shadow-lg transition-transform transform duration-300">
//                 <img src={logo} alt="شريك نجاح" className="w-[90%] h-[80px] object-contain" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
        
//         <Link 
//           to="/l1/partnership" 
//           className="mt-12 bg-gradient-to-r from-[#406F67] to-[#86C4B8] text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg transition duration-300 transform hover:scale-105 text-center inline-block"
//         >
//             إحصل على شراكة مع معلم
//         </Link>
//       </div>
//     </section>
//   );
// }















































// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';

// import logo1 from "../Image/33.png";
// import logo2 from "../Image/34.png";
// import logo3 from "../Image/35.png";
// import logo4 from "../Image/36.png";
// import logo5 from "../Image/37.png";


// const PartnerShowcase3D = () => {
//   const partners = [
//     { id: 1, logo: logo1 , name: "النقل المتميز" },
//     { id: 2, logo: logo2 , name: "الخدمات الذهبية" },
//     { id: 3, logo: logo3 , name: "الصباغون المحترفون" },
//     { id: 4, logo: logo4 , name: "التوصيل السريع" },
//     { id: 5, logo: logo5 , name: "عالم النظافة" },
//     { id: 6, logo: logo1
//     , name: "الرعاية المنزلية" }
//   ];

//   const colorPalette = {
//     primary: '#4FD1C5',
//     secondary: '#319795',
//     accent: '#81E6D9',
//     dark: '#2C7A7B',
//     light: '#E6FFFA'
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       {/* عناصر زخرفية ثلاثية الأبعاد */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-100 opacity-20 blur-3xl"
//           animate={{
//             y: [0, -40, 0],
//             x: [0, 30, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* العنوان */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold text-gray-800 mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2C7A7B] to-[#4FD1C5]">
//               شركاؤنا الاستراتيجيون
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             نتعاون مع أبرز العلامات التجارية لضمان أعلى معايير الجودة
//           </p>
//         </motion.div>

//         {/* سلايدر الشركاء ثلاثي الأبعاد */}
//         <div className="relative py-10">
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 5,
//               stretch: 0,
//               depth: 100,
//               modifier: 2,
//               slideShadows: true,
//             }}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             modules={[EffectCoverflow, Autoplay]}
//             className="partners-3d-slider"
//           >
//             {partners.map((partner) => (
//               <SwiperSlide key={partner.id} className="w-64">
//                 <motion.div
//                   whileHover={{ 
//                     y: -20,
//                     scale: 1.05,
//                     boxShadow: `0 25px 50px -12px ${colorPalette.primary}40`
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="relative h-48 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
//                   style={{ transformStyle: 'preserve-3d' }}
//                 >
//                   <div className="absolute inset-0 flex items-center justify-center p-6">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       className="w-full h-auto object-contain"
//                     />
//                   </div>
//                   <div 
//                     className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#4FD1C5] to-[#2C7A7B] flex items-center justify-center text-white font-medium"
//                     style={{ backfaceVisibility: 'hidden' }}
//                   >
//                     {partner.name}
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

      //   {/* زر الشراكة */}
      //   <motion.div
      //     initial={{ opacity: 0 }}
      //     whileInView={{ opacity: 1 }}
      //     transition={{ delay: 0.4 }}
      //     viewport={{ once: true }}
      //     className="text-center mt-12"
      //   >
      //     <Link 
      //       to="/partnership" 
      //       className="relative inline-flex items-center bg-gradient-to-r from-[#2C7A7B] to-[#4FD1C5] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
      //     >
      //       <span className="relative z-10 flex items-center">
      //         كن شريكنا
      //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
      //           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
      //         </svg>
      //       </span>
      //       <span className="absolute inset-0 bg-gradient-to-r from-[#4FD1C5] to-[#2C7A7B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      //     </Link>
      //   </motion.div>
      // </div>

      // {/* تأثيرات CSS */}
      // <style jsx global>{`
      //   .partners-3d-slider {
      //     padding: 60px 0;
      //     width: 100%;
      //   }
      //   .swiper-slide {
      //     transition: all 0.4s ease;
      //     transform-origin: center center;
      //   }
      //   .swiper-slide:hover {
      //     z-index: 10;
      //   }
      //   .swiper-slide-shadow-left,
      //   .swiper-slide-shadow-right {
      //     background-image: linear-gradient(
      //       to right,
      //       rgba(47, 133, 135, 0.2),
      //       rgba(79, 209, 197, 0.1)
      //     ) !important;
      //   }
      // `}</style>
//     </section>
//   );
// };

// export default PartnerShowcase3D;



















import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo1 from "../Image/33.png";
import logo2 from "../Image/34.png";
import logo3 from "../Image/35.png";
import logo4 from "../Image/36.png";
import logo5 from "../Image/37.png";

const partners = [
  { 
    logo: logo1,
    name: "شركة النقل المتميز",
    since: "2019",
    color: "#A5D8D1"
  },
  { 
    logo: logo2, 
    name: "خدمات النظافة الاحترافية",
    since: "2020",
    color: "#8FC4B7"
  },
  { 
    logo: logo3, 
    name: "أفضل صباغين المدينة",
    since: "2018",
    color: "#7AB0A3"
  },
  { 
    logo: logo4, 
    name: "التوصيل السريع",
    since: "2021",
    color: "#659C8F"
  },
  { 
    logo: logo5, 
    name: "العناية المنزلية",
    since: "2022",
    color: "#50887B"
  }
];

const PartnerCard = ({ partner, index }) => {
  return (
    <motion.div
      className="perspective-1000 h-[250px] w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative w-full h-full group">
        {/* الوجه الأمامي */}
        <div 
          className="absolute inset-0 bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-180 border border-gray-100"
          style={{ 
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
            transformOrigin: "center center"
          }}
        >
          <div className="w-full h-20 mb-6 flex items-center justify-center">
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-90"
              style={{ transform: "translateZ(30px)" }}
            />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-[#94D1C3] to-[#EAF9F6] mb-2"></div>
          <p className="text-gray-500 text-sm">شريك معتمد</p>
        </div>
        
        {/* الوجه الخلفي */}
        <div 
          className="absolute inset-0 rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center transform-style-preserve-3d transition-all duration-700 rotate-y-180 backface-hidden group-hover:rotate-y-0 text-white"
          style={{ 
            backgroundColor: partner.color,
            boxShadow: `0 20px 25px -5px ${partner.color}80`,
            transformOrigin: "center center"
          }}
        >
          <h3 className="text-xl font-bold mb-3 text-center">{partner.name}</h3>
          <div className="w-16 h-1 bg-white/30 mb-4"></div>
          <p className="text-white/80 text-sm mb-2">شريك منذ {partner.since}</p>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <motion.div 
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PremiumPartnersSection() {
  return (
    <section className="relative py-8 bg-white">
      {/* عناصر زخرفية ثلاثية الأبعاد */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#A5D8D1] opacity-10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#7AB0A3] opacity-10 blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            شركاء <span className="text-[#50887B]">التميز</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نتعاون مع نخبة مقدمي الخدمات لضمان تجربة استثنائية
          </p>
        </motion.div>

        {/* سلايدر الشركاء ثلاثي الأبعاد */}
        <div className="relative py-10 px-4">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2} // عرض شريحتين على الهاتف
            spaceBetween={30}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1.5
                }
              },
              1024: {
                slidesPerView: 3, // عرض ثلاث شرائح على الأجهزة الكبيرة
                coverflowEffect: {
                  depth: 150,
                  modifier: 2
                }
              }
            }}
            className="premium-partners-slider"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="w-[280px] md:w-[320px]">
                <PartnerCard partner={partner} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* زر الشراكة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to="/l1/partnership" 
            className="relative inline-flex items-center bg-gradient-to-r from-[#406F67] to-[#86C4B8] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              انضم إلى شركائنا
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#86C4B8] to-[#406F67] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>

      {/* تأثيرات CSS */}
      <style jsx global>{`
        .premium-partners-slider {
          padding: 60px 0;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .swiper-slide {
          transition: all 0.4s ease;
          padding: 20px 0;
        }
        .swiper-slide:hover {
          transform: scale(1.05) translateY(-10px);
          z-index: 10;
        }
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: linear-gradient(
            to right,
            rgba(64, 111, 103, 0.2),
            rgba(134, 196, 184, 0.1)
          ) !important;
        }
        .swiper-pagination-bullet {
          background: #A5D8D1;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #50887B;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}