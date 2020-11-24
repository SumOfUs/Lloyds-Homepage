import React, { useState } from "react";
import { ChevronUp } from "../../../_helpers/Icons";

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(true);
  return (
    <article className="bg-gray-200 text-gray-900 p-10">
      <div className="flex flex-col">
        <div className="flex items-center justify-between sm:text-5xl text-xl font-black">
          <span>{question}</span>
          <div
            onClick={() => setOpen(!open)}
            className="w-6 sm:w-10 h-6 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
          >
            <ChevronUp />
          </div>
        </div>
        <p
          className={`transition-all duration-500 ease-in-out overflow-hidden text-base sm:text-2xl ${
            open ? "max-h-400 sm:max-h-200 mt-10" : "max-h-0"
          }`}
        >
          {answer}
        </p>
      </div>
    </article>
  );
}

Accordion.defaultProps = {
  question: "Lloyd’s Syndicates",
  answer:
    "A Lloyd’s syndicate is formed by one or more members joining together to provide capital and accept insurance risks. There are currently 93syndicates, which are set up on an annual basis. In practice, they usually operate from year to year and function like permanent insurance operations. Lloyd’s syndicates insure a wide range of specialist risk. All Lloyd’s syndicates benefit from Lloyd’s central resources, including Lloyd's brand, its network of global licences and the Central Fund.",
};

export default Accordion;
