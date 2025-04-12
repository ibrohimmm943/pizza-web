import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; 

const Footer = () => {

  const telegramLink = "https://t.me/Olmaliqxabarlari"; 

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-8 shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
        
        <h3 className="text-2xl font-bold mb-6 tracking-wide text-yellow-400">
          Pizza Shop
        </h3>

       
        <div className="flex space-x-8 mb-6">
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram
              size={36}
              className="cursor-pointer text-pink-500 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            />
          </a>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            <FaFacebook
              size={36}
              className="cursor-pointer text-blue-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            />
          </a>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            <FaYoutube
              size={36}
              className="cursor-pointer text-red-600 hover:text-red-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            />
          </a>
        </div>

        
        <p className="text-sm text-gray-300 tracking-wide">
          © {new Date().getFullYear()} Pizza Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;