import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggleCart, cart }) => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed w-full z-10 py-3 bg-white shadow-md">
      <nav className="container mx-auto flex flex-row justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <Link to="/">
            <h1 className="font-bold text-2xl text-black">Fibo pasta bar</h1>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-4 text-black font-medium text-sm">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span>Uzbekistan</span>
          </div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/speciality"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Speciality
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/dessert"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Dessert
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/antipasta"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Antipasta
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/combo"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Combo
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/soups"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Soups
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/beverages"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Beverages
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/about"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/menu"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Menu
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/review"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Review
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/location"
              className="relative cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Location
            </Link>
          </motion.div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-black font-semibold">+998 99 123 45 67</span>
          <div
            className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-yellow-600 transition-colors duration-300"
            onClick={toggleCart}
          >
            <FaShoppingCart />
            <span>{cart.length}</span>
          </div>
          <Button title="Sign Up" />
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menu ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden flex flex-col absolute bg-white left-0 top-16 font-medium text-lg text-center pt-8 pb-4 gap-4 w-full h-fit"
      >
        <Link
          to="/"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/speciality"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Speciality
        </Link>
        <Link
          to="/dessert"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Dessert
        </Link>
        <Link
          to="/antipasta"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Antipasta
        </Link>
        <Link
          to="/combo"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Combo
        </Link>
        <Link
          to="/soups"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Soups
        </Link>
        <Link
          to="/beverages"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Beverages
        </Link>
        <Link
          to="/about"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/menu"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link
          to="/review"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Review
        </Link>
        <Link
          to="/location"
          className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
          onClick={closeMenu}
        >
          Location
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Button title="Sign Up" />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;