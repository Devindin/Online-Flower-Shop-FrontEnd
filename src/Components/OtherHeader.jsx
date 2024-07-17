// src/Components/Header.jsx
import React, { useContext } from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const OtherHeader = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("../Login"); // Corrected the navigation path
  };

  return (
    <header className="bg-white py-6 px-10 flex justify-between items-center relative z-30">
      <div className="flex items-center">
        <img src={Logo} alt="BloomJoy Logo" className="h-10" />
      </div>
      <nav className="space-x-12">
        <a href="/" className="text-[#91BD3A] font-bold">Home</a>
      </nav>
      <div className="flex items-center">
        <button
          onClick={handleLoginButtonClick} // Updated the event handler
          className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-8 rounded-full mr-4"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default OtherHeader;
