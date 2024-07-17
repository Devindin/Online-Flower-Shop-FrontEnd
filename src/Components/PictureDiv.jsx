// src/Components/PictureDiv.js
import React from 'react';


const PictureDiv = ({ image, category, description }) => {
  return (
    <div className="relative w-full h-64">
      <img src={image} alt={category} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute  inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-lg flex items-center">
        <div className="p-4">
          <h3 className="text-[4rem] font-bold text-white">{category}</h3>
          <p className="text-white mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PictureDiv;
