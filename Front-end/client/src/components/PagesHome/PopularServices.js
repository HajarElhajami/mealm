
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
    <div className="p-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              className="bg-gradient-to-r from-[#94D1C3] to-[#406F67] text-white px-4 py-2 rounded-full inline-block mt-3 hover:bg-[#6BA89D] transition"
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







































































// import React from "react";
// import { Link } from "react-router-dom";

// // استيراد الصور
// const images = Array.from({ length: 20 }, (_, i) => require(`../Image/${11 + i}.jpg`));

// const services = [
//   { id: 1, title: "تنظيف المنازل", description: "تنظيف شامل للمنازل بأسعار تنافسية" },
//   { id: 2, title: "إصلاح الأعطال الكهربائية", description: "إصلاح سريع وفعال لأي عطل كهربائي" },
//   { id: 3, title: "تركيب أنظمة الطاقة الشمسية", description: "حلول متكاملة لتوفير الطاقة النظيفة" },
//   { id: 4, title: "خدمات السباكة", description: "إصلاح تسريبات المياه وصيانة الأنابيب" },
//   { id: 5, title: "تركيب الأدوات الصحية", description: "تركيب الأحواض، الدش، والمراحيض" },
//   { id: 6, title: "تنظيف السجاد", description: "تنظيف عميق للسجاد باستخدام أحدث التقنيات" },
// ];

// const PopularServices = () => {
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>خدماتنا المميزة</h2>
      
//       <div style={styles.cardsContainer}>
//         {services.map((service, index) => (
//           <div key={service.id} style={styles.cardWrapper}>
//             {/* البطاقة ثلاثية الأبعاد */}
//             <div style={styles.card}>
//               {/* الوجه الأمامي للبطاقة */}
//               <div style={styles.cardFront}>
//                 <div style={styles.imageContainer}>
//                   <img 
//                     src={images[index]} 
//                     alt={service.title} 
//                     style={styles.image}
//                   />
//                   <div style={styles.overlay}></div>
//                 </div>
//                 <div style={styles.cardContent}>
//                   <h3 style={styles.cardTitle}>{service.title}</h3>
//                   <p style={styles.cardDescription}>{service.description}</p>
//                 </div>
//                 <div style={styles.cardFooter}>
//                   <span style={styles.moreInfo}>اضغط للمزيد</span>
//                 </div>
//               </div>
              
//               {/* الوجه الخلفي للبطاقة */}
//               <div style={styles.cardBack}>
//                 <div style={styles.backContent}>
//                   <h3 style={styles.backTitle}>{service.title}</h3>
//                   <p style={styles.backDescription}>{service.description}</p>
                  
//                   <div style={styles.featuresList}>
//                     <div style={styles.featureItem}>✓ فنيون محترفون</div>
//                     <div style={styles.featureItem}>✓ أسعار تنافسية</div>
//                     <div style={styles.featureItem}>✓ ضمان الجودة</div>
//                   </div>
                  
//                   <Link
//                     to="/l1/request"
//                     state={{ serviceName: service.title }}
//                     style={styles.orderButton}
//                   >
//                     اطلب الخدمة الآن
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* ستايل مضمن */}
//       <style jsx>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
        
//         .card-wrapper:hover .card {
//           transform: rotateY(180deg);
//         }
        
//         .card-wrapper:hover {
//           transform: translateY(-10px);
//         }
//       `}</style>
//     </div>
//   );
// };

// // الأنماط ككائنات JavaScript
// const styles = {
//   container: {
//     padding: '40px 20px',
//     background: 'linear-gradient(135deg, #f0f9f7 0%, #e0f3ef 100%)',
//     minHeight: '100vh',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     color: '#2a5a52',
//     marginBottom: '50px',
//     fontWeight: 'bold',
//     textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
//   },
//   cardsContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '30px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   cardWrapper: {
//     perspective: '1000px',
//     transition: 'all 0.5s ease',
//     animation: 'float 4s ease-in-out infinite',
//   },
//   card: {
//     position: 'relative',
//     width: '100%',
//     height: '400px',
//     transformStyle: 'preserve-3d',
//     transition: 'transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1)',
//     borderRadius: '15px',
//     boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
//   },
//   cardFront: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     backfaceVisibility: 'hidden',
//     overflow: 'hidden',
//     borderRadius: '15px',
//     background: '#fff',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   imageContainer: {
//     position: 'relative',
//     width: '100%',
//     height: '200px',
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'transform 0.5s ease',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(65,111,103,0.7) 100%)',
//   },
//   cardContent: {
//     padding: '20px',
//     textAlign: 'center',
//   },
//   cardTitle: {
//     fontSize: '1.5rem',
//     color: '#2a5a52',
//     marginBottom: '10px',
//     fontWeight: 'bold',
//   },
//   cardDescription: {
//     color: '#666',
//     fontSize: '0.9rem',
//     lineHeight: '1.5',
//   },
//   cardFooter: {
//     padding: '15px',
//     textAlign: 'center',
//     background: 'linear-gradient(to right, #94D1C3, #406F67)',
//   },
//   moreInfo: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: '0.9rem',
//   },
//   cardBack: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     backfaceVisibility: 'hidden',
//     overflow: 'hidden',
//     borderRadius: '15px',
//     background: 'linear-gradient(45deg, #406F67, #2a5a52)',
//     color: '#fff',
//     transform: 'rotateY(180deg)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '20px',
//     boxSizing: 'border-box',
//   },
//   backContent: {
//     textAlign: 'center',
//   },
//   backTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '15px',
//     fontWeight: 'bold',
//   },
//   backDescription: {
//     fontSize: '0.9rem',
//     marginBottom: '20px',
//     lineHeight: '1.6',
//   },
//   featuresList: {
//     marginBottom: '25px',
//     textAlign: 'right',
//   },
//   featureItem: {
//     padding: '8px 0',
//     fontSize: '0.9rem',
//   },
//   orderButton: {
//     display: 'inline-block',
//     padding: '12px 30px',
//     background: '#fff',
//     color: '#2a5a52',
//     borderRadius: '50px',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//     marginTop: '10px',
//   },
// };

// export default PopularServices;