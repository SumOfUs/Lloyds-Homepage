import React from "react";
import ImageWithInfo from "../ImageWithInfo";
import FigureAssets from "../FigureAssets";
import Accordion from "../Accordion";

function MembersContainer() {
  const imageWithInfoContent = {
    borderPosition: "right",
    heading: "Lloyd’s Members",
    description:
      "While Lloyd’s of London has committed to somecoal divestment from its own central fund, it provides no direction to the 90-plus syndicates that make up 97% of its market. Piecemeal policies are now being put in place by some Lloyd’s members, however Lloyd’s has a long way to go to bring its underwriting and its investment policies in-line with other leading insurers and with what is required to keep global warming under 1.5°C. We demand syndicates commit to stop insuring coal, oil, tar sands and gas, but the ultimate responsibility lies with Lloyd’s Council. Lloyd’s Council cannot just pass the buck to the syndicates and do nothing. Lloyd’s Council, or behind it the UK parliament, have the ultimate responsibility for what takes place under the Lloyd’s name.",
    image:
      "https://images.unsplash.com/photo-1602501759424-4a46bf324907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=884&q=80",
    imgBackground: "bg-blue-900",
  };

  const accordionContent = [
    {
      heading: "Lloyd’s Syndicates",
      description:
        "A Lloyd’s syndicate is formed by one or more members joining together to provide capital and accept insurance risks. There are currently 93syndicates, which are set up on an annual basis. In practice, they usually operate from year to year and function like permanent insurance operations. Lloyd’s syndicates insure a wide range of specialist risk. All Lloyd’s syndicates benefit from Lloyd’s central resources, including Lloyd's brand, its network of global licences and the Central Fund.",
      className: "bg-gray-200 text-gray-900",
      accordionOpen: true,
    },
    {
      heading: "Lloyd’s corporation",
      description:
        "A Lloyd’s syndicate is formed by one or more members joining together to provide capital and accept insurance risks. There are currently 93syndicates, which are set up on an annual basis. In practice, they usually operate from year to year and function like permanent insurance operations. Lloyd’s syndicates insure a wide range of specialist risk. All Lloyd’s syndicates benefit from Lloyd’s central resources, including Lloyd's brand, its network of global licences and the Central Fund.",
      className: "bg-gray-200 text-gray-900",
    },
    {
      heading: "Lloyd’s Council",
      description:
        "A Lloyd’s syndicate is formed by one or more members joining together to provide capital and accept insurance risks. There are currently 93syndicates, which are set up on an annual basis. In practice, they usually operate from year to year and function like permanent insurance operations. Lloyd’s syndicates insure a wide range of specialist risk. All Lloyd’s syndicates benefit from Lloyd’s central resources, including Lloyd's brand, its network of global licences and the Central Fund.",
      className: "bg-gray-200 text-gray-900",
    },
  ];

  return (
    <div className="w-full">
      <ImageWithInfo {...imageWithInfoContent} />
      <div className="bg-blue-900">
        <div className="flex flex-col text-white max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 py-12">
          <h3 className="font-bold sm:text-5xl text-2xl mb-5 sm:mb-10 primary-black">
            What is Lloyd’s?
          </h3>
          <p className="sm:text-2xl text-base primary-semi-bold">
            Lloyd’s is not an insurance company, it is a unique
            partially-mutualized marketplace, built around a society of members
            (approx 2000), which organizes itself into syndicates with a view to
            insuring risks. Lloyd’s was established by an Act of the UK
            Parliament and is regulated by the Financial Conduct Authority (FCA)
            and Prudential Regulatory Authority (PRA). Lloyd’s Council is the
            ultimate power holder within Lloyd’s. It is responsible for managing
            and supervising the market. It established the Lloyd’s Corporation
            which is not an insurer, but an independent organisation and
            regulator that acts to protect and maintain the market's reputation
            and provides infrastructure, services, research, reports and
            analysis to the market. In effect the Corporation carries out the
            day to day powers and functions of the Council. Together they are
            known by one globally recognised brand name, Lloyd's.
          </p>
          <p className="sm:text-2xl text-base mt-8 primary-semi-bold">
            Whilst Lloyd’s Council and Corporation have the ultimate
            decision-making powers, its members and their syndicate associations
            have significant influence, which means that big decisions get taken
            jointly between Lloyd’s Council, Corporation and syndicates.
          </p>
        </div>
      </div>
      <FigureAssets />
      <div className="w-11/12 max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12">
        {accordionContent.map((accordion) => {
          return <Accordion key={accordion.heading} {...accordion} />;
        })}
      </div>
      <div className="bg-gray-200">
        <div className="flex flex-col max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 sm:py-12 py-8 text-gray-900">
          <h3 className="font-bold sm:text-5xl text-2xl mb-5 sm:mb-10 primary-black">
            What is Lloyd’s?
          </h3>
          <p className="sm:text-2xl text-base primary-semi-bold">
            While Lloyd’s Council has failed to implement a company-wide coal
            policy, Lloyd’smembers have begun to act. Thus far, ___ Lloyd’s
            members have adopted coal policies and all but __ Lloyd’s members
            have committed to not insure Adani’s Carmichael coal project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MembersContainer;
