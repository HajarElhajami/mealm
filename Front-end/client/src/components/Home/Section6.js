import React, { useEffect, useState } from "react";
import axios from "axios";
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
        color: white !important;
        background-color: rgba(64, 111, 103, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 20px;
      }
      .swiper-button-next:hover, .swiper-button-prev:hover {
        background-color: rgba(128, 198, 162, 0.8);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12">
        أفضل العمال
      </h2>

      {loading ? (
        <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : topWorkers.length > 0 ? (
        <>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{ delay: 1000000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="px-10"
          >
            {topWorkers.map((worker) => (
              <SwiperSlide key={worker._id}>
                <div className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] shadow-2xl rounded-xl p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out">
                  <div className="relative group">
                    <img
                      src={img38}
                      alt={worker.name}
                      className="w-28 h-28 rounded-full object-cover mb-4 mx-auto border-4 border-white group-hover:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mt-4">{worker.name}</h3>
                  <p className="text-white text-sm my-1">الطلبات: {worker.ordersCount}</p>
                  <p className="text-white text-sm">⭐ التقييم: {worker.rating}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-8">
            <Link to="/WorkersPage"
              className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6BA89D] transition text-lg">
              عرض كل العمال
            </Link>
          </div>
          <br />
        </>
      ) : (
        <p className="text-center text-[#6BA89D]">لا يوجد عمال حتى الآن.</p>
      )}
    </section>
  );
};

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
