import React from "react";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center h-full mx-auto">
      <section className="inset-0 overflow-hidden relative w-full h-full">
        {/* Background Image */}
        <img
          src="src/assets/hero.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />

        
      </section>
    </div>
  );
};

export default Hero;







