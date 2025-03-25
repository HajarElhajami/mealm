import React, { useState } from "react";
import axios from "axios";

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    city: "",
    region: "",
    phone: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:5000/upload", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("تم حفظ المعلومات بنجاح!");
      console.log(response.data);
    } catch (error) {
      console.error("خطأ في رفع البيانات:", error);
      alert("حدث خطأ أثناء حفظ البيانات.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">معلومات العميل</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="الاسم" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
        <input type="text" name="surname" placeholder="النسب" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
        <input type="text" name="city" placeholder="المدينة" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
        <input type="text" name="region" placeholder="المنطقة" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
        <input type="tel" name="phone" placeholder="رقم الهاتف" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
        <input type="file" name="profileImage" onChange={handleChange} required className="w-full p-2 mb-2 border rounded"/>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">إرسال البيانات</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
