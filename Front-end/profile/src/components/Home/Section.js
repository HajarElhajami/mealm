
import { FaEdit, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaCheckCircle } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import defaultCover from '../Image/31.png';
import defaultProfile from '../Image/1.png';
// import { Section } from 'lucide-react';


const Section = ({ workerId: propWorkerId }) => {
  const paramsWorkerId = useParams().workerId;
  const workerId = propWorkerId || paramsWorkerId;

// const Section = () => {
  const [workerData, setWorkerData] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/worker/workers/${workerId}`
        );

        setWorkerData({
          ...data.worker,
          profileImage: data.worker.profileImage || defaultProfile,
          coverImage: data.worker.coverImage || defaultCover,
          skill: data.worker.skill || "المهنة",
          city: data.worker.city || "المدينة",
          experienceYears: data.worker.experience || "عدد سنوات الخبرة سيتم تحديده من قبل العامل",
          rating: data.worker.rating || 1.8,
          reviewCount: data.worker.reviews?.length || 1,
          availability: data.worker.availability || "المعلومات سيتم إضافتها لاحقًا من قبل العامل",
          responseTime: data.worker.responseTime || "سيتم تحديثها من خلال نشاط العامل",
          skills: data.worker.skills || [
            'سيتم إضافة المهارات لاحقًا من طرف العامل',
            'مثال على مهارة مهنية',
            'مهارة أخرى توضح التخصص',
            'كفاءة يختارها العامل',
            'خبرة مميزة',
            'مهارة إضافية',
          ],
          bio: data.worker.bio || "سيتم إضافة وصف احترافي من قبل العامل يوضح خبراته ومجال تخصصه."
        });

         // التحقق من رسالة الترحيب
      const shouldShowWelcome = localStorage.getItem("showWelcomeMessage") === "true";
      
      if (shouldShowWelcome) {
        setShowWelcome(true);
        localStorage.removeItem("showWelcomeMessage");
        
        // إخفاء الرسالة بعد 5 ثواني
        const timer = setTimeout(() => {
          setShowWelcome(false);
        }, 5000);
        
        return () => clearTimeout(timer);
      }
      } catch (err) {
        setError(err.response?.data?.message || "حدث خطأ أثناء جلب البيانات");
      } finally {
        setLoading(false);
      }
    };

    
    fetchWorkerData();
  }, [workerId]);

  const isAdmin = true; // فقط للتجربة

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0f4c5c] mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري تحميل البيانات...</p>
        </div>
      </div>
    );
  }

  if (error || !workerData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p>{error || 'لا توجد بيانات متاحة'}</p>
          <button 
            onClick={() => navigate(-1)}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
          >
            العودة للخلف
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen" dir="rtl">
      {/* رسالة الترحيب */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
         >
        <div className="bg-gradient-to-r from-[#406F67] to-[#80C6A2] text-white p-4 rounded-lg shadow-xl text-center">
        <div className="flex items-center justify-center gap-2">
          <FaCheckCircle className="text-white text-xl" />
          <h2 className="text-xl font-bold">مرحباً بك {workerData?.name}!</h2>
        </div>
          <p>تم تسجيل دخولك بنجاح إلى حسابك</p>
        </div>
          </motion.div>
      )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="relative rounded-t-2xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-72 w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent z-10"></div>
            <img 
              src={workerData.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover object-center"
            />

            {/* صورة الملف الشخصي */}
            <motion.div
              className="absolute -bottom-16 right-6 z-30 rounded-full border-4 border-white shadow-xl overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={workerData.profileImage}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* محتوى الملف الشخصي */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-2xl px-8 pt-20 pb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-12">
                <div className="relative">
                {/* // استبدل هذا الجزء في ClientProfile.js */}
{isAdmin && (
  <Link 
  to={`/${workerId}/edit`}
  className="absolute right-[1200%] -top-[70%] bg-[#0f4c5c] text-white p-2 rounded-full hover:bg-[#5f0f40] transition-all"
  >
    <FaEdit size={18} />
  </Link>
)}
                  <h1 className="text-3xl font-bold text-[#0f4c5c]">{workerData.name}</h1>
                  <span className="flex items-center gap-1 bg-[#facc15] mt-3 text-emerald-800 text-[15px] font-medium px-5 py-2 rounded-full">
                    <FaCheckCircle className="text-emerald-500" />
                    موثوق
                  </span>
                </div>
              </div>

              <p className="text-xl text-emerald-600 mt-1 mb-4">{workerData.skill}</p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="ml-2 text-emerald-500" />
                  <span>{workerData.city}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="ml-2 text-emerald-500" />
                  <span>{workerData.experienceYears}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="ml-1" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium mx-2">{workerData.rating}</span>
                  <span className="text-gray-500">({workerData.reviewCount} تقييم)</span>
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {workerData.bio}
              </p>
            </div>

            <motion.div 
              className="bg-gradient-to-br from-[#d0f4de] to-[#e6f5ce] p-6 rounded-xl shadow-md border border-[#95d5b2] w-full md:w-80"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">مواعيد العمل والاستجابة</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">متاح للعمل:</h4>
                  <p className="text-gray-600">{workerData.availability}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">متوسط الاستجابة:</h4>
                  <p className="text-gray-600">{workerData.responseTime}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff9505] to-[#5f0f40] mb-8 pb-3 border-b-2 border-gray-200">
              المهارات والخبرات
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workerData.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5f0f40] to-[#0f4c5c] rounded-xl shadow-2xl transform group-hover:rotate-1 transition-all duration-300"></div>
                  
                  <div className="relative bg-white rounded-xl p-6 h-full border-2 border-gray-200 transform group-hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <div className="bg-gradient-to-r from-[#e36414] to-[#fb8b24] p-3 rounded-full shadow-md">
                          <FaCheckCircle className="text-white text-xl" />
                        </div>
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40]">
                        {skill}
                      </h3>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e36414] to-[#fb8b24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section;