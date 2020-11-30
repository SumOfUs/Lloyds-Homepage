import React from "react";

function FigureAssets({ assets }) {
  const lastIdx = assets.length - 1;
  return (
    <div className="bg-black">
      <section className="py-10 sm:py-16 text-white max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12">
        <div className="mb-8 sm:mb-12">
          <h3 className="font-bold sm:text-5xl text-2xl mb-5 sm:mb-8 primary-black">
            Figure on Assets
          </h3>
          <p className="sm:text-2xl text-base primary-semi-bold">
            There are three links in the Chain of Security making upassets of
            approx £82 billion (2019)
          </p>
        </div>
        <div className="flex lg:flex-row flex-col w-full justify-between items-center">
          {assets.map((asset, idx) => {
            return (
              <div
                className={`max-w-sm w-full bg-gray-1000 lg:pt-16 px-8 items-center lg:items-start justify-center lg:justify-start  h-48 sm:h-280 flex flex-col lg:my-0 my-5 ${
                  idx !== lastIdx && "lg:mr-10"
                }`}
                key={Math.random()}
              >
                <h2 className="xl:text-6xl sm:text-4xl text-4xl leading-none font-bold primary-extra-bold">
                  {asset.figure}
                </h2>
                <p className="xl:text-3xl sm:text-2xl text-xl mt-2 primary-medium">
                  {asset.info}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

FigureAssets.defaultProps = {
  assets: [
    {
      figure: "£52 849 M",
      info: "Syndicate level assets",
    },
    {
      figure: "£26 595 M",
      info: "Members Funds at Lloyd’s",
    },
    {
      figure: "£2 483 M",
      info: "Central assets: Central Fund",
    },
  ],
};

export default FigureAssets;
