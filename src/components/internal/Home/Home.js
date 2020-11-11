import React, { useState } from "react";

import Header from "../Header";
import HeroContainer from "../HeroContainer";
import ProbSolutionContainer from "../ProbSolutionContainer";
import ProudBannerContainer from "../ProudBannerContainer";
import LatestContainer from "../LatestContainer";
import SignUpContainer from "../SignUpContainer";

const Home = () => {
  return (
    <div className="fixed w-full h-full z-50 overflow-scroll">
      <Header />
      <HeroContainer />
      <ProbSolutionContainer />
      <ProudBannerContainer />
      <LatestContainer />
      <SignUpContainer />
      <div className="mt-20 mb-32 mx-16 hidden">
        <div className="primary-black text-black text-6xl">Act now</div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col w-2/5">
            <div className="primary-extra-bold text-4xl my-3">
              Tweet using our &nbsp;
              <span className="text-blue-900 primary-extra-bold">#hashtag</span>
            </div>
            <div className="primary-medium leading-7 text-lg tracking-wide w-10/12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </div>
            <button className="w-64 my-8 px-16 py-6 bg-blue-900 text-white">
              Tweet #stopdisinfo
            </button>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="primary-extra-bold text-4xl">
              Tweet using our #hashtag
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
