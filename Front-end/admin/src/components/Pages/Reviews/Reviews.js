// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const WorkerRatings = () => {
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/worker/workers");
//         const acceptedWorkers = response.data.workers.filter(w => w.isAccepted);
//         setWorkers(acceptedWorkers);
//       } catch (err) {
//         setError("❌ حدث خطأ أثناء جلب البيانات");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWorkers();
//   }, []);

//   if (loading) return <div>جاري تحميل البيانات...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="p-6 text-right" dir="rtl">
//       <h2 className="text-2xl font-bold text-center mb-6">📊 تقييمات العمال</h2>
//       <table className="w-full border-collapse border border-gray-300 text-right">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">الإسم</th>
//             <th className="border p-2">المهارة</th>
//             <th className="border p-2">عدد الطلبات</th>
//             <th className="border p-2">عدد التقييمات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {workers.length > 0 ? (
//             workers.map(worker => (
//               <tr key={worker._id} className="text-center">
//                 <td className="border p-2">{worker.name}</td>
//                 <td className="border p-2">{worker.skill}</td>
//                 <td className="border p-2">{worker.ordersCount}</td>
//                 <td className="border p-2">{worker.ratingsCount}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="text-center p-4 text-gray-600">لا يوجد عمال مقبولين.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WorkerRatings;











//   import React, { useState, useEffect } from "react";
//   import axios from "axios";
//   import { useNavigate } from "react-router-dom";
//   import { FaUser } from "react-icons/fa";

//   const WorkerRatings = () => {
//     const [workers, setWorkers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//       const fetchWorkers = async () => {
//         try {
//           setLoading(true);
//           const response = await axios.get("http://localhost:5000/api/worker/workers");
//           const acceptedWorkers = response.data.workers.filter(w => w.isAccepted);
//           setWorkers(acceptedWorkers);
//         } catch (err) {
//           setError("❌ حدث خطأ أثناء جلب البيانات");
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchWorkers();
//     }, []);

//     const goToCustomer = (id) => {
//       navigate(`/customer/${id}`);
//     };
    

//     if (loading) return <div>جاري تحميل البيانات...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//       <div className="p-6 text-right" dir="rtl">
//         <h2 className="text-2xl font-bold text-center mb-6">📊 تقييمات العمال</h2>
//         <table className="w-full border-collapse border border-gray-300 text-right">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">الإسم</th>
//               <th className="border p-2">المهارة</th>
//               <th className="border p-2">عدد الطلبات</th>
//               <th className="border p-2">عدد التقييمات</th>
//               <th className="border p-2">معلومات العميل</th>
//             </tr>
//           </thead>
//           <tbody>
//             {workers.length > 0 ? (
//               workers.map(worker => (
//                 <tr key={worker._id} className="text-center">
//                   <td className="border p-2">{worker.name}</td>
//                   <td className="border p-2">{worker.skill}</td>
//                   <td className="border p-2">{worker.ordersCount}</td>
//                   <td className="border p-2">{worker.ratingsCount}</td>
//                   <td className="border p-2">
//                   <button 
//   onClick={() => goToCustomer(customer._id)} 
//   className="text-blue-600 hover:text-blue-800 transition-all"
// >
//   <FaUser size={20} />
// </button>

//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-4 text-gray-600">لا يوجد عمال مقبولين.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   export default WorkerRatings;






























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";

// const WorkerRatings = () => {
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/worker/workers");
//         const acceptedWorkers = response.data.workers.filter(w => w.isAccepted);
//         setWorkers(acceptedWorkers);
//       } catch (err) {
//         setError("❌ حدث خطأ أثناء جلب البيانات");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWorkers();
//   }, []);

//   const goToCustomer = (id) => {
//     navigate(`/customer/${id}`);
//   };

//   if (loading) return <div>جاري تحميل البيانات...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="p-6 text-right" dir="rtl">
//       <h2 className="text-2xl font-bold text-center mb-6">📊 تقييمات العمال</h2>
//       <table className="w-full border-collapse border border-gray-300 text-right">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">الإسم</th>
//             <th className="border p-2">المهارة</th>
//             <th className="border p-2">عدد الطلبات</th>
//             <th className="border p-2">عدد التقييمات</th>
//             <th className="border p-2">معلومات العميل</th>
//           </tr>
//         </thead>
//         <tbody>
//           {workers.length > 0 ? (
//             workers.map(worker => (
//               <tr key={worker._id} className="text-center">
//                 <td className="border p-2">{worker.name}</td>
//                 <td className="border p-2">{worker.skill}</td>
//                 <td className="border p-2">{worker.ordersCount}</td>
//                 <td className="border p-2">{worker.ratingsCount}</td>
//                 <td className="border p-2">
//                   <button 
//                     onClick={() => goToCustomer(worker._id)} 
//                     className="text-blue-600 hover:text-blue-800 transition-all"
//                   >
//                     <FaUser size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center p-4 text-gray-600">لا يوجد عمال مقبولين.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WorkerRatings;





































import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const WorkerRatings = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/worker/workers");
        const acceptedWorkers = response.data.workers.filter(w => w.isAccepted);
        setWorkers(acceptedWorkers);
      } catch (err) {
        setError("❌ حدث خطأ أثناء جلب البيانات");
      } finally {
        setLoading(false);
      }
    };
    fetchWorkers();
  }, []);

  const goToCustomer = (id) => {
    navigate(`/customer/${id}`);
  };

  if (loading) return <div>جاري تحميل البيانات...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 text-right" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-6">📊 تقييمات العمال</h2>
      <table className="w-full border-collapse border border-gray-300 text-right">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">الإسم</th>
            <th className="border p-2">المهارة</th>
            <th className="border p-2">عدد الطلبات</th>
            <th className="border p-2">عدد التقييمات</th>
            <th className="border p-2">معلومات العميل</th>
          </tr>
        </thead>
        <tbody>
          {workers.length > 0 ? (
            workers.map(worker => (
              <tr key={worker._id} className="text-center">
                <td className="border p-2">{worker.name}</td>
                <td className="border p-2">{worker.skill}</td>
                <td className="border p-2">{worker.ordersCount}</td>
                <td className="border p-2">{worker.ratingsCount}</td>
                <td className="border p-2">
                  <button 
                    onClick={() => goToCustomer(worker._id)} 
                    className="text-blue-600 hover:text-blue-800 transition-all"
                  >
                    <FaUser size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-600">لا يوجد عمال مقبولين.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerRatings;
