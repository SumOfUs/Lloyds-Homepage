import React from "react";
import ImageWithInfo from "../ImageWithInfo";
import FigureAssets from "../FigureAssets";
import Accordion from "../Accordion";

function MembersContainer() {
  const accordionContent = [
    {
      heading: "Adani Carmichael Coal Mine- Australia",
      description: (
        <>
          <p>
            In 2010 when Indian company Adani Group originally proposed the
            Carmichael coal mine in Queensland, Australia, it was planned to be
            one of the largest mines in the world.
          </p>
          <br />
          <p>
            If built, it would “allow 500 more coal ships to travel through the
            Great Barrier Reef World Heritage Area every year for 60 years,” and
            “destroy the ancestral lands, waters and cultures of Indigenous
            people without their consent.”
          </p>
          <br />
          <p>
            If allowed to operate, it is estimated the mine will add 4.6 billion
            tonnes of carbon pollution to the atmosphere and will suck out at
            least 270 billion litres of groundwater over the life of the mine.
            To date,more than 70 financial institutions, including 27 insurers,
            have withdrawn from or committed not to be involved in the Adani
            Carmichael coal mine.
          </p>
          <br />
          <p>
            However, in 2019 Lloyd’s members started insuring Adani at the very
            time other more responsible insurers were refusing to do so and in
            contradiction to statements made by Lloyd’s to the Insure our Future
            network (previously the Unfriend Coal network) earlier that year.
          </p>
          <br />
          <p>
            The #StopAdanicampaign is demanding companies commit to ending their
            association with the climate-wrecking Carmichael project. Many
            Lloyd’s members have already publicly ruled out insuring Adani or
            said they will not provide further cover. Pressure is increasing on
            the few Lloyd’s members who continue to insure the project and other
            who refuse to rule it out.
          </p>
          <br />
          <p>
            That pressure is increasingly being felt by the entire Lloyd’s
            market and brand. It is time for the entire Lloyd’s market to close
            its doors to Adani for good.
          </p>
        </>
      ),
      image: "https://dummyimage.com/628x487/000/fff&text=DummyImage",
      imgBackground: "bg-yellow-600",
      imgPosition: "left",
      sources: ["BBC", "CNN", "New York Times"],
      className: "bg-gray-1500 text-white",
    },
    {
      heading: "Trans Mountain Pipeline Expansion - Canada",
      description: (
        <>
          <p>
            In 2010 when Indian company Adani Group originally proposed the
            Carmichael coal mine in Queensland, Australia, it was planned to be
            one of the largest mines in the world.
          </p>
          <br />
          <p>
            If built, it would “allow 500 more coal ships to travel through the
            Great Barrier Reef World Heritage Area every year for 60 years,” and
            “destroy the ancestral lands, waters and cultures of Indigenous
            people without their consent.”
          </p>
          <br />
          <p>
            If allowed to operate, it is estimated the mine will add 4.6 billion
            tonnes of carbon pollution to the atmosphere and will suck out at
            least 270 billion litres of groundwater over the life of the mine.
            To date,more than 70 financial institutions, including 27 insurers,
            have withdrawn from or committed not to be involved in the Adani
            Carmichael coal mine.
          </p>
          <br />
          <p>
            However, in 2019 Lloyd’s members started insuring Adani at the very
            time other more responsible insurers were refusing to do so and in
            contradiction to statements made by Lloyd’s to the Insure our Future
            network (previously the Unfriend Coal network) earlier that year.
          </p>
          <br />
          <p>
            The #StopAdanicampaign is demanding companies commit to ending their
            association with the climate-wrecking Carmichael project. Many
            Lloyd’s members have already publicly ruled out insuring Adani or
            said they will not provide further cover. Pressure is increasing on
            the few Lloyd’s members who continue to insure the project and other
            who refuse to rule it out.
          </p>
          <br />
          <p>
            That pressure is increasingly being felt by the entire Lloyd’s
            market and brand. It is time for the entire Lloyd’s market to close
            its doors to Adani for good.
          </p>
        </>
      ),
      image: "https://dummyimage.com/628x487/000/fff&text=DummyImage",
      imgBackground: "bg-blue-900",
      imgPosition: "left",
      sources: ["BBC", "CNN", "New York Times"],
      className: "bg-gray-1500 text-white",
    },
    {
      heading: "Coal Mine (re)insurance -Poland",
      description: (
        <>
          <p>
            In 2010 when Indian company Adani Group originally proposed the
            Carmichael coal mine in Queensland, Australia, it was planned to be
            one of the largest mines in the world.
          </p>
          <br />
          <p>
            If built, it would “allow 500 more coal ships to travel through the
            Great Barrier Reef World Heritage Area every year for 60 years,” and
            “destroy the ancestral lands, waters and cultures of Indigenous
            people without their consent.”
          </p>
          <br />
          <p>
            If allowed to operate, it is estimated the mine will add 4.6 billion
            tonnes of carbon pollution to the atmosphere and will suck out at
            least 270 billion litres of groundwater over the life of the mine.
            To date,more than 70 financial institutions, including 27 insurers,
            have withdrawn from or committed not to be involved in the Adani
            Carmichael coal mine.
          </p>
          <br />
          <p>
            However, in 2019 Lloyd’s members started insuring Adani at the very
            time other more responsible insurers were refusing to do so and in
            contradiction to statements made by Lloyd’s to the Insure our Future
            network (previously the Unfriend Coal network) earlier that year.
          </p>
          <br />
          <p>
            The #StopAdanicampaign is demanding companies commit to ending their
            association with the climate-wrecking Carmichael project. Many
            Lloyd’s members have already publicly ruled out insuring Adani or
            said they will not provide further cover. Pressure is increasing on
            the few Lloyd’s members who continue to insure the project and other
            who refuse to rule it out.
          </p>
          <br />
          <p>
            That pressure is increasingly being felt by the entire Lloyd’s
            market and brand. It is time for the entire Lloyd’s market to close
            its doors to Adani for good.
          </p>
        </>
      ),
      image: "https://dummyimage.com/628x487/000/fff&text=DummyImage",
      imgBackground: "bg-blue-900",
      imgPosition: "right",
      sources: ["BBC", "CNN", "New York Times"],
      className: "bg-gray-1500 text-white",
    },
  ];

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
      <div className="w-11/12 mx-auto">
        {accordionContent.map((accordion) => {
          return <Accordion {...accordion} />;
        })}
      </div>
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
