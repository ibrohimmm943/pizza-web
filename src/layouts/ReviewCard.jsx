import React from "react";
import { motion } from "framer-motion";

const ReviewCard = ({ img, name, position, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center w-full max-w-xs mx-auto"
    >
      <img
        src={img}
        alt={name}
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full object-cover"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm sm:text-base mb-2">{position}</p>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

export default ReviewCard;