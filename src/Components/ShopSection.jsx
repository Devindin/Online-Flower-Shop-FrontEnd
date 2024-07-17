import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import graduation from "../Images/Graduation.jpg";
import Normal from "../Images/Normal.jpg";
import Birthday from "../Images/Birthday.jpg";
import Homedeco from "../Images/Homedeco.jpg";
import Valantine from "../Images/Valantine.jpg";
import Wedding from "../Images/Wedding.jpg";

const ShopSection = () => {
  return (
    <section id="shopSection" className="py-16 bg-white">
      <h2 className="text-4xl font-bold mb-16 text-[#DF2E38] text-center">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src={graduation} alt="Graduation collection" className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-center">Graduation collection</h3>
          <Link to="../GraduationCollection" className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-10 rounded-full mt-4 inline-block">See More</Link>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src={Birthday} alt="Birthday collection" className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-center">Birthday collection</h3>
          <Link to="../BirthdayCollection" className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-10 rounded-full mt-4 inline-block">See More</Link>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src={Wedding} alt="Wedding collection" className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-center">Wedding collection</h3>
          <Link to="../weddingCollection" className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-10 rounded-full mt-4 inline-block">See More</Link>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src={Homedeco} alt="Home Deco" className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-center">Home Deco Collection</h3>
          <Link to="../HomeDeco" className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-10 rounded-full mt-4 inline-block">See More</Link>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src={Valantine} alt="Valentine" className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-center">Valentine Collection</h3>
          <Link to="../valentineCollection" className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-10 rounded-full mt-4 inline-block">See More</Link>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src={Normal} alt="Normal collection" className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-center">Normal collection</h3>
          <Link to="../NormalCollection" className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-10 rounded-full mt-4 inline-block">See More</Link>
        </div>
      </div>
    </section>
  );
}

export default ShopSection;
