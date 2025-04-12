import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Location
        </h2>
        <div className="flex justify-center mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.963!2d69.240073!3d41.299496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0J%2FRgNC10L3QsA%3D%3D!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, maxWidth: "800px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fibo Pasta Bar Location"
          ></iframe>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Visit Us
          </h3>
          <p className="text-gray-600 mb-2">📍 123 Pizza Street, Food City</p>
          <p className="text-gray-600 mb-2">📞 +998 99 123 45 67</p>
          <p className="text-gray-600 mb-2">📧 info@pizzashop.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;