
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes, FaClock, FaUser } from "react-icons/fa";

export default function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("فشل في جلب الطلبات:", err);
      }
    };

    fetchOrders();
  }, []);

  // تحديث الحالة محلياً (تجريبي)
  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order._id === id ? { ...order, status: newStatus } : order
      )
    );

    // يمكنك هنا أيضًا إرسال تحديث للحالة إلى السيرفر إذا أردت
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.includes(search) || order.service.includes(search)
  );

  return (
    <div dir="rtl" className="min-h-screen w-[100%] flex items-center justify-center p-6">
      <div className="bg-white/70 p-9 rounded-2xl shadow-2xl w-full max-w-7xl border border-primaryDarkest">
        <h2 className="text-3xl font-bold text-center text-[#406F67] mb-6">إدارة الطلبات</h2>
        <input
          type="text"
          placeholder="ابحث عن طلب..."
          className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 text-right mb-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-xl shadow-md text-right">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3">#</th>
                <th className="p-3">اسم العميل</th>
                <th className="p-3">الخدمة</th>
                <th className="p-3">الحالة</th>
                <th className="p-3">التاريخ</th>
                <th className="p-3">إدارة</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.service}</td>
                  <td className={`p-3 font-semibold ${order.status === "مكتمل" ? "text-green-600" : order.status === "مرفوض" ? "text-red-600" : "text-yellow-600"}`}>
                    {order.status}
                  </td>
                  <td className="p-3">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      className="text-blue-500 text-lg p-2 rounded-lg hover:bg-blue-200"
                      onClick={() => navigate(`/customer/${order.customerId}`)}
                      >
                      <FaUser />
                    </button>
                    <button
                      className="text-yellow-500 text-lg p-2 rounded-lg hover:bg-yellow-200"
                      onClick={() => handleStatusChange(order._id, "قيد التنفيذ")}
                    >
                      <FaClock />
                    </button>
                    <button
                      className="text-green-500 text-lg p-2 rounded-lg hover:bg-green-200"
                      onClick={() => handleStatusChange(order._id, "مكتمل")}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="text-red-500 text-lg p-2 rounded-lg hover:bg-red-200"
                      onClick={() => handleStatusChange(order._id, "مرفوض")}
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

























// // src/pages/OrdersAdmin.jsx
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaCheck,
//   FaTimes,
//   FaClock,
//   FaUser,
// } from "react-icons/fa";

// export default function OrdersAdmin() {
//   const [orders, setOrders] = useState([]);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/orders");
//         const data = await response.json();
//         setOrders(data);
//       } catch (error) {
//         console.error("فشل في تحميل الطلبات:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = (id, newStatus) => {
//     const updatedOrders = orders.map((order) =>
//       order._id === id ? { ...order, status: newStatus } : order
//     );
//     setOrders(updatedOrders);

//     // أضف هنا إرسال التحديث للسيرفر إن أردت
//   };

//   const filteredOrders = orders.filter((order) =>
//     order.customer.toLowerCase().includes(search.toLowerCase())
//   );

//   const getStatusColor = (status) => {
//     if (status === "مكتمل") return "text-green-600";
//     if (status === "مرفوض") return "text-red-600";
//     return "text-yellow-600";
//   };

//   return (
//     <div dir="rtl" className=" flex justify-center items-center p-6">
//       <div className="bg-white/80 p-10 rounded-2xl shadow-lg w-full max-w-7xl">
//         <h2 className="text-3xl font-bold text-center text-[#406F67] mb-6">إدارة الطلبات</h2>

//         <input
//           type="text"
//           placeholder="ابحث عن عميل..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full mb-6 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring focus:ring-[#86C4B8]"
//         />

//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border border-gray-300 rounded-xl overflow-hidden">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="p-3">#</th>
//                 <th className="p-3">العميل</th>
//                 <th className="p-3">الخدمة</th>
//                 <th className="p-3">الحالة</th>
//                 <th className="p-3">التاريخ</th>
//                 <th className="p-3">الإجراءات</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredOrders.map((order, index) => (
//                 <tr key={order._id} className="text-right border-b">
//                   <td className="p-3">{index + 1}</td>
//                   <td className="p-3">{order.customer}</td>
//                   <td className="p-3">{order.service}</td>
//                   <td className={`p-3 font-semibold ${getStatusColor(order.status)}`}>
//                     {order.status}
//                   </td>
//                   <td className="p-3">{new Date(order.date).toLocaleDateString()}</td>
//                   <td className="p-3 flex flex-wrap gap-2">
//                     <button
//                       onClick={() => navigate(`/customer/customers/${order._id}`, { state: order })}
//                       className="bg-blue-100 text-blue-700 p-2 rounded-md hover:bg-blue-200"
//                     >
//                       <FaUser />
//                     </button>
//                     <button
//                       onClick={() => handleStatusChange(order._id, "قيد التنفيذ")}
//                       className="bg-yellow-100 text-yellow-700 p-2 rounded-md hover:bg-yellow-200"
//                     >
//                       <FaClock />
//                     </button>
//                     <button
//                       onClick={() => handleStatusChange(order._id, "مكتمل")}
//                       className="bg-green-100 text-green-700 p-2 rounded-md hover:bg-green-200"
//                     >
//                       <FaCheck />
//                     </button>
//                     <button
//                       onClick={() => handleStatusChange(order._id, "مرفوض")}
//                       className="bg-red-100 text-red-700 p-2 rounded-md hover:bg-red-200"
//                     >
//                       <FaTimes />
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {filteredOrders.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="text-center text-gray-500 py-4">
//                     لا توجد نتائج مطابقة
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

