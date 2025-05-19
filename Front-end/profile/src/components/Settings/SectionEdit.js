// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { FaSave, FaTimes, FaCamera, FaTrash, FaEdit, FaSearch, FaDownload, FaHeart, FaRegHeart, FaShare, FaPlus, FaMinus } from 'react-icons/fa';
// import { FiUpload, FiImage } from 'react-icons/fi';

// const SectionEdit = () => {
//   const { workerId } = useParams();
//   const navigate = useNavigate();
//   const [workerData, setWorkerData] = useState({
//     name: '',
//     skill: '',
//     city: '',
//     experience: '',
//     bio: '',
//     profileImage: '',
//     coverImage: '',
//     skills: [],
//     availability: '',
//     responseTime: '',
//     rating: 0,
//     reviews: [],
//     services: []
//   });
  
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newSkill, setNewSkill] = useState('');
//   const [newService, setNewService] = useState({
//     title: '',
//     price: '',
//     description: ''
//   });
//   const [activeTab, setActiveTab] = useState('basic');

//   // States for gallery
//   const [photos, setPhotos] = useState([]);
//   const [filteredPhotos, setFilteredPhotos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [uploadModalOpen, setUploadModalOpen] = useState(false);
//   const [newPhoto, setNewPhoto] = useState({
//     title: '',
//     description: '',
//     tags: [],
//     file: null,
//     preview: ''
//   });
//   const [newTag, setNewTag] = useState('');
//   const [selectedPhotos, setSelectedPhotos] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [currentEditPhoto, setCurrentEditPhoto] = useState(null);

//   useEffect(() => {
//     const fetchWorkerData = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:5000/api/worker/workers/${workerId}`
//         );
//         setWorkerData({
//           name: data.worker.name || '',
//           skill: data.worker.skill || '',
//           city: data.worker.city || '',
//           experience: data.worker.experience || '',
//           bio: data.worker.bio || '',
//           profileImage: data.worker.profileImage || '',
//           coverImage: data.worker.coverImage || '',
//           skills: data.worker.skills || [],
//           availability: data.worker.availability || '',
//           responseTime: data.worker.responseTime || '',
//           rating: data.worker.rating || 0,
//           reviews: data.worker.reviews || [],
//           services: data.worker.services || []
//         });

//         // Fetch gallery photos
//         const galleryResponse = await axios.get(`/api/workers/${workerId}/gallery`);
//         setPhotos(galleryResponse.data);
//         setFilteredPhotos(galleryResponse.data);
//       } catch (err) {
//         setError(err.response?.data?.message || "حدث خطأ أثناء جلب البيانات");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkerData();
//   }, [workerId]);

//   // Gallery functions
//   const togglePhotoSelection = (photoId) => {
//     setSelectedPhotos(prev =>
//       prev.includes(photoId)
//         ? prev.filter(id => id !== photoId)
//         : [...prev, photoId]
//     );
//   };

//   const handlePhotoUpload = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('image', newPhoto.file);
//       formData.append('title', newPhoto.title);
//       formData.append('description', newPhoto.description);
//       formData.append('tags', JSON.stringify(newPhoto.tags));

//       const { data } = await axios.post(`/api/workers/${workerId}/gallery`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setPhotos(prev => [...prev, data]);
//       setUploadModalOpen(false);
//       setNewPhoto({
//         title: '',
//         description: '',
//         tags: [],
//         file: null,
//         preview: ''
//       });
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل رفع الصورة');
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const preview = URL.createObjectURL(file);
//       setNewPhoto(prev => ({
//         ...prev,
//         file,
//         preview
//       }));
//     }
//   };

//   const handleAddTag = () => {
//     if (newTag.trim() && !newPhoto.tags.includes(newTag.trim())) {
//       setNewPhoto(prev => ({
//         ...prev,
//         tags: [...prev.tags, newTag.trim()]
//       }));
//       setNewTag('');
//     }
//   };

//   const handleRemoveTag = (index) => {
//     setNewPhoto(prev => ({
//       ...prev,
//       tags: prev.tags.filter((_, i) => i !== index)
//     }));
//   };

//   const openLightbox = (photo, index) => {
//     setSelectedPhoto(photo);
//     setCurrentImageIndex(index);
//     setIsLightboxOpen(true);
//   };

//   const moveNext = () => {
//     setCurrentImageIndex((currentImageIndex + 1) % filteredPhotos.length);
//   };

//   const movePrev = () => {
//     setCurrentImageIndex((currentImageIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
//   };

//   const deletePhoto = async (photoId) => {
//     try {
//       await axios.delete(`/api/workers/${workerId}/gallery/${photoId}`);
//       setPhotos(prev => prev.filter(photo => photo._id !== photoId));
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل حذف الصورة');
//     }
//   };

//   const deleteSelectedPhotos = async () => {
//     try {
//       await axios.post(`/api/workers/${workerId}/gallery/delete-multiple`, { photoIds: selectedPhotos });
//       setPhotos(prev => prev.filter(photo => !selectedPhotos.includes(photo._id)));
//       setSelectedPhotos([]);
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل حذف الصور المحددة');
//     }
//   };

//   const handleEditPhoto = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `/api/workers/${workerId}/gallery/${currentEditPhoto._id}`,
//         {
//           title: currentEditPhoto.title,
//           description: currentEditPhoto.description,
//           tags: currentEditPhoto.tags
//         }
//       );

//       setPhotos(prev => prev.map(photo => 
//         photo._id === currentEditPhoto._id ? data : photo
//       ));
//       setEditModalOpen(false);
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تحديث الصورة');
//     }
//   };

//   // Worker profile functions
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWorkerData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleServiceChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedServices = [...workerData.services];
//     updatedServices[index] = {
//       ...updatedServices[index],
//       [name]: value
//     };
//     setWorkerData(prev => ({
//       ...prev,
//       services: updatedServices
//     }));
//   };

//   const handleAddService = () => {
//     if (newService.title && newService.price) {
//       setWorkerData(prev => ({
//         ...prev,
//         services: [...prev.services, newService]
//       }));
//       setNewService({
//         title: '',
//         price: '',
//         description: ''
//       });
//     }
//   };

//   const handleRemoveService = (index) => {
//     setWorkerData(prev => ({
//       ...prev,
//       services: prev.services.filter((_, i) => i !== index)
//     }));
//   };

//   const handleSkillAdd = () => {
//     if (newSkill.trim() && !workerData.skills.includes(newSkill.trim())) {
//       setWorkerData(prev => ({
//         ...prev,
//         skills: [...prev.skills, newSkill.trim()]
//       }));
//       setNewSkill('');
//     }
//   };

//   const handleSkillRemove = (index) => {
//     setWorkerData(prev => ({
//       ...prev,
//       skills: prev.skills.filter((_, i) => i !== index)
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/worker/workers/${workerId}`,
//         workerData
//       );
//       navigate(`/${workerId}`);
//     } catch (err) {
//       setError(err.response?.data?.message || "حدث خطأ أثناء حفظ التعديلات");
//     }
//   };

//   const CustomLightbox = () => {
//     if (!isLightboxOpen || !selectedPhoto) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//         <div className="relative max-w-4xl w-full max-h-screen">
//           <button
//             onClick={() => setIsLightboxOpen(false)}
//             className="absolute top-4 left-4 text-white text-3xl z-10"
//           >
//             &times;
//           </button>
          
//           <img
//             src={selectedPhoto.imageUrl}
//             alt={selectedPhoto.title}
//             className="max-w-full max-h-[90vh] mx-auto object-contain"
//           />
          
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
//             <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
//             <p className="text-gray-300">{selectedPhoto.description}</p>
//           </div>
          
//           <div className="absolute inset-y-0 left-0 flex items-center justify-start w-16">
//             <button
//               onClick={movePrev}
//               className="text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
//             >
//               &#10094;
//             </button>
//           </div>
          
//           <div className="absolute inset-y-0 right-0 flex items-center justify-end w-16">
//             <button
//               onClick={moveNext}
//               className="text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
//             >
//               &#10095;
//             </button>
//           </div>
          
//           <div className="absolute top-4 right-4 flex gap-2">
//             <button
//               onClick={() => {
//                 const link = document.createElement('a');
//                 link.href = selectedPhoto.imageUrl;
//                 link.download = selectedPhoto.title || 'download';
//                 link.click();
//               }}
//               className="text-white p-2 bg-black bg-opacity-50 rounded-full"
//               title="تحميل"
//             >
//               <FaDownload />
//             </button>
//             <button
//               onClick={() => {/* وظيفة المشاركة */}}
//               className="text-white p-2 bg-black bg-opacity-50 rounded-full"
//               title="مشاركة"
//             >
//               <FaShare />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0f4c5c] mx-auto"></div>
//           <p className="mt-4 text-gray-600">جاري تحميل البيانات...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
//           <p>{error}</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
//           >
//             العودة للخلف
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4" dir="rtl">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
//       >
//         {/* رأس الصفحة */}
//         <div className="bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40] p-6 text-white">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold">تعديل الملف الشخصي</h1>
//               <p className="mt-2">يمكنك تعديل معلوماتك الشخصية والمهنية هنا</p>
//             </div>
//             <button 
//               onClick={() => navigate(`/${workerId}`)}
//               className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
//             >
//               العودة للصفحة الرئيسية
//             </button>
//           </div>
          
//           {/* تبويبات التنقل */}
//           <div className="flex mt-6 border-b border-white/20">
//             {['basic', 'skills', 'services', 'media'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-white border-b-2 border-white' : 'text-white/70 hover:text-white'}`}
//               >
//                 {tab === 'basic' && 'المعلومات الأساسية'}
//                 {tab === 'skills' && 'المهارات والخبرات'}
//                 {tab === 'services' && 'الخدمات والعروض'}
//                 {tab === 'media' && 'الصور والمعرض'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* نموذج التعديل */}
//         <form onSubmit={handleSubmit} className="p-6">
//           {/* قسم المعلومات الأساسية */}
//           {activeTab === 'basic' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 mb-2">الاسم الكامل</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={workerData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="skill" className="block text-gray-700 mb-2">المهنة</label>
//                   <input
//                     type="text"
//                     id="skill"
//                     name="skill"
//                     value={workerData.skill}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="city" className="block text-gray-700 mb-2">المدينة</label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     value={workerData.city}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="experience" className="block text-gray-700 mb-2">سنوات الخبرة</label>
//                   <input
//                     type="text"
//                     id="experience"
//                     name="experience"
//                     value={workerData.experience}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <label htmlFor="bio" className="block text-gray-700 mb-2">الوصف الشخصي</label>
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   value={workerData.bio}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                   placeholder="اكتب وصفاً مختصراً عن خبراتك ومجال تخصصك..."
//                 ></textarea>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label htmlFor="availability" className="block text-gray-700 mb-2">مواعيد العمل</label>
//                   <input
//                     type="text"
//                     id="availability"
//                     name="availability"
//                     value={workerData.availability}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     placeholder="مثال: من السبت إلى الخميس، 8 صباحاً - 5 مساءً"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="responseTime" className="block text-gray-700 mb-2">وقت الاستجابة</label>
//                   <input
//                     type="text"
//                     id="responseTime"
//                     name="responseTime"
//                     value={workerData.responseTime}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     placeholder="مثال: خلال 24 ساعة"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* قسم المهارات والخبرات */}
//           {activeTab === 'skills' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">المهارات الرئيسية</h2>
//                 <div className="flex gap-2 mb-4">
//                   <input
//                     type="text"
//                     value={newSkill}
//                     onChange={(e) => setNewSkill(e.target.value)}
//                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     placeholder="أضف مهارة جديدة"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleSkillAdd}
//                     className="bg-[#0f4c5c] text-white px-4 py-2 rounded-lg hover:bg-[#5f0f40] transition flex items-center gap-2"
//                   >
//                     <FaPlus /> إضافة
//                   </button>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2">
//                   {workerData.skills.map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="bg-[#0f4c5c]/10 text-[#0f4c5c] px-3 py-1 rounded-full flex items-center gap-2"
//                     >
//                       {skill}
//                       <button
//                         type="button"
//                         onClick={() => handleSkillRemove(index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaMinus className="text-xs" />
//                       </button>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">الشهادات والخبرات</h2>
//                 <textarea
//                   name="experienceDetails"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                   rows="5"
//                   placeholder="أضف تفاصيل عن شهاداتك ودوراتك التدريبية وخبراتك العملية..."
//                 ></textarea>
//               </div>
//             </motion.div>
//           )}

//           {/* قسم الخدمات والعروض */}
//           {activeTab === 'services' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">الخدمات المقدمة</h2>
              
//               <div className="space-y-6 mb-8">
//                 {workerData.services.map((service, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-gray-50 p-4 rounded-lg border border-gray-200"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                       <div>
//                         <label className="block text-gray-700 mb-1">عنوان الخدمة</label>
//                         <input
//                           type="text"
//                           name="title"
//                           value={service.title}
//                           onChange={(e) => handleServiceChange(e, index)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1">السعر</label>
//                         <input
//                           type="text"
//                           name="price"
//                           value={service.price}
//                           onChange={(e) => handleServiceChange(e, index)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         />
//                       </div>
//                       <div className="flex items-end">
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveService(index)}
//                           className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200 transition"
//                         >
//                           حذف الخدمة
//                         </button>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-1">وصف الخدمة</label>
//                       <textarea
//                         name="description"
//                         value={service.description}
//                         onChange={(e) => handleServiceChange(e, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         rows="3"
//                       ></textarea>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
//                 <h3 className="text-lg font-medium text-blue-800 mb-3">إضافة خدمة جديدة</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1">عنوان الخدمة</label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={newService.title}
//                       onChange={(e) => setNewService({...newService, title: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1">السعر</label>
//                     <input
//                       type="text"
//                       name="price"
//                       value={newService.price}
//                       onChange={(e) => setNewService({...newService, price: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                   <div className="flex items-end">
//                     <button
//                       type="button"
//                       onClick={handleAddService}
//                       className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-200 transition"
//                     >
//                       إضافة خدمة
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-1">وصف الخدمة</label>
//                   <textarea
//                     name="description"
//                     value={newService.description}
//                     onChange={(e) => setNewService({...newService, description: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     rows="2"
//                   ></textarea>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* قسم الصور والمعرض */}
//           {activeTab === 'media' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">معرض الصور</h1>
//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => setUploadModalOpen(true)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
//                   >
//                     <FaPlus /> رفع صورة
//                   </button>
//                   {selectedPhotos.length > 0 && (
//                     <button
//                       onClick={deleteSelectedPhotos}
//                       className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2"
//                     >
//                       <FaTrash /> حذف المحدد ({selectedPhotos.length})
//                     </button>
//                   )}
//                 </div>
//               </div>

//               {error && (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//                   {error}
//                 </div>
//               )}

//               {/* شريط البحث */}
//               <div className="relative mb-6">
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                   <FaSearch className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="ابحث في الصور..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* عرض الصور */}
//               {filteredPhotos.length === 0 ? (
//                 <div className="text-center py-12">
//                   <FiImage className="mx-auto text-gray-400 text-5xl mb-4" />
//                   <h3 className="text-lg font-medium text-gray-700">لا توجد صور في المعرض</h3>
//                   <p className="text-gray-500 mt-2">يمكنك رفع صور جديدة باستخدام زر "رفع صورة"</p>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {filteredPhotos.map((photo, index) => (
//                     <div key={photo._id} className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                       <input
//                         type="checkbox"
//                         checked={selectedPhotos.includes(photo._id)}
//                         onChange={() => togglePhotoSelection(photo._id)}
//                         className="absolute top-2 left-2 z-10 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       />
                      
//                       <img
//                         src={photo.imageUrl}
//                         alt={photo.title}
//                         className="w-full h-48 object-cover cursor-pointer"
//                         onClick={() => openLightbox(photo, index)}
//                       />
                      
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
//                         <h3 className="text-white font-medium truncate">{photo.title}</h3>
//                         <p className="text-white/80 text-sm line-clamp-2">{photo.description}</p>
                        
//                         <div className="flex justify-between mt-2">
//                           <div className="flex gap-1">
//                             {photo.tags.slice(0, 2).map((tag, i) => (
//                               <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
//                                 {tag}
//                               </span>
//                             ))}
//                             {photo.tags.length > 2 && (
//                               <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
//                                 +{photo.tags.length - 2}
//                               </span>
//                             )}
//                           </div>
                          
//                           <div className="flex gap-2">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 setCurrentEditPhoto(photo);
//                                 setEditModalOpen(true);
//                               }}
//                               className="text-white hover:text-blue-300"
//                               title="تعديل"
//                             >
//                               <FaEdit />
//                             </button>
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 deletePhoto(photo._id);
//                               }}
//                               className="text-white hover:text-red-300"
//                               title="حذف"
//                             >
//                               <FaTrash />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {/* نافذة رفع الصورة */}
//           {uploadModalOpen && (
//             <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white rounded-lg shadow-xl w-full max-w-md"
//               >
//                 <div className="flex justify-between items-center border-b p-4">
//                   <h3 className="text-lg font-medium">رفع صورة جديدة</h3>
//                   <button
//                     onClick={() => setUploadModalOpen(false)}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <FaTimes />
//                   </button>
//                 </div>
                
//                 <form onSubmit={handlePhotoUpload} className="p-4 space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
//                     <input
//                       type="text"
//                       value={newPhoto.title}
//                       onChange={(e) => setNewPhoto({...newPhoto, title: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
//                     <textarea
//                       value={newPhoto.description}
//                       onChange={(e) => setNewPhoto({...newPhoto, description: e.target.value})}
//                       rows="3"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">الأوسمة</label>
//                     <div className="flex gap-2 mb-2">
//                       <input
//                         type="text"
//                         value={newTag}
//                         onChange={(e) => setNewTag(e.target.value)}
//                         className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="أضف وسم جديد"
//                       />
//                       <button
//                         type="button"
//                         onClick={handleAddTag}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                       >
//                         إضافة
//                       </button>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {newPhoto.tags.map((tag, index) => (
//                         <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
//                           <span>{tag}</span>
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveTag(index)}
//                             className="mr-2 text-red-500 hover:text-red-700"
//                           >
//                             <FaTimes size={12} />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">اختر صورة</label>
//                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
//                       {newPhoto.preview ? (
//                         <img src={newPhoto.preview} alt="Preview" className="h-full w-full object-contain" />
//                       ) : (
//                         <div className="flex flex-col items-center justify-center text-gray-500">
//                           <FiUpload className="text-2xl mb-2" />
//                           <p className="text-sm">اضغط لاختيار صورة</p>
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         className="hidden"
//                         required
//                       />
//                     </label>
//                   </div>
                  
//                   <div className="flex justify-end gap-2 pt-4">
//                     <button
//                       type="button"
//                       onClick={() => setUploadModalOpen(false)}
//                       className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
//                     >
//                       إلغاء
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
//                     >
//                       <FaSave /> حفظ
//                     </button>
//                   </div>
//                 </form>
//               </motion.div>
//             </div>
//           )}

//           {/* نافذة تعديل الصورة */}
//           {editModalOpen && currentEditPhoto && (
//             <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white rounded-lg shadow-xl w-full max-w-md"
//               >
//                 <div className="flex justify-between items-center border-b p-4">
//                   <h3 className="text-lg font-medium">تعديل الصورة</h3>
//                   <button
//                     onClick={() => setEditModalOpen(false)}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <FaTimes />
//                   </button>
//                 </div>
                
        //         <form onSubmit={handleEditPhoto} className="p-4 space-y-4">
        //           <div className="flex justify-center">
        //             <img
        //               src={currentEditPhoto.imageUrl}
        //               alt={currentEditPhoto.title}
        //               className="h-48 object-contain rounded-md"
        //             />
        //           </div>
                  
        //           <div>
        //             <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
        //             <input
        //               type="text"
        //               value={currentEditPhoto.title}
        //               onChange={(e) => setCurrentEditPhoto({
        //                 ...currentEditPhoto,
        //                 title: e.target.value
        //               })}
        //               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //               required
        //             />
        //           </div>
                  
        //           <div>
        //             <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
        //             <textarea
        //               value={currentEditPhoto.description}
        //               onChange={(e) => setCurrentEditPhoto({
        //                 ...currentEditPhoto,
        //                 description: e.target.value
        //               })}
        //               rows="3"
        //               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //             />
        //           </div>
                  
        //           <div>
        //             <label className="block text-sm font-medium text-gray-700 mb-1">الأوسمة</label>
        //             <div className="flex gap-2 mb-2">
        //               <input
        //                 type="text"
        //                 value={newTag}
        //                 onChange={(e) => setNewTag(e.target.value)}
        //                 className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                 placeholder="أضف وسم جديد"
        //               />
        //               <button
        //                 type="button"
        //                 onClick={() => {
        //                   if (newTag.trim() && !currentEditPhoto.tags.includes(newTag.trim())) {
        //                     setCurrentEditPhoto({
        //                       ...currentEditPhoto,
        //                       tags: [...currentEditPhoto.tags, newTag.trim()]
        //                     });
        //                     setNewTag('');
        //                   }
        //                 }}
        //                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        //               >
        //                 إضافة
        //               </button>
        //             </div>
        //             <div className="flex flex-wrap gap-2">
        //               {currentEditPhoto.tags.map((tag, index) => (
        //                 <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
        //                   <span>{tag}</span>
        //                   <button
        //                     type="button"
        //                     onClick={() => {
        //                       setCurrentEditPhoto({
        //                         ...currentEditPhoto,
        //                         tags: currentEditPhoto.tags.filter((_, i) => i !== index)
        //                       });
        //                     }}
        //                     className="mr-2 text-red-500 hover:text-red-700"
        //                   >
        //                     <FaTimes size={12} />
        //                   </button>
        //                 </div>
        //               ))}
        //             </div>
        //           </div>
                  
        //           <div className="flex justify-end gap-2 pt-4">
        //             <button
        //               type="button"
        //               onClick={() => setEditModalOpen(false)}
        //               className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        //             >
        //               إلغاء
        //             </button>
        //             <button
        //               type="submit"
        //               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
        //             >
        //               <FaSave /> حفظ التغييرات
        //             </button>
        //           </div>
        //         </form>
        //       </motion.div>
        //     </div>
        //   )}

        //   {/* معرض الصور المدمج */}
        //   <CustomLightbox />

        //   {/* زر الحفظ العام */}
        //   <div className="mt-8 flex justify-end">
        //     <button
        //       type="submit"
        //       className="px-6 py-3 bg-[#0f4c5c] text-white rounded-lg hover:bg-[#5f0f40] transition flex items-center gap-2"
        //     >
        //       <FaSave /> حفظ جميع التغييرات
        //     </button>
        //   </div>
        // </form>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionEdit;













































































































































import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaSave, FaTimes, FaCamera, FaImage, FaPlus, FaMinus } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const SectionEdit = () => {
  const { workerId } = useParams();
  const navigate = useNavigate();
  const [workerData, setWorkerData] = useState({
    name: '',
    skill: '',
    city: '',
    experience: '',
    bio: '',
    profileImage: '',
    coverImage: '',
    skills: [],
    availability: '',
    responseTime: '',
    rating: 0,
    reviews: [],
    portfolio: []
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newSkill, setNewSkill] = useState('');
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    imageUrl: '',
    title: '',
    description: '',
    tags: []
  });
  const [newTag, setNewTag] = useState('');
  const [activeTab, setActiveTab] = useState('basic');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentEditPhoto, setCurrentEditPhoto] = useState(null);

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/worker/workers/${workerId}`
        );
        setWorkerData({
          name: data.worker.name || '',
          skill: data.worker.skill || '',
          city: data.worker.city || '',
          experience: data.worker.experience || '',
          bio: data.worker.bio || '',
          profileImage: data.worker.profileImage || '',
          coverImage: data.worker.coverImage || '',
          skills: data.worker.skills || [],
          availability: data.worker.availability || '',
          responseTime: data.worker.responseTime || '',
          rating: data.worker.rating || 0,
          reviews: data.worker.reviews || [],
          portfolio: data.worker.portfolio || []
        });
      } catch (err) {
        setError(err.response?.data?.message || "حدث خطأ أثناء جلب البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkerData();
  }, [workerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillAdd = () => {
    if (newSkill.trim() && !workerData.skills.includes(newSkill.trim())) {
      setWorkerData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const handleSkillRemove = (index) => {
    setWorkerData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await axios.post(
        'http://localhost:5000/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (type === 'profile') {
        setWorkerData(prev => ({ ...prev, profileImage: response.data.imageUrl }));
      } else if (type === 'cover') {
        setWorkerData(prev => ({ ...prev, coverImage: response.data.imageUrl }));
      } else if (type === 'portfolio') {
        setNewPortfolioItem(prev => ({ ...prev, imageUrl: response.data.imageUrl }));
      }
    } catch (err) {
      setError('حدث خطأ أثناء رفع الصورة');
    }
  };

  const handlePortfolioUpload = async (e) => {
    await handleImageUpload(e, 'portfolio');
  };

  const handleAddPortfolioItem = () => {
    if (newPortfolioItem.imageUrl && newPortfolioItem.title) {
      setWorkerData(prev => ({
        ...prev,
        portfolio: [...prev.portfolio, newPortfolioItem]
      }));
      setNewPortfolioItem({
        imageUrl: '',
        title: '',
        description: '',
        tags: []
      });
    }
  };

  const handleRemovePortfolioItem = (index) => {
    setWorkerData(prev => ({
      ...prev,
      portfolio: prev.portfolio.filter((_, i) => i !== index)
    }));
  };

  const handleEditPortfolioItem = (index) => {
    setCurrentEditPhoto({ ...workerData.portfolio[index], index });
    setEditModalOpen(true);
  };

  const handleEditPhoto = (e) => {
    e.preventDefault();
    const updatedPortfolio = [...workerData.portfolio];
    updatedPortfolio[currentEditPhoto.index] = {
      imageUrl: currentEditPhoto.imageUrl,
      title: currentEditPhoto.title,
      description: currentEditPhoto.description,
      tags: currentEditPhoto.tags
    };
    
    setWorkerData(prev => ({
      ...prev,
      portfolio: updatedPortfolio
    }));
    setEditModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/worker/workers/${workerId}`,
        workerData
      );
      navigate(`/${workerId}`);
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ أثناء حفظ التعديلات");
    }
  };

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

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p>{error}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* رأس الصفحة */}
        <div className="bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40] p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">تعديل الملف الشخصي</h1>
              <p className="mt-2">يمكنك تعديل معلوماتك الشخصية والمهنية هنا</p>
            </div>
            <button 
              onClick={() => navigate(`/${workerId}`)}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
          
          {/* تبويبات التنقل */}
          <div className="flex mt-6 border-b border-white/20">
            {['basic', 'skills', 'media'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-white border-b-2 border-white' : 'text-white/70 hover:text-white'}`}
              >
                {tab === 'basic' && 'المعلومات الأساسية'}
                {tab === 'skills' && 'المهارات والخبرات'}
                {tab === 'media' && 'الصور والمعرض'}
              </button>
            ))}
          </div>
        </div>

        {/* نموذج التعديل */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* قسم المعلومات الأساسية */}
          {activeTab === 'basic' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* قسم رفع الصور - تم نقله إلى الأعلى */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">صورة الغلاف</label>
                  <div className="relative h-40 rounded-lg overflow-hidden bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {workerData.coverImage ? (
                      <>
                        <img 
                          src={workerData.coverImage} 
                          alt="Cover" 
                          className="w-full h-full object-cover"
                        />
                        <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                          <FiUpload className="text-white text-2xl mr-2" />
                          <span className="text-white">تغيير الصورة</span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'cover')}
                          />
                        </label>
                      </>
                    ) : (
                      <label className="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
                        <FiUpload className="text-2xl mb-2" />
                        <span>رفع صورة الغلاف</span>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, 'cover')}
                        />
                      </label>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">الحجم الموصى به: 1200x400 بكسل</p>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">الصورة الشخصية</label>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-2 border-dashed border-gray-300 mx-auto">
                    {workerData.profileImage ? (
                      <>
                        <img 
                          src={workerData.profileImage} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                        <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                          <FiUpload className="text-white" />
                          <input 
                            type="file" 
                            className="hidden" 
                              accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'profile')}
                          />
                        </label>
                      </>
                    ) : (
                      <label className="flex items-center justify-center h-full text-gray-500 cursor-pointer">
                        <FiUpload />
                        <input 
                          type="file" 
                          className="hidden" 
                            accept="image/*"
                          onChange={(e) => handleImageUpload(e, 'profile')}
                        />
                      </label>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">الحجم الموصى به: 400x400 بكسل</p>
                </div>
              </div>

              {/* باقي حقول المعلومات الأساسية */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={workerData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="skill" className="block text-gray-700 mb-2">المهنة</label>
                  <input
                    type="text"
                    id="skill"
                    name="skill"
                    value={workerData.skill}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">المدينة</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={workerData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-gray-700 mb-2">سنوات الخبرة</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={workerData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="bio" className="block text-gray-700 mb-2">الوصف الشخصي</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={workerData.bio}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                  placeholder="اكتب وصفاً مختصراً عن خبراتك ومجال تخصصك..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="availability" className="block text-gray-700 mb-2">مواعيد العمل</label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={workerData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    placeholder="مثال: من السبت إلى الخميس، 8 صباحاً - 5 مساءً"
                  />
                </div>
                <div>
                  <label htmlFor="responseTime" className="block text-gray-700 mb-2">وقت الاستجابة</label>
                  <input
                    type="text"
                    id="responseTime"
                    name="responseTime"
                    value={workerData.responseTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    placeholder="مثال: خلال 24 ساعة"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* قسم المهارات والخبرات */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">المهارات الرئيسية</h2>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                    placeholder="أضف مهارة جديدة"
                  />
                  <button
                    type="button"
                    onClick={handleSkillAdd}
                    className="bg-[#0f4c5c] text-white px-4 py-2 rounded-lg hover:bg-[#5f0f40] transition flex items-center gap-2"
                  >
                    <FaPlus /> إضافة
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {workerData.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#0f4c5c]/10 text-[#0f4c5c] px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleSkillRemove(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">الشهادات والخبرات</h2>
                <textarea
                  name="experienceDetails"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
                  rows="5"
                  placeholder="أضف تفاصيل عن شهاداتك ودوراتك التدريبية وخبراتك العملية..."
                ></textarea>
              </div> */}
            </motion.div>
          )}

          {/* قسم الصور والمعرض */}
          {activeTab === 'media' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">معرض الأعمال</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {workerData.portfolio.map((item, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEditPortfolioItem(index)}
                          className="bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition"
                        >
                          <FaImage />
                        </button>
                        <button 
                          onClick={() => handleRemovePortfolioItem(index)}
                          className="bg-white/80 text-red-600 p-2 rounded-full hover:bg-white transition"
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <div className="mt-2">
                        <h3 className="font-medium">{item.title}</h3>
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.map((tag, i) => (
                              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">إضافة صورة جديدة للمعرض</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">رفع صورة</label>
                      <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200 border border-gray-300 flex items-center justify-center">
                        {newPortfolioItem.imageUrl ? (
                          <>
                            <img 
                              src={newPortfolioItem.imageUrl} 
                              alt="Preview" 
                              className="w-full h-full object-cover"
                            />
                            <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                              <FiUpload className="text-white text-2xl mr-2" />
                              <span className="text-white">تغيير الصورة</span>
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={handlePortfolioUpload}
                              />
                            </label>
                          </>
                        ) : (
                          <label className="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
                            <FiUpload className="text-2xl mb-2" />
                            <span>رفع صورة</span>
                            <input 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={handlePortfolioUpload}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">عنوان الصورة</label>
                      <input
                        type="text"
                        value={newPortfolioItem.title}
                        onChange={(e) => setNewPortfolioItem({...newPortfolioItem, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">وصف الصورة</label>
                      <textarea
                        value={newPortfolioItem.description}
                        onChange={(e) => setNewPortfolioItem({...newPortfolioItem, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        rows="2"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">الأوسمة</label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                          placeholder="أضف وسم جديد"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (newTag.trim() && !newPortfolioItem.tags.includes(newTag.trim())) {
                              setNewPortfolioItem({
                                ...newPortfolioItem,
                                tags: [...newPortfolioItem.tags, newTag.trim()]
                              });
                              setNewTag('');
                            }
                          }}
                          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                        >
                          إضافة
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {newPortfolioItem.tags.map((tag, index) => (
                          <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() => {
                                setNewPortfolioItem({
                                  ...newPortfolioItem,
                                  tags: newPortfolioItem.tags.filter((_, i) => i !== index)
                                });
                              }}
                              className="mr-2 text-red-500 hover:text-red-700"
                            >
                              <FaTimes size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddPortfolioItem}
                      disabled={!newPortfolioItem.imageUrl || !newPortfolioItem.title}
                      className={`px-4 py-2 rounded-lg transition ${newPortfolioItem.imageUrl && newPortfolioItem.title ? 'bg-[#0f4c5c] text-white hover:bg-[#5f0f40]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      إضافة إلى المعرض
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* زر الحفظ */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-[#0f4c5c] text-white rounded-lg hover:bg-[#5f0f40] transition flex items-center gap-2"
            >
              <FaSave /> حفظ التغييرات
            </button>
          </div>
        </form>
      </motion.div>

      {/* Modal لتعديل صورة المعرض */}
      {editModalOpen && currentEditPhoto && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <form onSubmit={handleEditPhoto} className="p-4 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-lg font-medium">تعديل صورة المعرض</h3>
                <button 
                  type="button" 
                  onClick={() => setEditModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="flex justify-center">
                <img
                  src={currentEditPhoto.imageUrl}
                  alt={currentEditPhoto.title}
                  className="h-48 object-contain rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
                <input
                  type="text"
                  value={currentEditPhoto.title}
                  onChange={(e) => setCurrentEditPhoto({
                    ...currentEditPhoto,
                    title: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                <textarea
                  value={currentEditPhoto.description}
                  onChange={(e) => setCurrentEditPhoto({
                    ...currentEditPhoto,
                    description: e.target.value
                  })}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الأوسمة</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="أضف وسم جديد"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newTag.trim() && !currentEditPhoto.tags.includes(newTag.trim())) {
                        setCurrentEditPhoto({
                          ...currentEditPhoto,
                          tags: [...currentEditPhoto.tags, newTag.trim()]
                        });
                        setNewTag('');
                      }
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    إضافة
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentEditPhoto.tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentEditPhoto({
                            ...currentEditPhoto,
                            tags: currentEditPhoto.tags.filter((_, i) => i !== index)
                          });
                        }}
                        className="mr-2 text-red-500 hover:text-red-700"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                >
                  <FaSave /> حفظ التغييرات
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionEdit;









































































// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { FaSave, FaTimes, FaCamera, FaImage, FaPlus, FaMinus } from 'react-icons/fa';
// import { FiUpload } from 'react-icons/fi';

// const SectionEdit = () => {
//   const { workerId } = useParams();
//   const navigate = useNavigate();
//   const [workerData, setWorkerData] = useState({
//     name: '',
//     skill: '',
//     city: '',
//     experience: '',
//     bio: '',
//     profileImage: '',
//     coverImage: '',
//     skills: [],
//     availability: '',
//     responseTime: '',
//     rating: 0,
//     reviews: [],
//     services: [],
//     portfolio: []
//   });
  
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newSkill, setNewSkill] = useState('');
//   const [newService, setNewService] = useState({
//     title: '',
//     price: '',
//     description: ''
//   });
//   const [newPortfolioItem, setNewPortfolioItem] = useState({
//     imageUrl: '',
//     title: '',
//     description: '',
//     tags: []
//   });
//   const [newTag, setNewTag] = useState('');
//   const [activeTab, setActiveTab] = useState('basic');
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [currentEditPhoto, setCurrentEditPhoto] = useState(null);

//   useEffect(() => {
//     const fetchWorkerData = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:5000/api/worker/workers/${workerId}`
//         );
//         setWorkerData({
//           name: data.worker.name || '',
//           skill: data.worker.skill || '',
//           city: data.worker.city || '',
//           experience: data.worker.experience || '',
//           bio: data.worker.bio || '',
//           profileImage: data.worker.profileImage || '',
//           coverImage: data.worker.coverImage || '',
//           skills: data.worker.skills || [],
//           availability: data.worker.availability || '',
//           responseTime: data.worker.responseTime || '',
//           rating: data.worker.rating || 0,
//           reviews: data.worker.reviews || [],
//           services: data.worker.services || [],
//           portfolio: data.worker.portfolio || []
//         });
//       } catch (err) {
//         setError(err.response?.data?.message || "حدث خطأ أثناء جلب البيانات");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkerData();
//   }, [workerId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWorkerData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleServiceChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedServices = [...workerData.services];
//     updatedServices[index] = {
//       ...updatedServices[index],
//       [name]: value
//     };
//     setWorkerData(prev => ({
//       ...prev,
//       services: updatedServices
//     }));
//   };

//   const handleAddService = () => {
//     if (newService.title && newService.price) {
//       setWorkerData(prev => ({
//         ...prev,
//         services: [...prev.services, newService]
//       }));
//       setNewService({
//         title: '',
//         price: '',
//         description: ''
//       });
//     }
//   };

//   const handleRemoveService = (index) => {
//     setWorkerData(prev => ({
//       ...prev,
//       services: prev.services.filter((_, i) => i !== index)
//     }));
//   };

//   const handleSkillAdd = () => {
//     if (newSkill.trim() && !workerData.skills.includes(newSkill.trim())) {
//       setWorkerData(prev => ({
//         ...prev,
//         skills: [...prev.skills, newSkill.trim()]
//       }));
//       setNewSkill('');
//     }
//   };

//   const handleSkillRemove = (index) => {
//     setWorkerData(prev => ({
//       ...prev,
//       skills: prev.skills.filter((_, i) => i !== index)
//     }));
//   };

//   const handleImageUpload = async (e, type) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     try {
//       const formData = new FormData();
//       formData.append('image', file);
      
//       const response = await axios.post(
//         'http://localhost:5000/api/upload',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       if (type === 'profile') {
//         setWorkerData(prev => ({ ...prev, profileImage: response.data.imageUrl }));
//       } else if (type === 'cover') {
//         setWorkerData(prev => ({ ...prev, coverImage: response.data.imageUrl }));
//       } else if (type === 'portfolio') {
//         setNewPortfolioItem(prev => ({ ...prev, imageUrl: response.data.imageUrl }));
//       }
//     } catch (err) {
//       setError('حدث خطأ أثناء رفع الصورة');
//     }
//   };

//   const handlePortfolioUpload = async (e) => {
//     await handleImageUpload(e, 'portfolio');
//   };

//   const handleAddPortfolioItem = () => {
//     if (newPortfolioItem.imageUrl && newPortfolioItem.title) {
//       setWorkerData(prev => ({
//         ...prev,
//         portfolio: [...prev.portfolio, newPortfolioItem]
//       }));
//       setNewPortfolioItem({
//         imageUrl: '',
//         title: '',
//         description: '',
//         tags: []
//       });
//     }
//   };

//   const handleRemovePortfolioItem = (index) => {
//     setWorkerData(prev => ({
//       ...prev,
//       portfolio: prev.portfolio.filter((_, i) => i !== index)
//     }));
//   };

//   const handleEditPortfolioItem = (index) => {
//     setCurrentEditPhoto({ ...workerData.portfolio[index], index });
//     setEditModalOpen(true);
//   };

//   const handleEditPhoto = (e) => {
//     e.preventDefault();
//     const updatedPortfolio = [...workerData.portfolio];
//     updatedPortfolio[currentEditPhoto.index] = {
//       imageUrl: currentEditPhoto.imageUrl,
//       title: currentEditPhoto.title,
//       description: currentEditPhoto.description,
//       tags: currentEditPhoto.tags
//     };
    
//     setWorkerData(prev => ({
//       ...prev,
//       portfolio: updatedPortfolio
//     }));
//     setEditModalOpen(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/worker/workers/${workerId}`,
//         workerData
//       );
//       navigate(`/${workerId}`);
//     } catch (err) {
//       setError(err.response?.data?.message || "حدث خطأ أثناء حفظ التعديلات");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0f4c5c] mx-auto"></div>
//           <p className="mt-4 text-gray-600">جاري تحميل البيانات...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
//           <p>{error}</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
//           >
//             العودة للخلف
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4" dir="rtl">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
//       >
//         {/* رأس الصفحة */}
//         <div className="bg-gradient-to-r from-[#0f4c5c] to-[#5f0f40] p-6 text-white">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold">تعديل الملف الشخصي</h1>
//               <p className="mt-2">يمكنك تعديل معلوماتك الشخصية والمهنية هنا</p>
//             </div>
//             <button 
//               onClick={() => navigate(`/${workerId}`)}
//               className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
//             >
//               العودة للصفحة الرئيسية
//             </button>
//           </div>
          
//           {/* تبويبات التنقل */}
//           <div className="flex mt-6 border-b border-white/20">
//             {['basic', 'skills', 'services', 'media'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-white border-b-2 border-white' : 'text-white/70 hover:text-white'}`}
//               >
//                 {tab === 'basic' && 'المعلومات الأساسية'}
//                 {tab === 'skills' && 'المهارات والخبرات'}
//                 {tab === 'services' && 'الخدمات والعروض'}
//                 {tab === 'media' && 'الصور والمعرض'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* نموذج التعديل */}
//         <form onSubmit={handleSubmit} className="p-6">
//           {/* قسم المعلومات الأساسية */}
//           {activeTab === 'basic' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 mb-2">الاسم الكامل</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={workerData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="skill" className="block text-gray-700 mb-2">المهنة</label>
//                   <input
//                     type="text"
//                     id="skill"
//                     name="skill"
//                     value={workerData.skill}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="city" className="block text-gray-700 mb-2">المدينة</label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     value={workerData.city}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="experience" className="block text-gray-700 mb-2">سنوات الخبرة</label>
//                   <input
//                     type="text"
//                     id="experience"
//                     name="experience"
//                     value={workerData.experience}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <label htmlFor="bio" className="block text-gray-700 mb-2">الوصف الشخصي</label>
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   value={workerData.bio}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                   placeholder="اكتب وصفاً مختصراً عن خبراتك ومجال تخصصك..."
//                 ></textarea>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <label htmlFor="availability" className="block text-gray-700 mb-2">مواعيد العمل</label>
//                   <input
//                     type="text"
//                     id="availability"
//                     name="availability"
//                     value={workerData.availability}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     placeholder="مثال: من السبت إلى الخميس، 8 صباحاً - 5 مساءً"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="responseTime" className="block text-gray-700 mb-2">وقت الاستجابة</label>
//                   <input
//                     type="text"
//                     id="responseTime"
//                     name="responseTime"
//                     value={workerData.responseTime}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     placeholder="مثال: خلال 24 ساعة"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* قسم المهارات والخبرات */}
//           {activeTab === 'skills' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">المهارات الرئيسية</h2>
//                 <div className="flex gap-2 mb-4">
//                   <input
//                     type="text"
//                     value={newSkill}
//                     onChange={(e) => setNewSkill(e.target.value)}
//                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                     placeholder="أضف مهارة جديدة"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleSkillAdd}
//                     className="bg-[#0f4c5c] text-white px-4 py-2 rounded-lg hover:bg-[#5f0f40] transition flex items-center gap-2"
//                   >
//                     <FaPlus /> إضافة
//                   </button>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2">
//                   {workerData.skills.map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="bg-[#0f4c5c]/10 text-[#0f4c5c] px-3 py-1 rounded-full flex items-center gap-2"
//                     >
//                       {skill}
//                       <button
//                         type="button"
//                         onClick={() => handleSkillRemove(index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaMinus className="text-xs" />
//                       </button>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">الشهادات والخبرات</h2>
//                 <textarea
//                   name="experienceDetails"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c5c] focus:border-[#0f4c5c] outline-none transition"
//                   rows="5"
//                   placeholder="أضف تفاصيل عن شهاداتك ودوراتك التدريبية وخبراتك العملية..."
//                 ></textarea>
//               </div>
//             </motion.div>
//           )}

//           {/* قسم الخدمات والعروض */}
//           {activeTab === 'services' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">الخدمات المقدمة</h2>
              
//               <div className="space-y-6 mb-8">
//                 {workerData.services.map((service, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-gray-50 p-4 rounded-lg border border-gray-200"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                       <div>
//                         <label className="block text-gray-700 mb-1">عنوان الخدمة</label>
//                         <input
//                           type="text"
//                           name="title"
//                           value={service.title}
//                           onChange={(e) => handleServiceChange(e, index)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1">السعر</label>
//                         <input
//                           type="text"
//                           name="price"
//                           value={service.price}
//                           onChange={(e) => handleServiceChange(e, index)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         />
//                       </div>
//                       <div className="flex items-end">
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveService(index)}
//                           className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200 transition"
//                         >
//                           حذف الخدمة
//                         </button>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-1">وصف الخدمة</label>
//                       <textarea
//                         name="description"
//                         value={service.description}
//                         onChange={(e) => handleServiceChange(e, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         rows="3"
//                       ></textarea>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
//                 <h3 className="text-lg font-medium text-blue-800 mb-3">إضافة خدمة جديدة</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1">عنوان الخدمة</label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={newService.title}
//                       onChange={(e) => setNewService({...newService, title: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1">السعر</label>
//                     <input
//                       type="text"
//                       name="price"
//                       value={newService.price}
//                       onChange={(e) => setNewService({...newService, price: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                   <div className="flex items-end">
//                     <button
//                       type="button"
//                       onClick={handleAddService}
//                       className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-200 transition"
//                     >
//                       إضافة خدمة
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-1">وصف الخدمة</label>
//                   <textarea
//                     name="description"
//                     value={newService.description}
//                     onChange={(e) => setNewService({...newService, description: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     rows="2"
//                   ></textarea>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* قسم الصور والمعرض */}
//           {activeTab === 'media' && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">الصور الشخصية</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <label className="block text-gray-700 mb-2">صورة الغلاف</label>
//                     <div className="relative h-40 rounded-lg overflow-hidden bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
//                       {workerData.coverImage ? (
//                         <>
//                           <img 
//                             src={workerData.coverImage} 
//                             alt="Cover" 
//                             className="w-full h-full object-cover"
//                           />
//                           <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
//                             <FiUpload className="text-white text-2xl mr-2" />
//                             <span className="text-white">تغيير الصورة</span>
//                             <input 
//                               type="file" 
//                               className="hidden" 
//                               accept="image/*"
//                               onChange={(e) => handleImageUpload(e, 'cover')}
//                             />
//                           </label>
//                         </>
//                       ) : (
//                         <label className="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
//                           <FiUpload className="text-2xl mb-2" />
//                           <span>رفع صورة الغلاف</span>
//                           <input 
//                             type="file" 
//                             className="hidden" 
//                             accept="image/*"
//                             onChange={(e) => handleImageUpload(e, 'cover')}
//                           />
//                         </label>
//                       )}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">الحجم الموصى به: 1200x400 بكسل</p>
//                   </div>
                  
//                   <div>
//                     <label className="block text-gray-700 mb-2">الصورة الشخصية</label>
//                     <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-2 border-dashed border-gray-300 mx-auto">
//                       {workerData.profileImage ? (
//                         <>
//                           <img 
//                             src={workerData.profileImage} 
//                             alt="Profile" 
//                             className="w-full h-full object-cover"
//                           />
//                           <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
//                             <FiUpload className="text-white" />
//                             <input 
//                               type="file" 
//                               className="hidden" 
//                               accept="image/*"
//                               onChange={(e) => handleImageUpload(e, 'profile')}
//                             />
//                           </label>
//                         </>
//                       ) : (
//                         <label className="flex items-center justify-center h-full text-gray-500 cursor-pointer">
//                           <FiUpload />
//                           <input 
//                             type="file" 
//                             className="hidden" 
//                               accept="image/*"
//                             onChange={(e) => handleImageUpload(e, 'profile')}
//                           />
//                         </label>
//                       )}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2 text-center">الحجم الموصى به: 400x400 بكسل</p>
//                   </div>
//                 </div>

//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4">معرض الأعمال</h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//                     {workerData.portfolio.map((item, index) => (
//                       <div key={index} className="relative group">
//                         <img 
//                           src={item.imageUrl} 
//                           alt={item.title} 
//                           className="w-full h-48 object-cover rounded-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//                           <button 
//                             onClick={() => handleEditPortfolioItem(index)}
//                             className="bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition"
//                           >
//                             <FaImage />
//                           </button>
//                           <button 
//                             onClick={() => handleRemovePortfolioItem(index)}
//                             className="bg-white/80 text-red-600 p-2 rounded-full hover:bg-white transition"
//                           >
//                             <FaTimes />
//                           </button>
//                         </div>
//                         <div className="mt-2">
//                           <h3 className="font-medium">{item.title}</h3>
//                           {item.tags.length > 0 && (
//                             <div className="flex flex-wrap gap-1 mt-1">
//                               {item.tags.map((tag, i) => (
//                                 <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                                   {tag}
//                                 </span>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
//                     <h3 className="text-lg font-medium text-gray-800 mb-3">إضافة صورة جديدة للمعرض</h3>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-gray-700 mb-1">رفع صورة</label>
//                         <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200 border border-gray-300 flex items-center justify-center">
//                           {newPortfolioItem.imageUrl ? (
//                             <>
//                               <img 
//                                 src={newPortfolioItem.imageUrl} 
//                                 alt="Preview" 
//                                 className="w-full h-full object-cover"
//                               />
//                               <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
//                                 <FiUpload className="text-white text-2xl mr-2" />
//                                 <span className="text-white">تغيير الصورة</span>
//                                 <input 
//                                   type="file" 
//                                   className="hidden" 
//                                   accept="image/*"
//                                   onChange={handlePortfolioUpload}
//                                 />
//                               </label>
//                             </>
//                           ) : (
//                             <label className="flex flex-col items-center justify-center text-gray-500 cursor-pointer">
//                               <FiUpload className="text-2xl mb-2" />
//                               <span>رفع صورة</span>
//                               <input 
//                                 type="file" 
//                                 className="hidden" 
//                                 accept="image/*"
//                                 onChange={handlePortfolioUpload}
//                               />
//                             </label>
//                           )}
//                         </div>
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1">عنوان الصورة</label>
//                         <input
//                           type="text"
//                           value={newPortfolioItem.title}
//                           onChange={(e) => setNewPortfolioItem({...newPortfolioItem, title: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1">وصف الصورة</label>
//                         <textarea
//                           value={newPortfolioItem.description}
//                           onChange={(e) => setNewPortfolioItem({...newPortfolioItem, description: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                           rows="2"
//                         ></textarea>
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1">الأوسمة</label>
//                         <div className="flex gap-2 mb-2">
//                           <input
//                             type="text"
//                             value={newTag}
//                             onChange={(e) => setNewTag(e.target.value)}
//                             className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
//                             placeholder="أضف وسم جديد"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => {
//                               if (newTag.trim() && !newPortfolioItem.tags.includes(newTag.trim())) {
//                                 setNewPortfolioItem({
//                                   ...newPortfolioItem,
//                                   tags: [...newPortfolioItem.tags, newTag.trim()]
//                                 });
//                                 setNewTag('');
//                               }
//                             }}
//                             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//                           >
//                             إضافة
//                           </button>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                           {newPortfolioItem.tags.map((tag, index) => (
//                             <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
//                               <span>{tag}</span>
//                               <button
//                                 type="button"
//                                 onClick={() => {
//                                   setNewPortfolioItem({
//                                     ...newPortfolioItem,
//                                     tags: newPortfolioItem.tags.filter((_, i) => i !== index)
//                                   });
//                                 }}
//                                 className="mr-2 text-red-500 hover:text-red-700"
//                               >
//                                 <FaTimes size={12} />
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={handleAddPortfolioItem}
//                         disabled={!newPortfolioItem.imageUrl || !newPortfolioItem.title}
//                         className={`px-4 py-2 rounded-lg transition ${newPortfolioItem.imageUrl && newPortfolioItem.title ? 'bg-[#0f4c5c] text-white hover:bg-[#5f0f40]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//                       >
//                         إضافة إلى المعرض
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* زر الحفظ */}
//           <div className="flex justify-end mt-8">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-[#0f4c5c] text-white rounded-lg hover:bg-[#5f0f40] transition flex items-center gap-2"
//             >
//               <FaSave /> حفظ التغييرات
//             </button>
//           </div>
//         </form>
//       </motion.div>

//       {/* Modal لتعديل صورة المعرض */}
//       {editModalOpen && currentEditPhoto && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg w-full max-w-md">
//             <form onSubmit={handleEditPhoto} className="p-4 space-y-4">
//               <div className="flex justify-between items-center border-b pb-2">
//                 <h3 className="text-lg font-medium">تعديل صورة المعرض</h3>
//                 <button 
//                   type="button" 
//                   onClick={() => setEditModalOpen(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FaTimes />
//                 </button>
//               </div>
              
//               <div className="flex justify-center">
//                 <img
//                   src={currentEditPhoto.imageUrl}
//                   alt={currentEditPhoto.title}
//                   className="h-48 object-contain rounded-md"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
//                 <input
//                   type="text"
//                   value={currentEditPhoto.title}
//                   onChange={(e) => setCurrentEditPhoto({
//                     ...currentEditPhoto,
//                     title: e.target.value
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
//                 <textarea
//                   value={currentEditPhoto.description}
//                   onChange={(e) => setCurrentEditPhoto({
//                     ...currentEditPhoto,
//                     description: e.target.value
//                   })}
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">الأوسمة</label>
//                 <div className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     value={newTag}
//                     onChange={(e) => setNewTag(e.target.value)}
//                     className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="أضف وسم جديد"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (newTag.trim() && !currentEditPhoto.tags.includes(newTag.trim())) {
//                         setCurrentEditPhoto({
//                           ...currentEditPhoto,
//                           tags: [...currentEditPhoto.tags, newTag.trim()]
//                         });
//                         setNewTag('');
//                       }
//                     }}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   >
//                     إضافة
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {currentEditPhoto.tags.map((tag, index) => (
//                     <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
//                       <span>{tag}</span>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setCurrentEditPhoto({
//                             ...currentEditPhoto,
//                             tags: currentEditPhoto.tags.filter((_, i) => i !== index)
//                           });
//                         }}
//                         className="mr-2 text-red-500 hover:text-red-700"
//                       >
//                         <FaTimes size={12} />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="flex justify-end gap-2 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setEditModalOpen(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
//                 >
//                   إلغاء
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
//                 >
//                   <FaSave /> حفظ التغييرات
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SectionEdit;