import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaSave } from 'react-icons/fa';

const ClientEdit = () => {
  const navigate = useNavigate();

  // البيانات الأولية (يمكنك استبدالها بالبيانات الحقيقية من API)
  const [formData, setFormData] = useState({
    name: 'محمد أحمد',
    jobTitle: 'كهربائي محترف',
    location: 'الدار البيضاء، المغرب',
    experience: '10 سنوات خبرة في المجال',
    description: 'كهربائي محترف معتمد مع أكثر من 10 سنوات من الخبرة في التركيبات الكهربائية المنزلية والتجارية...',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إرسال البيانات إلى الباك إند
    console.log('تم الحفظ:', formData);
    navigate('/profile'); // العودة لصفحة العميل
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 md:px-20" dir="rtl">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#0f4c5c]">تعديل معلومات العميل</h1>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#5f0f40] transition"
          >
            <FaArrowRight />
            العودة للملف
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c5c]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">المسمى الوظيفي</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الموقع</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">عدد سنوات الخبرة</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الوصف المهني</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-[#0f4c5c] hover:bg-[#5f0f40] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            <FaSave />
            حفظ التغييرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientEdit;
