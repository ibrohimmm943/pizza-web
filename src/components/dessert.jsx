import React from "react";
import { motion } from "framer-motion";
import MenuCard from "../layouts/MenuCard";

const Dessert = ({ addToCart }) => {
  const menuData = [
    { id: 7, img: "/img/menu7.jpg", title: "Margarita Marvel", price: "16.99" },
    { id: 8, img: "/img/menu8.jpg", title: "Pesto Paradise", price: "18.99" },
    { id: 9, img: "/img/menu9.jpg", title: "Hawaiian Bliss", price: "14.99" },
    { id: 10, img: "/img/menu10.jpg", title: "Truffle Treasures", price: "15.99" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen container mx-auto flex flex-col justify-center items-center py-10"
    >
      <h1 className="text-3xl font-bold text-black mb-6">Dessert</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuData.map((item) => (
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

export default Dessert;