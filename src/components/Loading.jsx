import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-4 border-yellow-400 border-solid rounded-full"
        style={{ borderTopColor: "transparent" }}
      />
      <p className="absolute mt-24 text-lg font-semibold text-gray-800">
        Loading...
      </p>
    </div>
  );
};

export default Loading;