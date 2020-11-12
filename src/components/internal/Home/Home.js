import React from "react";

import Header from "../Header";
import HeroContainer from "../HeroContainer";
import ProbSolutionContainer from "../ProbSolutionContainer";
import ProudBannerContainer from "../ProudBannerContainer";
import LatestContainer from "../LatestContainer";
import SignUpContainer from "../SignUpContainer";
import ActNowContainer from "../ActNowContainer/ActNowContainer";
import Footer from "../Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
