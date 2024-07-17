import React from 'react';
import Homeimg from '../Images/Homeimg2.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen mb-20 hero-bg"
      style={{ backgroundImage: `url(${Homeimg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 flex h-full">
        {/* Left Column */}
        <div className="w-1/2"></div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col justify-center items-start text-left text-white pl-20">
          <h1 className="text-[5rem] font-bold text-[#DF2E38] zoom-animation">BloomJoy</h1>
          <p className="mt-4 text-lg tracking-wide leading-relaxed italic zoom-animation">
            "Welcome to BloomJoy your blooming destination for exquisite <br />
            flowers and heartfelt arrangements. Whether you're celebrating
            love, <br />expressing sympathy, or simply brightening someone's
            day, <br />our fresh blooms and artistic designs speak volumes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
