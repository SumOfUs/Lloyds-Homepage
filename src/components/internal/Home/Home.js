import React, { useState } from "react";

import Header from "../Header";
import HeroContainer from "../HeroContainer";
import ProbSolutionContainer from "../ProbSolutionContainer";
import ProudBannerContainer from "../ProudBannerContainer";
import LatestContainer from "../LatestContainer";
import SignUpContainer from "../SignUpContainer";
import ActNowContainer from "../ActNowContainer/ActNowContainer";

const Home = () => {
  return (
    <div className="fixed w-full h-full z-50 overflow-scroll">
      <Header />
      <HeroContainer />
      <ProbSolutionContainer />
      <ProudBannerContainer />
      <LatestContainer />
      <SignUpContainer />
      <ActNowContainer />
      <div className="bg-black h-64 w-full"></div>
    </div>
  );
};

export default Home;
