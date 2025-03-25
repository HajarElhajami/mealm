import React from "react";

const ProfileReviews = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">التقييمات والمراجعات</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ id: 1, user: "محمد العمراني", rating: 5, comment: "عمل ممتاز وسريع..." }].map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{review.user}</div>
                    <div className="text-sm text-gray-500">تاريخ التقييم</div>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              <hr className="my-3" />
              <div className="p-0">
                <p className="text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileReviews;
