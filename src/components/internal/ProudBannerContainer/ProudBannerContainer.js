import React from "react";

function ProudBannerContainer() {
  return (
    <div className="w-full relative">
      <img
        src="/icons/ProudBanner.png"
        alt="Proud Banner"
        className="w-full h-250 object-cover"
        height={250}
      />
      <div className="absolute w-full h-250 top-0 left-0">
        <div className="max-w-1440 mx-auto h-full flex items-center">
          <div className="3xl:ml-0 lg:ml-12 ml-8 primary-black text-white lg:text-5xl md:text-4xl text-3xl md:w-3/5">
            Is Lloyd’s proud to insure&nbsp;
            <span className="primary-black bg-yellow-lemon text-black">
              climate destruction?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProudBannerContainer;
