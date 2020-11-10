import React, { useState } from "react";

import Header from "../Header";
import HeroContainer from "../HeroContainer";

const Home = () => {
  return (
    <div className="fixed w-full h-full z-50 overflow-scroll">
      <Header />
      <HeroContainer />
    </div>
  );
};

export default Home;
