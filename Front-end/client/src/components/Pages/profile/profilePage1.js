
// import ProfilePage from './ProfilePage';
// import ProfileHeader from './ProfileHeader';
// import ProfileGallery from './ProfileGallery';
// import ProfileReviews from './ProfileReviews';

// function PagesBecome() {
//   return (
//     <div>
//       <ProfilePage/>
//       {/* <ProfileHeader/>
//       <ProfileGallery/>
//       <ProfileReviews/> */}
//     </div>
//   );
// }

// export default PagesBecome;
























import React, { useState, useEffect } from 'react';
import { FaUser, FaTools, FaStar, FaComments, FaEdit, FaCamera, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const WorkerProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [workerData, setWorkerData] = useState({
    name: 'محمد أحمد',
    profession: 'كهربائي',
    rating: 4.7,
    reviews: 42,
    location: 'الدار البيضاء',
    phone: '+212612345678',
    email: 'mohamed@example.com',
    bio: 'كهربائي محترف مع أكثر من 10 سنوات من الخبرة في التركيبات الكهربائية المنزلية والتجارية. متخصص في إصلاح الأعطال والتركيبات الجديدة.',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    services: [
      { id: 1, name: 'تركيب أنظمة كهربائية', price: '500-1000 درهم' },
      { id: 2, name: 'إصلاح أعطال كهربائية', price: '300-800 درهم' },
      { id: 3, name: 'صيانة دورية', price: '200-500 درهم' },
    ],
    portfolio: [
      { id: 1, image: 'https://via.placeholder.com/300x200?text=عمل+1', title: 'تركيب كهرباء منزل' },
      { id: 2, image: 'https://via.placeholder.com/300x200?text=عمل+2', title: 'إصلاح عطل في فيلا' },
      { id: 3, image: 'https://via.placeholder.com/300x200?text=عمل+3', title: 'صيانة مكتب' },
    ],
    reviewsList: [
      { id: 1, client: 'علي حسن', rating: 5, comment: 'عمل ممتاز ودقيق في الموعد المحدد', date: '2023-05-15' },
      { id: 2, client: 'سميرة خالد', rating: 4, comment: 'جيد ولكن تأخر قليلاً في الوصول', date: '2023-04-22' },
      { id: 3, client: 'يوسف محمد', rating: 5, comment: 'محترف جداً وأسعار معقولة', date: '2023-03-10' },
    ]
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({...workerData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkerData(formData);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">صفحة العامل</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
            تسجيل الخروج
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            {/* Profile Image */}
            <div className="md:w-1/3 p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <img 
                  src={workerData.profileImage} 
                  alt="صورة العامل" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-100"
                />
                {editMode && (
                  <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                    <FaCamera />
                  </button>
                )}
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">{workerData.name}</h2>
                <p className="text-blue-600 font-medium">{workerData.profession}</p>
                
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(workerData.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-1">({workerData.reviews})</span>
                </div>
                
                <div className="mt-4 flex space-x-4 justify-center">
                  <button 
                    onClick={() => setEditMode(!editMode)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition"
                  >
                    <FaEdit className="ml-1" /> {editMode ? 'إلغاء' : 'تعديل'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="md:w-2/3 p-6">
              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-1">الاسم الكامل</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">المهنة</label>
                      <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">رقم الهاتف</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-1">الموقع</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-1">نبذة عنك</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      حفظ التغييرات
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">معلومات الاتصال</h3>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-700">
                        <FaPhone className="ml-2 text-blue-500" /> {workerData.phone}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <FaEnvelope className="ml-2 text-blue-500" /> {workerData.email}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <FaMapMarkerAlt className="ml-2 text-blue-500" /> {workerData.location}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">نبذة عني</h3>
                    <p className="text-gray-700 leading-relaxed">{workerData.bio}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('services')}
              className={`py-4 px-1 font-medium text-sm border-b-2 transition ${activeTab === 'services' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <FaTools className="inline ml-1" /> الخدمات
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`py-4 px-1 font-medium text-sm border-b-2 transition ${activeTab === 'portfolio' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <FaCamera className="inline ml-1" /> أعمالي
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 font-medium text-sm border-b-2 transition ${activeTab === 'reviews' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <FaComments className="inline ml-1" /> تقييمات الزبناء
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">الخدمات التي أقدمها</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workerData.services.map(service => (
                  <div key={service.id} className="border rounded-lg p-4 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-blue-600 font-medium">السعر: {service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">معرض أعمالي</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workerData.portfolio.map(item => (
                  <div key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">تقييمات الزبناء</h2>
              <div className="space-y-6">
                {workerData.reviewsList.map(review => (
                  <div key={review.id} className="border-b pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{review.client}</h3>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{review.comment}</p>
                    <p className="text-gray-400 text-sm">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 جميع الحقوق محفوظة - منصة العمال المحترفين</p>
        </div>
      </footer> */}
    </div>
  );
};

export default WorkerProfile;