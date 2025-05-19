import React from "react";
import PhoneIcon from "../assets/PhoneIcon.png";
import MailIcon from "../assets/MailIcon.png";
import WebIcon from "../assets/WebIcon.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-12 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">CONTACT US</h2>
        <div className="w-20 sm:w-24 h-[1px] bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-sm sm:text-base text-gray-400 uppercase leading-relaxed max-w-xl mx-auto">
          OUR TEAM IS READY TO ASSIST YOU 24/7. REACH OUT TO US THROUGH ANY OF THE FOLLOWING CHANNELS.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        {/* Phone */}
        <div className="group">
          <img src={PhoneIcon} alt="Phone Icon" className="w-10 h-10 mx-auto mb-3" />
          <div className="relative inline-block mb-1 pb-1">
            <h4 className="text-sm font-bold tracking-widest">PHONE</h4>
            <span className="block w-20 h-[1px] bg-yellow-500 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-0"></span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Available 24/7<br />For Assistance</p>
        </div>

        {/* Mail */}
        <div className="group">
          <img src={MailIcon} alt="Mail Icon" className="w-10 h-10 mx-auto mb-3" />
          <div className="relative inline-block mb-1 pb-1">
            <h4 className="text-sm font-bold tracking-widest">MAIL</h4>
            <span className="block w-20 h-[1px] bg-yellow-500 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-0"></span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Get A Response<br />Within 24 Hours</p>
        </div>

        {/* Website */}
        <div className="group">
          <img src={WebIcon} alt="Web Icon" className="w-10 h-10 mx-auto mb-3" />
          <div className="relative inline-block mb-1 pb-1">
            <h4 className="text-sm font-bold tracking-widest">WEBSITE</h4>
            <span className="block w-20 h-[1px] bg-yellow-500 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-0"></span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Visit Our<br />Official Website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
