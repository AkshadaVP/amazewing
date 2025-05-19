import React from "react";
import PhoneIcon from "../assets/PhoneIcon.png";
import MailIcon from "../assets/MailIcon.png";
import WebIcon from "../assets/WebIcon.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">CONTACT US</h2>
        <div className="w-24 h-[0.5px] bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-15px text-gray-400 uppercase">
          OUR TEAM IS READY TO ASSIST YOU 24/7. REACH OUT TO US THROUGH ANY OF THE FOLLOWING CHANNELS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-68 max-w-5xl mx-auto text-center">
        {/* Phone */}
        <div className="group">
          <img src={PhoneIcon} alt="Phone Icon" className="w-12 h-12 mx-auto mb-2" />
          <div className="relative inline-block mb-1 pb-1">
            <h4 className="text-10px font-bold tracking-wide">PHONE</h4>
            <span className="block w-24 h-[0.5px] bg-yellow-500 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-0"></span>
          </div>
          <p className="text-base text-gray-400">Available 24/7<br />For Assistance</p>
        </div>

        {/* Mail */}
        <div className="group">
          <img src={MailIcon} alt="Mail Icon" className="w-12 h-12 mx-auto mb-2" />
          <div className="relative inline-block mb-1 pb-1">
            <h4 className="text-10px font-bold tracking-wide">MAIL</h4>
            <span className="block w-24 h-[0.5px] bg-yellow-500 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-0"></span>
          </div>
          <p className="text-base text-gray-400">Get A Response<br />Within 24 Hours</p>
        </div>

        {/* Website */}
        <div className="group">
          <img src={WebIcon} alt="Web Icon" className="w-12 h-12 mx-auto mb-2" />
          <div className="relative inline-block mb-1 pb-1">
            <h4 className="text-10px font-bold tracking-wide">WEBSITE</h4>
            <span className="block w-24 h-[0.5px] bg-yellow-500 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-0"></span>
          </div>
          <p className="text-base text-gray-400">Visit Our<br />Official Website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
