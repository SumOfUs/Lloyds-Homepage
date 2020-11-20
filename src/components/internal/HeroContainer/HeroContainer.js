import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroBannerItems = [
  // {
  //   image:
  //     "https://images.unsplash.com/uploads/1411160110892ab555b6f/80b0d25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1505428160878-8e349f4d301c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1435686858161-59da32dfd4b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2706&q=80",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1551727041-5b347d65b633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
  // },

  // {
  //   image:
  //     "https://images.unsplash.com/photo-1578891086254-e790dbcfd6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
  // },
];

function HeroContainer() {
  const [activeSlide, setActiveSlide] = useState(0);
  const wordChangerArr = ["coal", "tar sands", "oil & gas"];
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getSeconds());
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setIndex(index < 2 ? index + 1 : 0);
  }, [time]);

  return (
    <div className="relative hero-section" style={{ marginTop: "92px" }}>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        onChange={(index) => setActiveSlide(index)}
        selectedItem={activeSlide}
      >
        {HeroBannerItems.map((data) => {
          return (
            <div className="flex h-500" key={Math.random()}>
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
      <div className="absolute w-screen h-500 top-0 left-0">
        <div className="max-w-1440 mx-auto h-full">
          <div className="text-white 3xl:ml-0 lg:ml-12 ml-8 flex flex-col justify-center items-start lg:w-2/5 text-left h-full">
            <div className="text-6xl primary-extra-bold leading-none tracking-tight">
              Lloyd’s Climate Catastrophe
            </div>
            <div className="primary-medium text-2xl my-4">
              <span>Insuring&nbsp;</span>
              <span className="font-bold">{wordChangerArr[index]}</span>
              <span>&nbsp;& Profiting from climate destruction</span>
            </div>
            <a
              href="/problem"
              className="w-48 py-3 bg-blue-900 primary-bold text-xl flex justify-center"
            >
              Learn More
            </a>
          </div>
          <div className="absolute top-60 right-0 mr-16 flex hidden">
            <div
              className="w-12 h-12 bg-blue-900 px-2 py-2 cursor-pointer flex items-center justify-center"
              onClick={() => {
                setActiveSlide(
                  activeSlide === 0
                    ? HeroBannerItems.length - 1
                    : activeSlide - 1
                );
              }}
            >
              <img src="/icons/left-play.png" alt="left-play" />
            </div>
            <div
              className="w-12 h-12 bg-blue-900 mx-2 px-2 py-2 cursor-pointer flex items-center justify-center"
              onClick={() => {
                setActiveSlide(
                  HeroBannerItems.length - 1 === activeSlide
                    ? 0
                    : activeSlide + 1
                );
              }}
            >
              <img src="/icons/right-play.png" alt="right-play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;
