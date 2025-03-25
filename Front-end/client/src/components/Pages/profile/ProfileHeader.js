import React from "react";

const ProfileHeader = ({ profileData, onUploadPhoto }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-primary">
        <img src="/placeholder.svg" alt={profileData?.name ?? "اسم غير متوفر"} className="w-full h-full object-cover" />
        </div>
        <button
          className="absolute bottom-0 right-0 rounded-full bg-gray-200 hover:bg-gray-300 p-2"
          onClick={onUploadPhoto}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </button>
      </div>
      <h2 className="text-2xl font-bold text-center">{profileData?.name ?? "مستخدم مجهول"}</h2>
      <p className="text-primary font-semibold">{profileData?.profession ?? "المهنة غير متاحة"}</p>
    </div>
  );
};

export default ProfileHeader;
