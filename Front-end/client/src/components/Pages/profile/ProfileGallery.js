// import React from "react";
// import { toast } from 'react-toastify';

// const ProfileGallery = () => {
//   const handleUploadPhoto = () => {
//     toast.success('تم رفع الصورة بنجاح'); // استخدم toast مباشرة من react-toastify
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <h3 className="text-xl font-semibold">معرض أعمالي</h3>
//           <button
//             className="bg-primaryDarkest hover:bg-primaryMid hover:text-primaryDarkest text-white px-4 py-2 rounded-md flex items-center gap-2"
//             onClick={handleUploadPhoto}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M12 5v14M5 12h14" />
//             </svg>
//             إضافة صورة
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[1, 2, 3, 4].map((id) => (
//             <div key={id} className="bg-white border rounded-lg overflow-hidden group relative">
//               <div className="relative aspect-square">
//                 <img src="/placeholder.svg" alt="صورة عمل" className="w-full h-full object-cover" />
//                 <button
//                   className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                   onClick={() => {
//                     toast.error('تم حذف الصورة بنجاح');
//                   }}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <line x1="18" y1="6" x2="6" y2="18" />
//                     <line x1="6" y1="6" x2="18" y2="18" />
//                   </svg>
//                 </button>
//               </div>
//               <div className="p-3">
//                 <p className="font-medium text-sm truncate">تركيب كهرباء منزلية</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileGallery;







































// import React from "react";

// const ProfileGallery = ({ services }) => (
//   <div className="bg-white p-6 rounded-2xl shadow">
//     <h3 className="text-xl font-bold mb-4">خدماتي وأعمالي</h3>
//     {services.length === 0 ? (
//       <p className="text-gray-500">لم يتم إضافة خدمات بعد.</p>
//     ) : (
//       <div className="grid grid-cols-2 gap-4">
//         {services.map((service, index) => (
//           <div key={index} className="border rounded p-2">
//             <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded mb-2" />
//             <h4 className="font-semibold">{service.title}</h4>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );

// export default ProfileGallery;
