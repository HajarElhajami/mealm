
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Clients = () => {
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // جلب جميع العمال
//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/worker/workers"); // ✅ تعديل المسار
//         setWorkers(response.data.workers);
//       } catch (err) {
//         setError("حدث خطأ أثناء جلب البيانات، يرجى المحاولة لاحقاً.");
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkers();
//   }, []);

//   // حذف العامل
//   const deleteWorker = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/worker/workers/${id}`); // ✅ تعديل المسار
//       setWorkers(workers.filter(worker => worker._id !== id));
//     } catch (error) {
//       console.error("Error deleting worker:", error);
//       alert("حدث خطأ أثناء حذف العامل");
//     }
//   };

//   if (loading) {
//     return <div>جاري تحميل البيانات...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="p-6 text-right" dir="rtl">
//       <h2 className="text-2xl font-bold text-center mb-6">إدارة العمال</h2>
//       <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//         <h3 className="text-xl font-semibold mb-4">📌 قائمة العمال</h3>
//         <table className="w-full border-collapse border border-gray-300 text-right">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">الإسم</th>
//               <th className="border p-2">البريد الإلكتروني</th>
//               <th className="border p-2">رقم الهاتف</th>
//               <th className="border p-2">المهارة</th>
//               <th className="border p-2">إجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {workers.length > 0 ? (
//               workers.map(worker => (
//                 <tr key={worker._id} className="text-center">
//                   <td className="border p-2">{worker.name}</td>
//                   <td className="border p-2">{worker.email}</td>
//                   <td className="border p-2">{worker.phone}</td>
//                   <td className="border p-2">{worker.skill}</td>
//                   <td className="border p-2">
//                     <button
//                       onClick={() => deleteWorker(worker._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                     >
//                       حذف
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-4 text-gray-600">لا يوجد عمال مسجلين.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Clients;


























import React, { useState, useEffect } from "react";
import axios from "axios";

const Clients = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // لحالة فتح النافذة المكبرة
  const [selectedImage, setSelectedImage] = useState(null); // لحفظ الصورة التي سيتم تكبيرها

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/worker/workers");
        setWorkers(response.data.workers);
      } catch (err) {
        setError("حدث خطأ أثناء جلب البيانات، يرجى المحاولة لاحقاً.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  const deleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/worker/workers/${id}`);
      setWorkers(workers.filter(worker => worker._id !== id));
    } catch (error) {
      console.error("Error deleting worker:", error);
      alert("حدث خطأ أثناء حذف العامل");
    }
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  if (loading) {
    return <div>جاري تحميل البيانات...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 text-right" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-6">إدارة العمال</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">📌 قائمة العمال</h3>
        <table className="w-full border-collapse border border-gray-300 text-right">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">الإسم</th>
              <th className="border p-2">البريد الإلكتروني</th>
              <th className="border p-2">رقم الهاتف</th>
              <th className="border p-2">المهارة</th>
              <th className="border p-2">الصورة</th>
              <th className="border p-2">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {workers.length > 0 ? (
              workers.map(worker => (
                <tr key={worker._id} className="text-center">
                  <td className="border p-2">{worker.name}</td>
                  <td className="border p-2">{worker.email}</td>
                  <td className="border p-2">{worker.phone}</td>
                  <td className="border p-2">{worker.skill}</td>
                  <td className="border p-2">
                  {console.log("iiimmgg", worker.nationalIdImage)}

                  {worker.nationalIdImage ? (
                   
                   <img
                     src={`http://localhost:5000/${worker.nationalIdImage.replace(/\\/g, "/")}`}
                     alt="صورة البطاقة الوطنية"
                     className="w-20 h-16 object-cover cursor-pointer"
                     onClick={() => openImageModal(`http://localhost:5000/${worker.nationalIdImage.replace(/\\/g, "/")}`)}
                   />
                  ) : (
                    <span>لا توجد صورة</span>
                  )}

                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteWorker(worker._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-600">لا يوجد عمال مسجلين.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-3 rounded-lg shadow-lg max-w-xl mx-auto">
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white bg-red-500 p-1 w-[35px] rounded-lg"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="w-40px h-40px object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
