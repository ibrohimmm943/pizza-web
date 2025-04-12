import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import Dessert from "./components/Dessert.jsx";
import Antipasta from "./components/Antipasta.jsx";
import Combo from "./components/Combo.jsx";
import Beverages from "./components/Beverages.jsx";
import About from "./components/About.jsx";
import OtherMenu from "./components/OtherMenu.jsx";
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/cart.jsx";
import Soups from "./components/Soups";
import Location from "./components/Location.jsx"; 
import Loading from "./components/Loading.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      toast.success(`${item.title} quantity updated in cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      toast.success(`${item.title} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      const removedItem = cart.find((item) => item.id === id);
      setCart(cart.filter((item) => item.id !== id));
      toast.warn(`${removedItem.title} removed from cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
      toast.info(`Quantity updated!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar toggleCart={toggleCart} cart={cart} />
            {isCartOpen && (
              <Cart cart={cart} updateQuantity={updateQuantity} toggleCart={toggleCart} />
            )}
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/speciality" element={<Menu addToCart={addToCart} />} />
                <Route path="/dessert" element={<Dessert addToCart={addToCart} />} />
                <Route path="/antipasta" element={<Antipasta addToCart={addToCart} />} />
                <Route path="/combo" element={<Combo addToCart={addToCart} />} />
                <Route path="/beverages" element={<Beverages addToCart={addToCart} />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<OtherMenu addToCart={addToCart} />} />
                <Route path="/review" element={<Review />} />
                <Route path="/location" element={<Location />} /> 
                <Route path="/soups" element={<Soups addToCart={addToCart} />} />
              </Routes>
            </AnimatePresence>
            <Footer />
            <ToastContainer />
          </>
        )}
      </div>
    </Router>
  );
};

console.log("Testing Git commit");

export default App;