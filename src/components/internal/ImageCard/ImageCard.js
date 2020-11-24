import React from "react";

function ImageCard({ imgPosition, image, imgBackground }) {
  return (
    <div className={`${imgBackground} flex`}>
      <img
        className={`flex ${
          imgPosition === "right"
            ? "-translate-x-6 -translate-y-6"
            : "translate-x-6 translate-y-6"
        } transform`}
        src={image}
      />
    </div>
  );
}

ImageCard.defaultProps = {
  imgPosition: "right",
  image: "https://dummyimage.com/628x487/000/fff&text=DummyImage",
  imgBackground: "bg-blue-900",
};

export default ImageCard;
