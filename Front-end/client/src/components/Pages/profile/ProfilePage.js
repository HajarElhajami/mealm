

// import React, { useState } from "react";
// import { Card, CardContent } from "./Card";
// import ProfileInfo from "./ProfileInfoAA";
// import { useToast } from "./UseToast";

// const ProfilePage = () => {
//     const { toast } = useToast();
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeTab, setActiveTab] = useState("gallery");
//   const [isUploading, setIsUploading] = useState(false);  // حالة التحميل
//   const [profileData, setProfileData] = useState({
  
//     name: "أحمد العلوي",
//     profession: "كهربائي",
//     city: "الرباط",
//     area: "حسان",
//     phone: "0612345678",
//     description: "كهربائي محترف مع خبرة 15 سنة في تركيب وصيانة الأنظمة الكهربائية المنزلية والتجارية. متخصص في التمديدات الكهربائية وتركيب أنظمة إنارة LED وحلول الطاقة المتجددة.",
//     joinDate: "2023-08-15",
//     servicesCount: 48,
//     rating: 4.7,
//   });

//   const handleSaveProfile = (updatedData) => {
//     setProfileData({ ...profileData, ...updatedData });
//     setIsEditing(false);
//     toast({
//       title: "تم حفظ التغييرات",
//       description: "تم تحديث الملف الشخصي بنجاح",
//     });
//   };

//   const handleUploadPhoto = () => {
//     // سيتم تنفيذ رفع الصورة هنا
//     toast({
//       title: "تمت إضافة الصورة",
//       description: "تم رفع الصورة بنجاح",
//     });
//   };

//   const renderTabContent = () => {
//     if (activeTab === "gallery") {
//       return (
//         <div className="p-6 bg-white rounded-lg shadow-md">
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h3 className="text-xl font-semibold">معرض أعمالي</h3>
//               <button 
//                 className="bg-primaryDarkest hover:bg-primaryMid hover:text-primaryDarkest text-white px-4 py-2 rounded-md flex items-center gap-2"
//                 onClick={handleUploadPhoto}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 5v14M5 12h14"/>
//                 </svg>
//                 إضافة صورة
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {[1, 2, 3, 4].map((id) => (
//                 <div key={id} className="bg-white border rounded-lg overflow-hidden group relative">
//                   <div className="relative aspect-square">
//                     <img 
//                       src="/placeholder.svg" 
//                       alt="صورة عمل" 
//                       className="w-full h-full object-cover"
//                     />
//                     <button
//                       className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                       onClick={() => {
//                         toast({
//                           title: "تم حذف الصورة",
//                           description: "تم حذف الصورة بنجاح",
//                         });
//                       }}
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <line x1="18" y1="6" x2="6" y2="18"/>
//                         <line x1="6" y1="6" x2="18" y2="18"/>
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="p-3">
//                     <p className="font-medium text-sm truncate">تركيب كهرباء منزلية</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="p-6 bg-white rounded-lg shadow-md">
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold">التقييمات والمراجعات</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white p-4 rounded-lg border">
//                 <div className="flex flex-col items-center">
//                   <div className="text-4xl font-bold">{profileData.rating}</div>
//                   <div className="flex items-center my-2">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <svg 
//                         key={star} 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         className={`h-4 w-4 ${star <= Math.round(profileData.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
//                         viewBox="0 0 24 24" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         strokeWidth="2" 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round"
//                       >
//                         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//                       </svg>
//                     ))}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     بناءً على 25 تقييم
//                   </div>
//                 </div>

//                 <div className="space-y-2 mt-4">
//                   {[5, 4, 3, 2, 1].map((stars) => (
//                     <div key={stars} className="flex items-center gap-2">
//                       <span className="w-4 text-sm">{stars}</span>
//                       <svg 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         className="h-4 w-4 text-yellow-500 fill-yellow-500"
//                         viewBox="0 0 24 24" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         strokeWidth="2" 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round"
//                       >
//                         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//                       </svg>
//                       <div className="h-2 bg-gray-200 rounded-full flex-1 overflow-hidden">
//                         <div 
//                           className="h-full bg-primary" 
//                           style={{ 
//                             width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%` 
//                           }}
//                         />
//                       </div>
//                       <span className="text-sm w-8 text-left">
//                         {stars === 5 ? 18 : stars === 4 ? 5 : stars === 3 ? 1 : stars === 2 ? 1 : 0}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   { id: 1, user: "محمد العمراني", rating: 5, date: "2023-12-10", comment: "عمل ممتاز وسريع، قام بتركيب النظام الكهربائي بالكامل للمنزل بدقة عالية وأسعار معقولة." },
//                   { id: 2, user: "سارة المنصوري", rating: 4, date: "2023-11-25", comment: "وصل في الوقت المحدد وأنجز العمل بشكل جيد. أسعاره مناسبة ويقدم نصائح مفيدة." }
//                 ].map((review) => (
//                   <div key={review.id} className="bg-white border rounded-lg p-4">
//                     <div className="flex justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
//                           {review.user.charAt(0)}
//                         </div>
//                         <div>
//                           <div className="font-medium">{review.user}</div>
//                           <div className="text-sm text-gray-500">
//                             {new Date(review.date).toLocaleDateString('ar-MA')}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <svg 
//                             key={star} 
//                             xmlns="http://www.w3.org/2000/svg" 
//                             className={`h-4 w-4 ${star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
//                             viewBox="0 0 24 24" 
//                             fill="none" 
//                             stroke="currentColor" 
//                             strokeWidth="2" 
//                             strokeLinecap="round" 
//                             strokeLinejoin="round"
//                           >
//                             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//                           </svg>
//                         ))}
//                       </div>
//                     </div>
//                     <hr className="my-3" />
//                     <div className="p-0">
//                       <p className="text-sm">{review.comment}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   };

//   if (isEditing) {
//     return (
//       <div className="container mx-auto py-8 px-4" dir="rtl">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h1 className="text-2xl font-bold text-center mb-6">تعديل الملف الشخصي</h1>
//           <form className="space-y-6" onSubmit={(e) => {
//             e.preventDefault();
//             handleSaveProfile({
//               name: e.target.name.value,
//               profession: e.target.profession.value,
//               city: e.target.city.value,
//               area: e.target.area.value,
//               phone: e.target.phone.value,
//               description: e.target.description.value,
//             });
//           }}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
//                 <input 
//                   type="text" 
//                   name="name" 
//                   defaultValue={profileData.name}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">المهنة</label>
//                 <input 
//                   type="text" 
//                   name="profession" 
//                   defaultValue={profileData.profession}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
//                 <input 
//                   type="text" 
//                   name="city" 
//                   defaultValue={profileData.city}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">المنطقة / الحي</label>
//                 <input 
//                   type="text" 
//                   name="area" 
//                   defaultValue={profileData.area}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
//                 <input 
//                   type="text" 
//                   name="phone" 
//                   defaultValue={profileData.phone}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">وصف الخدمات</label>
//               <textarea
//                 name="description"
//                 defaultValue={profileData.description}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
//               />
//             </div>

//             <div className="flex justify-between gap-4">
//               <button 
//                 type="button" 
//                 className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
//                 onClick={() => setIsEditing(false)}
//               >
//                 إلغاء
//               </button>
//               <button 
//                 type="submit" 
//                 className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
//               >
//                 حفظ التغييرات
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8 px-4" dir="rtl">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="w-full md:w-1/3">
//           <Card className="p-6">
//             <div className="flex flex-col items-center">
//               <div className="relative w-32 h-32 mb-4">
//                 <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-primary">
//                   <img 
//                     src="/placeholder.svg" 
//                     alt={profileData.name} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <button 
//                   className="absolute bottom-0 right-0 rounded-full bg-gray-200 hover:bg-gray-300 p-2"
//                   onClick={handleUploadPhoto}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
//                     <circle cx="12" cy="13" r="4"/>
//                   </svg>
//                 </button>
//               </div>
              
//               <h2 className="text-2xl font-bold text-center">{profileData.name}</h2>
//               <p className="text-primary font-semibold">{profileData.profession}</p>
              
//               <button 
//                 className="mt-4 w-full border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 flex items-center justify-center gap-2"
//                 onClick={() => setIsEditing(true)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 20h9"/>
//                   <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
//                 </svg>
//                 تعديل الملف الشخصي
//               </button>
//             </div>
            
//             <div className="mt-6">
//               <hr className="my-4" />
              
//               <div className="space-y-4">
//                 <p className="text-gray-700">{profileData.description}</p>
                
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
//                     <circle cx="12" cy="10" r="3"/>
//                   </svg>
//                   <span>{profileData.city}، {profileData.area}</span>
//                 </div>
                
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//                   </svg>
//                   <span dir="ltr">{profileData.phone}</span>
//                 </div>
                
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
//                     <line x1="16" y1="2" x2="16" y2="6"/>
//                     <line x1="8" y1="2" x2="8" y2="6"/>
//                     <line x1="3" y1="10" x2="21" y2="10"/>
//                   </svg>
//                   <span>انضم في {new Date(profileData.joinDate).toLocaleDateString('ar-MA', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}</span>
//                 </div>
                
//                 <div className="flex flex-wrap gap-3 mt-4">
//                   <span className="inline-flex items-center gap-1 py-1.5 px-3 bg-gray-100 text-gray-800 rounded-full text-sm">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
//                     </svg>
//                     <span>{profileData.servicesCount} خدمة مقدمة</span>
//                   </span>
                  
//                   <span className="inline-flex items-center gap-1 py-1.5 px-3 bg-gray-100 text-gray-800 rounded-full text-sm">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//                     </svg>
//                     <span>{profileData.rating} تقييم</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
        
//         <div className="w-full md:w-2/3">
//           <div className="bg-white rounded-lg shadow-md mb-4">
//             <div className="flex border-b">
//               <button 
//                 className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'gallery' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveTab("gallery")}
//               >
//                 معرض الأعمال
//               </button>
//               <button 
//                 className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'reviews' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveTab("reviews")}
//               >
//                 التقييمات
//               </button>
//             </div>
//           </div>
          
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;




























// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// // مكون لرفع صورة
// const UploadPhoto = ({ onUpload }) => {
//   const [photo, setPhoto] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhoto(URL.createObjectURL(file));
//       onUpload(file);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {photo && <img src={photo} alt="Profile" width="150" />}
//     </div>
//   );
// };

// // مكون لعرض المعرض
// const Gallery = ({ images, handleDeleteImage }) => (
//   <div className="gallery">
//     {images.length === 0 ? (
//       <p className="text-gray-500">لا توجد صور بعد.</p>
//     ) : (
//       <div className="grid grid-cols-3 gap-4">
//         {images.map((img, index) => (
//           <div key={index} className="image-item relative">
//             <img src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover rounded-lg" />
//             <button
//               onClick={() => handleDeleteImage(index)}
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 focus:outline-none"
//             >
//               حذف
//             </button>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );

// // مكون للتعليقات
// const Reviews = ({ reviews }) => (
//   <div className="reviews">
//     {reviews.map((review, index) => (
//       <div key={index} className="review mb-4">
//         <p className="text-gray-700">{review.text}</p>
//         <p className="text-yellow-500">النجوم: {review.stars}</p>
//       </div>
//     ))}
//   </div>
// );

// // مكون الصفحة الرئيسية
// const ProfilePage = () => {
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [reviews, setReviews] = useState([
//     { author: 'أحمد', text: 'مراجعة رائعة!' },
//     { author: 'مريم', text: 'الخدمة ممتازة!' },
//   ]);
//   const [newProfileData, setNewProfileData] = useState({
//     name: '',
//     profession: '',
//     phone: '',
//     description: '',
//   });

//   const handleChangeProfileImage = (file) => {
//     setProfilePhoto(file);
//     toast.success('تم تحديث الصورة بنجاح!');
//   };

//   const handleAddImage = () => {
//     const newImage = prompt('أدخل رابط الصورة');
//     if (newImage) {
//       setGalleryImages([...galleryImages, newImage]);
//       toast.success('تم إضافة الصورة بنجاح!');
//     }
//   };

//   const handleDeleteImage = (index) => {
//     const updatedImages = galleryImages.filter((_, i) => i !== index);
//     setGalleryImages(updatedImages);
//     toast.success('تم حذف الصورة بنجاح!');
//   };

//   const handleEditProfile = () => {
//     toast.success('تم حفظ التغييرات بنجاح!');
//   };

//   return (
//     <div className="profile-page p-6 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto">
//       <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">الملف الشخصي</h2>

//       {/* صورة الملف الشخصي */}
//       <div className="profile-header flex items-center justify-between mb-6">
//         <div className="flex items-center">
//           <img
//             src={profilePhoto ? URL.createObjectURL(profilePhoto) : 'default-image.jpg'}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover mr-4"
//           />
//           <div>
//             <UploadPhoto onUpload={handleChangeProfileImage} />
//           </div>
//         </div>
//       </div>

//       {/* تعديل البيانات الشخصية */}
//       <div className="profile-info mb-6 bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-2xl font-semibold text-gray-700 mb-4">بياناتك الشخصية</h3>
//         <input
//           type="text"
//           placeholder="الاسم"
//           value={newProfileData.name}
//           onChange={(e) => setNewProfileData({ ...newProfileData, name: e.target.value })}
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="text"
//           placeholder="المهنة"
//           value={newProfileData.profession}
//           onChange={(e) => setNewProfileData({ ...newProfileData, profession: e.target.value })}
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="text"
//           placeholder="الهاتف"
//           value={newProfileData.phone}
//           onChange={(e) => setNewProfileData({ ...newProfileData, phone: e.target.value })}
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <textarea
//           placeholder="الوصف"
//           value={newProfileData.description}
//           onChange={(e) => setNewProfileData({ ...newProfileData, description: e.target.value })}
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleEditProfile}
//           className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           حفظ التغييرات
//         </button>
//       </div>

//       {/* عرض التقييمات */}
//       <Reviews reviews={reviews} />

//       {/* عرض المعرض */}
//       <Gallery images={galleryImages} handleDeleteImage={handleDeleteImage} />

//       <ToastContainer />
//     </div>
//   );
// };

// export default ProfilePage;












import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ProfileHeader from "./ProfileHeader.js";
import ProfileGallery from "./ProfileGallery.js";
import ProfileReviews from "./ProfileReviews.js";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    city: "",
    region: "",
    phone: "",
    profession: "",
    profileImage: null,
    imagePreview: null, // لمعاينة الصورة قبل الحفظ
  });

  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      const file = e.target.files[0];
      if (file) {
        setFormData({ 
          ...formData, 
          profileImage: file, 
          imagePreview: URL.createObjectURL(file) 
        });
      }
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
      toast.success("تم حفظ المعلومات بنجاح!");
      console.log(response.data);
    } catch (error) {
      console.error("خطأ في رفع البيانات:", error);
      toast.error("حدث خطأ أثناء حفظ البيانات.");
    }
  };

  return (
    <div className="min-h-screen bg-[#EAF9F6] text-[#406F67] flex items-center justify-center p-4">
      <div className="w-full max-w- bg-white shadow-lg rounded-2xl p-6">
        
        {/* قسم عرض البيانات المدخلة */}
        <div className="flex flex-col items-center text-center mb-6">
          {formData.imagePreview ? (
            <img src={formData.imagePreview} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover border-2 border-[#6BA89D] shadow-md" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
              صورة
            </div>
          )}
          <h2 className="text-2xl font-bold mt-2">{formData.name} {formData.surname}</h2>
          <p className="text-lg text-[#6BA89D]">{formData.profession}</p>
          <p className="text-gray-600">{formData.city}, {formData.region}</p>
        </div>

        {/* قسم الإدخال والتبويبات */}
        <div className="flex flex-col md:flex-row-reverse gap-6">
          
          {/* فورم إدخال البيانات */}
          <div className="p-6 w-full md:w-1/3 bg-[#EAF9F6] shadow-md rounded-xl">
            <h2 className="text-xl font-bold mb-4 text-[#406F67]">معلومات العميل</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input type="text" name="name" placeholder="الاسم" onChange={handleChange} required 
                     className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

              <input type="text" name="surname" placeholder="النسب" onChange={handleChange} required 
                     className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

              <input type="text" name="city" placeholder="المدينة" onChange={handleChange} required 
                     className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

              <input type="text" name="region" placeholder="المنطقة" onChange={handleChange} required 
                     className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

              <input type="tel" name="phone" placeholder="رقم الهاتف" onChange={handleChange} required 
                     className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

              {/* اختيار الحرفة */}
              <select name="profession" onChange={handleChange} required 
                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] bg-white focus:ring-2 focus:ring-[#86C4B8] transition-all">
                <option value="">اختر نوع الحرفة</option>
                <option value="كهربائي">كهربائي</option>
                <option value="نجار">نجار</option>
                <option value="حداد">حداد</option>
                <option value="سباك">سباك</option>
                <option value="دهان">دهان</option>
                <option value="ميكانيكي">ميكانيكي</option>
              </select>

              <input type="file" name="profileImage" onChange={handleChange} required 
                     className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

              <button type="submit" 
                      className="w-full bg-[#A9E7DA] text-[#406F67] font-bold py-2 px-4 rounded-lg hover:bg-[#6BA89D] hover:text-white transition duration-300">
                إرسال البيانات
              </button>
            </form>
          </div>

          {/* التبويبات */}
          <div className="w-full md:w-2/3">
            <div className="tabs flex gap-4 mb-4">
              <button onClick={() => setActiveTab("gallery")} 
                      className={`py-2 px-4 font-semibold rounded-lg border border-[#86C4B8] transition-all 
                      ${activeTab === "gallery" ? "bg-[#86C4B8] text-white" : "bg-gray-200"}`}>
                معرض الأعمال
              </button>

              <button onClick={() => setActiveTab("reviews")} 
                      className={`py-2 px-4 font-semibold rounded-lg border border-[#86C4B8] transition-all 
                      ${activeTab === "reviews" ? "bg-[#86C4B8] text-white" : "bg-gray-200"}`}>
                التقييمات
              </button>
            </div>
            {activeTab === "gallery" ? <ProfileGallery /> : <ProfileReviews />}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
