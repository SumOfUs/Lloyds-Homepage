import React from "react";

function PhotosContainer() {
  return (
    <div className="sm:px-20 sm:py-16 p-8 text-gray-900 bg-white">
      <h3 className="primary-extra-bold sm:text-5xl text-2xl mb-6">Photos</h3>
      <p className="sm:text-4xl text-2xl primary-semi-bold">
        Resources: Here you can access social media assets, signs, banners and
        campaign photos.
      </p>
      <div className="flex flex-wrap justify-center mt-10 sm:mt-20">
        <img
          className="sm:max-w-400 m-3"
          src="https://images.unsplash.com/photo-1569163139394-de4e5f43e5ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <img
          className="sm:max-w-400 m-3"
          src="https://images.unsplash.com/photo-1553034132-0234e7dd7a57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <img
          className="sm:max-w-400 m-3"
          src="https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <img
          className="sm:max-w-400 m-3 2xl:hidden"
          src="https://images.unsplash.com/photo-1569163139500-66446e2926ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
      </div>
    </div>
  );
}

export default PhotosContainer;
