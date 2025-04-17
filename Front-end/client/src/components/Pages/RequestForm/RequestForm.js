import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaPhone, FaCity, FaMapMarkerAlt, FaImage } from "react-icons/fa";

const RequestForm = () => {
  const location = useLocation();
  const serviceName = location.state?.serviceName || "خدمة غير معروفة";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("customer", formData.name);
    form.append("phone", formData.phone);
    form.append("city", formData.city);
    form.append("address", formData.address);
    form.append("service", serviceName);
    form.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("✅ تم إرسال الطلب بنجاح!");
        // إعادة تعيين النموذج
        setFormData({
          name: "",
          phone: "",
          city: "",
          address: "",
          image: null,
        });
      } else {
        alert("❌ فشل في إرسال الطلب");
      }
    } catch (error) {
      alert("❌ حدث خطأ أثناء إرسال الطلب");
      console.error(error);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAF9F6] via-[#94D1C3] to-[#EAF9F6] p-6">
      <div className="bg-white/70 p-9 rounded-2xl shadow-2xl w-full max-w-2xl border border-primaryDarkest">
        <h2 className="text-3xl font-bold text-center text-[#406F67] mb-3">طلب خدمة:</h2>
        <h2 className="text-3xl font-bold text-center text-[#6BA89D] mb-6">" {serviceName} "</h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-right">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">الخدمة المطلوبة:</label>
            <input
              type="text"
              value={serviceName}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 font-semibold cursor-not-allowed text-right"
            />
          </div>

          {[ 
            { field: "name", label: "الاسم الكامل", icon: <FaUser className="text-gray-500 ml-2" /> },
            { field: "phone", label: "رقم الهاتف", icon: <FaPhone className="text-gray-500 ml-2" /> },
            { field: "city", label: "المدينة", icon: <FaCity className="text-gray-500 ml-2" /> },
            { field: "address", label: "عنوان المنزل", icon: <FaMapMarkerAlt className="text-gray-500 ml-2" /> },
          ].map(({ field, label, icon }, index) => (
            <div key={index}>
              <label className="block text-gray-700 font-medium mb-1">{label}:</label>
              <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-white">
                {icon}
                <input
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full outline-none text-right"
                />
              </div>
            </div>
          ))}

          <div>
            <label className="block text-gray-700 font-medium mb-1">تحميل صورة المشكلة:</label>
            <div className="relative flex items-center border border-gray-300 rounded-xl p-3 bg-white cursor-pointer">
              <FaImage className="text-gray-500 ml-2" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="text-sm text-gray-500 mr-2">
                {formData.image ? formData.image.name : "اختر صورة..."}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#86C4B8] to-[#406F67] text-white p-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            إرسال الطلب
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
