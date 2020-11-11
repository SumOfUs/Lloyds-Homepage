import React from "react";

function Header() {
  return (
    <div className="h-100 bg-white">
      <div className="w-full px-6 pb-0 lg:px-12 flex flex-col z-20 relative header-container">
        <div className="text-black text-3xl">
          <img src="/icons/logo.png" alt="lloyds" width={150} />
        </div>
        <div className="flex flex-row my-3 mb-0">
          <div className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center">
            Problem
          </div>
          <div className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center">
            Solution
          </div>
          <div className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center">
            Members
          </div>
          <div className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center">
            Latest
          </div>
          <div className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center">
            Act
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
