import React from 'react';
import flower from '../Images/flower.png';

const GradientBackground = () => {
  return (
    <div className="flex items-center justify-center h-32 bg-gradient-to-r from-red-500 via-red-400 to-[#91BD3A] mt-40 px-10 mb-20">
      <img
        src={flower}
        alt="Bouquet"
        className="w-17 h-auto" // Adjusted the width to make the image smaller
      />
      <h2 className="text-4xl font-bold mb-8 text-[#FFFFFF]">To Shop Your Dreamy Flowers , Visit Our Shop !</h2>
    </div>
  );
};

export default GradientBackground;
