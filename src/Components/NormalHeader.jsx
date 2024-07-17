import React, { useContext } from 'react';
import Logo from '../Images/Logo.png';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'; // Fix import statement
import { Link } from 'react-router-dom';

const NormalHeader = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginButtonClick = () => {
    navigate("../Login");
  };

  const isHome = location.pathname === "/";

  return (
    <header className={`bg-white py-6 px-10 flex justify-between items-center ${isHome ? 'fixed top-0 left-0 w-full z-30 shadow-md' : ''}`}>
      <div className="flex items-center">
        <img src={Logo} alt="BloomJoy Logo" className="h-10" />
      </div>
      <nav className="space-x-12 text-center">
        <a href="/" className="text-[#DF2E38] font-bold">Home</a>
        {/* Close the nav tag properly */}
      </nav> {/* Close the nav tag */}
    </header>
  );
};

export default NormalHeader;
