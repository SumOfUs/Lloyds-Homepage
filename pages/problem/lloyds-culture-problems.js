import Footer from "../../src/components/internal/Footer";
import Header from "../../src/components/internal/Header";
import ImageCard from "../../src/components/internal/ImageCard/ImageCard";
import Accordion from "../../src/components/internal/Accordion/Accordion";

function CultureProblems() {
  const ProjectDetails = [
    {
      accordionOpen: false,
      className: "bg-gray-1500 text-white",
      heading: "Lloyd’s climate hypocripsy",
      description: (
        <p>
          In 2010 when Indian company Adani Group originally proposed the
          Carmichael coal mine in Queensland, Australia, it was planned to be
          one of the largest mines in the world.
          <br />
          <br />
          If built, it would “allow 500 more coal ships to travel through the
          Great Barrier Reef World Heritage Area every year for 60 years,” and
          “destroy the ancestral lands, waters and cultures of Indigenous people
          without their consent.”
          <br />
          <br />
          If allowed to operate, it is estimated the mine will add 4.6 billion
          tonnes of carbon pollution to the atmosphere and will suck out at
          least 270 billion litres of groundwater over the life of the mine. To
          date,more than 70 financial institutions, including 27 insurers, have
          withdrawn from or committed not to be involved in the Adani Carmichael
          coal mine.
          <br />
          <br />
          However, in 2019 Lloyd’s members started insuring Adani at the very
          time other more responsible insurers were refusing to do so and in
          contradiction to statements made by Lloyd’s to the Insure our Future
          network (previously the Unfriend Coal network) earlier that year.{" "}
          <br />
          <br />
          The #StopAdanicampaign is demanding companies commit to ending their
          association with the climate-wrecking Carmichael project. Many Lloyd’s
          members have already publicly ruled out insuring Adani or said they
          will not provide further cover. Pressure is increasing on the few
          Lloyd’s members who continue to insure the project and other who
          refuse to rule it out.
          <br />
          <br />
          That pressure is increasingly being felt by the entire Lloyd’s market
          and brand. It is time for the entire Lloyd’s market to close its doors
          to Adani for good.
          <br />
          <br />
        </p>
      ),
      imageProps: {
        image:
          "https://images.unsplash.com/photo-1433477077279-9354d2d72f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2730&q=80",
        imgBackground: "bg-yellow-lemon",
        borderPosition: "left",
      },
      sources: ["BBC", "CNN", "New York Times"],
    },
    {
      accordionOpen: false,
      className: "bg-gray-1500 text-white",
      heading: "LLyod’s Links to Slavery",
      description: (
        <p>
          In 2010 when Indian company Adani Group originally proposed the
          Carmichael coal mine in Queensland, Australia, it was planned to be
          one of the largest mines in the world.
          <br />
          <br />
          If built, it would “allow 500 more coal ships to travel through the
          Great Barrier Reef World Heritage Area every year for 60 years,” and
          “destroy the ancestral lands, waters and cultures of Indigenous people
          without their consent.”
          <br />
          <br />
          If allowed to operate, it is estimated the mine will add 4.6 billion
          tonnes of carbon pollution to the atmosphere and will suck out at
          least 270 billion litres of groundwater over the life of the mine. To
          date,more than 70 financial institutions, including 27 insurers, have
          withdrawn from or committed not to be involved in the Adani Carmichael
          coal mine.
          <br />
          <br />
          However, in 2019 Lloyd’s members started insuring Adani at the very
          time other more responsible insurers were refusing to do so and in
          contradiction to statements made by Lloyd’s to the Insure our Future
          network (previously the Unfriend Coal network) earlier that year.{" "}
          <br />
          <br />
          The #StopAdanicampaign is demanding companies commit to ending their
          association with the climate-wrecking Carmichael project. Many Lloyd’s
          members have already publicly ruled out insuring Adani or said they
          will not provide further cover. Pressure is increasing on the few
          Lloyd’s members who continue to insure the project and other who
          refuse to rule it out.
          <br />
          <br />
          That pressure is increasingly being felt by the entire Lloyd’s market
          and brand. It is time for the entire Lloyd’s market to close its doors
          to Adani for good.
          <br />
          <br />
        </p>
      ),
      imageProps: {
        image:
          "https://images.unsplash.com/photo-1422004694183-cd2f8c55d4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI2Mjc0fQ&auto=format&fit=crop&w=2706&q=80",
        imgBackground: "bg-yellow-lemon",
        borderPosition: "left",
      },
      // sources: ["BBC", "CNN", "New York Times"],
    },
    {
      accordionOpen: true,
      className: "bg-gray-1500 text-white",
      heading: "Lloyd’s culture problems: Sexual harassment and alcohol abuse",
      description: (
        <p>
          In 2010 when Indian company Adani Group originally proposed the
          Carmichael coal mine in Queensland, Australia, it was planned to be
          one of the largest mines in the world.
          <br />
          <br />
          If built, it would “allow 500 more coal ships to travel through the
          Great Barrier Reef World Heritage Area every year for 60 years,” and
          “destroy the ancestral lands, waters and cultures of Indigenous people
          without their consent.”
          <br />
          <br />
          If allowed to operate, it is estimated the mine will add 4.6 billion
          tonnes of carbon pollution to the atmosphere and will suck out at
          least 270 billion litres of groundwater over the life of the mine. To
          date,more than 70 financial institutions, including 27 insurers, have
          withdrawn from or committed not to be involved in the Adani Carmichael
          coal mine.
          <br />
          <br />
          However, in 2019 Lloyd’s members started insuring Adani at the very
          time other more responsible insurers were refusing to do so and in
          contradiction to statements made by Lloyd’s to the Insure our Future
          network (previously the Unfriend Coal network) earlier that year.{" "}
          <br />
          <br />
          The #StopAdanicampaign is demanding companies commit to ending their
          association with the climate-wrecking Carmichael project. Many Lloyd’s
          members have already publicly ruled out insuring Adani or said they
          will not provide further cover. Pressure is increasing on the few
          Lloyd’s members who continue to insure the project and other who
          refuse to rule it out.
          <br />
          <br />
          That pressure is increasingly being felt by the entire Lloyd’s market
          and brand. It is time for the entire Lloyd’s market to close its doors
          to Adani for good.
          <br />
          <br />
        </p>
      ),
      imageProps: {
        image:
          "https://images.unsplash.com/photo-1414586432391-3178dbff6c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80",
        imgBackground: "bg-yellow-lemon",
        borderPosition: "left",
      },
      sources: ["BBC", "CNN", "New York Times"],
    },
  ];
  return (
    <div className="w-full">
      <Header />
      <div className="bg-black mt-100 py-16">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-row items-center">
          <div className="w-1/2 text-white flex flex-col pr-4">
            <h2 className="text-6xl text-white primary-black tracking-tight">
              LLoyd’s Culture Problems
            </h2>
            <p className="text-2xl text-gray-1200 primary-medium pt-8 mb-12">
              Lloyd’s has deep historic links to slavery. Lloyd’s relatively
              recent past includes historic financial losses for investors and
              in recent years a culture of sexual harassment and alcohol abuse
              in lloyd’s market was widely exposed. Lloyd’s today continues to
              support fossil fuel projects and companies that are driving
              climate destruction. Lloyd’s is happy to sign upto pledges and
              schemes claiming environmental leadership but when it comes to
              putting those principles into action, Lloyd’s is a hypocrite. The
              brave risk taking culture image that Lloyd’s advertises appears
              more like a greedy climate science denying (or willfully ignoring
              climate science) culture which, like a number of other unsavoury
              aspects of Lloyd’s culture, should be consigned to history.
            </p>
          </div>
          <div className="w-1/2 mx-12">
            <ImageCard
              imgBackground="bg-yellow-lemon"
              image="https://images.unsplash.com/photo-1484605731351-aca94cb8b276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2063&q=80"
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex">
        <div className="max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12">
          <h2 className="text-6xl text-white primary-black tracking-tight">
            The Problems are
          </h2>
          {ProjectDetails.map((projDetail) => {
            return <Accordion {...projDetail} />;
          })}
        </div>
      </div>
      <div className="bg-gray-1000">
        <div className="max-w-1440 3xl:mx-auto xl:mx-16 mx-12 flex flex-row items-center justify-between py-12">
          <div className="text-white text-6xl primary-black w-1/2">
            See how we solve this Problem
          </div>
          <a
            href="/solution"
            className="w-64 py-4 mt-8 text-xl bg-blue-900 primary-bold text-white flex justify-center"
          >
            Explore Solution
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CultureProblems;
