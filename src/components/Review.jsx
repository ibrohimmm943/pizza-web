import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  
  const chefs = [
    {
      img: "/img/pic2.png", 
      name: "Chef John",
      position: "Head Chef",
      description: "With over 15 years of experience, Chef John specializes in crafting authentic Italian pizzas with a modern twist.",
    },
    {
      img: "/img/pic1.png", 
      name: "Chef Maria",
      position: "Pizza Chef",
      description: "Chef Maria is passionate about creating unique pizza flavors using fresh, local ingredients.",
    },
    {
      img: "/img/pic3.png",
      name: "Chef Alex",
      position: "Dessert Chef",
      description: "Chef Alex brings sweetness to Pizza Shop with his delectable dessert creations.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center py-6 md:py-10 bg-white"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">
        Meet Our Chefs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
        {chefs.map((chef, index) => (
          <ReviewCard
            key={index}
            img={chef.img}
            name={chef.name}
            position={chef.position}
            description={chef.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Review;