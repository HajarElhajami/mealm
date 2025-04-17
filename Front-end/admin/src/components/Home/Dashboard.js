// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [userCount, setUserCount] = useState(0);
//   const [serviceCount, setServiceCount] = useState(0);
  
//   return (
//     <div className="flex-1 text-center p-10 bg-primary">
//       <h1 className="text-3xl text-primaryDarkest font-bold mb-10 mt-10">مرحباً بك في لوحة التحكم</h1>
//       <p className="text-lg mb-7">يمكنك الآن إدارة المشروع بكل سهولة</p>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
//           <h3 className="text-xl font-semibold mb-2">عدد المستخدمين</h3>
//           <p className="text-2xl">{userCount} مستخدم</p>
//           <button
//             onClick={() => setUserCount(userCount + 1)}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             زيادة المستخدمين
//           </button>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
//           <h3 className="text-xl font-semibold mb-2">عدد الخدمات</h3>
//           <p className="text-2xl">{serviceCount} خدمة</p>
//           <button
//             onClick={() => setServiceCount(serviceCount + 1)}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             زيادة الخدمات
//           </button>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
//           <h3 className="text-xl font-semibold mb-2">الإحصائيات</h3>
//           <p className="text-2xl">أدوات التحليل</p>
//           <button
//             onClick={() => alert('تحليل البيانات...')}
//             className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             عرض الإحصائيات
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;













// // DashboardHome.js
// import React from "react";

// const DashboardHome = () => {
//   return (
//     <div className="p-7 text-right">
//       <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">مرحبًا في لوحة التحكم</h2>
//       <p className="text-gray-600 text-center mb-8">يمكنك هنا إدارة كافة الأنشطة المتعلقة بالمستخدمين، الطلبات، التقييمات، والإعدادات.</p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-100 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات المستخدمين</h3>
//           <p className="text-gray-700 mb-4">عدد الزبائن: 0</p>
//           <p className="text-gray-700 mb-4">عدد العمال: 0</p>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات الطلبات</h3>
//           <p className="text-gray-700 mb-4">عدد الطلبات: 0</p>
//           <p className="text-gray-700 mb-4">الطلبات المكتملة: 0</p>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg shadow">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">إحصائيات التقييمات</h3>
//           <p className="text-gray-700 mb-4"> 0 :أفضل 5 عمال تقييمًا</p>
//           <p className="text-gray-700 mb-4"> : أكثر التخصصات طلبًا</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;






import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    users: 0, // تم التغيير هنا من customers إلى users
    workers: 0,
    orders: 0,
    completedOrders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stats/counts");
        console.log("📊 البيانات:", response.data); // 👈 هنا الطباعة
        setStats(response.data);
      } catch (error) {
        console.error("حدث خطأ أثناء تحميل البيانات:", error);
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
          <p className="text-gray-700 mb-4">عدد المستخدمين: {stats.users}</p> {/* تم التغيير هنا من customers إلى users */}
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
