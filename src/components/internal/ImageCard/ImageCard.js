import React from "react";

function ImageCard({ borderPosition, image, imgBackground, className, rest }) {
  return (
    <div
      className={`${imgBackground} flex ${className} ${
        borderPosition === "right"
          ? "sm:mt-6 mt-3 sm:ml-6 ml-3"
          : "sm:mb-6 mb-3 sm:mr-6 mr-3"
      }`}
      {...rest}
    >
      <img
        className={`flex w-full ${
          borderPosition === "right"
            ? "sm:-translate-x-6 -translate-x-3 sm:-translate-y-6 -translate-y-3"
            : "sm:translate-x-6 translate-x-3 sm:translate-y-6 translate-y-3"
        } transform`}
        src={image}
      />
    </div>
  );
}

ImageCard.defaultProps = {
  borderPosition: "right",
  image: "https://dummyimage.com/628x487/000/fff&text=DummyImage",
  imgBackground: "bg-blue-900",
};

export default ImageCard;
