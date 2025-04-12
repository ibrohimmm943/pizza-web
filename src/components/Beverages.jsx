import React from "react";
import { motion } from "framer-motion";
import MenuCard from "../layouts/MenuCard";

const Beverages = ({ addToCart }) => {
  const beverageData = [
    { id: 11, img: "/img/360_F_305997146_LjbzZSWyUBNGA03P6LCt34tLXLKc1WPD.jpg", title: "Cola", price: "2.99" },
    { id: 12, img: "/img/lemonade.jpg", title: "Lemonade", price: "3.49" },
    { id: 13, img: "/img/orange-juice-1296x728-feature.jpg", title: "Orange Juice", price: "3.99" },
    { id: 14, img: "/img/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg", title: "Water", price: "1.99" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen container mx-auto flex flex-col justify-center items-center py-10"
    >
      <h1 className="text-3xl font-bold text-black mb-6">Beverages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {beverageData.map((item) => (
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

export default Beverages;