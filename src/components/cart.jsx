import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Cart = ({ cart, updateQuantity, toggleCart, clearCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 right-0 w-full md:w-96 bg-white shadow-lg z-20 p-6 rounded-b-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Your Cart</h2>
        <AiOutlineClose
          size={24}
          className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors duration-300"
          onClick={toggleCart}
        />
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold text-black">
            Total: ${calculateTotalPrice()}
          </p>
          <button
            onClick={handleCheckout}
            className="w-full mt-2 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Checkout
          </button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <h2 className="text-xl font-bold mb-4">Order Confirmation</h2>
            <p>Thank you for your order!</p>
            <p>Total Amount: ${calculateTotalPrice()}</p>
            <p>Your order has been placed successfully.</p>
            <button
              onClick={() => {
                setIsModalOpen(false);
                clearCart();
                setShowThankYou(true);
                setTimeout(() => setShowThankYou(false), 3000); 
              }}
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Close
            </button>
          </Modal>
        </div>
      )}

      
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 text-center text-green-600 font-semibold"
        >
          Thanks for your purchase!
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cart;

