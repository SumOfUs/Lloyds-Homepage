import React from "react";

function LatestContainer() {
  return (
    <div className="w-auto my-24 mx-12 max-w-1440 2xl:mx-auto">
      <div className="primary-black text-6xl text-black tracking-tight mb-24">
        The Latest
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col max-w-400">
          <img
            src="/icons/latest1.png"
            srcset="/icons/latest1@2x.png 2x, /icons/latest1@3x.png 3x"
            alt="Latest 1"
          />
          <div className="text-blue-900 uppercase primary-extra-bold mt-6 tracking-widest leading-6">
            Blog
          </div>
          <div className="text-black primary-extra-bold text-3xl tracking-wide mb-16">
            Coca Cola tops the list of emitting CO2
          </div>
          <div className="text-blue-900 text-2xl tracking-wide mb-16 cursor-pointer flex-row flex items-center">
            <span className="primary-extra-bold mr-16">Find out more</span>
            <img
              src="/icons/arrow-right.png"
              srcset="/icons/arrow-right@2x.png 2x, /icons/arrow-right@3x.png 3x"
              alt="arrow-right"
              className="w-6 h-6"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-400">
          <img
            src="/icons/latest2.png"
            srcset="/icons/latest2@2x.png 2x, /icons/latest2@3x.png 3x"
            alt="Latest 1"
          />
          <div className="text-blue-900 uppercase primary-extra-bold mt-6 tracking-widest leading-6">
            Pr
          </div>
          <div className="text-black primary-extra-bold text-3xl tracking-wide mb-16">
            The adani coal mine emits 120M tonnes of CO2
          </div>
          <div className="text-blue-900 text-2xl tracking-wide mb-16 cursor-pointer flex-row flex items-center">
            <span className="primary-extra-bold mr-16">Find out more</span>
            <img
              src="/icons/arrow-right.png"
              srcset="/icons/arrow-right@2x.png 2x, /icons/arrow-right@3x.png 3x"
              alt="arrow-right"
              className="w-6 h-6"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-400">
          <img
            src="/icons/latest3.png"
            srcset="/icons/latest3@2x.png 2x, /icons/latest3@3x.png 3x"
            alt="Latest 1"
          />
          <div className="text-blue-900 uppercase primary-extra-bold mt-6 tracking-widest leading-6">
            Report
          </div>
          <div className="text-black primary-extra-bold text-3xl tracking-wide mb-16">
            Mp Calls to End Sewage pollution
          </div>
          <div className="text-blue-900 text-2xl tracking-wide mb-16 cursor-pointer flex-row flex items-center">
            <span className="primary-extra-bold mr-16">Find out more</span>
            <img
              src="/icons/arrow-right.png"
              srcset="/icons/arrow-right@2x.png 2x, /icons/arrow-right@3x.png 3x"
              alt="arrow-right"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestContainer;
