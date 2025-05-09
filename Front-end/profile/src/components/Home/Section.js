
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Image/31.png';
import img2 from '../Image/32.jpeg';
import img10 from '../Image/1.png'

const ClientProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [works, setWorks] = useState([
    // {
    //   id: 1,
    //   title: "تركيب نظام كهربائي لمنزل",
    //   description: "تم تنفيذ هذا العمل في منزل العميل بمدينة الدار البيضاء خلال 3 أيام.",
    //   date: "2 يناير 2023",
    //   likes: 12,
    //   comments: 3,
    //   image: "https://via.placeholder.com/800x400/f3f4f6/374151?text=عمل+كهربائي",
    //   liked: false,
    //   showComments: false,
    //   newComment: '',
    //   commentsList: [
    //     { id: 1, user: "علي محمد", text: "عمل رائع!" },
    //     { id: 2, user: "سميرة أحمد", text: "أحسنت العمل" }
    //   ]
    // },
    // {
    //   id: 2,
    //   title: "إصلاح عطل كهربائي",
    //   description: "إصلاح عطل في فيلا سكنية بمنطقة أنفا.",
    //   date: "15 فبراير 2023",
    //   likes: 8,
    //   comments: 1,
    //   image: "https://via.placeholder.com/800x400/f3f4f6/374151?text=إصلاح+كهربائي",
    //   liked: false,
    //   showComments: false,
    //   newComment: '',
    //   commentsList: [
    //     { id: 1, user: "يوسف الخالد", text: "شكرا على العمل الجيد" }
    //   ]
    // }
  ]);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const handleLike = (workId) => {
  //   setWorks(works.map(work => {
  //     if (work.id === workId) {
  //       return {
  //         ...work,
  //         likes: work.liked ? work.likes - 1 : work.likes + 1,
  //         liked: !work.liked
  //       };
  //     }
  //     return work;
  //   }));
  // };

  // const toggleComments = (workId) => {
  //   setWorks(works.map(work => {
  //     if (work.id === workId) {
  //       return {
  //         ...work,
  //         showComments: !work.showComments
  //       };
  //     }
  //     return work;
  //   }));
  // };

  // const handleCommentChange = (workId, value) => {
  //   setWorks(works.map(work => {
  //     if (work.id === workId) {
  //       return {
  //         ...work,
  //         newComment: value
  //       };
  //     }
  //     return work;
  //   }));
  // };


  return (
    <div className="bg-[#EAF9F6]" dir="rtl">
      {/* Modal للصورة المكبرة */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Enlarged profile" 
              className="max-w-full max-h-screen"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto bg-white overflow-hidden font-sans">
        {/* صورة الغلاف وصورة الملف الشخصي */}
        <div className="relative">
          <img 
            src={img1}
            alt="Cover" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute -bottom-16 right-6">
            <img 
              src={img10} 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-white cursor-pointer transition"
              onClick={() => openImageModal(img10)}
            />
          </div>
        </div>

        {/* معلومات العامل */}
        <div className="pt-20 px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl mb-2 font-bold text-[#3a5a40]">محمد أحمد</h1>
              <p className="text-[#588157] text-lg">كهربائي محترف</p>
            </div>
            <span className="bg-[#CFF5EC] text-[#3a5a40] text- font-medium px-4 py-2 rounded-full">
              موثوق
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#344e41] mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>الدار البيضاء</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#344e41] mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              <span>10 سنوات خبرة</span>
            </div>
            {/* <div className="flex items-center">
              <svg className="w-5 h-5 text-[#6BA89D] mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
              </svg>
              <span>العربية، الفرنسية</span>
            </div> */}
            <div className="flex items-center">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-[#344e41] mx-2">4.8</span>
            </div>
          </div>

          {/* <div className="mt-8 flex space-x-4">
            <a 
              href="tel:+212600000000" 
              className="flex-1 bg-[#406F67] hover:bg-[#6BA89D] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition"
            >
              <FaPhone className="ml-2" />
              <span>اتصل الآن</span>
            </a>
          </div> */}
        </div>

        {/* قسم الخدمات
        <div className="mt-12 px-8">
          <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">الخدمات التي أقدمها</h2>
          
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-[#406F67]">تركيب أنظمة كهربائية</h3>
                <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
                  ابتداءً من 1500 درهم
                </span>
              </div>
              <p className="text-gray-600 mt-3">تركيب أنظمة كهربائية كاملة للمنازل والمكاتب مع ضمان الجودة.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">مدة التنفيذ: 2-3 أيام</span>
                <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
                  اطلب الخدمة
                </button>
              </div>
            </div>
            
            <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-[#406F67]">إصلاح أعطال كهربائية</h3>
                <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
                  ابتداءً من 500 درهم
                </span>
              </div>
              <p className="text-gray-600 mt-3">تشخيص وإصلاح جميع أنواع الأعطال الكهربائية بسرعة واحترافية.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">مدة التنفيذ: 1-2 يوم</span>
                <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
                  اطلب الخدمة
                </button>
              </div>
            </div>
            
            <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-[#406F67]">صيانة دورية</h3>
                <span className="bg-[#EAF9F6] text-[#406F67] px-3 py-1 rounded-full text-sm font-medium">
                  ابتداءً من 800 درهم
                </span>
              </div>
              <p className="text-gray-600 mt-3">صيانة دورية للأنظمة الكهربائية لضمان سلامتها واستمرار عملها.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">مدة التنفيذ: 1 يوم</span>
                <button className="bg-[#406F67] hover:bg-[#6BA89D] text-white py-2 px-4 rounded-lg text-sm transition">
                  اطلب الخدمة
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* قسم الأعمال السابقة مع تفاعل التعليقات واللايكات */}
        {/* <div className="mt-12 px-8">
          <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">أعمالي السابقة</h2>
          
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            {works.map(work => (
              <div key={work.id} className="border border-[#CFF5EC] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={work.image} alt={work.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#406F67]">{work.title}</h3>
                  <p className="text-gray-600 mt-2">{work.description}</p>
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <span>{work.date}</span>
                    <div className="flex space-x-4">
                      <button 
                        className={`flex items-center ${work.liked ? 'text-red-500' : 'text-[#6BA89D]'} hover:text-[#406F67]`}
                        onClick={() => handleLike(work.id)}
                      >
                        <FaHeart className="ml-1" />
                        <span>{work.likes}</span>
                      </button>
                      <button 
                        className="flex items-center text-[#6BA89D] hover:text-[#406F67]"
                        onClick={() => toggleComments(work.id)}
                      >
                        <FaComment className="ml-1" />
                        <span>{work.comments}</span>
                      </button>
                      <button className="flex items-center text-[#6BA89D] hover:text-[#406F67]">
                        <FaShare className="ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  {work.showComments && (
                    <div className="mt-4 border-t pt-4">
                      <div className="space-y-3 mb-4">
                        {work.commentsList.map(comment => (
                          <div key={comment.id} className="bg-gray-50 p-2 rounded">
                            <p className="font-medium text-sm">{comment.user}</p>
                            <p className="text-sm">{comment.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex">
                        <input
                          type="text"
                          value={work.newComment}
                          onChange={(e) => handleCommentChange(work.id, e.target.value)}
                          placeholder="أضف تعليقاً..."
                          className="flex-1 border rounded-r-none p-2 text-sm"
                        />
                        <button 
                          onClick={() => submitComment(work.id)}
                          className="bg-[#406F67] text-white px-3 rounded-l-none text-sm"
                        >
                          نشر
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* قسم التقييمات */}
        {/* <div className="mt-12 px-8">
          <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">تقييمات العملاء</h2>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-bold text-[#406F67]">علي محمد</h4>
                  <div className="text-yellow-400 text-sm mt-1">
                    ★★★★★
                  </div>
                </div>
                <span className="text-sm text-gray-500">منذ أسبوع</span>
              </div>
              <p className="mt-3 text-gray-700">عمل ممتاز ودقة في المواعيد، النظام الكهربائي يعمل بشكل رائع!</p>
            </div>
          </div>
          
          <button className="mt-6 w-full py-3 border-2 border-[#A9E7DA] rounded-lg text-[#406F67] font-medium hover:bg-[#EAF9F6] transition">
            عرض الكل
          </button>
        </div> */}

        {/* معرض الأعمال مع سلايدر */}
        {/* <div className="mt-12 px-8 pb-8">
          <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">معرض الأعمال</h2>
          
          <div className="mt-6">
            <Slider {...sliderSettings}>
              {[
                { id: 1, color: "3b82f6", text: "عمل1" },
                { id: 2, color: "10b981", text: "عمل2" },
                { id: 3, color: "f59e0b", text: "عمل3" },
                { id: 4, color: "ef4444", text: "عمل4" },
                { id: 5, color: "8b5cf6", text: "عمل5" },
                { id: 6, color: "ec4899", text: "عمل6" }
              ].map(item => (
                <div key={item.id} className="px-2">
                  <img 
                    src={`https://via.placeholder.com/300/${item.color}/ffffff?text=${item.text}`}
                    alt={`Work ${item.id}`}
                    className="h-48 w-full object-cover rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ClientProfile;
