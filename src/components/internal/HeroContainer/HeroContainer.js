import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroBannerItems = [
  {
    image:
      "https://images.unsplash.com/photo-1435686858161-59da32dfd4b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2706&q=80",
    title: "Lloyd’s Climate Catastrophe",
    desc: "Insuring fossil fuels & Profiting from climate destruction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    title: "Sdylol Calemit Hacetaprots",
    desc: "Uigsrnin siofls esflu igotpinrf omfr aiceltm rctstdoieun",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551727041-5b347d65b633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    title: "Lloyd’s Climate Catastrophe",
    desc: "Insuring fossil fuels & Profiting from climate destruction",
  },
  {
    image:
      "https://images.unsplash.com/uploads/1411160110892ab555b6f/80b0d25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
    title: "Sdylol Calemit Hacetaprots",
    desc: "Uigsrnin siofls esflu igotpinrf omfr aiceltm rctstdoieun",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505428160878-8e349f4d301c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80",
    title: "Lloyd’s Climate Catastrophe",
    desc: "Insuring fossil fuels & Profiting from climate destruction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2702&q=80",
    title: "Sdylol Calemit Hacetaprots",
    desc: "Uigsrnin siofls esflu igotpinrf omfr aiceltm rctstdoieun",
  },
];

function HeroContainer() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        selectedItem={activeSlide}
      >
        {HeroBannerItems.map((data) => {
          return (
            <div className="flex h-800" key={Math.random()}>
              <img
                className="w-full object-cover opacity-75"
                src={data.image}
                alt={`social_1`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #3c3c3c, #000000)",
                }}
              />
            </div>
          );
        })}
      </Carousel>
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute top-40 left-0 text-white ml-16 flex flex-col justify-start items-start w-1/3 text-left">
          <div className="text-6xl primary-extra-bold leading-none tracking-tight">
            Lloyd’s Climate Catastrophe
          </div>
          <div className="primary-medium text-2xl my-4">
            Insuring fossil fuels & Profiting from climate destruction
          </div>
          <button className="w-48 py-3 bg-blue-900 primary-bold">
            Watch our video
          </button>
        </div>
        <div className="absolute top-60 right-0 mr-16 flex">
          <div
            className="w-12 h-12 bg-blue-900 px-2 py-2 cursor-pointer"
            onClick={() => {
              setActiveSlide(
                activeSlide === 0 ? HeroBannerItems.length - 1 : activeSlide - 1
              );
            }}
          >
            <img src="/icons/left-play.png" alt="left-play" />
          </div>
          <div
            className="w-12 h-12 bg-blue-900 mx-2 px-2 py-2 cursor-pointer"
            onClick={() => {
              setActiveSlide(
                HeroBannerItems.length - 1 === activeSlide ? 0 : activeSlide + 1
              );
            }}
          >
            <img src="/icons/right-play.png" alt="right-play" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;
