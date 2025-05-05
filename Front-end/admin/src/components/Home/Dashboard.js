import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    users: 0,
    workers: 0,
    orders: 0,
    completedOrders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsResponse = await axios.get("http://localhost:5000/api/stats/counts");
    
        const workersResponse = await axios.get("http://localhost:5000/api/worker/workers");
        const acceptedWorkers = workersResponse.data.workers.filter(w => w.isAccepted === true); // فقط المقبولين
    
        setStats({
          users: statsResponse.data.users,
          workers: acceptedWorkers.length,  // تأكد من أن هذا العدد هو العدد الصحيح
          orders: statsResponse.data.orders,
          completedOrders: statsResponse.data.completedOrders,
        });
    
        console.log("📊 الإحصائيات النهائية:", {
          users: statsResponse.data.users,
          workers: acceptedWorkers.length,
          orders: statsResponse.data.orders,
          completedOrders: statsResponse.data.completedOrders,
        });
    
      } catch (error) {
        console.error("❌ حدث خطأ أثناء تحميل البيانات:", error);
      }
    };    
    fetchStats();
  }, []);

  return (
    <div className="p-7 text-right">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">مرحبًا في لوحة التحكم</h2>
      <p className="text-gray-600 text-center mb-8">يمكنك هنا إدارة كافة الأنشطة المتعلقة بالمستخدمين، الطلبات، التقييمات، والإعدادات.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات المستخدمين</h3>
          <p className="text-gray-700 mb-4">عدد المستخدمين: {stats.users}</p>
          <p className="text-gray-700 mb-4">عدد العمال: {stats.workers}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات الطلبات</h3>
          <p className="text-gray-700 mb-4">عدد الطلبات: {stats.orders}</p>
          <p className="text-gray-700 mb-4">الطلبات المكتملة: {stats.completedOrders}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات التقييمات</h3>
          <p className="text-gray-700 mb-4">0 :أفضل 5 عمال تقييمًا</p>
          <p className="text-gray-700 mb-4">: أكثر التخصصات طلبًا</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;




































// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const DashboardHome = () => {
//   const [stats, setStats] = useState({
//     users: 0, // تم التغيير هنا من customers إلى users
//     workers: 0,
//     orders: 0,
//     completedOrders: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/stats/counts");
//         console.log("📊 البيانات:", response.data); // 👈 هنا الطباعة
//         setStats(response.data);
//       } catch (error) {
//         console.error("حدث خطأ أثناء تحميل البيانات:", error);
//       }
//     };
//     fetchStats();
//   }, []);  

//   return (
//     <div className="p-7 text-right">
//       <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">مرحبًا في لوحة التحكم</h2>
//       <p className="text-gray-600 text-center mb-8">يمكنك هنا إدارة كافة الأنشطة المتعلقة بالمستخدمين، الطلبات، التقييمات، والإعدادات.</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-100 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات المستخدمين</h3>
//           <p className="text-gray-700 mb-4">عدد المستخدمين: {stats.users}</p> {/* تم التغيير هنا من customers إلى users */}
//           <p className="text-gray-700 mb-4">عدد العمال: {stats.workers}</p>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات الطلبات</h3>
//           <p className="text-gray-700 mb-4">عدد الطلبات: {stats.orders}</p>
//           <p className="text-gray-700 mb-4">الطلبات المكتملة: {stats.completedOrders}</p>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات التقييمات</h3>
//           <p className="text-gray-700 mb-4">0 :أفضل 5 عمال تقييمًا</p>
//           <p className="text-gray-700 mb-4">: أكثر التخصصات طلبًا</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
