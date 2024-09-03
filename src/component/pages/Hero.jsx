// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className=" z-10 flex items-center justify-center h-full mx-auto">
      <section className="  inset-0  overflow-hidden">
        <img
          src="src/assets/hero.png"
          alt="Hero Image"
          className="w-full h-full object-content"
        />

<div className="absolute inset-0 flex items-center justify-center">
        <div className="p-6 sm:p-8 bg-white bg-opacity-100 shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-bold">
            Understanding Root Canal Treatment: When and Why It Is Required...
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Your content goes here. This content box overlays on the hero section with a white background.
          </p>
        </div>
      </div>
    
      </section>
      
    </div>

    
  );
};

export default Hero;
