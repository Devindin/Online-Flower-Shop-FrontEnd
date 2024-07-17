// src/Components/Header.jsx
import React, { useContext } from 'react';
import Logo from '../Images/Logo.png';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Header = () => {
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
      <nav className="space-x-12">
        <a href="/" className="text-[#DF2E38] font-bold">Home</a>
        <ScrollLink
          to="shopSection"
          smooth={true}
          duration={500}
          className="text-[#DF2E38] font-bold cursor-pointer"
        >
          Categories
        </ScrollLink>
        <ScrollLink
          to="servicesSection"
          smooth={true}
          duration={500}
          className="text-[#DF2E38] font-bold cursor-pointer"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="aboutSection"
          smooth={true}
          duration={500}
          className="text-[#DF2E38] font-bold cursor-pointer"
        >
          About Us
        </ScrollLink>
        <ScrollLink
          to="reviewsSection"
          smooth={true}
          duration={500}
          className="text-[#DF2E38] font-bold cursor-pointer"
        >
          Reviews
        </ScrollLink>
      </nav>
      <div className="flex items-center">
        <button
          onClick={handleLoginButtonClick}
          className="bg-gradient-to-r from-[#91BD3A] to-[#5D9C59] text-white py-2 px-8 rounded-full mr-4"
        >
          Login
        </button>
        <div className="relative">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            {cart.length > 0 && (
              <span className="absolute top-[-7px] right-[-4px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
