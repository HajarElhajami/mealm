// import React, { useState, useEffect } from "react";
// import ProfileForm from "./ProfileForm";
// import ProfileHeader from "./ProfileHeader";
// import ServicesSection from "./ServicesSection";
// import ReviewsSection from "./ReviewsSection";

// const ProfilePage = ({ workerEmail, workersData }) => {
//   const [worker, setWorker] = useState(null);

//   useEffect(() => {
//     const foundWorker = workersData.find((w) => w.email === workerEmail);
//     if (foundWorker) {
//       setWorker(foundWorker);
//     }
//   }, [workerEmail, workersData]);

//   if (!worker) {
//     return <ProfileForm email={workerEmail} onSave={setWorker} />;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-4 space-y-6">
//       <ProfileHeader worker={worker} />
//       <ServicesSection services={worker.services} />
//       <ReviewsSection reviews={worker.reviews} />
//     </div>
//   );
// };

// export default ProfilePage;









































// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import ProfileHeader from "./ProfileHeader.js";
// import ProfileGallery from "./ProfileGallery.js";
// import ProfileReviews from "./ProfileReviews.js";

// const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState("gallery");

//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     city: "",
//     region: "",
//     phone: "",
//     profession: "",
//     profileImage: null,
//     imagePreview: null, // لمعاينة الصورة قبل الحفظ
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "profileImage") {
//       const file = e.target.files[0];
//       if (file) {
//         setFormData({ 
//           ...formData, 
//           profileImage: file, 
//           imagePreview: URL.createObjectURL(file) 
//         });
//       }
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
//       toast.success("تم حفظ المعلومات بنجاح!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("خطأ في رفع البيانات:", error);
//       toast.error("حدث خطأ أثناء حفظ البيانات.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#EAF9F6] text-[#406F67] flex items-center justify-center p-4">
//       <div className="w-full max-w- bg-white shadow-lg rounded-2xl p-6">
        
//         {/* قسم عرض البيانات المدخلة */}
//         <div className="flex flex-col items-center text-center mb-6">
//           {formData.imagePreview ? (
//             <img src={formData.imagePreview} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover border-2 border-[#6BA89D] shadow-md" />
//           ) : (
//             <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
//               صورة
//             </div>
//           )}
//           <h2 className="text-2xl font-bold mt-2">{formData.name} {formData.surname}</h2>
//           <p className="text-lg text-[#6BA89D]">{formData.profession}</p>
//           <p className="text-gray-600">{formData.city}, {formData.region}</p>
//         </div>

//         {/* قسم الإدخال والتبويبات */}
//         <div className="flex flex-col md:flex-row-reverse gap-6">
          
//           {/* فورم إدخال البيانات */}
//           <div className="p-6 w-full md:w-1/3 bg-[#EAF9F6] shadow-md rounded-xl">
//             <h2 className="text-xl font-bold mb-4 text-[#406F67]">معلومات العميل</h2>
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//               <input type="text" name="name" placeholder="الاسم" onChange={handleChange} required 
//                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

//               <input type="text" name="surname" placeholder="النسب" onChange={handleChange} required 
//                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

//               <input type="text" name="city" placeholder="المدينة" onChange={handleChange} required 
//                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

//               <input type="text" name="region" placeholder="المنطقة" onChange={handleChange} required 
//                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

//               <input type="tel" name="phone" placeholder="رقم الهاتف" onChange={handleChange} required 
//                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

//               {/* اختيار الحرفة */}
//               <select name="profession" onChange={handleChange} required 
//                       className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] bg-white focus:ring-2 focus:ring-[#86C4B8] transition-all">
//                 <option value="">اختر نوع الحرفة</option>
//                 <option value="كهربائي">كهربائي</option>
//                 <option value="نجار">نجار</option>
//                 <option value="حداد">حداد</option>
//                 <option value="سباك">سباك</option>
//                 <option value="دهان">دهان</option>
//                 <option value="ميكانيكي">ميكانيكي</option>
//               </select>

//               <input type="file" name="profileImage" onChange={handleChange} required 
//                      className="w-full p-3 mb-3 border rounded-lg border-[#6BA89D] focus:ring-2 focus:ring-[#86C4B8] transition-all"/>

//               <button type="submit" 
//                       className="w-full bg-[#A9E7DA] text-[#406F67] font-bold py-2 px-4 rounded-lg hover:bg-[#6BA89D] hover:text-white transition duration-300">
//                 إرسال البيانات
//               </button>
//             </form>
//           </div>

//           {/* التبويبات */}
//           <div className="w-full md:w-2/3">
//             <div className="tabs flex gap-4 mb-4">
//               <button onClick={() => setActiveTab("gallery")} 
//                       className={`py-2 px-4 font-semibold rounded-lg border border-[#86C4B8] transition-all 
//                       ${activeTab === "gallery" ? "bg-[#86C4B8] text-white" : "bg-gray-200"}`}>
//                 معرض الأعمال
//               </button>

//               <button onClick={() => setActiveTab("reviews")} 
//                       className={`py-2 px-4 font-semibold rounded-lg border border-[#86C4B8] transition-all 
//                       ${activeTab === "reviews" ? "bg-[#86C4B8] text-white" : "bg-gray-200"}`}>
//                 التقييمات
//               </button>
//             </div>
//             {activeTab === "gallery" ? <ProfileGallery /> : <ProfileReviews />}
//           </div>
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default ProfilePage;
