import React from "react";

function ProbSolutionContainer() {
  return (
    <div className="flex flex-row justify-around w-full">
      <div className="w-1/2 bg-white p-16">
        <div className="max-w-600 mx-auto">
          <div className="primary-black text-6xl">The Problem</div>
          <div className="primary-extra-bold text-5xl mt-16 mb-6 leading-tight">
            Spreading risk to create a unstainable world
          </div>
          <div className="primary-medium text-2xl text-gray-900 leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <button className="w-64 py-4 mt-16 text-xl bg-blue-900 primary-bold text-white">
            Lloyd’s Dirty Project
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-gray-1100 p-16">
        <div className="max-w-600 mx-auto">
          <div className="primary-black text-6xl">The Solution</div>
          <div className="primary-extra-bold text-5xl mt-16 mb-6 leading-tight">
            To educate people and Llyods employees
          </div>
          <div className="primary-medium text-2xl text-gray-900 leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <button className="w-64 py-4 mt-16 text-xl bg-blue-900 primary-bold text-white">
            See how we solve this
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProbSolutionContainer;
