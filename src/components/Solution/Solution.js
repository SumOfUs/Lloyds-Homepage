import React from "react";
import ProudBannerContainer from "../Home/ProudBannerContainer";

import Footer from "../internal/Footer";
import Header from "../internal/Header";
import ImageCard from "../internal/ImageCard";

const Solution = () => {
  return (
    <div className="w-full">
      <Header />
      {/* First Section */}
      <div className="bg-white mt-100 py-16">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-row items-center">
          <div className="w-1/2 flex flex-col">
            <h1 className="text-6xl primary-black">The Solution</h1>
            <p className="text-4xl primary-semi-bold py-8 pr-12">
              Stop insuring fossil fuels projects that are not in-line with
              keeping global warming below 1.5C and divest from fossil fuels.
              Start insuring and investing in renewable energy sources.
            </p>
          </div>
          <div className="w-1/2 mx-12">
            <ImageCard
              imgBackground="bg-blue-900"
              image="https://images.unsplash.com/photo-1496354382709-25495428b2c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
            />
          </div>
        </div>
      </div>

      {/* Second section */}

      <div className="bg-blue-900">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 py-12 flex-col">
          <h2 className="text-white text-5xl primary-extra-bold mb-8">
            Our Demands
          </h2>
          <p className="text-white text-2xl primary-semi-bold leading-7">
            The Insure Our Future network is demanding that Lloyd’s and its
            members:
            <ol className="pl-12 pt-4 primary-semi-bold">
              <li className="primary-semi-bold pb-2">
                1. Stop insuring new coal projects and coal companies
              </li>
              <li className="primary-semi-bold pb-2">
                2. Stop insuring tar sand projects and companies
              </li>
              <li className="primary-semi-bold pb-2">
                3. Stop insuring new oil and gas expansion projects
              </li>
              <li className="primary-semi-bold pb-2">
                4. Phase out existing insurance foroil and gas companies in line
                with a 1.5°C pathway
              </li>
              <li className="primary-semi-bold pb-2">
                5. Divest from coal, oil and gas companies in line with a 1.5°C
                pathway
              </li>
            </ol>
            <br />
            These demands are based on what climate science tells us. These are
            examples of the urgent actions required by the insurance sector to
            help transform energy and try to avoid the worst of the climate
            related impacts that are rapidly heading our way.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 py-12 flex-col">
          <h2 className="text-black text-5xl primary-extra-bold mb-8">
            Starting Point
          </h2>
          <p className="primary-semi-bold text-2xl leading-10">
            Lloyd’s existing&nbsp;
            <a
              href="https://www.lloyds.com/news-and-risk-insight/news/lloyds-news/2017/11/lloyds-corporation-announces-coal-divestment-plan"
              target="_blank"
              className="primary-semi-bold text-blue-900 underline"
            >
              coal exclusion investment criteria
            </a>
            &nbsp;provides a starting point. That policy excludes any companies
            that meet at least one of the following criteria:
          </p>
          <ul className="text-2xl my-8 pl-12">
            <li className="primary-semi-bold pb-2">
              − Generate more than 30% of their revenue from producing coal.
            </li>
            <li className="primary-semi-bold pb-2">
              − Produce more than 20 million tons of coal per year.
            </li>
            <li className="primary-semi-bold pb-2">
              − Generate more than 30% of their electricity from burning coal.
            </li>
            <li className="primary-semi-bold pb-2">
              − Operate at least 10 GW of coal-fired power stations.
            </li>
          </ul>
          <br />
          <p className="primary-semi-bold text-2xl leading-10">
            Each of these thresholds can be reduced and a timeline to zero by
            2030 added. The policy should then be applied to all (re)insurance
            and to all of the funds within Lloyd’s capital structure.These
            policies can and should be put in place by each and every Lloyd’s
            member but most importantly they can and should be put in place by
            Lloyd’s Council as market-wide policies that create a level playing
            field for all Lloyd’s members and provide public clarity on Lloyd’s
            position.Help is available e.g. with regard to coal policy:
            The&nbsp;
            <a
              href="https://coalpolicytool.org/"
              target="_blank"
              className="primary-semi-bold text-blue-900 underline"
            >
              Coal Policy Tool
            </a>
            &nbsp;provides examples and comprehensive analysis of coal policies
            and the&nbsp;
            <a
              href="https://coalexit.org/"
              target="_blank"
              className="primary-semi-bold text-blue-900 underline"
            >
              Global Coal Exit List
            </a>
            &nbsp;is a resource for investors and financial institutions that
            want to understand and manage climate risks in their portfolios.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="w-full relative">
        <img
          src="/icons/ProudBanner.png"
          alt="Proud Banner"
          className="w-full h-350 object-cover"
          height={250}
        />
        <div className="absolute w-full h-350 top-0 left-0">
          <div className="max-w-1440 mx-auto h-full flex items-center">
            <div className="3xl:ml-0 lg:ml-12 ml-8 primary-black text-white lg:text-5xl md:text-4xl text-3xl md:w-2/5">
              Everyone else is&nbsp;
              <span className="primary-black bg-yellow-lemon text-black">
                moving
              </span>
              , why aren’t Lloyd’s and its members
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="bg-white">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 py-12 flex-col">
          <h2 className="text-black text-5xl primary-extra-bold mb-8">
            What is currently happening within Lloyd’s in relation to
            underwriting and investment policy?
          </h2>
          <p className="primary-semi-bold text-2xl">
            When challenged Lloyd’s has previously saidit does not have a policy
            on underwriting carbon-intensive fuels, leaving underwriting
            decisions to its members and / or that Lloyd’s Corporation does not
            set the markets underwriting policy unless there is a legal or
            regulatory requirement to do so. Lloyd’s has more recently stated
            that it is “...nevertheless committed to building consensus across
            the [market]...”to drive this transition”, and further stating that,
            many Lloyd’s members are currently “...taking steps towards
            restricting insurance coverage for thermal coal extraction or energy
            production, and are divesting in companies involved in the coal
            sector”. However no details or facts were provided to back up the
            statement.
          </p>
          <br />
          <p className="primary-semi-bold text-2xl">
            According to a Sept 2020&nbsp;
            <a
              href="https://www.cityam.com/lloyds-of-london-falls-to-400m-loss-due-to-coronavirus-claims/"
              target="_blank"
              className="primary-semi-bold text-blue-900 underline"
            >
              statement
            </a>
            &nbsp;attributed to Lloyd’s Council Chair Bruce Carnegie-Brown,
            Lloyd’s has commissioned a report into the issue.
          </p>
          <br />
          <p className="primary-semi-bold text-2xl rounded-l border-solid border-0 border-l-8 border-blue-900 pl-4">
            With findings expected by the end of the year to inform, “...where
            we are across the market in terms of how much of this kind of
            business we do”, he said. “And I think what we’d like to do then is
            to translate that into policies which reduce the impact of our
            underwriting support for things that have a negative impact on
            climate”.
          </p>
          <br />
          <p className="primary-semi-bold text-2xl">
            Mr Carnegie-Brown was also&nbsp;
            <a
              href="https://www.theguardian.com/business/2020/sep/10/lloyds-of-london-expects-5bn-in-covid-19-insurance-payouts"
              target="_blank"
              className="primary-semi-bold text-blue-900 underline"
            >
              reported
            </a>
            &nbsp;to say Lloyd’s was working on an environmental, social, and
            corporate governance report, which would be published before the end
            of the year (2020).
          </p>
          <br />
          <div className="flex flex-row">
            <a
              href="/act"
              className="w-64 py-4 mt-8 text-2xl bg-blue-900 primary-bold text-white flex justify-center mr-8"
            >
              Take Action
            </a>
            <a
              href="/solution/what-others-are-doing"
              className="px-8 py-4 mt-8 text-2xl bg-blue-900 primary-bold text-white flex justify-center"
            >
              What Others are Doing?
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-gray-1200">
        <div className="max-w-1440 3xl:mx-auto xl:mx-16 mx-12 flex flex-row items-center justify-between py-12">
          <div className="text-6xl primary-black w-1/2">
            It’s time to take action against Lloyds for our future!
          </div>
          <a
            href="/act"
            className="w-64 py-4 mt-8 text-2xl bg-blue-900 primary-bold text-white flex justify-center mr-8"
          >
            Take Action
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Solution;
