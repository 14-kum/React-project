import React, { useState } from "react";

const Crousel = () => {
  const images = [
    {
      src: "src/assets/hero.png",
      topContent: "This is the top content for Slide 1",
      bottomContent: "Health Tips for Slide 1",
    },
    {
      src: "src/assets/img2.jpg",
      topContent: "This is the top content for Slide 2",
      bottomContent: "Health Tips for Slide 2",
    },
    {
      src: "src/assets/img3.jpg",
      topContent: "This is the top content for Slide 3",
      bottomContent: "Health Tips for Slide 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative z-10 flex items-center justify-center h-[90vh] mx-auto">
      <div className="relative inset-0 h-full w-full overflow-hidden">
        {/* Carousel Images and Content */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              {/* Image */}
              <img
                src={img.src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />

              {/* Top-Right Content Box */}
              <div className="absolute top-0 right-0 flex items-start justify-end p-10 bg-opacity-0 h-full w-full">
                <div className="text-black text-center p-4 h-80 md:p-8 bg-white bg-opacity-100 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome to Our Carousel
                  </h2>
                  <p className="text-lg">{img.topContent}</p>
                  <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Bottom-Right Content Box (positioned on the screen, content changes with slide) */}
        <div className="absolute bottom-10 right-10 p-4 bg-opacity-0 h-auto w-auto">
          <div className="bg-white bg-opacity-100 rounded-lg shadow-lg p-6 md:p-8 h-auto max-w-xs">
            <p className="text-indigo-500 uppercase font-bold tracking-wide">
              {images[currentIndex].bottomContent}
            </p>
            <h2 className="text-xl font-bold mb-2">
              Discover 5 Easy Tips for a Healthier Life
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Learn easy and effective ways to improve your health every
              day.
            </p>
            <div className="flex items-center mb-4">
              <div className="rounded-full h-8 w-8 bg-gray-300"></div>
              <div className="ml-3">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">22 February 2022</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full bg-gray-300 ${
                index === currentIndex ? "bg-gray-800" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousel;
