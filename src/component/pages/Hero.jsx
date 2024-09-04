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

        < div className="absolute z-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg top-10 right-2 sm:right-6 md:right-12 lg:right-16">
          <span className="text-teal-500 text-sm font-semibold">WORKOUT</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            Understanding Root Canal Treatment When and Why It Is Required...
          </h2>
          <p className="text-gray-500 mt-2">
            Learn the 10 simple moves we have compiled to keep your body fit and healthy.
          </p>

          <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              <p className="text-gray-800 font-medium">Estelle Darcy</p>
              <p className="text-gray-500 text-sm">20 January 2022</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600"
          >
            Read Now
          </a>
        
      
        
        </div>
       
      
      </section>
      </div>
  );
};

export default Hero;
