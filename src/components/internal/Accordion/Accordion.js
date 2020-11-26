import React, { useState } from "react";
import { ChevronUp } from "../../../_helpers/Icons";
import ImageCard from "../ImageCard";
import SourceTag from "../SourceTag";

function Accordion({ className, heading, description, imageProps, sources }) {
  const [open, setOpen] = useState(true);
  return (
    <article className={`${className} p-10 my-12`}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between sm:text-5xl text-xl font-black">
          <span>{heading}</span>
          <div
            onClick={() => setOpen(!open)}
            className="w-6 sm:w-10 h-6 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
          >
            <ChevronUp
              className={`transition-all duration-700 transform ${
                !open && "rotate-180"
              }`}
            />
          </div>
        </div>
        <span
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            open ? "max-h-1400 mt-10" : "max-h-0"
          }`}
        >
          {imageProps && (
            <div className="mb-12">
              <ImageCard {...imageProps} className="max-h-400" />
            </div>
          )}
          <div className="text-base sm:text-2xl">{description}</div>
          {sources && (
            <div className="mt-5">
              <h5 className="text-3xl font-bold">Sources</h5>
              <div className="flex flex-wrap space-x-6 mt-12">
                {sources.map((source) => {
                  return <SourceTag>{source}</SourceTag>;
                })}
              </div>
            </div>
          )}
        </span>
      </div>
    </article>
  );
}

Accordion.defaultProps = {
  heading: "Lloyd’s Syndicates",
  className: "bg-gray-200 text-gray-900",
  description: (
    <p>
      A Lloyd’s syndicate is formed by one or more members joining together to
      provide capital and accept insurance risks. There are currently
      93syndicates, which are set up on an annual basis. In practice, they
      usually operate from year to year and function like permanent insurance
      operations. Lloyd’s syndicates insure a wide range of specialist risk. All
      Lloyd’s syndicates benefit from Lloyd’s central resources, including
      Lloyd's brand, its network of global licences and the Central Fund.
    </p>
  ),
};

export default Accordion;
