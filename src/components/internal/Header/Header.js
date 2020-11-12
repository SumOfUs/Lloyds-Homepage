import React from "react";

function Header() {
  return (
    <div className="h-100 bg-white">
      <div className="w-full px-6 pb-0 lg:px-12 flex flex-col z-20 relative header-container">
        <a className="text-black text-3xl" href="/">
          <img src="/icons/logo.png" alt="lloyds" width={150} />
        </a>
        <div className="flex flex-row my-3 mb-0">
          <a
            className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center hover:text-blue-1200"
            href="/problem"
          >
            Problem
          </a>
          <a
            className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center hover:text-blue-1200"
            href="/solution"
          >
            Solution
          </a>
          <a
            className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center hover:text-blue-1200"
            href="/members"
          >
            Members
          </a>
          <a
            className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center hover:text-blue-1200"
            href="/latest"
          >
            Latest
          </a>
          <a
            className="w-56 py-6 mx-1 ml-0 h-10 cursor-pointer bg-gray-1000 text-white text-2xl primary-extra-bold flex justify-center tracking-wider items-center hover:text-blue-1200"
            href="/act"
          >
            Act
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
