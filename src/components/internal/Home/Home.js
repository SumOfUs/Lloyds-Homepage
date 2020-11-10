import React, { useState } from "react";

import Header from "../Header";
import HeroContainer from "../HeroContainer";
import ProbSolutionContainer from "../ProbSolutionContainer";

const Home = () => {
  return (
    <div className="fixed w-full h-full z-50 overflow-scroll">
      <Header />
      <HeroContainer />
      <ProbSolutionContainer />
      <div className="w-full">
        <img
          src="/icons/ProudBanner.png"
          alt="Proud Banner"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Home;
