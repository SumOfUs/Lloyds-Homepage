import React from "react";

function ProbSolutionContainer() {
  return (
    <div className="flex lg:flex-row justify-around w-full flex-col">
      <div className="lg:w-1/2 bg-white lg:p-16 p-8">
        <div className="max-w-600 mx-auto ">
          <div className="primary-black text-6xl">The Problem</div>
          <div className="primary-extra-bold text-5xl mt-16 mb-6 leading-tight">
            Insuring and investing in climate destruction
          </div>
          <div className="primary-medium text-2xl text-gray-900 leading-tight">
            Lloyd’s of London and its members (re)insure and invest in some of
            the world’s worst fossil fuel projects, including coal mines, tar
            sands pipelines and new oil & gas exploration. Once built, this
            infrastructure produces substantial amounts of CO2 emissions,
            escalating the climate crisis and harming public health.&nbsp;
            <span className="font-bold">
              Lloyd’s insures risks that destroy the planet.
            </span>
          </div>
          <a
            href="/problem"
            className="lg:w-2/3 py-4 mt-16 text-xl bg-blue-900 primary-bold text-white flex justify-center"
          >
            How Lloyd’s insures climate destruction
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 bg-gray-1100 lg:p-16 p-8">
        <div className="max-w-600 mx-auto">
          <div className="primary-black text-6xl">The Solution</div>
          <div className="primary-extra-bold text-5xl mt-16 mb-6 leading-tight">
            Stop insuring and investing in coal, tar sands, oil and gas.
          </div>
          <div className="primary-medium text-2xl text-gray-900 leading-tight">
            Lloyd’s and its members must adopt policies that exclude or
            significantly restrict the insurance and reinsurance of coal, tar
            sands and new oil and gas projects, and divest from fossil fuels.
            Other insurers, including the parent companies of a number of
            leading Lloyd’s membershave already taken this action. There is no
            good excuse for Lloyd’s and its members not to act now.
          </div>
          <a
            href="/solution"
            className="w-64 py-4 mt-16 text-xl bg-blue-900 primary-bold text-white flex justify-center"
          >
            How we solve this
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProbSolutionContainer;
