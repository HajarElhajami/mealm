
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





























import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo1 from "../Image/33.png";
import logo2 from "../Image/34.png";
import logo3 from "../Image/35.png";
import logo4 from "../Image/36.png";
import logo5 from "../Image/37.png";

const partners = [
  { logo: logo1, name: "شركة النقل السريع", since: "2019" },
  { logo: logo2, name: "أفضل عمال النظافة", since: "2020" },
  { logo: logo3, name: "ماجستير الصباغة", since: "2018" },
  { logo: logo4, name: "التوصيل الذكي", since: "2021" },
  { logo: logo5, name: "العناية المنزلية", since: "2022" }
];

const PartnerCard = ({ partner, index }) => {
  return (
    <motion.div 
      className="perspective-1000 h-[220px] w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-full group">
        {/* الوجه الأمامي */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF9F6] to-[#A9E7DA] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-180 border-2 border-[#86C4B8]">
          <img 
            src={partner.logo} 
            alt={partner.name}
            className="w-full h-16 object-contain mb-4 transition-transform duration-500 group-hover:scale-90"
          />
          <div className="w-16 h-1 bg-[#406F67] opacity-30 mb-2"></div>
          <p className="text-[#406F67] text-sm font-medium">شريك معتمد</p>
        </div>
        
        {/* الوجه الخلفي */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#406F67] to-[#6BA89D] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transform-style-preserve-3d transition-all duration-700 rotate-y-180 backface-hidden group-hover:rotate-y-0 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">{partner.name}</h3>
          <div className="w-16 h-1 bg-[#A9E7DA] mb-4"></div>
          <p className="text-[#CFF5EC] text-sm">شريك منذ {partner.since}</p>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="w-8 h-8 rounded-full bg-[#94D1C3] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#406F67]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PremiumPartnersSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#EAF9F6] to-[#A9E7DA]">
      {/* عناصر زخرفية ثلاثية الأبعاد */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#86C4B8] opacity-10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-[#406F67] opacity-10 blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1]
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
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#406F67] mb-6">
            شركاؤنا <span className="text-[#6BA89D]">الاستراتيجيون</span>
          </h2>
          <p className="text-lg text-[#6BA89D] max-w-3xl mx-auto leading-relaxed">
            نتعاون مع أبرز العلامات التجارية الموثوقة لضمان أعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        {/* سلايدر الشركاء ثلاثي الأبعاد */}
        <div className="relative py-10 px-4">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: true
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { 
                coverflowEffect: { 
                  rotate: 10,
                  stretch: 0,
                  depth: 50,
                  modifier: 1 
                } 
              },
              768: { 
                coverflowEffect: { 
                  rotate: 5,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5 
                } 
              },
              1024: { 
                coverflowEffect: { 
                  rotate: 5,
                  stretch: 0,
                  depth: 150,
                  modifier: 2 
                } 
              }
            }}
            className="partners-slider-3d"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="w-[280px] md:w-[320px]">
                <PartnerCard partner={partner} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* زر الانضمام للشراكة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to="/l1/partnership" 
            className="relative overflow-hidden inline-flex items-center bg-gradient-to-r from-[#406F67] to-[#6BA89D] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center">
              انضم إلى شبكة شركائنا
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#6BA89D] to-[#406F67] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute right-0 top-0 w-2 h-full bg-white opacity-20 group-hover:right-full transition-all duration-700"></span>
          </Link>
        </motion.div>
      </div>

      {/* تأثيرات CSS */}
      <style jsx global>{`
        .partners-slider-3d {
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
        }
        .swiper-pagination-bullet {
          background: #86C4B8;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #406F67;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}