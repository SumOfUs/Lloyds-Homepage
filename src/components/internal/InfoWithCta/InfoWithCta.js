import React from "react";

function InfoWithCta({ heading, description, buttonText, isDark }) {
  return (
    <div
      className={`${
        isDark ? "bg-gray-1500 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      <div className="sm:py-12 py-8 max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12">
        <h3 className="primary-extra-bold sm:text-5xl text-2xl mb-5 sm:mb-10">
          {heading}
        </h3>
        <p className="sm:text-4xl text-2xl primary-semi-bold">{description}</p>
        <button className="mt-12 max-w-xs w-full py-6 bg-blue-900 text-white sm:text-2xl text-xl primary-bold">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoWithCta;
