import React from 'react';
import aboutImage from '../Images/floweshop.jpg'; 

const AboutSection = () => {
  return (
    <section id="aboutSection"className="py-16 flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <img src={aboutImage} alt="About BloomJoy" className="w-2/3 md:w-3/4 h-auto rounded-lg shadow-lg ml-10" />
      </div>
      <div className="md:w-1/2 p-6">
        <h2 className="text-4xl font-bold mb-8 text-[#DF2E38]">We are,</h2>
        <p className="text-lg leading-relaxed animate-slide-in">
          At BloomJoy, our journey began in 2020 with a simple yet powerful vision: to spread joy and happiness through the language of flowers. Founded in the heart of Sri Lanka, BloomJoy quickly blossomed into a beloved destination for exquisite floral creations and heartfelt gifts.
          With our roots firmly planted in Negombo, we embarked on a mission to bring the beauty of blooms to every corner of Sri Lanka. Today, we are proud to have expanded our presence, with two flourishing branches in Negombo and Wennappuwa, each serving as a beacon of floral elegance in their communities.<br/><br/>
          
          Whether you're celebrating life's special occasions, expressing sympathy, or simply spreading joy "just because," BloomJoy is here to help you convey your emotions with style and grace. From stunning bouquets to elegant floral designs, our curated selection reflects the finest blooms sourced locally and internationally.
          Thank you for being a part of our journey. Together, let's continue to spread joy, one flower at a time. Welcome to BloomJoy.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
