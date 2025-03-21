

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper";
// import { Link } from "react-router-dom";
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
//   { id: 1, image: img11, title: "تنظيف المنازل", description: "تنظيف شامل للمنازل بأسعار تنافسية", link: "/l1/request" },
//   { id: 2, image: img12, title: "إصلاح الأعطال الكهربائية", description: "إصلاح سريع وفعال لأي عطل كهربائي", link: "/l1/request" },
//   { id: 3, image: img13, title: "تركيب أنظمة الطاقة الشمسية", description: "حلول متكاملة لتوفير الطاقة النظيفة", link: "/l1/request" },
//   { id: 4, image: img14, title: "خدمات السباكة", description: "إصلاح تسريبات المياه وصيانة الأنابيب", link: "/l1/request" },
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

// const PopularServices = () => {
//   return (
//     <div className="p-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//       {services.map((service, index) => (
//         <SwiperSlide key={index}>
//           <div className="bg-primary shadow-md rounded-lg p-3 text-center hover:shadow-xl transition duration-300">
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-2xl font-semibold text-[#406F67]">{service.title}</h3>
//             <p className="text-[#406F67] text-sm my-2">{service.description}</p>
//             <a
//               href={service.link}
//               className="bg-[#406F67] text-white px-4 py-2 rounded-full inline-block mt-3 hover:bg-[#6BA89D] transition"
//             >
//               اطلب الخدمة
//             </a>
//           </div>
//         </SwiperSlide>
//       ))}
//     </div>
//   );
// };

// export default PopularServices;










































import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
import img21 from "../Image/21.jpg";
import img22 from "../Image/22.jpg";
import img23 from "../Image/23.jpg";
import img24 from "../Image/24.jpg";
import img25 from "../Image/25.jpg";
import img26 from "../Image/26.jpg";
import img27 from "../Image/27.jpg";
import img28 from "../Image/28.jpg";
import img29 from "../Image/29.jpg";
import img30 from "../Image/30.jpg";

const services = [
  { id: 1, image: img11, title: "تنظيف المنازل", description: "تنظيف شامل للمنازل بأسعار تنافسية" },
  { id: 2, image: img12, title: "إصلاح الأعطال الكهربائية", description: "إصلاح سريع وفعال لأي عطل كهربائي" },
  { id: 3, image: img13, title: "تركيب أنظمة الطاقة الشمسية", description: "حلول متكاملة لتوفير الطاقة النظيفة" },
  { id: 4, image: img14, title: "خدمات السباكة", description: "إصلاح تسريبات المياه وصيانة الأنابيب" },
  { id: 5, image: img15, title: "تركيب الأدوات الصحية", description: "تركيب الأحواض، الدش، والمراحيض" },
  { id: 6, image: img16, title: "تنظيف السجاد", description: "تنظيف عميق للسجاد باستخدام أحدث التقنيات" },
  { id: 7, image: img17, title: "صيانة التكييف", description: "تنظيف وصيانة مكيفات الهواء لضمان الأداء المثالي" },
  { id: 8, image: img18, title: "طلاء المنازل", description: "خدمات الطلاء الداخلي والخارجي بجودة عالية" },
  { id: 9, image: img19, title: "تنسيق الحدائق", description: "تصميم وصيانة الحدائق والمساحات الخضراء" },
  { id: 10, image: img20, title: "نقل الأثاث", description: "نقل وتركيب الأثاث بأمان وسرعة" },
  { id: 11, image: img21, title: "صيانة وإصلاح الأجهزة المنزلية", description: "تصليح الغسالات، الثلاجات، والأفران" },
  { id: 12, image: img22, title: "مكافحة الحشرات", description: "خدمات إبادة الحشرات بطرق آمنة وفعالة" },
  { id: 13, image: img23, title: "تنظيف وتعقيم المسابح", description: "صيانة دورية وتعقيم للمسابح" },
  { id: 14, image: img24, title: "خدمات النقل والتوصيل", description: "نقل البضائع والطرود بسرعة وأمان" },
  { id: 15, image: img25, title: "إصلاح وصيانة الأبواب والنوافذ", description: "تصليح وتركيب الأبواب الخشبية والزجاجية" },
  { id: 16, image: img26, title: "تركيب أنظمة الأمان والمراقبة", description: "كاميرات مراقبة وإنذارات أمان حديثة" },
  { id: 17, image: img27, title: "تلميع وتنظيف الأرضيات", description: "تنظيف وتلميع الرخام والسيراميك والخشب" },
  { id: 18, image: img28, title: "تنظيف واجهات المباني", description: "غسيل وتنظيف الواجهات الزجاجية والألمنيوم" },
  { id: 19, image: img29, title: "إزالة الرطوبة والعفن", description: "حلول فعالة للتخلص من الرطوبة والعفن داخل المنازل" },
  { id: 20, image: img30, title: "تصميم وتنفيذ الديكورات الداخلية", description: "أفكار وتصاميم عصرية لديكور منزلك" },
];

const PopularServices = () => {
  return (
    <div className="p-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="bg-primary shadow-md rounded-lg p-3 text-center hover:shadow-xl transition duration-300">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#406F67]">{service.title}</h3>
            <p className="text-[#406F67] text-sm my-2">{service.description}</p>
            <Link
              to="/l1/request"
              state={{ serviceName: service.title }}
              className="bg-[#406F67] text-white px-4 py-2 rounded-full inline-block mt-3 hover:bg-[#6BA89D] transition"
            >
              اطلب الخدمة
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </div>
  );
};

export default PopularServices;
