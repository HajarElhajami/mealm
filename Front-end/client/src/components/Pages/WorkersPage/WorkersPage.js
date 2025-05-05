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
//         setWorkers(data.workers);
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
//         جميع العمال
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
//         <p className="text-center text-[#6BA89D]">لا يوجد عمال حالياً.</p>
//       )}
//     </section>
//   );
// };

// export default WorkersPage;
































import React, { useEffect, useState } from "react";
import axios from "axios";
import img38 from "../../Image/38.png";

const WorkersPage = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/worker/workers");
        // فقط العمال المقبولين
        const acceptedWorkers = data.workers.filter(w => w.isAccepted);
        setWorkers(acceptedWorkers);
      } catch (err) {
        setError("حدث خطأ أثناء جلب العمال.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center text-[#406F67] mb-10">
        جميع العمال المقبولين
      </h1>

      {loading ? (
        <p className="text-center text-[#6BA89D]">جارٍ تحميل البيانات...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : workers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {workers.map((worker) => (
            <div
              key={worker._id}
              className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] shadow-xl rounded-lg p-4 text-center"
            >
              <img
                src={img38}
                alt={worker.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
              />
              <h3 className="text-xl text-white font-semibold">{worker.name}</h3>
              <p className="text-white text-sm">الطلبات: {worker.ordersCount}</p>
              <p className="text-white text-sm">⭐ التقييم: {worker.rating}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#6BA89D]">لا يوجد عمال مقبولين حالياً.</p>
      )}
    </section>
  );
};

export default WorkersPage;
