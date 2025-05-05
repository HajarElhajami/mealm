// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function Customer() {
//   const { id } = useParams();
//   const [customer, setCustomer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCustomer = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/worker/workers/${id}`);
//         setCustomer(response.data);
//       } catch (err) {
//         setError("❌ حدث خطأ أثناء جلب بيانات العميل");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomer();
//   }, [id]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (!customer) return <div>العميل غير موجود</div>;

//   return (
//     <div dir="rtl" className="min-h-screen flex items-center justify-center p-6">
//       <div className="bg-white/70 p-9 rounded-2xl shadow-2xl w-full max-w-lg border border-primaryDarkest">
//         <h2 className="text-3xl font-bold text-center text-[#406F67] mb-6">إدارة العميل</h2>

//         <p className="text-lg font-semibold mb-4 flex items-center gap-3"><FaUser className="text-blue-600" /> {customer.name}</p>
//         <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaPhone className="text-green-600" /> {customer.phone}</p>
//         <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaCity className="text-purple-600" /> {customer.city}</p>
//         <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> {customer.address}</p>
//         <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaTools className="text-yellow-600" /> {customer.skill}</p>
//         <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaCalendar className="text-gray-600" /> {customer.date}</p>
//         <p className={`text-lg font-semibold mb-4 flex items-center gap-2 ${customer.status === "مكتمل" ? "text-green-600" : customer.status === "مرفوض" ? "text-red-600" : "text-yellow-600"}`}>
//           <FaHourglassHalf /> {customer.status}
//         </p><br/>

//         <button
//             className="w-full bg-gradient-to-r from-[#86C4B8] to-[#406F67] text-white p-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
//             onClick={() => navigate(-1)}
//         >
//           العودة إلى الطلبات
//         </button>
//       </div>
//     </div>
//   );
// }







import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaCity, FaTools, FaEnvelope, FaArrowLeft } from "react-icons/fa";

function CustomerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomer = async (customerId) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/worker/workers/${customerId}`);
        setCustomer(response.data);
        setLoading(false);
      } catch (error) {
        setError("حدث خطأ في الاتصال بالخادم. حاول لاحقاً.");
        setLoading(false);
      }
    };
    fetchCustomer(id);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <div className="text-center text-gray-500 mt-10">جاري التحميل...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!customer) return <div className="text-center text-gray-500 mt-10">لا يوجد بيانات للعميل.</div>;

  return (
    <div dir="rtl" className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <button
        onClick={handleBack}
        className="mb-6 px-4 py-2 bg-gradient-to-r from-primaryDarkest to-secondary text-white rounded-full hover:from-secondary hover:to-primaryDarkest transition flex items-center"
      >
        <FaArrowLeft className="mr-2" /> العودة
      </button>

      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-2">معلومات العميل</h2>

      <div className="space-y-4">
        <InfoRow icon={<FaUser />} label="الاسم :" value={customer.worker.name} />
        <InfoRow icon={<FaPhone />} label="الهاتف :" value={customer.worker.phone} />
        <InfoRow icon={<FaEnvelope />} label="البريد الإلكتروني :" value={customer.worker.email} />
        <InfoRow icon={<FaCity />} label="المدينة :" value={customer.worker.city} />
        <InfoRow icon={<FaTools />} label="المهارة :" value={customer.worker.skill} />
      </div>

      {customer.worker.nationalIdImage && (
        <div className="mt-6">
          <p className="font-semibold text-gray-700 mb-3">صورة بطاقة الهوية:</p>
          <img
            src={`http://localhost:5000/${customer.worker.nationalIdImage}`}
            alt="صورة بطاقة الهوية"
            className="w-full max-w-xs rounded-xl border shadow-md"
          /><br/>
        </div>
      )}
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
      <div className="text-primaryDarkest text-xl mr-3">{icon}</div>
      <div className="flex-1 ">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-medium mt-2 text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default CustomerDetails;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaUser, FaPhone, FaCity, FaTools, FaEnvelope, FaArrowLeft } from "react-icons/fa";

// function CustomerDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [customer, setCustomer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCustomer = async (customerId) => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/worker/workers/${customerId}`);
//         setCustomer(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("حدث خطأ في الاتصال بالخادم. حاول لاحقاً.");
//         setLoading(false);
//       }
//     };
//     fetchCustomer(id);
//   }, [id]);  

//   const handleBack = () => {
//     navigate(-1);
//   };

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (!customer) return <div>لا يوجد بيانات للعميل.</div>;

//   return (
//     <div className="p-4 bg-white rounded shadow-md">
//       <button
//         onClick={handleBack}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
//       >
//         <FaArrowLeft className="mr-2" /> العودة
//       </button>

//       <h2 className="text-xl font-bold mb-4">معلومات العميل</h2>
//       <p><FaUser className="inline-block mx-2" /> الاسم: {customer.worker.name}</p>
//       <p><FaPhone className="inline-block mx-2" /> الهاتف: {customer.worker.phone}</p>
//       <p><FaEnvelope className="inline-block mx-2" /> البريد الإلكتروني: {customer.worker.email}</p>
//       <p><FaCity className="inline-block mx-2" /> المدينة: {customer.worker.city}</p>
//       <p><FaTools className="inline-block mx-2" /> المهارة: {customer.worker.skill}</p>
//       {customer.worker.nationalIdImage && (
//         <div className="mt-4">
//           <p className="font-semibold mb-2">صورة بطاقة الهوية:</p>
//           <img
//             src={`http://localhost:5000/${customer.worker.nationalIdImage}`}
//             alt="صورة بطاقة الهوية"
//             className="w-64 rounded border"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CustomerDetails;
