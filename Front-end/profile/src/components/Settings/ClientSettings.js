import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaSave, FaTimes, FaEdit, FaUser, FaBriefcase, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ClientSettings = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // جلب بيانات العميل
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        setUserData(response.data.user);
        reset(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, reset]);

  // حفظ التعديلات
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/user/${userId}`, data);
      setUserData(response.data.user);
      setIsEditing(false);
      alert('تم تحديث الملف الشخصي بنجاح');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('حدث خطأ أثناء التحديث');
    }
  };

  if (loading) return <div className="text-center py-20">جارٍ تحميل البيانات...</div>;
  if (!userData) return <div className="text-center py-20">لم يتم العثور على بيانات المستخدم</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40] p-6 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">إعدادات الملف الشخصي</h1>
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="bg-white text-[#0f4c5c] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <FaEdit /> تعديل الملف
              </button>
            ) : (
              <button 
                onClick={() => setIsEditing(false)}
                className="bg-white text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <FaTimes /> إلغاء
              </button>
            )}
          </div>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* الصورة الشخصية */}
            <div className="md:col-span-2 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full border-4 border-[#0f4c5c] mb-4 overflow-hidden">
                <img 
                  src={userData.profileImage || '/default-profile.png'} 
                  alt="صورة الملف الشخصي" 
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <label className="text-white cursor-pointer">
                      <FaEdit size={24} />
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* المعلومات الأساسية */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaUser className="text-[#0f4c5c]" /> الاسم الكامل
              </label>
              {isEditing ? (
                <input
                  {...register("name", { required: 'هذا الحقل مطلوب' })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg">{userData.name}</p>
              )}
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* المهنة */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaBriefcase className="text-[#0f4c5c]" /> المهنة
              </label>
              {isEditing ? (
                <input
                  {...register("profession", { required: 'هذا الحقل مطلوب' })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg">{userData.profession}</p>
              )}
              {errors.profession && <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>}
            </div>

            {/* الموقع */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#0f4c5c]" /> الموقع
              </label>
              {isEditing ? (
                <input
                  {...register("location")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg">{userData.location}</p>
              )}
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaPhone className="text-[#0f4c5c]" /> رقم الهاتف
              </label>
              {isEditing ? (
                <input
                  {...register("phone", { 
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: 'رقم هاتف غير صالح'
                    }
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg">{userData.phone}</p>
              )}
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* البريد الإلكتروني */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-[#0f4c5c]" /> البريد الإلكتروني
              </label>
              {isEditing ? (
                <input
                  type="email"
                  {...register("email", { 
                    required: 'هذا الحقل مطلوب',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'بريد إلكتروني غير صالح'
                    }
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg">{userData.email}</p>
              )}
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* سنوات الخبرة */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-[#0f4c5c]" /> سنوات الخبرة
              </label>
              {isEditing ? (
                <input
                  type="number"
                  {...register("experienceYears")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg">{userData.experienceYears} سنوات</p>
              )}
            </div>

            {/* الوصف */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FaUser className="text-[#0f4c5c]" /> نبذة عنك
              </label>
              {isEditing ? (
                <textarea
                  {...register("bio")}
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-transparent"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg whitespace-pre-line">{userData.bio}</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FaSave /> حفظ التغييرات
              </button>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ClientSettings;