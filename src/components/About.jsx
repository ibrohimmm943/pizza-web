import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-6 md:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">
              Welcome to Pizza Shop
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Pizza Shop has been delighting customers with delicious pizzas since 2015. Our main goal is to provide you with an unforgettable taste experience with every pizza. We use only the freshest ingredients, and each pizza is crafted with love and care.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4">
              Our restaurant offers a cozy family-friendly atmosphere, making it the perfect place to spend quality time with friends and loved ones. We’re here every day with new recipes and special offers to welcome you!
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/img/menu7.jpg"
              alt="Pizza Shop"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

     
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4 text-center">
            Our Mission
          </h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center">
            Our mission is to deliver the best service and the most delicious pizzas to every customer. We prioritize quality, freshness, and customer satisfaction above all.
          </p>
        </div>

        
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">📍 123 Pizza Street, Food City</p>
          <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">📞 +998 99 123 45 67</p>
          <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">📧 info@pizzashop.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;