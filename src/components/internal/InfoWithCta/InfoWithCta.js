import React from "react";

function InfoWithCta({ heading, description, buttonText, isDark }) {
  return (
    <div
      className={`sm:px-20 sm:py-24 p-8 ${
        isDark ? "bg-gray-1500 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      <h3 className="primary-bold sm:text-5xl text-2xl mb-5 sm:mb-10">
        {heading}
      </h3>
      <p className="sm:text-4xl text-2xl">{description}</p>
      <button className="mt-12 max-w-xs w-full py-6 bg-blue-900 text-white sm:text-2xl text-xl primary-bold">
        {buttonText}
      </button>
    </div>
  );
}

export default InfoWithCta;
