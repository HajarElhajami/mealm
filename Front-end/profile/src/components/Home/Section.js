
// import React, { useState } from 'react';
// import { FaHeart, FaComment, FaShare, FaPhone } from 'react-icons/fa';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../Image/31.png';
// import img2 from '../Image/32.jpeg';

// const ClientProfile = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [works, setWorks] = useState([
//     {
//       id: 1,
//       title: "تركيب نظام كهربائي لمنزل",
//       description: "تم تنفيذ هذا العمل في منزل العميل بمدينة الدار البيضاء خلال 3 أيام.",
//       date: "2 يناير 2023",
//       likes: 12,
//       comments: 3,
//       image: "https://via.placeholder.com/800x400/f3f4f6/374151?text=عمل+كهربائي",
//       liked: false,
//       showComments: false,
//       newComment: '',
//       commentsList: [
//         { id: 1, user: "علي محمد", text: "عمل رائع!" },
//         { id: 2, user: "سميرة أحمد", text: "أحسنت العمل" }
//       ]
//     },
//     {
//       id: 2,
//       title: "إصلاح عطل كهربائي",
//       description: "إصلاح عطل في فيلا سكنية بمنطقة أنفا.",
//       date: "15 فبراير 2023",
//       likes: 8,
//       comments: 1,
//       image: "https://via.placeholder.com/800x400/f3f4f6/374151?text=إصلاح+كهربائي",
//       liked: false,
//       showComments: false,
//       newComment: '',
//       commentsList: [
//         { id: 1, user: "يوسف الخالد", text: "شكرا على العمل الجيد" }
//       ]
//     }
//   ]);

//   const openImageModal = (image) => {
//     setSelectedImage(image);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleLike = (workId) => {
//     setWorks(works.map(work => {
//       if (work.id === workId) {
//         return {
//           ...work,
//           likes: work.liked ? work.likes - 1 : work.likes + 1,
//           liked: !work.liked
//         };
//       }
//       return work;
//     }));
//   };

//   const toggleComments = (workId) => {
//     setWorks(works.map(work => {
//       if (work.id === workId) {
//         return {
//           ...work,
//           showComments: !work.showComments
//         };
//       }
//       return work;
//     }));
//   };

//   const handleCommentChange = (workId, value) => {
//     setWorks(works.map(work => {
//       if (work.id === workId) {
//         return {
//           ...work,
//           newComment: value
//         };
//       }
//       return work;
//     }));
//   };

//   const submitComment = (workId) => {
//     setWorks(works.map(work => {
//       if (work.id === workId && work.newComment.trim() !== '') {
//         return {
//           ...work,
//           commentsList: [
//             ...work.commentsList,
//             {
//               id: work.commentsList.length + 1,
//               user: "زائر",
//               text: work.newComment
//             }
//           ],
//           comments: work.comments + 1,
//           newComment: ''
//         };
//       }
//       return work;
//     }));
//   };

//   // إعدادات السلايدر
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="bg-[#EAF9F6] min-h-screen" dir="rtl">
//       {/* Modal للصورة المكبرة */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
//           <div className="relative max-w-4xl max-h-full">
//             <img 
//               src={selectedImage} 
//               alt="Enlarged profile" 
//               className="max-w-full max-h-screen"
//             />
//             <button 
//               className="absolute top-4 right-4 text-white text-3xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden font-sans">
//         {/* صورة الغلاف وصورة الملف الشخصي */}
//         <div className="relative">
//           <img 
//             src={img1}
//             alt="Cover" 
//             className="w-full h-64 object-cover"
//           />
//           <div className="absolute -bottom-16 right-6">
//             <img 
//               src={img2} 
//               alt="Profile" 
//               className="w-32 h-32 rounded-full border-4 border-white cursor-pointer hover:border-[#86C4B8] transition"
//               onClick={() => openImageModal(img2)}
//             />
//           </div>
//         </div>

//         {/* معلومات العامل */}
//         <div className="pt-20 px-8">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-3xl font-bold text-[#406F67]">محمد أحمد</h1>
//               <p className="text-[#6BA89D] text-lg">كهربائي محترف</p>
//             </div>
//             <span className="bg-[#CFF5EC] text-[#406F67] text- font-medium px-4 py-2 rounded-full">
//               موثوق
//             </span>
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-4">
//             <div className="flex items-center">
//               <svg className="w-5 h-5 text-[#6BA89D] mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
//               </svg>
//               <span>الدار البيضاء</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-5 h-5 text-[#6BA89D] mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//               </svg>
//               <span>10 سنوات خبرة</span>
//             </div>
//             {/* <div className="flex items-center">
//               <svg className="w-5 h-5 text-[#6BA89D] mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
//               </svg>
//               <span>العربية، الفرنسية</span>
//             </div> */}
//             <div className="flex items-center">
//               <span className="text-yellow-400">★★★★★</span>
//               <span className="text-gray-600 mx-1">4.8</span>
//             </div>
//           </div>

//           <div className="mt-8 flex space-x-4">
//             <a 
//               href="tel:+212600000000" 
//               className="flex-1 bg-[#406F67] hover:bg-[#6BA89D] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition"
//             >
//               <FaPhone className="ml-2" />
//               <span>اتصل الآن</span>
//             </a>
//           </div>
//         </div>

//         {/* قسم الخدمات
//         <div className="mt-12 px-8">
//           <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">الخدمات التي أقدمها</h2>
          
//           <div className="mt-6 grid md:grid-cols-3 gap-6">
//             <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
//               <div className="flex justify-between items-start">
//                 <h3 className="font-bold text-lg text-[#406F67]">تركيب أنظمة كهربائية</h3>
//                 <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
//                   ابتداءً من 1500 درهم
//                 </span>
//               </div>
//               <p className="text-gray-600 mt-3">تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة.</p>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-sm text-gray-500">مدة التنفيذ: 2-3 أيام</span>
//                 <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
//                   اطلب الخدمة
//                 </button>
//               </div>
//             </div>
            
//             <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
//               <div className="flex justify-between items-start">
//                 <h3 className="font-bold text-lg text-[#406F67]">إصلاح أعطال كهربائية</h3>
//                 <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
//                   ابتداءً من 500 درهم
//                 </span>
//               </div>
//               <p className="text-gray-600 mt-3">تشخيص وإصلاح جميع أنواع الأعطال الكهربائية بسرعة واحترافية.</p>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-sm text-gray-500">مدة التنفيذ: 1-2 يوم</span>
//                 <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
//                   اطلب الخدمة
//                 </button>
//               </div>
//             </div>
            
//             <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
//               <div className="flex justify-between items-start">
//                 <h3 className="font-bold text-lg text-[#406F67]">صيانة دورية</h3>
//                 <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
//                   ابتداءً من 800 درهم
//                 </span>
//               </div>
//               <p className="text-gray-600 mt-3">صيانة دورية للأنظمة الكهربائية لضمان سلامتها واستمرار عملها.</p>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-sm text-gray-500">مدة التنفيذ: 1 يوم</span>
//                 <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
//                   اطلب الخدمة
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* قسم الأعمال السابقة مع تفاعل التعليقات واللايكات */}
//         {/* <div className="mt-12 px-8">
//           <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">أعمالي السابقة</h2>
          
//           <div className="mt-6 grid md:grid-cols-2 gap-8">
//             {works.map(work => (
//               <div key={work.id} className="border border-[#CFF5EC] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//                 <img src={work.image} alt={work.title} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="font-bold text-lg text-[#406F67]">{work.title}</h3>
//                   <p className="text-gray-600 mt-2">{work.description}</p>
//                   <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
//                     <span>{work.date}</span>
//                     <div className="flex space-x-4">
//                       <button 
//                         className={`flex items-center ${work.liked ? 'text-red-500' : 'text-[#6BA89D]'} hover:text-[#406F67]`}
//                         onClick={() => handleLike(work.id)}
//                       >
//                         <FaHeart className="ml-1" />
//                         <span>{work.likes}</span>
//                       </button>
//                       <button 
//                         className="flex items-center text-[#6BA89D] hover:text-[#406F67]"
//                         onClick={() => toggleComments(work.id)}
//                       >
//                         <FaComment className="ml-1" />
//                         <span>{work.comments}</span>
//                       </button>
//                       <button className="flex items-center text-[#6BA89D] hover:text-[#406F67]">
//                         <FaShare className="ml-1" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   {work.showComments && (
//                     <div className="mt-4 border-t pt-4">
//                       <div className="space-y-3 mb-4">
//                         {work.commentsList.map(comment => (
//                           <div key={comment.id} className="bg-gray-50 p-2 rounded">
//                             <p className="font-medium text-sm">{comment.user}</p>
//                             <p className="text-sm">{comment.text}</p>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="flex">
//                         <input
//                           type="text"
//                           value={work.newComment}
//                           onChange={(e) => handleCommentChange(work.id, e.target.value)}
//                           placeholder="أضف تعليقاً..."
//                           className="flex-1 border rounded-r-none p-2 text-sm"
//                         />
//                         <button 
//                           onClick={() => submitComment(work.id)}
//                           className="bg-[#406F67] text-white px-3 rounded-l-none text-sm"
//                         >
//                           نشر
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* قسم التقييمات */}
//         {/* <div className="mt-12 px-8">
//           <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">تقييمات العملاء</h2>
          
//           <div className="mt-6 grid md:grid-cols-2 gap-6">
//             <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md">
//               <div className="flex justify-between">
//                 <div>
//                   <h4 className="font-bold text-[#406F67]">علي محمد</h4>
//                   <div className="text-yellow-400 text-sm mt-1">
//                     ★★★★★
//                   </div>
//                 </div>
//                 <span className="text-sm text-gray-500">منذ أسبوع</span>
//               </div>
//               <p className="mt-3 text-gray-700">عمل ممتاز ودقة في المواعيد، النظام الكهربائي يعمل بشكل رائع!</p>
//             </div>
//           </div>
          
//           <button className="mt-6 w-full py-3 border-2 border-[#A9E7DA] rounded-lg text-[#406F67] font-medium hover:bg-[#EAF9F6] transition">
//             عرض الكل
//           </button>
//         </div> */}

//         {/* معرض الأعمال مع سلايدر */}
//         {/* <div className="mt-12 px-8 pb-8">
//           <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">معرض الأعمال</h2>
          
//           <div className="mt-6">
//             <Slider {...sliderSettings}>
//               {[
//                 { id: 1, color: "3b82f6", text: "عمل1" },
//                 { id: 2, color: "10b981", text: "عمل2" },
//                 { id: 3, color: "f59e0b", text: "عمل3" },
//                 { id: 4, color: "ef4444", text: "عمل4" },
//                 { id: 5, color: "8b5cf6", text: "عمل5" },
//                 { id: 6, color: "ec4899", text: "عمل6" }
//               ].map(item => (
//                 <div key={item.id} className="px-2">
//                   <img 
//                     src={`https://via.placeholder.com/300/${item.color}/ffffff?text=${item.text}`}
//                     alt={`Work ${item.id}`}
//                     className="h-48 w-full object-cover rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div> */}
//       </div>
//       <br/> 
//     </div>
//   );
// };

// export default ClientProfile;

































import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../Image/31.png';
import img10 from '../Image/1.png';

const ClientProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen" dir="rtl">
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged profile" 
                className="max-w-full max-h-screen rounded-lg shadow-2xl"
              />
              <button 
                className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="relative rounded-t-2xl shadow-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative h-72 w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent z-10"></div>
            <img 
              src={img1}
              alt="Cover" 
              className="w-full h-full object-cover object-center"
            />

            {/* Animated Profile Image */}
            <motion.div
              className="absolute -bottom-16 right-6 z-30 rounded-full border-4 border-white shadow-xl overflow-hidden cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
              onClick={() => {
                setSelectedImage(img10);
                setShowModal(true);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={img10}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full"
              />
              {isHovered && (
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                  {/* <span className="text-white font-medium">عرض الصورة</span> */}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Content */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-2xl px-8 pt-20  pb-8"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-12">
                <h1 className="text-3xl font-bold text-[#0f4c5c]">محمد أحمد</h1>
                <span className="flex items-center gap-1 bg-[#facc15] mt-3 text-emerald-800 text-[15px] font-medium px-5 py-2 rounded-full">
                  <FaCheckCircle className="text-emerald-500" />
                  موثوق
                </span>
              </div>

              <p className="text-xl text-emerald-600 mt-1 mb-4">كهربائي محترف</p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="ml-2 text-emerald-500" />
                  <span>الدار البيضاء، المغرب</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="ml-2 text-emerald-500" />
                  <span>10 سنوات خبرة في المجال</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="ml-1" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium mx-2">4.8</span>
                  <span className="text-gray-500">(127 تقييم)</span>
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                كهربائي محترف معتمد مع أكثر من 10 سنوات من الخبرة في التركيبات الكهربائية المنزلية والتجارية. متخصص في إصلاح الأعطال الكهربائية، تركيب الأنظمة الذكية، وصيانة الدوائر الكهربائية. التزام كامل بمعايير السلامة وجودة العمل.
              </p>
            </div>

            <motion.div 
              className="bg-gradient-to-br from-[#d0f4de] to-[#e6f5ce] p-6 rounded-xl shadow-md border border-[#95d5b2] w-full md:w-80"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4"> مواعيد العمل والاستجابة              </h3>
              <div className="space-y-4">
                {/* <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <FaPhone />
                  اتصل الآن
                </button> */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">متاح للعمل:</h4>
                  <p className="text-gray-600">السبت - الخميس: 8 صباحًا - 6 مساءً</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">متوسط الاستجابة:</h4>
                  <p className="text-gray-600">أقل من ساعة</p>
                </div>
              </div>
            </motion.div>
          </div>
<div className="mt-16">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff9505] to-[#5f0f40] mb-8 pb-3 border-b-2 border-gray-200">
    المهارات والخبرات
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {['تركيب الأنظمة الكهربائية', 'إصلاح الأعطال الكهربائية', 'صيانة الدوائر الكهربائية', 'تركيب الأنظمة الذكية', 'فحص وتشخيص المشاكل', 'تحديث الأنظمة القديمة'].map((skill, index) => (
      <motion.div
        key={index}
        className="relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        {/* Card with 3D effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5f0f40] to-[#0f4c5c] rounded-xl shadow-2xl transform group-hover:rotate-1 transition-all duration-300"></div>
        
        <div className="relative bg-white rounded-xl p-6 h-full border-2 border-gray-200 transform group-hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="flex items-start gap-4">
            {/* Animated check icon */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              <div className="bg-gradient-to-r from-[#e36414] to-[#fb8b24] p-3 rounded-full shadow-md">
                <FaCheckCircle className="text-white text-xl" />
              </div>
            </motion.div>
            
            {/* Skill text with gradient */}
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40]">
              {skill}
            </h3>
          </div>
          
          {/* Hover effect indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e36414] to-[#fb8b24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientProfile;




































































// import React, { useState } from 'react';
// import { FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaCheckCircle, FaTools, FaBolt, FaHome, FaClock, FaCertificate } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import img1 from '../Image/31.png';
// import img10 from '../Image/1.png';

// const ClientProfile = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [isHovered, setIsHovered] = useState(false);

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   // 3D Animation variants
//   const cardVariants = {
//     offscreen: {
//       y: 100,
//       rotate: -5,
//       opacity: 0
//     },
//     onscreen: {
//       y: 0,
//       rotate: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.8
//       }
//     }
//   };

//   const hoverVariants = {
//     hover: {
//       y: -10,
//       rotate: 0,
//       boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const skills = [
//     { name: 'تركيب الأنظمة الكهربائية', icon: <FaBolt className="text-amber-400" /> },
//     { name: 'إصلاح الأعطال الكهربائية', icon: <FaTools className="text-red-400" /> },
//     { name: 'صيانة الدوائر الكهربائية', icon: <FaHome className="text-blue-400" /> },
//     { name: 'تركيب الأنظمة الذكية', icon: <FaCertificate className="text-purple-400" /> },
//     { name: 'فحص وتشخيص المشاكل', icon: <FaCheckCircle className="text-green-400" /> },
//     { name: 'تحديث الأنظمة القديمة', icon: <FaClock className="text-cyan-400" /> }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen" dir="rtl">
//       {/* Image Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div 
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div 
//               className="relative max-w-4xl max-h-full"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 100 }}
//             >
//               <img 
//                 src={selectedImage} 
//                 alt="Enlarged profile" 
//                 className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
//               />
//               <button 
//                 className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Cover Image with 3D Parallax Effect */}
//         <motion.div 
//           className="relative rounded-2xl shadow-2xl overflow-hidden h-80 md:h-96"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           whileHover={{
//             scale: 1.005,
//             transition: { duration: 0.3 }
//           }}
//         >
//           <motion.div 
//             className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
//           />
//           <motion.img 
//             src={img1}
//             alt="Cover" 
//             className="w-full h-full object-cover object-center"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1 }}
//           />

//           {/* 3D Profile Image */}
//           <motion.div
//             className="absolute -bottom-16 right-6 z-30 rounded-full border-4 border-white shadow-2xl overflow-hidden cursor-pointer"
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
//             whileHover={{ 
//               scale: 1.1, 
//               rotate: [0, 5, -5, 0],
//               boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)",
//               transition: { duration: 0.5 } 
//             }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               setSelectedImage(img10);
//               setShowModal(true);
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <motion.img
//               src={img10}
//               alt="Profile"
//               className="w-32 h-32 object-cover rounded-full"
//               animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             {isHovered && (
//               <motion.div 
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <span className="text-white font-medium text-sm">عرض الصورة</span>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>

//         {/* Profile Content with 3D Card */}
//         <motion.div 
//           className="bg-white rounded-2xl px-8 pt-20 pb-8 mt-4 shadow-2xl"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           variants={cardVariants}
//           whileHover="hover"
//         >
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
//             <div className="flex-1">
//               <div className="flex flex-col md:flex-row md:items-center gap-4">
//                 <motion.h1 
//                   className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   محمد أحمد
//                 </motion.h1>
//                 <motion.span 
//                   className="flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full w-fit"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <FaCheckCircle className="text-emerald-500" />
//                   <span>حساب موثوق</span>
//                 </motion.span>
//               </div>

//               <motion.p 
//                 className="text-2xl font-semibold text-gray-600 mt-2 mb-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 كهربائي محترف معتمد
//               </motion.p>

//               <div className="space-y-4">
//                 <motion.div 
//                   className="flex items-center text-gray-700"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.7 }}
//                 >
//                   <div className="p-2 bg-blue-100 rounded-full mr-3">
//                     <FaMapMarkerAlt className="text-blue-500" />
//                   </div>
//                   <span>الدار البيضاء، المغرب</span>
//                 </motion.div>
                
//                 <motion.div 
//                   className="flex items-center text-gray-700"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   <div className="p-2 bg-purple-100 rounded-full mr-3">
//                     <FaCalendarAlt className="text-purple-500" />
//                   </div>
//                   <span>10 سنوات خبرة في المجال</span>
//                 </motion.div>
                
//                 <motion.div 
//                   className="flex items-center"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.9 }}
//                 >
//                   <div className="p-2 bg-amber-100 rounded-full mr-3">
//                     <div className="flex text-amber-400">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar key={i} className="ml-1 text-sm" />
//                       ))}
//                     </div>
//                   </div>
//                   <span className="text-gray-700 font-medium mx-2">4.8</span>
//                   <span className="text-gray-500">(127 تقييم)</span>
//                 </motion.div>
//               </div>

//               <motion.p 
//                 className="mt-8 text-gray-600 leading-relaxed text-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.0 }}
//               >
//                 كهربائي محترف معتمد مع أكثر من 10 سنوات من الخبرة في التركيبات الكهربائية المنزلية والتجارية. متخصص في إصلاح الأعطال الكهربائية، تركيب الأنظمة الذكية، وصيانة الدوائر الكهربائية. التزام كامل بمعايير السلامة وجودة العمل.
//               </motion.p>
//             </div>

//             {/* 3D Contact Card */}
//             <motion.div 
//               className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-xl border border-blue-100 w-full lg:w-96"
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={cardVariants}
//               whileHover={{
//                 y: -15,
//                 boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <motion.h3 
//                 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 مواعيد العمل والاستجابة
//               </motion.h3>
              
//               <div className="space-y-5">
//                 <motion.button 
//                   className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <FaPhone className="text-white" />
//                   <span>اتصل الآن</span>
//                 </motion.button>
                
//                 <motion.div 
//                   className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
//                   whileHover={{ y: -5 }}
//                 >
//                   <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
//                     <FaClock className="text-blue-500" />
//                     <span>متاح للعمل:</span>
//                   </h4>
//                   <p className="text-gray-700">السبت - الخميس: 8 صباحًا - 6 مساءً</p>
//                 </motion.div>
                
//                 <motion.div 
//                   className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
//                   whileHover={{ y: -5 }}
//                 >
//                   <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
//                     <FaBolt className="text-amber-500" />
//                     <span>متوسط الاستجابة:</span>
//                   </h4>
//                   <p className="text-gray-700">أقل من ساعة</p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Skills Section with 3D Cards */}
//           <div className="mt-20">
//             <motion.h2 
//               className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-12 pb-4 border-b-2 border-gray-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               المهارات والخبرات
//             </motion.h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative group"
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, amount: 0.2 }}
//                   variants={cardVariants}
//                   custom={index}
//                   whileHover={{
//                     y: -15,
//                     boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   {/* 3D Card Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-xl transform group-hover:-rotate-1 transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10"></div>
                  
//                   <div className="relative bg-white rounded-xl p-6 h-full border-2 border-gray-100 transform group-hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
//                     {/* Skill Icon with Floating Animation */}
//                     <motion.div 
//                       className="absolute -top-4 -right-4 text-6xl opacity-10"
//                       animate={{ 
//                         y: [0, -5, 0],
//                         transition: { 
//                           duration: 3 + Math.random() * 3,
//                           repeat: Infinity,
//                           ease: "easeInOut" 
//                         }
//                       }}
//                     >
//                       {skill.icon}
//                     </motion.div>
                    
//                     <div className="flex items-start gap-4 relative z-10">
//                       {/* Animated icon */}
//                       <motion.div 
//                         className="flex-shrink-0"
//                         whileHover={{ 
//                           scale: 1.2,
//                           rotate: [0, 10, -10, 0],
//                           transition: { duration: 0.5 } 
//                         }}
//                       >
//                         <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-xl shadow">
//                           {skill.icon}
//                         </div>
//                       </motion.div>
                      
//                       {/* Skill text */}
//                       <h3 className="text-xl font-bold text-gray-800">
//                         {skill.name}
//                       </h3>
//                     </div>
                    
//                     {/* Hover effect indicator */}
//                     <motion.div 
//                       className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       initial={{ width: 0 }}
//                       whileHover={{ width: "100%" }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ClientProfile;