import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

function Business() {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "تركيب نظام كهربائي لمنزل",
      description: "تم تنفيذ هذا العمل في منزل العميل بمدينة الدار البيضاء خلال 3 أيام.",
      date: "2 يناير 2023",
      likes: 12,
      comments: 2,
      image: "https://via.placeholder.com/800x400/f3f4f6/374151?text=عمل+كهربائي",
      liked: false,
      showComments: false,
      newComment: '',
      commentsList: [
        { id: 1, user: "علي محمد", text: "عمل رائع!" },
        { id: 2, user: "سميرة أحمد", text: "أحسنت العمل" }
      ]
    },
    {
      id: 2,
      title: "إصلاح عطل كهربائي",
      description: "إصلاح عطل في فيلا سكنية بمنطقة أنفا.",
      date: "15 فبراير 2023",
      likes: 8,
      comments: 1,
      image: "https://via.placeholder.com/800x400/f3f4f6/374151?text=إصلاح+كهربائي",
      liked: false,
      showComments: false,
      newComment: '',
      commentsList: [
        { id: 1, user: "يوسف الخالد", text: "شكرا على العمل الجيد" }
      ]
    }
  ]);

  const handleLike = (id) => {
    setWorks(prev =>
      prev.map(work =>
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

  const toggleComments = (id) => {
    setWorks(prev =>
      prev.map(work =>
        work.id === id ? { ...work, showComments: !work.showComments } : work
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setWorks(prev =>
      prev.map(work =>
        work.id === id ? { ...work, newComment: value } : work
      )
    );
  };

  const submitComment = (id) => {
    setWorks(prev =>
      prev.map(work => {
        if (work.id === id && work.newComment.trim() !== '') {
          const newComment = {
            id: work.commentsList.length + 1,
            user: "مستخدم مجهول",
            text: work.newComment
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
    <div className="mt-12 px-8">
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
    </div>
  );
}

export default Business;
