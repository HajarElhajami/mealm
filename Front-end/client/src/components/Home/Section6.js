// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img38 from '../Image/38.png';

// const Section6 = () => {
//   const [topWorkers, setTopWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
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
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 4 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="my-12">
//       <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12">
//         أفضل العمال
//       </h2>

//       {loading ? (
//         <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : topWorkers.length > 0 ? (
//         <Slider {...settings} className="px-10">
//           {topWorkers.map((worker) => (
//             <div key={worker._id} className="bg-primary shadow-lg rounded-xl p-4 text-center hover:shadow-2xl transition duration-300">
//               <img
//                 src={img38}
//                 alt={img38}
//                 className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-[#406F67]"
//               />
//               <h3 className="text-xl font-semibold text-[#406F67]">{worker.name}</h3>
//               <p className="text-[#406F67] text-sm my-1">الطلبات: {worker.ordersCount}</p>
//               <p className="text-[#406F67] text-sm">⭐ التقييم: {worker.rating}</p>
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <p className="text-center text-[#6BA89D]">لا يوجد عمال حتى الآن.</p>
//       )}
//     </section>
//   );
// };

// export default Section6;
































import React, { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img38 from '../Image/38.png';

const Section6 = () => {
  const [topWorkers, setTopWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopWorkers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/worker/workers");
        const sortedWorkers = [...data.workers]
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
  }, []);

  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold text-center text-[#406F67] mb-12">
        أفضل العمال
      </h2>

      {loading ? (
        <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : topWorkers.length > 0 ? (
        <AliceCarousel
          items={topWorkers.map((worker) => (
            <div key={worker._id} className="bg-primary shadow-lg rounded-xl p-4 text-center hover:shadow-2xl transition duration-300">
              <img
                src={img38}
                alt={img38}
                className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-[#406F67]"
              />
              <h3 className="text-xl font-semibold text-[#406F67]">{worker.name}</h3>
              <p className="text-[#406F67] text-sm my-1">الطلبات: {worker.ordersCount}</p>
              <p className="text-[#406F67] text-sm">⭐ التقييم: {worker.rating}</p>
            </div>
          ))}
          autoPlay
          autoPlayInterval={3500}
          infinite
          disableDotsControls
          disableButtonsControls
        />
      ) : (
        <p className="text-center text-[#6BA89D]">لا يوجد عمال حتى الآن.</p>
      )}
    </section>
  );
};

export default Section6;
