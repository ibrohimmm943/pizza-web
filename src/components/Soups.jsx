import React from "react";
import { motion } from "framer-motion";
import MenuCard from "../layouts/MenuCard";

const Soups = ({ addToCart }) => {
  const soupData = [
    { id: 15, img: "/img/Tomato-Soup-3-760x1140.webp", title: "Tomato Basil Soup", price: "5.99" },
    { id: 16, img: "/img/360_F_82087975_DG2YNlNAQfZySfsiQASz3PQyJXlpzqp3.jpg", title: "Creamy Mushroom Soup", price: "6.49" },
    { id: 17, img: "img/pexels-photo-539451.jpeg", title: "Chicken Noodle Soup", price: "6.99" },
    { id: 18, img: "/img/istockphoto-494154858-612x612.jpg", title: "Lentil Soup", price: "5.49" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen container mx-auto flex flex-col justify-center items-center py-10"
    >
      <h1 className="text-3xl font-bold text-black mb-6">Soups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {soupData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Soups;