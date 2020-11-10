import React from "react";

function Header() {
  return (
    <div className="h-100 bg-white">
      <div className="w-full px-6 pb-0 lg:px-12 flex flex-col z-20 relative header-container">
        <div className="text-black text-3xl">
          <img src="/icons/logo.png" alt="lloyds" />
        </div>
        <div className="flex flex-row my-3 mb-0">
          <div className="w-48 py-4 mx-6 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-lg font-bold flex justify-center items-center">
            Problem
          </div>
          <div className="w-48 py-4 mx-6 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-lg font-bold flex justify-center items-center">
            Solution
          </div>
          <div className="w-48 py-4 mx-6 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-lg font-bold flex justify-center items-center">
            Latest
          </div>
          <div className="w-48 py-4 mx-6 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-lg font-bold flex justify-center items-center">
            Act
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
