
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

import logo1 from "../Image/33.png";
import logo2 from "../Image/34.png";
import logo3 from "../Image/35.png";
import logo4 from "../Image/36.png";
import logo5 from "../Image/37.png";

const partners = [logo1, logo2, logo3, logo4, logo5];

export default function PartnersSection() {
  return (
    <section className="bg-gradient-to-r from-[#94D1C3] to-[#EAF9F6] py-10 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#234B44] mb-10 tracking-wide transition duration-500 ">
          شركاؤنا في النجاح
        </h2>
        <p className="text-[#406F67] text-xl mb-12 font-light leading-relaxed">
           نحن نفتخر بشراكتنا مع شركات مغربية رائدة تقدم خدمات النقل والتوصيل، وعمال النظافة المحترفين، وشركات للصباغة بامتياز وشركات اخرى
           <br />
          إذا كنت صاحب شركة وترغب في الانضمام إلى شبكتنا القوية من الشركاء، لا تفوت الفرصة
        </p>
        
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center bg-white p-2 md:p-6 rounded-xl shadow-lg transition-transform transform duration-300">
                <img src={logo} alt="شريك نجاح" className="w-[90%] h-[80px] object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Link 
          to="/l1/partnership" 
          className="mt-12 bg-gradient-to-r from-[#406F67] to-[#86C4B8] text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg transition duration-300 transform hover:scale-105 text-center inline-block"
        >
            إحصل على شراكة مع معلم
        </Link>
      </div>
    </section>
  );
}