import React from "react";

const Button = ({ title, onClick }) => {
  const handleClick = () => {
    if (title === "Read More") {
      alert("More information coming soon!");
    } else if (title === "Sign Up") {
      alert("Sign Up functionality will be added soon!");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-200 ease-linear"
    >
      {title}
    </button>
  );
};

export default Button;