import React from "react";
import { motion } from "framer-motion";
import MenuCard from "../layouts/MenuCard";

const Menu = ({ addToCart }) => {
  const menuData = [
    { id: 1, img: "/img/menu1.jpg", title: "Margarita Marvel", price: "16.99" },
    { id: 2, img: "/img/menu2.jpg", title: "Pesto Paradise", price: "18.99" },
    { id: 3, img: "/img/menu3.jpg", title: "Hawaiian Bliss", price: "14.99" },
    { id: 4, img: "/img/menu4.jpg", title: "Truffle Treasures", price: "15.99" },
    { id: 5, img: "/img/menu5.jpg", title: "Farmhouse Harvest", price: "18.99" },
    { id: 6, img: "/img/menu6.jpg", title: "Cheese Frenzy", price: "13.99" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen container mx-auto flex flex-col justify-center items-center pt-20"
    >
      <h1 className="text-3xl font-bold text-black mb-6 mt-10">Pasta</h1>
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

export default Menu;
