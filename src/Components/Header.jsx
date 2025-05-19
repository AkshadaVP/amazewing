import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AmazewingLogo.png";

const Header = () => {
  return (
    <nav className="bg-black text-white px-4 sm:px-6 lg:px-14 py-6 sm:py-8 mb-0 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <div className="w-20 flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Amazewing Logo" className="w-full h-auto" />
          </Link>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-6 lg:space-x-12 items-center flex-grow justify-end">
          <Link to="/" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
            HOME
          </Link>
          <a href="/#about" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
            ABOUT US
          </a>
          <a href="/#services" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
            SERVICES
          </a>
          <a href="/#contact" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
            CONTACT
          </a>
          <Link to="/register-jet" className="hover:text-gray-300 transition-colors text-sm sm:text-base">
            REGISTER YOUR JET
          </Link>
        </div>

        {/* Request Quote Button (always visible) */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Link
            to="/quote"
            className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
