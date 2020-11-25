import React from "react";
import ImageWithInfo from "../ImageWithInfo";
import FigureAssets from "../FigureAssets";

function MembersContainer() {
  return (
    <div>
      <ImageWithInfo />
      <div className="w-full flex flex-col bg-blue-900 text-white sm:py-12 p-8 sm:px-20">
        <h3 className="font-bold sm:text-5xl text-2xl mb-5 sm:mb-10">
          What is Lloyd’s?
        </h3>
        <p className="sm:text-2xl text-base">
          Lloyd’s is not an insurance company, it is a unique
          partially-mutualized marketplace, built around a society of members
          (approx 2000), which organizes itself into syndicates with a view to
          insuring risks. Lloyd’s was established by an Act of the UK Parliament
          and is regulated by the Financial Conduct Authority (FCA) and
          Prudential Regulatory Authority (PRA). Lloyd’s Council is the ultimate
          power holder within Lloyd’s. It is responsible for managing and
          supervising the market. It established the Lloyd’s Corporation which
          is not an insurer, but an independent organisation and regulator that
          acts to protect and maintain the market's reputation and provides
          infrastructure, services, research, reports and analysis to the
          market. In effect the Corporation carries out the day to day powers
          and functions of the Council. Together they are known by one globally
          recognised brand name, Lloyd's.
        </p>
        <p className="sm:text-2xl text-base mt-8">
          Whilst Lloyd’s Council and Corporation have the ultimate
          decision-making powers, its members and their syndicate associations
          have significant influence, which means that big decisions get taken
          jointly between Lloyd’s Council, Corporation and syndicates.
        </p>
      </div>
      <FigureAssets />
      <div className="w-full flex flex-col bg-gray-200 sm:py-12 p-8 sm:px-20 text-gray-900">
        <h3 className="font-bold sm:text-5xl text-2xl mb-5 sm:mb-10">
          What is Lloyd’s?
        </h3>
        <p className="sm:text-2xl text-base">
          While Lloyd’s Council has failed to implement a company-wide coal
          policy, Lloyd’smembers have begun to act. Thus far, ___ Lloyd’s
          members have adopted coal policies and all but __ Lloyd’s members have
          committed to not insure Adani’s Carmichael coal project.
        </p>
      </div>
    </div>
  );
}

export default MembersContainer;
