
















































































import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaComment, FaRegComment, FaShare, FaRegBookmark, FaBookmark , FaArrowRight} from 'react-icons/fa';

const Business = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "تركيب نظام كهربائي فاخر",
      description: "تصميم وتنفيذ نظام كهربائي متكامل لمنزل مساحة 400م² بتقنيات ألمانية",
      date: "2 يناير 2023",
      likes: 24,
      comments: 5,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      liked: false,
      saved: false,
      showComments: false,
      newComment: '',
      commentsList: [
        { id: 1, user: "المهندس علي", text: "الإتقان في التفاصيل واضح جداً 👌", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: 2, user: "د. سميرة", text: "التنظيم ممتاز والأسلاك مرتبة بشكل احترافي", avatar: "https://randomuser.me/api/portraits/women/44.jpg" }
      ]
    },
    {
      id: 2,
      title: "ترقية نظام كهربائي تجاري",
      description: "تحديث النظام الكهربائي لمجمع تجاري قديم مع الحفاظ على البنية التحتية",
      date: "15 فبراير 2023",
      likes: 18,
      comments: 3,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      liked: false,
      saved: false,
      showComments: false,
      newComment: '',
      commentsList: [
        { id: 1, user: "م. يوسف", text: "الحلول الإبداعية في تخطيط المسارات ممتازة", avatar: "https://randomuser.me/api/portraits/men/75.jpg" }
      ]
    }
  ]);

  // دالة الإعجاب
  const handleLike = (id) => {
    setWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id
          ? {
              ...work,
              liked: !work.liked,
              likes: work.liked ? work.likes - 1 : work.likes + 1
            }
          : work
      )
    );
  };

  // دالة الحفظ
  const handleSave = (id) => {
    setWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id
          ? { ...work, saved: !work.saved }
          : work
      )
    );
  };

  // دالة عرض/إخفاء التعليقات
  const toggleComments = (id) => {
    setWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id
          ? { ...work, showComments: !work.showComments }
          : work
      )
    );
  };

  // دالة تغيير التعليق
  const handleCommentChange = (id, value) => {
    setWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id
          ? { ...work, newComment: value }
          : work
      )
    );
  };

  // دالة إرسال التعليق
  const submitComment = (id) => {
    setWorks(prevWorks =>
      prevWorks.map(work => {
        if (work.id === id && work.newComment.trim() !== '') {
          const newComment = {
            id: work.commentsList.length + 1,
            user: 'مستخدم جديد',
            text: work.newComment.trim(),
            avatar: 'https://randomuser.me/api/portraits/lego/5.jpg'
          };
          return {
            ...work,
            commentsList: [...work.commentsList, newComment],
            comments: work.comments + 1,
            newComment: ''
          };
        }
        return work;
      })
    );
  };

  return (
    <div className="min-h-screen py-8 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            معرض أعمالي الاحترافية
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            اطّلع على جديد مشاريعي في تقديم خدمات احترافية ومتكاملة
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {works.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -15 }}
              className="relative group perspective-1000"
            >
              {/* الطبقة الخلفية ثلاثية الأبعاد */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-3xl shadow-2xl transform rotate-x-15 -rotate-y-3 -z-10"
                initial={{ opacity: 0.3, y: 30 }}
                whileHover={{ opacity: 0.5, y: 40 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* البطاقة الرئيسية */}
              <motion.div
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-8 border-white transform-style-preserve-3d"
                whileHover={{ rotateY: 5, rotateX: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* شريط العنوان */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-emerald-600 py-2 px-6 text-white font-bold text-lg z-10">
                  {work.title}
                </div>
                
                {/* الصورة مع تأثير زجاجي */}
                <motion.div 
                  className="relative h-72 overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                >
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-light">{work.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs bg-black/30 px-2 py-1 rounded-full">{work.date}</span>
                      <button 
                        onClick={() => handleSave(work.id)}
                        className="text-white/80 hover:text-white"
                      >
                        {work.saved ? <FaBookmark /> : <FaRegBookmark />}
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* تفاعلات البطاقة */}
                <motion.div 
                  className="p-6 bg-white"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                >
                  {/* أزرار التفاعل */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-6">
                      <motion.button
                        className={`flex items-center gap-1 ${work.liked ? 'text-red-500' : ' text-gray-500'} hover:text-red-500`}
                        onClick={() => handleLike(work.id)}
                        whileTap={{ scale: 0.8 }}
                      >
                        {work.liked ? <FaHeart className="text-xl" /> : <FaRegHeart className="text-xl" />}
                        <span className="ml-3">{work.likes}</span>
                      </motion.button>
                      
                      <motion.button
                        className="flex gap-1 items-center text-gray-500 hover:text-blue-500"
                        onClick={() => toggleComments(work.id)}
                        whileTap={{ scale: 0.8 }}
                      >
                        {work.showComments ? <FaComment className="text-xl" /> : <FaRegComment className="text-xl" />}
                        <span className="ml-3">{work.comments}</span>
                      </motion.button>
                    </div>
                    
                    <motion.button
                      className="text-gray-500 hover:text-emerald-500"
                      whileHover={{ rotate: 15 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <FaShare className="text-xl" />
                    </motion.button>
                  </div>

                  {/* قسم التعليقات */}
                  {work.showComments && (
                    <motion.div
                      className="mt-6 pt-4 border-t border-gray-100"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4 mb-4">
                        {work.commentsList.map((comment) => (
                          <motion.div
                            key={comment.id}
                            className="flex items-start space-x-3 bg-gray-50 p-3 rounded-xl"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <img 
                              src={comment.avatar} 
                              alt={comment.user} 
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium text-sm text-gray-800">{comment.user}</p>
                              <p className="text-sm text-gray-600">{comment.text}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="flex bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <input
                          type="text"
                          value={work.newComment}
                          onChange={(e) => handleCommentChange(work.id, e.target.value)}
                          placeholder="أضف تعليقك..."
                          className="flex-1 bg-transparent p-3 text-sm focus:outline-none"
                        />
                        <motion.button
                          onClick={() => submitComment(work.id)}
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          نشر
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.button 
              className=" bg-gradient-to-br from-blue-500 to-emerald-600 text-gray-800 px-10 py-4 mt-20 rounded-full font-medium text-lg flex items-center gap-3 mx-auto group"
              whileHover={{ 
                backgroundColor: "#f8fafc",
                transition: { duration: 0.3 }
              }}
            >
              <span> عرض جميع الأعمال</span>
              <motion.div
                className="group-hover:translate-x-2 transition-transform"
                animate={{ 
                  x: [0, 9, 0],
                  transition: { duration: 2, repeat: Infinity } 
                }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.button>
    </div>
  );
};

export default Business;