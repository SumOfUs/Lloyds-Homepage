import React from "react";
// import Image from "next/image";

const image1 =
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80";

import Header from "../Header";

const Home = () => {
  return (
    <div className="fixed w-full h-full z-50 overflow-scroll">
      <Header />
      <div className="relative flex max-h-800">
        {/* <Image
          src={image1}
          alt="Picture of the author"
          //   width={100}
          //   height={600}
          layout="fill"
        /> */}
        <img className="w-full object-cover" src={image1} alt={`social_1`} />
        <div className="absolute top-0 left-0 text-white"> HI </div>
      </div>
    </div>
  );
};

export default Home;
