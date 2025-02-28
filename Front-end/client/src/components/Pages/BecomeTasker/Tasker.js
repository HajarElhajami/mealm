import React from 'react';
import './stayl.css'; // تأكد من استيراد الملف بشكل صحيح
  
const Tasker = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 m-0 p-0 bg-primaryDarkest overflow-hidden">
      <ul className="relative">
        {[...Array(6)].map((_, index) => (
          <li
            key={index}
            className={`absolute animate-cube ${getAnimationDelay(index)} ${getPosition(index)} ${getBorderColor(index)}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

const getAnimationDelay = (index) => {
  const delays = ['0s', '2s', '4s', '6s', '8s', '10s'];
  return `animate-delay-${delays[index]}`;
};

const getPosition = (index) => {
  const positions = [
    'left-[7vw] top-[0vh]',
    'left-[92vw] top-[57vh]',
    'left-[40vw] top-[19vh]',
    'left-[20vw] top-[40vh]',
    'left-[67vw] top-[86vh]',
    'left-[65vw] top-[80vh]',
  ];
  return positions[index];
};

const getBorderColor = (index) => {
  const borderColors = [
    'border-[#0040C1]',
    'border-[#0046d4]',
    'border-[#0040C1]',
    'border-[#0046d4]',
    'border-[#0046d4]',
    'border-[#0046d4]',
  ];
  return borderColors[index];
};

export default Tasker;
