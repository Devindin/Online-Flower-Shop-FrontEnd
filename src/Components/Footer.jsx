import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../Images/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* First Column */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/2">
          {/* Logo */}
          <div className="mb-8">
            <img src={Logo} alt="BloomJoy Logo" className="h-24 ml-20" />
          </div>
          {/* Address */}
          <div className="text-center md:text-left ml-20 mb-4">
            <p className="text-lg flex items-center">
              <FaMapMarkerAlt className="h-6 w-6 text-red-500 mr-2 mb-20 " />
              <span>
                BloomJoy<br />
                123 Flower Street<br />
                Negombo, Sri Lanka<br />
                Tel: +94 123 456 789
              </span>
            </p>
          </div>
          {/* Email and WhatsApp */}
          <div className="space-y-8">
            <a href="mailto:Bloomjoy2018@gmail.com" className="flex items-center space-x-2 ml-20">
              <FaEnvelope className="h-6 w-6 text-red-500" />
              <span>Bloomjoy2018@gmail.com</span>
            </a>
            <a href="https://wa.me/123456789" className="flex items-center space-x-2 ml-20">
              <FaWhatsapp className="h-6 w-6 text-red-500" />
              <span>BloomJoyWhatsapp.com</span>
            </a>
            <a href="https://www.facebook.com/BloomJoy" className="flex items-center space-x-2 ml-20">
              <FaFacebook className="h-6 w-6 text-red-500" />
              <span>BloomJoyFacebook.com</span>
            </a>
            <a href="https://www.instagram.com/BloomJoy" className="flex items-center space-x-2 ml-20">
              <FaInstagram className="h-6 w-6 text-red-500" />
              <span>BloomJoyInstagram.com</span>
            </a>
          </div>
        </div>
        {/* Second Column */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 mt-12 md:mt-0">
          <div className="space-y-8 ml-20">
           
           
          </div>
          {/* Contact Form */}
          <div className="mt-8 w-full px-20">
            <form className="bg-[#F4535C] p-6 rounded-lg space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                <input type="text" id="name" className="mt-1 block w-full p-2 bg-[#ffffff] border border-[#F4535C] rounded-md text-black" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" className="mt-1 block w-full p-2 bg-[#ffffff]  border border-[#F4535C] rounded-md text-black" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                <textarea id="message" rows="4" className="mt-1 block w-full p-2 bg-[#ffffff]  border border-[#F4535C] rounded-md text-black" required></textarea>
              </div>
              <button type="submit" className="bg-[#91BD3A] text-white font-bold py-2 px-4 rounded">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-24 bg-gradient-to-r from-red-500 via-red-400 to-[#91BD3A] mt-20">
        <h2 className="text-4xl font-bold">Bloomjoy@gmail.com</h2>
      </div>
    </footer>
  );
};

export default Footer;
