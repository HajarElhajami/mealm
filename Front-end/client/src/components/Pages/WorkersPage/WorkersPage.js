
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import img38 from "../../Image/38.png";

const WorkerCard = ({ worker }) => {
  // قيم افتراضية آمنة
  const {
    image = "/default-worker.png",
    name = "عامل غير معروف",
    rating = 0,
    // skill = "المهنة",
    ordersCount = 0
  } = worker || {};

  return (
    <motion.div
      className="relative h-80 w-64 group"
      whileHover={{
        y: -20,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* الوجه الأمامي */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1C5] to-[#2C7A7B] rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={img38} 
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/default-worker.png";
            }}
          />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {/* <p className="text-white/80 text-sm">{skill}</p> */}
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < Math.floor(Number(rating))} />
          ))}
        </div>
      </div>
      
      {/* الوجه الخلفي */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C7A7B] to-[#4FD1C5] rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        {/* <p className="text-white/90 text-sm">المهنة: {skill}</p> */}
        <p className="text-white/90 text-sm mt-2">الطلبات: {ordersCount}</p>
        <p className="text-white/90 text-sm">التقييم: {Number(rating).toFixed(1)}</p>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition">
            عرض الملف
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 mx-0.5 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const WorkersPage = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/worker/workers", {
          timeout: 5000
        });
        
        if (!response.data.workers) {
          throw new Error("بيانات العمال غير متوفرة");
        }

        const acceptedWorkers = response.data.workers
          .filter(w => w?.isAccepted)
          .map(worker => ({
            _id: worker._id || Math.random().toString(),
            name: worker.name || "عامل غير معروف",
            image: worker.image || "/default-worker.png",
            rating: Number(worker.rating) || 0,
            // skill: worker.skill || "المهنة", // تم التصحيح هنا من data.worker.skill إلى worker.skill
            ordersCount: Number(worker.ordersCount) || 0,
            isAccepted: !!worker.isAccepted
          }));

        setWorkers(acceptedWorkers);
      } catch (err) {
        setError(err.message || "حدث خطأ أثناء جلب بيانات العمال");
        console.error("حدث خطأ:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <section className="relative min-h-screen p-8 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-[#234B44] mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4FD1C5] to-[#2C7A7B]">
            فريقنا المحترف
          </span>
        </motion.h1>

        {loading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#2C7A7B] mb-2"></div>
            <p className="text-[#6BA89D] text-xl">جارٍ تحميل البيانات...</p>
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-red-500 text-xl mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#2C7A7B] text-white rounded-lg hover:bg-[#234B44] transition"
            >
              إعادة المحاولة
            </button>
          </motion.div>
        ) : workers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {workers.map((worker) => (
              <WorkerCard key={worker._id} worker={worker} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-[#6BA89D] text-xl mb-4">لا يوجد عمال مقبولين حالياً.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#2C7A7B] text-white rounded-lg hover:bg-[#234B44] transition"
            >
              تحديث الصفحة
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WorkersPage;







































































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import img38 from "../../Image/38.png";

// const WorkersPage = () => {
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/worker/workers");
//         // فقط العمال المقبولين
//         const acceptedWorkers = data.workers.filter(w => w.isAccepted);
//         setWorkers(acceptedWorkers);
//       } catch (err) {
//         setError("حدث خطأ أثناء جلب العمال.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkers();
//   }, []);

//   return (
//     <section className="p-8">
//       <h1 className="text-4xl font-bold text-center text-[#406F67] mb-10">
//         جميع العمال المقبولين
//       </h1>

//       {loading ? (
//         <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : workers.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {workers.map((worker) => (
//             <div
//               key={worker._id}
//               className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] shadow-xl rounded-lg p-4 text-center"
//             >
//               <img
//                 src={img38}
//                 alt={worker.name}
//                 className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
//               />
//               <h3 className="text-xl text-white font-semibold">{worker.name}</h3>
//               <p className="text-white text-sm">الطلبات: {worker.ordersCount}</p>
//               <p className="text-white text-sm">⭐ التقييم: {worker.rating}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-[#6BA89D]">لا يوجد عمال مقبولين حالياً.</p>
//       )}
//     </section>
//   );
// };

// export default WorkersPage;
