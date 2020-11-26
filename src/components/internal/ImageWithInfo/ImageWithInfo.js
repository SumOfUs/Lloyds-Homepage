import React from "react";
import ImageCard from "../ImageCard";

function ImageWithInfo({
  borderPosition,
  image,
  imgBackground,
  heading,
  subHeading,
  description,
}) {
  return (
    <section
      className={`container flex ${
        borderPosition === "right"
          ? "lg:flex-row flex-col-reverse"
          : "lg:flex-row-reverse flex-col"
      } xl:pl-20 xl:py-20 sm:pr-12 sm:pl-16 sm:py-16 p-6 items-center`}
    >
      <div
        className={`flex flex-col lg:w-1/2 ${
          borderPosition === "right" ? "xl:mr-24 lg:mr-16" : "xl:ml-24 lg:ml-16"
        }`}
      >
        <h2 className="lg:text-6xl sm:text-5xl text-4xl mb-10 leading-none primary-black">
          {heading}
        </h2>
        {subHeading && (
          <h3 className="lg:text-4xl sm:text-3xl text-2xl mb-8 primary-extra-bold">
            {subHeading}
          </h3>
        )}
        <p className="lg:text-2xl sm:text-xl text-base primary-semi-bold">
          {description}
        </p>
      </div>
      <div className="lg:w-1/2 lg:p-0 p-10">
        <ImageCard {...{ borderPosition, image, imgBackground }} />
      </div>
    </section>
  );
}

ImageWithInfo.defaultProps = {
  borderPosition: "right",
  heading: "Lloyd’s Members",
  description:
    "While Lloyd’s of London has committed to somecoal divestment from its own central fund, it provides no direction to the 90-plus syndicates that make up 97% of its market. Piecemeal policies are now being put in place by some Lloyd’s members, however Lloyd’s has a long way to go to bring its underwriting and its investment policies in-line with other leading insurers and with what is required to keep global warming under 1.5°C. We demand syndicates commit to stop insuring coal, oil, tar sands and gas, but the ultimate responsibility lies with Lloyd’s Council. Lloyd’s Council cannot just pass the buck to the syndicates and do nothing. Lloyd’s Council, or behind it the UK parliament, have the ultimate responsibility for what takes place under the Lloyd’s name.",
  image: "https://dummyimage.com/628x487/000/fff&text=DummyImage",
  imgBackground: "bg-blue-900",
};

export default ImageWithInfo;
