import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";

const ActNowItems = [
  {
    image:
      "https://images.unsplash.com/photo-1569163139500-66446e2926ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    title: "Coca Cola tops the list of emitting more CO2",
    category: "ENVIRONMENT",
    org: "Change org",
    published: "8 days ago",
  },
  {
    image:
      "https://images.unsplash.com/photo-1569060368645-4ab30c8d8b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    title: "The adani coal mine emits 120M tonnes of CO2",
    category: "POLLUTION",
    org: "Sumofus org",
    published: "2 hours ago",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    title: "Coca Cola tops the list of emitting more CO2",
    category: "DEGRRADATION",
    org: "360 degrees",
    published: "4 months ago",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553034132-0234e7dd7a57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    title: "The adani coal mine emits 120M tonnes of CO2",
    category: "EMISSION",
    org: "Avaaz org",
    published: "a year ago",
  },
];

function ActNowContainer() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="lg:mt-20 lg:mb-40 lg:mx-16 m-4 max-w-1440 2xl:mx-auto act-now-section">
      <div className="primary-black text-black text-6xl">Act now</div>
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col lg:w-2/5">
          <div className="lg:text-4xl text-3xl my-3">
            <span className="primary-extra-bold">Use&nbsp;</span>
            <span className="text-blue-900 primary-extra-bold">
              #LloydsInsureOurFuture
            </span>
            <span className="primary-extra-bold">
              &nbsp;on Twitter and join 1000’s of campaigners
            </span>
          </div>
          <div className="primary-medium leading-7 text-lg tracking-wide lg:w-10/12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </div>
          <button className="lg:w-5/6 mt-12 px-16 py-6 bg-blue-900 text-white text-2xl primary-bold">
            Tweet #LloydsInsureOurFuture
          </button>
        </div>
        <div className="flex flex-col lg:w-3/5 w-full relative lg:mt-0 mt-12">
          <div className="lg:px-20 lg:py-12 lg:p-6 bg-gray-1100 flex flex-row items-center justify-between">
            <div className="flex flex-col lg:w-4/5 w-full">
              <div className="primary-extra-bold text-4xl px-4">
                Take action now
              </div>
              <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                onChange={(index) => setActiveSlide(index)}
                selectedItem={activeSlide}
              >
                {ActNowItems.map((data) => {
                  return (
                    <div
                      className="lg:bg-white bg-gray-1100 my-10 lg:p-6 p-3"
                      key={Math.random()}
                    >
                      <img src={data.image} alt="petition 1" />
                      <div className="mt-4 tracking-wide primary-extra-bold text-xl text-gray-800 text-left">
                        {data.category}
                      </div>
                      <div className="my-3 primary-extra-bold text-2xl tracking-wide leading-8 text-left">
                        {data.title}
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="text-gray-800 primary-extra-bold text-xs tracking-wider leading-8 uppercase">
                          {data.org}
                        </div>
                        <div className="primary-extra-bold text-sm tracking-wide">
                          {data.published}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div
              className="w-12 h-12 bg-blue-900 mx-2 px-2 py-2 cursor-pointer lg:flex items-center justify-center hidden"
              onClick={() => {
                setActiveSlide(
                  ActNowItems.length - 1 === activeSlide ? 0 : activeSlide + 1
                );
              }}
            >
              <img src="/icons/right-play.png" alt="right-play" />
            </div>
          </div>
          <a
            href="/act"
            className="lg:w-2/5 w-4/5 mt-12 px-16 py-6 bg-blue-900 text-white text-2xl primary-bold lg:absolute -bottom-9 -right-9"
          >
            View all Petitions
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActNowContainer;
