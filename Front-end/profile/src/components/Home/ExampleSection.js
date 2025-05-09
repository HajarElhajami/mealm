import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import img10 from '../Image/1.png';

const ExampleSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* صورة بستايل خاص ومقاس 8rem */}
      <div className="absolute bottom-[-4rem]">
        <ProfileImage
          imgSrc={img10}
          onClick={() => openImageModal(img10)}
          size="8rem"
        />
      </div>

      {/* Modal للصورة المكبرة */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
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
    </div>
  );
};

export default ExampleSection;
