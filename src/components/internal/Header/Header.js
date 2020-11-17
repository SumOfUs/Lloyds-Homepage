import React, { useState } from "react";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="h-100 bg-white">
      <div className="w-full px-6 pb-0 lg:px-12 flex flex-row z-20 relative header-container lg:flex-col">
        <a className="text-black text-3xl" href="/">
          <img src="/icons/logo.png" alt="lloyds" width={150} />
        </a>
        <div className="hidden flex-row my-3 mb-0 lg:flex">
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
        <div className="cursor-pointer h-6 w-6 lg:hidden">
          {openDrawer ? (
            <div onClick={() => setOpenDrawer(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x text-black stroke-current"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          ) : (
            <div onClick={() => setOpenDrawer(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <filter id="0ki7udt2sa">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                    />
                  </filter>
                </defs>
                <g
                  fill="none"
                  fillRule="evenodd"
                  filter="url(#0ki7udt2sa)"
                  transform="translate(-331 -25)"
                >
                  <g>
                    <path
                      d="M0 0L24 0 24 24 0 24z"
                      transform="translate(331 25)"
                    />
                    <path
                      stroke="#121212"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 8L20 8M4 16L20 16"
                      transform="translate(331 25)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
