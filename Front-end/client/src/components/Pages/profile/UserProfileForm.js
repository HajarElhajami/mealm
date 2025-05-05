// import React, { useState } from "react";
// import axios from "axios";

// const UserProfileForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     city: "",
//     region: "",
//     phone: "",
//     profileImage: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "profileImage") {
//       setFormData({ ...formData, profileImage: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const response = await axios.post("http://localhost:5000/upload", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("تم حفظ المعلومات بنجاح!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("خطأ في رفع البيانات:", error);
//       alert("حدث خطأ أثناء حفظ البيانات.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">معلومات العميل</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input type="text" name="name" placeholder="الاسم" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
//         <input type="text" name="surname" placeholder="النسب" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
//         <input type="text" name="city" placeholder="المدينة" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
//         <input type="text" name="region" placeholder="المنطقة" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
//         <input type="tel" name="phone" placeholder="رقم الهاتف" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
//         <input type="file" name="profileImage" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
//         <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">إرسال البيانات</button>
//       </form>
//     </div>
//   );
// };

// export default UserProfileForm;









































// import React, { useState } from "react";

// const UserProfileForm = ({ email, onSave }) => {
//   const [name, setName] = useState("");
//   const [photo, setPhoto] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({
//       email,
//       name,
//       photo,
//       services: [],
//       reviews: [],
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
//       <h2 className="text-xl font-bold mb-4">معلومات الحساب الشخصي</h2>
//       <input
//         type="text"
//         placeholder="الاسم الكامل"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="w-full p-2 border rounded"
//         required
//       />
//       <input
//         type="text"
//         placeholder="رابط الصورة الشخصية"
//         value={photo}
//         onChange={(e) => setPhoto(e.target.value)}
//         className="w-full p-2 border rounded"
//         required
//       />
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//         حفظ المعلومات
//       </button>
//     </form>
//   );
// };

// export default UserProfileForm;



























import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCheck, FaSpinner } from 'react-icons/fa';
import profilePage1 from './profilePage1'

const WorkerAuth = () => {
  const [workerId, setWorkerId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // بيانات العمال المحفوظة (يمكن استبدالها بربط مع قاعدة البيانات)
  const workersData = [
    { id: 'EMP1001', name: 'محمد أحمد', profession: 'كهربائي' },
    { id: 'EMP1002', name: 'علي حسن', profession: 'سباك' },
    { id: 'EMP1003', name: 'سميرة خالد', profession: 'نجارة' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // محاكاة طلب API للتحقق
    setTimeout(() => {
      const worker = workersData.find(w => w.id === workerId);
      
      if (worker) {
        localStorage.setItem('workerData', JSON.stringify(worker));
        navigate('/l1/profilePage1');
      } else {
        setError('رقم العامل غير مسجل في النظام');
      }
      
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">تسجيل دخول العامل</h1>
          <p className="text-gray-600 mt-2">الرجاء إدخال رقم العامل الخاص بك للتحقق</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="workerId" className="block text-gray-700 mb-2 text-right">
              رقم العامل
            </label>
            <input
              type="text"
              id="workerId"
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل رقم العامل الخاص بك"
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-right">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={profilePage1}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin ml-2" />
                جاري التحقق...
              </>
            ) : (
              <>
                <FaUserCheck className="ml-2" />
                تحقق وادخل
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>إذا كنت تواجه مشكلة في الدخول، يرجى التواصل مع المسؤول</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerAuth;