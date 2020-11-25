import React from "react";

function LatestContainer() {
  return (
    <div className="w-auto lg:mx-12 md:m-8 my-8 mx-3 max-w-1440 2xl:mx-auto xl:px-12 3xl:px-0">
      <h1 className="primary-black text-6xl text-black tracking-tight mb-8">
        The Latest
      </h1>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="flex flex-col w-400 mr-6">
          <img
            src="/icons/latest1.png"
            srcSet="/icons/latest1@2x.png 2x, /icons/latest1@3x.png 3x"
            alt="Latest 1"
          />
          <p className="text-blue-900 uppercase primary-extra-bold mt-6 tracking-widest leading-6">
            Press release
          </p>
          <p className="text-black primary-extra-bold text-3xl tracking-wide mb-4 xl:min-h-0">
            Coca Cola tops the list of emitting CO2
          </p>
          <p className="text-blue-900 text-2xl tracking-wide mb-4 cursor-pointer flex-row flex items-center">
            <span className="primary-extra-bold mr-16">Find out more</span>
            <img
              src="/icons/arrow-right.png"
              srcSet="/icons/arrow-right@2x.png 2x, /icons/arrow-right@3x.png 3x"
              alt="arrow-right"
              className="w-6 h-6"
            />
          </p>
        </div>
        <div className="flex flex-col w-400 mr-6">
          <img
            src="/icons/latest2.png"
            srcSet="/icons/latest2@2x.png 2x, /icons/latest2@3x.png 3x"
            alt="Latest 1"
          />
          <p className="text-blue-900 uppercase primary-extra-bold mt-6 tracking-widest leading-6">
            Report
          </p>
          <p className="text-black primary-extra-bold text-3xl tracking-tight mb-4 xl:min-h-0">
            The adani coal mine emits 120M tonnes of CO2
          </p>
          <p className="text-blue-900 text-2xl tracking-wide mb-4 cursor-pointer flex-row flex items-center">
            <span className="primary-extra-bold mr-16">Find out more</span>
            <img
              src="/icons/arrow-right.png"
              srcSet="/icons/arrow-right@2x.png 2x, /icons/arrow-right@3x.png 3x"
              alt="arrow-right"
              className="w-6 h-6"
            />
          </p>
        </div>
        <div className="flex flex-col w-400">
          <img
            src="/icons/latest3.png"
            srcSet="/icons/latest3@2x.png 2x, /icons/latest3@3x.png 3x"
            alt="Latest 1"
          />
          <p className="text-blue-900 uppercase primary-extra-bold mt-6 tracking-widest leading-6">
            Article
          </p>
          <p className="text-black primary-extra-bold text-3xl tracking-wide mb-4 xl:min-h-0">
            Mp Calls to End Sewage pollution
          </p>
          <p className="text-blue-900 text-2xl tracking-wide mb-4 cursor-pointer flex-row flex items-center">
            <span className="primary-extra-bold mr-16">Find out more</span>
            <img
              src="/icons/arrow-right.png"
              srcSet="/icons/arrow-right@2x.png 2x, /icons/arrow-right@3x.png 3x"
              alt="arrow-right"
              className="w-6 h-6"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestContainer;
