import React from "react";

function PhotosContainer() {
  return (
    <div className="sm:px-20 sm:py-24 p-8 text-gray-900 bg-white">
      <h3 className="primary-bold sm:text-5xl text-2xl mb-6">Photos</h3>
      <p className="sm:text-4xl text-2xl">
        Resources: Here you can access social media assets, signs, banners and
        campaign photos.
      </p>
      <div className="flex flex-wrap justify-center mt-10 sm:mt-20">
        <img
          className="sm:max-w-400 m-2"
          src="https://dummyimage.com/628x487/000/fff&text=DummyImage"
        />
        <img
          className="sm:max-w-400 m-2"
          src="https://dummyimage.com/628x487/000/fff&text=DummyImage"
        />
        <img
          className="sm:max-w-400 m-2"
          src="https://dummyimage.com/628x487/000/fff&text=DummyImage"
        />
      </div>
    </div>
  );
}

export default PhotosContainer;
