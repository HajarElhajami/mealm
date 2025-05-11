
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import appStore from "../Image/31.png";
// import googlePlay from "../Image/32.jpeg";

// export default function Footer() {
//   return (
//   <footer dir="rtl" className="bg-gradient-to-r from-[#94D1C3] to-[#234B44] text-white py-3 px-5 md:py-7 ">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
//         <div>
//         <Link to="/" className="text-3xl hover:text-secondary text-white">معلم</Link>
//           <p className="text-gray-300 mt-5">خدمات مهنية عالية الجودة تربطك بأفضل <br/>الحرفيين في منطقتك.</p>
//         </div>

//         <div>
//              <h3 className="text-xl font-semibold mb-5">روابط سريعة</h3>
//              <ul className="space-y-5">
//                  <li><Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition">الرئيسية</Link></li>
//                  <li><Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition">الخدمات</Link></li>
//                  <li><Link to="/works" className="text-gray-300 hover:text-[#D4AF37] transition">الأعمال</Link></li>
//                  <li><Link to="/reviews" className="text-gray-300 hover:text-[#D4AF37] transition">التقييمات</Link></li>
//                  <li><Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition">اتصل بنا</Link></li>
//              </ul>
//         </div>
//       <div className="">
//         <div className="text-right">
//           <h2 className="text-xl text-center font-bold mb-3">قم بتحميل تطبيقنا</h2>
//           <p className="text-white text-sm mb-4">تعامل مع قائمة مهامك أينما كنت باستخدام تطبيقنا المحمول.</p>
//           <div className="flex justify-end gap-5 items-center">
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img src={appStore} alt="App Store" className="w-[100%] rounded-lg border-white border-2" />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img src={googlePlay} alt="Google Play" className="w-[89%] rounded-lg border-white border-2" />
//             </a>
//           </div>
//         </div>

//       <div className="text-center mt-8">
//         <h3 className="text-lg font-semibold mb-2">تابعنا على الشبكات الاجتماعية</h3>
//    <div className="flex justify-center">

//   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">      
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-facebook" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#0000ff" />
//         <stop offset="50%" stopColor="#42A5F5" />
//         <stop offset="100%" stopColor="#4DD0E1" />
//       </linearGradient>
//     </defs>
//     <path 
//       d="M32 7C53-3 50 25 68 31s5.37705 39.535266-17 42c-20.599976 2.268997-12.902118-14.696072-31-14-26 1-9-42 12-52zm-9.171732 70.949766c-4.095558 0-7.415664-3.29269-7.415664-7.354432 0-4.06174 3.320106-7.35443 7.415664-7.35443 4.09556 0 7.415665 3.29269 7.415665 7.35443s-3.320106 7.354432-7.415665 7.354432z" 
//       fill="url(#gradient-facebook)" 
//     />
//    </svg>
//    <div className="absolute inset-0 pb-4 pr-3 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(30% 5%, 70% 0%, 95% 40%, 85% 90%, 40% 100%, 5% 85%, 0% 50%)" }}>
//     <FaFacebookF />
//    </div>
//   </div>
//  </a>

//   <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer">
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-twitter" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#00BCD4" />
//         <stop offset="50%" stopColor="#24A5F5" />
//         <stop offset="100%" stopColor="#90CAF9" />
//       </linearGradient>
//     </defs>
//     <path 
//       d="M64.390766 7.893908c9.13892 9.586965-3.91575 14.742016.007852 26.63074 3.923603 11.888725 14.324106 14.96342 8.658127 27.114154-5.66598 12.150732-26.532488 3.603945-34.986257 10.31272-8.45377 6.708774-18.30274 6.258113-20.89926-9.745485-2.596518-16.0036-21.680047-20.760404-6.134962-40.13869 15.545086-19.378288 44.21558-23.760404 53.3545-14.17344z"
//       fill="url(#gradient-twitter)" 
//     />
//    </svg>
//    <div className="absolute inset-0 pb-4 pr-3 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
//     <FaTwitter />
//    </div>
//   </div>
//   </a>

//   <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-instagram" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset='0%' stop-color='#FBBC6E'/>
//       <stop offset='50.773063%' stop-color='#D8456A'/>
//       <stop offset='100%' stop-color='#4459A9'/>

//       </linearGradient>
//     </defs>
//     <path 
//       d='M45.331115 21.477975c14.95994 1.83685 29.52978-1.394228 32.937636 12.07628 3.40786 13.470507-13.03519 15.467577-22.95696 30.31343C45.39003 78.71354 31 79 19 67 7 55-4 20 12.514925 8.4126c16.514925-11.5874 17.85625 11.228525 32.81619 13.065375zm5.127594-3.769112c-4.09556 0-7.41567-3.29269-7.41567-7.354432C43.04304 6.29269 46.36315 3 50.45871 3c4.095557 0 7.415663 3.29269 7.415663 7.35443 0 4.061742-3.320106 7.354433-7.415664 7.354433z'    
//       fill="url(#gradient-instagram)" 
//     />
//     </svg>
//     <div className="absolute inset-0 pb-4 pr-6 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
//      <FaInstagram />
//    </div>
//   </div>
//   </a>

//   <a href="https://www.LinkedinIn.com" target="_blank" rel="noopener noreferrer">
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-linkedin" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset='0%' stop-color='#1565C0'/>
//       <stop offset='50.773063%' stop-color='#1E88E5'/>
//       <stop offset='100%' stop-color='#42A5F5'/>

//       </linearGradient>
//     </defs>
//       <path 
//         d='M23.18745 12.944335c-6.54792 27.757068-21.791687 24.90854-17.407975 39.16266 4.383713 14.25412 15.53734 9.09612 28.702498 17.354234 13.165158 8.25811 22.386095 16.8613 37.302005-15.81006s-42.04861-68.4639-48.596528-40.706835z'
//         fill="url(#gradient-linkedin)" 
//       />
//     </svg>
//     <div className="absolute inset-0 pb-4 pr-4 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
//       <FaLinkedinIn />
//     </div>
//    </div>
//    </a>
//    </div>
//       </div>
//       </div>
//       </div>
//       <div className="text-center text-white mt-6 border-t border-white pt-4">
//         &copy; {new Date().getFullYear()} معلم. جميع الحقوق محفوظة.
//       </div>
//     </footer>
//   );
// }
















































// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import appStore from "../Image/31.png";
// import googlePlay from "../Image/32.jpeg";

// export default function Footer() {
//   return (
//     <footer dir="rtl" className="relative bg-[#0a2e2a] text-white pt-20 pb-12 px-5 overflow-hidden">
//       {/* تأثيرات الخلفية ثلاثية الأبعاد */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#406F67] rounded-full filter blur-[120px] opacity-20"></div>
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#A9E7DA] rounded-full filter blur-[120px] opacity-15"></div>
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#86C4B8] rounded-full filter blur-[150px] opacity-10"></div>
//       </div>
      
//       {/* موجات تصميمية */}
//       <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
//         <svg 
//           viewBox="0 0 1200 120" 
//           preserveAspectRatio="none" 
//           className="absolute top-0 left-0 w-full h-full"
//         >
//           <path 
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
//             opacity=".25" 
//             className="fill-[#A9E7DA]" 
//           ></path>
//           <path 
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
//             opacity=".5" 
//             className="fill-[#86C4B8]" 
//           ></path>
//           <path 
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
//             className="fill-[#6BA89D]" 
//           ></path>
//         </svg>
//       </div>
      
//       {/* محتوى الفوتر */}
//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-right z-10">
//         {/* القسم الأول */}
//         <div className="space-y-7 transform transition-all hover:scale-[1.02]">
//           <Link to="/" className="text-5xl font-extrabold hover:text-[#CFF5EC] transition-all duration-500 flex items-center">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] drop-shadow-lg">معلم</span>
//             <span className="ml-2 text-4xl text-[#CFF5EC] animate-pulse">.</span>
//           </Link>
//           <p className="text-[#CFF5EC] leading-relaxed text-opacity-80">
//             نوفر لك أفضل الحرفيين المحترفين لتنفيذ جميع أعمالك المنزلية بجودة عالية ودقة متناهية.
//           </p>
          
//           {/* وسائل التواصل السريع */}
//           <div className="flex space-x-4 space-x-reverse">
//             <a href="tel:+966123456789" className="p-3 bg-[#406F67] rounded-full hover:bg-[#A9E7DA] hover:text-[#0a2e2a] transition-all duration-300 shadow-md hover:shadow-lg">
//               <FaPhoneAlt className="text-lg" />
//             </a>
//             <a href="https://wa.me/966123456789" className="p-3 bg-[#406F67] rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
//               <FaWhatsapp className="text-lg" />
//             </a>
//             <a href="mailto:info@moalem.com" className="p-3 bg-[#406F67] rounded-full hover:bg-[#CFF5EC] hover:text-[#0a2e2a] transition-all duration-300 shadow-md hover:shadow-lg">
//               <FaEnvelope className="text-lg" />
//             </a>
//           </div>
//         </div>

//         {/* القسم الثاني - روابط سريعة */}
//         <div className="transform transition-all hover:scale-[1.02]">
//           <h3 className="text-2xl font-bold mb-8 relative inline-block">
//             <span className="relative z-10 text-[#EAF9F6]">روابط سريعة</span>
//             <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] z-0 rounded-full"></span>
//           </h3>
//           <ul className="space-y-5">
//             {[
//               { name: "الرئيسية", path: "/" },
//               { name: "الخدمات", path: "/services" },
//               { name: "الأعمال", path: "/works" },
//               { name: "التقييمات", path: "/craftsmen" },
//             //   { name: "المدونة", path: "/blog" },
//               { name: "اتصل بنا", path: "/contact" },
//             ].map((item, index) => (
//               <li key={index} className="group">
//                 <Link 
//                   to={item.path} 
//                   className="text-[#CFF5EC] text-opacity-80 group-hover:text-[#A9E7DA] group-hover:text-opacity-100 transition-all duration-300 flex items-center text-lg"
//                 >
//                   <span className="w-3 h-3 bg-[#A9E7DA] rounded-full opacity-0 group-hover:opacity-100 mr-3 transition-all duration-300 transform group-hover:rotate-45"></span>
//                   {item.name}
//                   <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">←</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* القسم الثالث - ساعات العمل */}
//         {/* <div className="transform transition-all hover:scale-[1.02]">
//           <h3 className="text-2xl font-bold mb-8 relative inline-block">
//             <span className="relative z-10 text-[#EAF9F6]">ساعات العمل</span>
//             <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#86C4B8] to-[#6BA89D] z-0 rounded-full"></span>
//           </h3>
          
//           <div className="bg-[#1a4a44] bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-[#406F67] shadow-lg">
//             <ul className="space-y-4">
//               {[
//                 { day: "السبت - الخميس", time: "8:00 ص - 10:00 م" },
//                 { day: "يوم الجمعة", time: "4:00 م - 10:00 م" },
//                 { day: "العطل الرسمية", time: "9:00 ص - 6:00 م" },
//               ].map((item, index) => (
//                 <li key={index} className="flex justify-between items-center pb-3 border-b border-[#406F67] last:border-0">
//                   <span className="text-[#CFF5EC]">{item.day}</span>
//                   <span className="text-[#A9E7DA] font-medium">{item.time}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <div className="mt-6 bg-gradient-to-r from-[#6BA89D] to-[#86C4B8] p-3 rounded-lg text-center">
//               <p className="text-[#0a2e2a] font-bold">خدمة العملاء متاحة 24/7</p>
//             </div>
//           </div>
//         </div> */}

//         {/* القسم الرابع - التطبيق والاشتراك */}
//         <div className="transform transition-all hover:scale-[1.02]">
//           <h3 className="text-2xl font-bold mb-8 relative inline-block">
//             <span className="relative z-10 text-[#EAF9F6]">حمل تطبيقنا</span>
//             <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#6BA89D] to-[#406F67] z-0 rounded-full"></span>
//           </h3>
          
//           <div className="space-y-6">
//             <div className="bg-gradient-to-br from-[#1a4a44] to-[#0a2e2a] p-5 rounded-2xl border border-[#86C4B8] border-opacity-30 shadow-xl">
//               <p className="text-[#CFF5EC] mb-4 text-center">
//                 حمّل تطبيق معلم واحصل على خصومات حصرية وتتبع فوري لطلباتك
//               </p>
              
//               <div className="flex flex-col space-y-4">
//                 <a href="#" className="relative overflow-hidden group transform transition-all hover:-translate-y-1">
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-lg"></div>
//                   <img 
//                     src={appStore} 
//                     alt="App Store" 
//                     className="relative w-full rounded-xl border-2 border-[#86C4B8] transition-all duration-500 group-hover:border-[#EAF9F6] z-10" 
//                   />
//                 </a>
                
//                 <a href="#" className="relative overflow-hidden group transform transition-all hover:-translate-y-1">
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-lg"></div>
//                   <img 
//                     src={googlePlay} 
//                     alt="Google Play" 
//                     className="relative w-full rounded-xl border-2 border-[#86C4B8] transition-all duration-500 group-hover:border-[#EAF9F6] z-10" 
//                   />
//                 </a>
//               </div>
//             </div>
//             </div>
//             </div>

//             <div className="transform transition-all hover:scale-[1.02]">
//             <h3 className="text-2xl font-bold mb-8 relative inline-block">
//             <span className="relative z-10 text-[#EAF9F6]">تابعنا على الشبكات الاجتماعية</span>
//             <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] z-0 rounded-full"></span>
//           </h3>   <div className="flex justify-center">

//   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">      
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-facebook" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#0000ff" />
//         <stop offset="50%" stopColor="#42A5F5" />
//         <stop offset="100%" stopColor="#4DD0E1" />
//       </linearGradient>
//     </defs>
//     <path 
//       d="M32 7C53-3 50 25 68 31s5.37705 39.535266-17 42c-20.599976 2.268997-12.902118-14.696072-31-14-26 1-9-42 12-52zm-9.171732 70.949766c-4.095558 0-7.415664-3.29269-7.415664-7.354432 0-4.06174 3.320106-7.35443 7.415664-7.35443 4.09556 0 7.415665 3.29269 7.415665 7.35443s-3.320106 7.354432-7.415665 7.354432z" 
//       fill="url(#gradient-facebook)" 
//     />
//    </svg>
//    <div className="absolute inset-0 pb-4 pr-3 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(30% 5%, 70% 0%, 95% 40%, 85% 90%, 40% 100%, 5% 85%, 0% 50%)" }}>
//     <FaFacebookF />
//    </div>
//   </div>
//  </a>

//   <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer">
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-twitter" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#00BCD4" />
//         <stop offset="50%" stopColor="#24A5F5" />
//         <stop offset="100%" stopColor="#90CAF9" />
//       </linearGradient>
//     </defs>
//     <path 
//       d="M64.390766 7.893908c9.13892 9.586965-3.91575 14.742016.007852 26.63074 3.923603 11.888725 14.324106 14.96342 8.658127 27.114154-5.66598 12.150732-26.532488 3.603945-34.986257 10.31272-8.45377 6.708774-18.30274 6.258113-20.89926-9.745485-2.596518-16.0036-21.680047-20.760404-6.134962-40.13869 15.545086-19.378288 44.21558-23.760404 53.3545-14.17344z"
//       fill="url(#gradient-twitter)" 
//     />
//    </svg>
//    <div className="absolute inset-0 pb-4 pr-3 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
//     <FaTwitter />
//    </div>
//   </div>
//   </a>

//   <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-instagram" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset='0%' stop-color='#FBBC6E'/>
//       <stop offset='50.773063%' stop-color='#D8456A'/>
//       <stop offset='100%' stop-color='#4459A9'/>

//       </linearGradient>
//     </defs>
//     <path 
//       d='M45.331115 21.477975c14.95994 1.83685 29.52978-1.394228 32.937636 12.07628 3.40786 13.470507-13.03519 15.467577-22.95696 30.31343C45.39003 78.71354 31 79 19 67 7 55-4 20 12.514925 8.4126c16.514925-11.5874 17.85625 11.228525 32.81619 13.065375zm5.127594-3.769112c-4.09556 0-7.41567-3.29269-7.41567-7.354432C43.04304 6.29269 46.36315 3 50.45871 3c4.095557 0 7.415663 3.29269 7.415663 7.35443 0 4.061742-3.320106 7.354433-7.415664 7.354433z'    
//       fill="url(#gradient-instagram)" 
//     />
//     </svg>
//     <div className="absolute inset-0 pb-4 pr-6 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
//      <FaInstagram />
//    </div>
//   </div>
//   </a>

//   <a href="https://www.LinkedinIn.com" target="_blank" rel="noopener noreferrer">
//   <div className="relative w-[95px] h-[115px]">
//    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//     <defs>
//       <linearGradient id="gradient-linkedin" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset='0%' stop-color='#1565C0'/>
//       <stop offset='50.773063%' stop-color='#1E88E5'/>
//       <stop offset='100%' stop-color='#42A5F5'/>

//       </linearGradient>
//     </defs>
//       <path 
//         d='M23.18745 12.944335c-6.54792 27.757068-21.791687 24.90854-17.407975 39.16266 4.383713 14.25412 15.53734 9.09612 28.702498 17.354234 13.165158 8.25811 22.386095 16.8613 37.302005-15.81006s-42.04861-68.4639-48.596528-40.706835z'
//         fill="url(#gradient-linkedin)" 
//       />
//     </svg>
//     <div className="absolute inset-0 pb-4 pr-4 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
//       <FaLinkedinIn />
//     </div>
//    </div>
//    </a>
//    </div>
            
//             {/* النشرة البريدية */}
//             {/* <div className="mt-6">
//               <h4 className="text-xl font-semibold mb-4 text-[#EAF9F6]">اشترك في نشرتنا</h4>
//               <div className="relative">
//                 <input 
//                   type="email" 
//                   placeholder="بريدك الإلكتروني" 
//                   className="w-full px-5 py-3 rounded-lg bg-[#1a4a44] bg-opacity-50 border border-[#86C4B8] text-[#CFF5EC] focus:outline-none focus:ring-2 focus:ring-[#A9E7DA] placeholder-[#86C4B8]"
//                 />
//                 <button className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] text-[#0a2e2a] font-bold px-5 rounded-l-lg hover:opacity-90 transition-opacity shadow-md">
//                   اشتراك
//                 </button>
//               </div>
              
//               {/* وسائل التواصل الاجتماعي */}
//               {/* <div className="flex justify-center space-x-4 space-x-reverse mt-6">
//                 {[
//                   { icon: <FaFacebookF />, color: "#1877F2", url: "https://facebook.com" },
//                   { icon: <FaTwitter />, color: "#1DA1F2", url: "https://twitter.com" },
//                   { icon: <FaInstagram />, color: "#E4405F", url: "https://instagram.com" },
//                   { icon: <FaLinkedinIn />, color: "#0077B5", url: "https://linkedin.com" },
//                 ].map((social, index) => (
//                   <a 
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                     style={{ backgroundColor: social.color }}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div> */}
//             {/* </div>
//           </div> */}
//         </div>
//       </div> 
      
//       {/* حقوق النشر */}
//       <div className="relative mt-16 pt-8 border-t border-[rgba(169,231,218,0.2)] text-center text-[#CFF5EC] text-opacity-70 text-sm">
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a4a44] px-8 py-2 rounded-full border border-[rgba(169,231,218,0.3)] shadow-xl">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] font-bold text-lg">معلم</span>
//         </div>
//         <p className="mb-2">
//           &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لشركة معلم 
//         </p>
//         <div className="flex justify-center space-x-6 space-x-reverse">
//           <a href="#" className="text-[#A9E7DA] hover:text-[#EAF9F6] hover:underline transition">شروط الخدمة</a>
//           <a href="#" className="text-[#A9E7DA] hover:text-[#EAF9F6] hover:underline transition">سياسة الخصوصية</a>
//           <a href="#" className="text-[#A9E7DA] hover:text-[#EAF9F6] hover:underline transition">الأسئلة الشائعة</a>
//         </div>
//       </div>
//     </footer>
//   );
// }



























import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import appStore from "../Image/31.png";
import googlePlay from "../Image/32.jpeg";

export default function Footer() {
  return (
    <footer dir="rtl" className="relative bg-[#0a2e2a] text-white pt-24 pb-12 px-5 overflow-hidden">
      {/* تأثيرات الخلفية ثلاثية الأبعاد المحسنة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#406F67] rounded-full filter blur-[120px] opacity-20 animate-float-slow"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#A9E7DA] rounded-full filter blur-[120px] opacity-15 animate-float-medium"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#86C4B8] rounded-full filter blur-[150px] opacity-10 animate-float-fast"></div>
      </div>
      
      {/* موجات تصميمية محسنة */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-[#A9E7DA]" 
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-[#86C4B8]" 
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-[#6BA89D]" 
          ></path>
        </svg>
      </div>
      
      {/* عناوين الفوتر في خط واحد */}
      <div className="relative max-w-7xl mx-auto mb-12 hidden md:flex justify-between items-center border-b border-[rgba(169,231,218,0.3)] pb-6">
        <div className="text-center flex-1">
          <h3 className="text-2xl font-bold relative inline-block px-6 py-2">
            <span className="relative z-10 text-[#EAF9F6]">معلم</span>
            <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] z-0 rounded-full"></span>
          </h3>
        </div>
        
        <div className="text-center flex-1">
          <h3 className="text-2xl font-bold relative inline-block px-6 py-2">
            <span className="relative z-10 text-[#EAF9F6]">روابط سريعة</span>
            <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#86C4B8] to-[#6BA89D] z-0 rounded-full"></span>
          </h3>
        </div>
        
        <div className="text-center flex-1">
          <h3 className="text-2xl font-bold relative inline-block px-6 py-2">
            <span className="relative z-10 text-[#EAF9F6]">حمل تطبيقنا</span>
            <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#6BA89D] to-[#406F67] z-0 rounded-full"></span>
          </h3>
        </div>
        
        <div className="text-center flex-1">
          <h3 className="text-2xl font-bold relative inline-block px-6 py-2">
            <span className="relative z-10 text-[#EAF9F6]">تابعنا</span>
            <span className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] z-0 rounded-full"></span>
          </h3>
        </div>
      </div>
      
      {/* محتوى الفوتر */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-right z-10">
        {/* القسم الأول */}
        <div className="space-y-7 transform transition-all hover:scale-[1.02] group">
          <div className="p-6 bg-[#1a4a44] bg-opacity-30 backdrop-blur-sm rounded-2xl border border-[#86C4B8] border-opacity-20 shadow-lg group-hover:border-opacity-50 transition-all duration-500">
            <Link to="/" className="text-5xl font-extrabold hover:text-[#CFF5EC] transition-all duration-500 flex items-center justify-center md:justify-start">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] drop-shadow-lg">معلم</span>
              <span className="ml-2 text-4xl text-[#CFF5EC] animate-pulse">.</span>
            </Link>
            <p className="text-[#CFF5EC] leading-relaxed text-opacity-80 mt-4 text-center md:text-right">
              نوفر لك أفضل الحرفيين المحترفين لتنفيذ جميع أعمالك المنزلية بجودة عالية ودقة متناهية.
            </p>
            
          {/* معلومات الاتصال */}
          <div className="space-y-3 mt-3">
            <div className="flex items-center space-x-3 space-x-reverse">
              <FaPhoneAlt className="text-[#D4AF37] text-lg" />
              <span className="text-gray-300 hover:text-white transition">+966 12 345 6789</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <FaEnvelope className="text-[#D4AF37] text-lg" />
              <span className="text-gray-300 hover:text-white transition">info@moalem.com</span>
            </div>
            <div className="flex items-start space-x-3 space-x-reverse">
              <FaMapMarkerAlt className="text-[#D4AF37] text-lg mt-1" />
              <span className="text-gray-300 hover:text-white transition">المملكة العربية السعودية، جدة</span>
            </div>
          </div>

          </div>
        </div>

        {/* القسم الثاني - روابط سريعة */}
        <div className="transform transition-all hover:scale-[1.02] group">
          <div className="p-6 bg-[#1a4a44] bg-opacity-30 backdrop-blur-sm rounded-2xl border border-[#86C4B8] border-opacity-20 shadow-lg group-hover:border-opacity-50 transition-all duration-500 h-full">
            <ul className="space-y-5">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "الخدمات", path: "/services" },
                { name: "الأعمال", path: "/works" },
                { name: "التقييمات", path: "/craftsmen" },
                { name: "اتصل بنا", path: "/contact" },
              ].map((item, index) => (
                <li key={index} className="group-hover-item">
                  <Link 
                    to={item.path} 
                    className="text-[#CFF5EC] text-opacity-80 group-hover-item:hover:text-[#A9E7DA] group-hover-item:hover:text-opacity-100 transition-all duration-300 flex items-center text-lg"
                  >
                    <span className="w-3 h-3 bg-[#A9E7DA] rounded-full opacity-0 group-hover-item:hover:opacity-100 mr-3 transition-all duration-300 transform group-hover-item:hover:rotate-45"></span>
                    {item.name}
                    <span className="mr-3 opacity-0 group-hover-item:hover:opacity-100 transition-all duration-300 transform group-hover-item:hover:translate-x-2">←</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* القسم الثالث - حمل التطبيق */}
        <div className="transform transition-all hover:scale-[1.02] group">
          <div className="p-6 bg-gradient-to-br from-[#1a4a44] to-[#0a2e2a] rounded-2xl border border-[#86C4B8] border-opacity-20 shadow-lg group-hover:border-opacity-50 transition-all duration-500 h-full flex flex-col">
            <p className="text-[#CFF5EC] mb-6 text-center flex-grow">
              حمّل تطبيق معلم واحصل على خصومات حصرية وتتبع فوري لطلباتك
            </p>
            
            <div className="space-y-4">
              <a href="#" className="relative overflow-hidden group-app transform transition-all hover:-translate-y-1 block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] opacity-0 group-app-hover:opacity-20 transition-all duration-500 rounded-lg"></div>
                <img 
                  src={appStore} 
                  alt="App Store" 
                  className="relative w-full rounded-xl border-2 border-[#86C4B8] transition-all duration-500 group-app-hover:border-[#EAF9F6] z-10" 
                />
              </a>
              
              <a href="#" className="relative overflow-hidden group-app transform transition-all hover:-translate-y-1 block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] opacity-0 group-app-hover:opacity-20 transition-all duration-500 rounded-lg"></div>
                <img 
                  src={googlePlay} 
                  alt="Google Play" 
                  className="relative w-full rounded-xl border-2 border-[#86C4B8] transition-all duration-500 group-app-hover:border-[#EAF9F6] z-10" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* القسم الرابع - وسائل التواصل */}
        <div className="transform transition-all hover:scale-[1.02] group">
          <div className="p-6 bg-[#1a4a44] bg-opacity-30 backdrop-blur-sm rounded-2xl border border-[#86C4B8] border-opacity-20 shadow-lg group-hover:border-opacity-50 transition-all duration-500 h-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-6 w-full">
              {[
                { icon: <FaFacebookF />, color: "#1877F2", url: "https://facebook.com", name: "فيسبوك" },
                { icon: <FaTwitter />, color: "#1DA1F2", url: "https://twitter.com", name: "تويتر" },
                { icon: <FaInstagram />, color: "#E4405F", url: "https://instagram.com", name: "إنستغرام" },
                { icon: <FaLinkedinIn />, color: "#0077B5", url: "https://linkedin.com", name: "لينكدإن" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-24 rounded-xl flex flex-col items-center justify-center text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                  style={{ backgroundColor: social.color }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-3xl mb-2 z-10">{social.icon}</div>
                  <span className="text-sm z-10">{social.name}</span>
                  
                  {/* تأثير ثلاثي الأبعاد */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-30 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* حقوق النشر مع تأثير ثلاثي الأبعاد */}
      <div className="relative mt-16 pt-8 border-t border-[rgba(169,231,218,0.2)] text-center text-[#CFF5EC] text-opacity-70 text-sm">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a4a44] px-8 py-2 rounded-full border border-[rgba(169,231,218,0.3)] shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A9E7DA] to-[#EAF9F6] font-bold text-lg">معلم</span>
        </div>
        <p className="mb-2">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لشركة معلم 
        </p>
        <div className="flex justify-center space-x-6 space-x-reverse">
          <a href="#" className="text-[#A9E7DA] hover:text-[#EAF9F6] hover:underline transition">شروط الخدمة</a>
          <a href="#" className="text-[#A9E7DA] hover:text-[#EAF9F6] hover:underline transition">سياسة الخصوصية</a>
          <a href="#" className="text-[#A9E7DA] hover:text-[#EAF9F6] hover:underline transition">الأسئلة الشائعة</a>
        </div>
      </div>

      {/* إضافة أنيميشن للخلفية */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 10s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}