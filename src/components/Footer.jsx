import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const telegramLink = "https://t.me/Olmaliqxabarlari";

  return (
    <footer className="bg-white text-gray-800 py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    
        <div>
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-gray-900">fibo <span className="text-yellow-400">🍝</span></h2>
            <p className="text-sm text-gray-500 mt-2">pasta bar</p>
          </div>
          <h4 className="font-semibold mb-2">Calorie content and composition</h4>
          <h4 className="font-semibold mb-2">We are in social networks</h4>
          <div className="space-y-1 text-gray-600">
            <p>YouTube</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>ВКонтакте</p>
          </div>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Legal information</h4>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Do you have any questions?</h4>
          <div className="grid grid-cols-4 gap-3 mb-4">
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg text-center">
              <FaTelegramPlane className="mx-auto text-blue-500" size={20} />
            </a>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg text-center">
              <FaFacebook className="mx-auto text-blue-600" size={20} />
            </a>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg text-center">
              <FaInstagram className="mx-auto text-pink-500" size={20} />
            </a>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg text-center">
              <FaYoutube className="mx-auto text-red-500" size={20} />
            </a>
          </div>

          <div className="text-yellow-400 text-xl font-bold mb-4">
            998 93 917 07 31
          </div>

          <button className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full text-sm font-medium text-gray-700">
            Request a call
          </button>
        </div>
      </div>

     
      <div className="text-center text-sm text-gray-500 mt-10">
        YaBao All rights reserved. © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
