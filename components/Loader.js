/** @format */

import React from "react";
import { GiLaurels } from "react-icons/gi";

const Loader = ({ size = "default", fullScreen = false }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-16 h-16",
    large: "w-24 h-24",
  };

  const containerClass = fullScreen
    ? "fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClass}>
      <div className='relative'>
        {/* Spinner */}
        <div
          className={`${sizeClasses[size]} border-4 border-accent2/20 border-t-accent1 border-r-accent2 rounded-full animate-spin`}
        />
        {/* Логотип всередині */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <GiLaurels
            className={`${
              size === "small" ? "w-4 h-4" : size === "large" ? "w-12 h-12" : "w-8 h-8"
            } text-accent1 animate-pulse`}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;

