import React from "react";

function ProudBannerContainer() {
  return (
    <div className="w-full relative">
      <img src="/icons/ProudBanner.png" alt="Proud Banner" className="w-full" />
      <div className="primary-black absolute left-5 top-5 text-white xl:text-6xl text-4xl w-1/2 max-w-1440">
        Is Lloyd’s proud to insure&nbsp;
        <span className="primary-black bg-yellow-lemon text-black">
          climate destruction?
        </span>
      </div>
    </div>
  );
}

export default ProudBannerContainer;
