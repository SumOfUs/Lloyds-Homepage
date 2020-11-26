import React from "react";

function FigureAssets({ assets }) {
  const lastIdx = assets.length - 1;
  return (
    <section className="w-full px-8 sm:px-20 py-16 bg-black text-white">
      <div className="mb-8 sm:mb-12">
        <h3 className="font-bold sm:text-5xl text-2xl mb-5 sm:mb-8">
          Figure on Assets
        </h3>
        <p className="sm:text-2xl text-base">
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
              <h2 className="xl:text-6xl sm:text-4xl text-4xl leading-none font-bold">
                {asset.figure}
              </h2>
              <p className="xl:text-3xl sm:text-2xl text-xl mt-2">
                {asset.info}
              </p>
            </div>
          );
        })}
      </div>
    </section>
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
