  // import React, { useEffect, useState } from "react";
  // import axios from "axios";
  // import { Link } from "react-router-dom";
  // import { Swiper, SwiperSlide } from "swiper/react";
  // import { Navigation, Autoplay } from "swiper/modules";
  // import "swiper/css";
  // import "swiper/css/navigation";
  // import "swiper/css/autoplay";
  // import img38 from '../Image/38.png';

  // const Section6 = () => {
  //   const [topWorkers, setTopWorkers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     const fetchTopWorkers = async () => {
  //       try {
  //         const { data } = await axios.get("http://localhost:5000/api/worker/workers");
  //         const acceptedWorkers = (data.workers || []).filter(w => w.isAccepted === true);
  //         const sortedWorkers = [...acceptedWorkers]
  //           .sort((a, b) => b.ordersCount - a.ordersCount || b.rating - a.rating)
  //           .slice(0, 10);
  //         setTopWorkers(sortedWorkers);
  //       } catch (err) {
  //         setError("حدث خطأ أثناء جلب أفضل العمال.");
  //         console.error(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchTopWorkers();

  //     const style = document.createElement("style");
  //     style.innerHTML = `
  //       .swiper-button-next, .swiper-button-prev {
  //         color: white !important;
  //         background-color: rgba(64, 111, 103, 0.8);
  //         border-radius: 50%;
  //         width: 40px;
  //         height: 40px;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //       }
  //       .swiper-button-next::after, .swiper-button-prev::after {
  //         font-size: 20px;
  //       }
  //       .swiper-button-next:hover, .swiper-button-prev:hover {
  //         background-color: rgba(128, 198, 162, 0.8);
  //       }
  //     `;
  //     document.head.appendChild(style);
  //   }, []);

  //   return (
  //     <section className="mb-12">
  //       <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12">
  //         أفضل العمال
  //       </h2>

  //       {loading ? (
  //         <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
  //       ) : error ? (
  //         <p className="text-center text-red-500">{error}</p>
  //       ) : topWorkers.length > 0 ? (
  //         <>
  //           <Swiper
  //             modules={[Navigation, Autoplay]}
  //             navigation
  //             loop
  //             autoplay={{ delay: 1000000, disableOnInteraction: false }}
  //             spaceBetween={30}
  //             slidesPerView={4}
  //             breakpoints={{
  //               320: { slidesPerView: 1 },
  //               640: { slidesPerView: 2 },
  //               768: { slidesPerView: 3 },
  //               1024: { slidesPerView: 4 },
  //             }}
  //             className="px-10"
  //           >
  //             {topWorkers.map((worker) => (
  //               <SwiperSlide key={worker._id}>
  //                 <div className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] shadow-2xl rounded-xl p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out">
  //                   <div className="relative group">
  //                     <img
  //                       src={img38}
  //                       alt={worker.name}
  //                       className="w-28 h-28 rounded-full object-cover mb-4 mx-auto border-4 border-white group-hover:shadow-lg transition-all duration-300"
  //                     />
  //                   </div>
  //                   <h3 className="text-xl font-semibold text-white mt-4">{worker.name}</h3>
  //                   <p className="text-white text-sm my-1">الطلبات: {worker.ordersCount}</p>
  //                   <p className="text-white text-sm">⭐ التقييم: {worker.rating}</p>
  //                 </div>
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>

  //           <div className="flex justify-center mt-8">
  //             <Link to="/WorkersPage"
  //               className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6BA89D] transition text-lg">
  //               عرض كل العمال
  //             </Link>
  //           </div>
  //           <br />
  //         </>
  //       ) : (
  //         <p className="text-center text-[#6BA89D]">لا يوجد عمال حتى الآن.</p>
  //       )}
  //     </section>
  //   );
  // };

  // export default Section6;


































































  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";
  import img38 from '../Image/38.png';
  
  const Section6 = () => {
    const [topWorkers, setTopWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchTopWorkers = async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/api/worker/workers");
          const acceptedWorkers = (data.workers || []).filter(w => w.isAccepted === true);
          const sortedWorkers = [...acceptedWorkers]
            .sort((a, b) => b.ordersCount - a.ordersCount || b.rating - a.rating)
            .slice(0, 10);
          setTopWorkers(sortedWorkers);
        } catch (err) {
          setError("حدث خطأ أثناء جلب أفضل العمال.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTopWorkers();
  
      const style = document.createElement("style");
      style.innerHTML = `
        .swiper-button-next, .swiper-button-prev {
          color: #4ab3b9 !important;
          background-color: rgba(26, 75, 68, 0.8);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(74, 179, 185, 0.5);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 24px;
          font-weight: bold;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: rgba(74, 179, 185, 0.6);
          transform: scale(1.1);
        }
      `;
      document.head.appendChild(style);
    }, []);
  
    return (
      <section className="relative py-7 overflow-hidden">
        {/* تأثيرات ثلاثية الأبعاد للخلفية */}
        <div className="absolute inset-0 overflow-hidden z-0">
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
        
        {/* العنوان الرئيسي */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4ab3b9] to-[#a8e6e9]">
            أفضل العمال
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4ab3b9] to-[#a8e6e9] rounded-full mx-auto mt-4"></div>
        </motion.div>
  
        {/* محتوى القسم */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {loading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4ab3b9] mb-4"></div>
              <p className="text-[#a8e6e9] text-xl">جارٍ تحميل البيانات...</p>
            </motion.div>
          ) : error ? (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-400 text-xl"
            >
              {error}
            </motion.p>
          ) : topWorkers.length > 0 ? (
            <>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="px-2 pb-12"
              >
                {topWorkers.map((worker) => (
                  <SwiperSlide key={worker._id}>
                    <motion.div
                      whileHover={{ y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="group perspective-1000"
                    >
                      <div className="relative h-80 bg-[#0f252b] bg-opacity-60 backdrop-blur-sm rounded-2xl border border-[#3a9ba1] border-opacity-30 overflow-hidden transition-all duration-500 group-hover:border-opacity-70 group-hover:bg-opacity-80 transform-style-preserve-3d">
                        {/* الوجه الأمامي */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden">
                          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#4ab3b9] to-[#2a8389] p-1 mb-6">
                            <img
                              src={img38}
                              alt={worker.name}
                              className="w-full h-full rounded-full object-cover border-2 border-white/30"
                            />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#4ab3b9] text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                              ⭐ {worker.rating}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-[#a8e6e9] mb-1">{worker.name}</h3>
                          <p className="text-[#a8e6e9] text-opacity-80 text-sm mb-4">الطلبات: {worker.ordersCount}</p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} filled={i < Math.floor(Number(worker.rating))} />
                            ))}
                          </div>
                        </div>
                        
                        {/* الوجه الخلفي */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden bg-gradient-to-br from-[#2a8389] to-[#4ab3b9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-y-180">
                          <h3 className="text-xl font-bold text-white mb-2">{worker.name}</h3>
                          <p className="text-white text-sm mb-1">الطلبات: {worker.ordersCount}</p>
                          <p className="text-white text-sm">التقييم: {Number(worker.rating).toFixed(1)}</p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
  
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <Link 
                  to="/WorkersPage"
                  className="relative overflow-hidden mb-8 px-8 py-3 bg-gradient-to-r from-[#4ab3b9] to-[#2a8389] text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">عرض كل العمال</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2a8389] to-[#4ab3b9] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </>
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[#a8e6e9] text-xl"
            >
              لا يوجد عمال حتى الآن.
            </motion.p>
          )}
        </div>
  
        {/* تأثيرات CSS */}
        <style jsx>{`
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
        `}</style>
      </section>
    );
  };
  
  const StarIcon = ({ filled }) => (
    <svg
      className={`w-5 h-5 mx-0.5 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-[#a8e6e9]/30 fill-[#a8e6e9]/30'}`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
  
  export default Section6;
































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import img38 from '../Image/38.png';
// import WorkersPage from "../Pages/WorkersPage/WorkersPage";


// const Section6 = () => {
//   const [topWorkers, setTopWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // جلب البيانات
//     const fetchTopWorkers = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/worker/workers");
//         const sortedWorkers = [...data.workers]
//           .sort((a, b) => b.ordersCount - a.ordersCount || b.rating - a.rating)
//           .slice(0, 10);
//         setTopWorkers(sortedWorkers);
//       } catch (err) {
//         setError("حدث خطأ أثناء جلب أفضل العمال.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTopWorkers();

//     // إضافة ستايل الأزرار
//     const style = document.createElement("style");
//     style.innerHTML = `
//       .swiper-button-next, .swiper-button-prev {
//         color: white !important;
//         background-color: rgba(64, 111, 103, 0.8);
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .swiper-button-next::after, .swiper-button-prev::after {
//         font-size: 20px;
//       }
//       .swiper-button-next:hover, .swiper-button-prev:hover {
//         background-color: rgba(128, 198, 162, 0.8);
//       }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   const handleViewAll = () => {
//     window.location.href = "/workers";
//   };

//   return (
//     <section className="mb-12">
//       <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12">
//         أفضل العمال
//       </h2>

//       {loading ? (
//         <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : topWorkers.length > 0 ? (
//         <>
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation
//             loop
//             autoplay={{ delay: 1000000, disableOnInteraction: false }}
//             spaceBetween={30}
//             slidesPerView={4}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//             className="px-10"
//           >
//             {topWorkers.map((worker) => (
//               <SwiperSlide key={worker._id}>
//                 <div className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] shadow-2xl rounded-xl p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out">
//                   <div className="relative group">
//                     <img
//                       src={img38}
//                       alt={worker.name}
//                       className="w-28 h-28 rounded-full object-cover mb-4 mx-auto border-4 border-white group-hover:shadow-lg transition-all duration-300"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mt-4">{worker.name}</h3>
//                   <p className="text-white text-sm my-1">الطلبات: {worker.ordersCount}</p>
//                   <p className="text-white text-sm">⭐ التقييم: {worker.rating}</p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//      <div className="flex justify-center mt-8">
//       <Link to="/WorkersPage" 
//         className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6BA89D] transition text-lg">
//           عرض كل العمال
//       </Link>
//      </div><br/>
//         </>
//       ) : (
//         <p className="text-center text-[#6BA89D]">لا يوجد عمال حتى الآن.</p>
//       )}
//     </section>
//   );
// };

// export default Section6;
