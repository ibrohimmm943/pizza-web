import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../layouts/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  
  const images = [
    "/img/image5.png",
    "/img/image 31.png",
  ];

  
  const handleNext = () => {
    setDirection(1); 
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  
  const handlePrev = () => {
    setDirection(-1); 
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 5000); 

    
    return () => clearInterval(interval);
  }, [images.length]);

  
  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 100 : -100, 
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100, 
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center pt-16 sm:pt-20"
    >
      <div className="w-full max-w-[90vw] sm:max-w-4xl h-[300px] sm:h-[400px] flex flex-col items-center justify-center bg-yellow-400 rounded-3xl p-4 sm:p-6 relative">
        <div className="relative w-full h-full flex items-center justify-center">
         
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="banner"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="absolute w-full max-w-[80%] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain transform-origin-center"
            />
          </AnimatePresence>

         
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
          >
            <FaArrowLeft className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />
          </button>

         
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
          >
            <FaArrowRight className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <div className="flex flex-col items-center">
          <img
            src="/img/menu1.jpg"
            alt="pizza"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300 transform-origin-center"
          />
          <span className="text-xs sm:text-sm text-gray-600 mt-1">Margarita</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/menu2.jpg"
            alt="pizza"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300 transform-origin-center"
          />
          <span className="text-xs sm:text-sm text-gray-600 mt-1">Pesto</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/menu3.jpg"
            alt="pizza"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300 transform-origin-center"
          />
          <span className="text-xs sm:text-sm text-gray-600 mt-1">Hawaiian</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/menu4.jpg"
            alt="pizza"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300 transform-origin-center"
          />
          <span className="text-xs sm:text-sm text-gray-600 mt-1">Truffle</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;