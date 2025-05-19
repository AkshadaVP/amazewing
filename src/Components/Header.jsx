import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AmazewingLogo.png";

const Header = () => {
  return (
    <nav className="bg-black text-white px-14 py-8 mb-0 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-20 flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Amazewing Logo" className="w-full h-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 flex-grow justify-end mr-12 items-center">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            HOME
          </Link>
          <a href="/#about" className="hover:text-gray-300 transition-colors">
            ABOUT US
          </a>
          <a href="/#services" className="hover:text-gray-300 transition-colors">
            SERVICES
          </a>
          <a href="/#contact" className="hover:text-gray-300 transition-colors">
            CONTACT
          </a>
          <Link to="/register-jet" className="hover:text-gray-300 transition-colors">
            REGISTER YOUR JET
          </Link>
        </div>

        {/* Request Quote Button */}
        <Link
          to="/quote"
          className="ml-6 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          REQUEST QUOTE
        </Link>
      </div>
    </nav>
  );
};

export default Header;
