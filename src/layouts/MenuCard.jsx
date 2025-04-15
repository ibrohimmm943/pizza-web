import React from "react";
import Button from "./Button";

const MenuCard = ({ id, img, title, price, addToCart }) => {
  const handleOrder = () => {
    addToCart({ id, img, title, price: parseFloat(price) });
  };



  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={img} alt="pizza" className="w-40 h-40 object-cover rounded-full" />
      <h3 className="text-lg font-semibold text-black mt-4">{title}</h3>
      <p className="text-sm text-gray-500 text-center mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="flex items-center justify-between w-full mt-4">
        <span className="text-lg font-bold text-gray-800">from ${price}</span>
        <Button title="Add to Cart" onClick={handleOrder} />
      </div>
    </div>
  );
};

export default MenuCard;