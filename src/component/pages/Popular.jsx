import React from "react";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Popular Article Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Popular Article</h2>
          <p className="text-gray-500">
            Popular articles are selected based on the number of readers
          </p>
        </div>
        <a href="#" className="text-green-600 font-semibold hover:underline">
          See More Articles <span>&rarr;</span>
        </a>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
        {/* First Row (2 columns on large screens) */}
        <div
          className="md:col-span-2 lg:col-span-2 h-64 bg-gray-200



 "
        >
          <div className="p-4">
            <p className="text-white text-end align-text-bottom text-lg font-semibold">
              The basis of making the correct system design and according to
              needs.
            </p>
            <div className="flex items-center mt-2">
              <div
                className="w-8 h-8 rounded-full bg-gray-200
"
              ></div>
              <div className="ml-3 text-white text-sm">
                <p>Sean Michiels</p>
                <p className="text-gray-300 text-xs">Study Power CEO</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-64 bg-gray-200



 "
        >
          <div className="p-4">
            <p className="text-white font-semibold">
              Refreshing the legacy dayforce employee profile
            </p>
          </div>
        </div>

        {/* Second Row (3 columns on large screens) */}
        < div className="relative shadow-md overflow-hidden">
        <div className="h-32 bg-gray-200"></div>

        <div className="absolute inset-0 p-4 flex items-center justify-center"></div>
            <div className=" bg-opacity-100 p-4 ">
              <h2 className="text-lg font-bold mb-2">
                Refreshing the legacy dayforce employee profile
              </h2>
              <p className="text-sm text-gray-600">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled.
              </p>
            </div>
        
        </div>

        <div
          className="h-64 bg-gray-200



 "
        >
          <div className="p-4">
            <p className="text-white font-semibold">
              Refreshing the legacy dayforce employee profile
            </p>
          </div>
        </div>

        <div
          className="h-64 bg-gray-200



 "
        >
          <div className="p-4">
            <p className="text-white font-semibold">
              Refreshing the legacy dayforce employee profile
            </p>
            <p className="text-white text-sm mt-2">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
