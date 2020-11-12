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
      <div className="bg-black pt-16 pb-12 px-20 w-full text-white ">
        <div className="max-w-1440 2xl:mx-auto w-full flex flex-col items-center">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-1/5">
              <div className="primary-extra-bold text-2xl ">Against Lloyds</div>
              <div className="mt-8 mb-6 primary-medium tracking-wider leading-6">
                Wheal Kitty Workshops, St Agnes, Cornwall, TR5 0RD
              </div>
              <div className="primary-medium tracking-wider leading-6">
                Tel: 123 1239 1210
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200">
                Problem
              </div>
              <div className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200">
                Solution
              </div>
              <div className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200">
                Latest
              </div>
              <div className="primary-extra-bold tracking-wider leading-6 mb-6 cursor-pointer hover:text-blue-1200">
                Act
              </div>
            </div>

            <div className="flex flex-col w-1/4">
              <div className="primary-extra-bold text-2xl">Follow us on</div>
              <div className="flex flex-row justify-between mt-8">
                <img
                  src="/icons/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                  className="cursor-pointer opacity-75 hover:opacity-100"
                />

                <img
                  src="/icons/instagram.png"
                  alt="instagram"
                  width={24}
                  height={24}
                  className="cursor-pointer opacity-75 hover:opacity-100"
                />
                <img
                  src="/icons/facebook.png"
                  alt="facebook"
                  width={24}
                  height={24}
                  className="cursor-pointer opacity-75 hover:opacity-100"
                />
                <img
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  width={24}
                  height={24}
                  className="cursor-pointer opacity-75 hover:opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="pt-16 text-white primary-medium tracking-wide">
            © 2020 Against Lloyds · All Rights Reserved · Terms · Site by F22
            Labs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
