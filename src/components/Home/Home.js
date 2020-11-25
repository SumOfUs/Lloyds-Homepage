import React from "react";

import HeroContainer from "./HeroContainer";
import ProbSolutionContainer from "./ProbSolutionContainer";
import ProudBannerContainer from "./ProudBannerContainer";
import LatestContainer from "./LatestContainer";
import SignUpContainer from "./SignUpContainer";
import ActNowContainer from "./ActNowContainer/ActNowContainer";
import Head from "next/head";
import TweetContainer from "./TweetContainer/TweetContainer";
import Header from "../internal/Header";
import Footer from "../internal/Footer";

const Home = () => {
  return (
    <div className="fixed w-full h-full z-50 overflow-scroll">
      <Head>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Head>
      <Header />
      <HeroContainer />
      <ProbSolutionContainer />
      <ProudBannerContainer />
      <LatestContainer />
      <SignUpContainer />
      <TweetContainer />
      {/* <ActNowContainer /> */}
      <Footer />
    </div>
  );
};

export default Home;
