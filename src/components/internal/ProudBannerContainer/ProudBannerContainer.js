import React from "react";

function ProudBannerContainer() {
  return (
    <div className="w-full relative">
      <img
        src="/icons/ProudBanner.png"
        alt="Proud Banner"
        className="w-full lg:h-250 object-cover"
        height={250}
      />
      <div className="primary-black absolute md:left-5 left-1 top-3 text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl md:w-5/12 max-w-1440">
        Is Lloyd’s proud to insure&nbsp;
        <span className="primary-black bg-yellow-lemon text-black">
          climate destruction?
        </span>
      </div>
    </div>
  );
}

export default ProudBannerContainer;
