import Footer from "../../src/components/internal/Footer";
import Header from "../../src/components/internal/Header";
import ImageCard from "../../src/components/internal/ImageCard/ImageCard";

function Problem() {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-black mt-100 py-16">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-row items-center">
          <div className="w-1/2 text-white flex flex-col">
            <div className="text-6xl text-white primary-black">The Problem</div>
            <div className="text-4xl text-white primary-extra-bold tracking-wider">
              Lloyd’s and its members are (re)insuring and investing in fossil
              fuels that destroy the planet.
            </div>
            <div className="text-2xl text-gray-1200 primary-medium pt-8">
              Lloyd’s members continue to provide insurance and reinsurance for
              fossil fuel projects, including coal mines, tar sands pipelines
              and new oil & gas exploration which are incompatible with keeping
              global warming below 1.5C. They also invest in fossil fuel
              companies whose business models are driving climate change.
              Lloyd’s is estimated to have accounted for approximately 40% of
              the total global energy insurance premium in 2018 ($2.6 billion of
              the total $6 billion).
            </div>
          </div>
          <div className="w-1/2 mx-12">
            <ImageCard
              imgBackground="bg-yellow-lemon"
              image="https://images.unsplash.com/photo-1558793670-71d192b6a8b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-1300">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-col py-24">
          <div className="text-6xl text-white primary-extra-bold">
            Some Real Stats
          </div>
          <div className="text-2xl text-gray-1200 primary-medium pt-8">
            Whilst many leading European insurers have withdrawn from insuring
            and investing in coal and tar sands for example, Lloyd’s members
            have stepped in to provide cover for fossil fuel projects which
            other more responsible insurers have rejected due to the
            unacceptable climate impacts. Lloyd’s announced a coal exclusion
            investment criteriain April 2018 covering approx 75% of its Central
            Fund (£2 billion). However this accounts for only around 3% of the
            total funds held in Lloyd’s capital structure. The policy does not
            yet apply to Members at Lloyd’s funds (£27 billion) or Lloyd’s
            syndicates funds (£52 billion), which make up97% of Lloyd’s capital
            structure.The policy applies to assets held in segregated portfolios
            and commits to excluding any companies that meet at least one of a
            number of criteria. There is significant scope for tightening
            thispolicy by reducing each of the thresholds it sets and adding a
            timeline to zero by 2030, but the far more serious gaps are that the
            policy doesn’t apply to 97% of the funds within Lloyd’s capital
            structure and it does not apply at all to Lloyd’s core business of
            (re)insurance.Recently, Lloyd’s has issued statements saying that,
            “Many firms in the Lloyd’s market are taking steps towards
            restricting insurance coverage for thermal coal extraction or energy
            production, and are divesting in companies involvedin the coal
            sector.” However Lloyd’s has refused to provide any details or
            evidence to support that statement and Lloyd’s itself has not yet
            set a market-wide policy to stop underwriting coal, tar sands, or
            new oil and gas, which would create a level playing field for all
            its members.
          </div>
          <a
            href="/members"
            className="w-64 py-3 mt-12 bg-blue-900 text-white primary-bold text-2xl flex justify-center"
          >
            See Members
          </a>
        </div>
      </div>
      <div className="bg-gray-1400">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-col py-24">
          <div className="text-5xl text-white primary-extra-bold">
            The financial elephant in Lloyd’s underwriting room: Climate
            catastrophe risk
          </div>
          <img
            src="https://images.unsplash.com/photo-1551727041-5b347d65b633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
            alt="Banner"
            className="w-full h-400 object-cover rounded-lg my-12"
            height={400}
          />
          <div className="text-2xl text-gray-1200 primary-medium pt-8">
            (Re)insuring climate catastrophe risks while (re)insuring activities
            that cause those catastrophes to happen with increasing frequency,
            strength and cost appears on the face of it to make no sense. That
            elephant in the room needs to be named and taken into account by
            Lloyd’s and it’s members but perhaps more particularly by Lloyd’s
            investors and within the Solvency II climate stress tests by Lloyd’s
            regulator the Bank of England Prudential Regulation Authority (PRA).
          </div>
        </div>
      </div>
      <div className="w-full black-grey-bg">
        <div className="max-w-1440 3xl:mx-auto flex biglg:flex-row flex-col mx-8">
          <div className="biglg:w-1/2 3xl:pr-24 2xl:pr-16 lg:pr-16 py-8 text-white">
            <div className="primary-black text-5xl">Lloyd’s Dirty Project</div>
            <div className="primary-medium text-2xl leading-normal my-12 h-300">
              Lloyd’s has stepped in to insure controversial fossil fuelprojects
              that other insurers have dropped, for example the proposed Adani
              Carmichael coal mine in Australia. Lloyd’s members also provide
              reinsurance for heavily polluting Polish coal mines, which are an
              embarrassment to European climate policy. In 2019, Lloyd’s renewed
              its insurance of the Trans Mountain tar sand pipeline and is
              assumed to do so again in 2020.
            </div>
            <a
              href="/problem"
              className="w-64 py-4 mt-8 text-xl bg-blue-900 primary-bold text-white flex justify-center"
            >
              Explore Dirty Project
            </a>
          </div>
          <div className="biglg:w-1/2 3xl:pl-24 2xl:pl-16 lg:pl-8 py-8 text-white">
            <div className="primary-extra-bold text-5xl">
              LLoyd’s Culture Problem
            </div>
            <div className="primary-medium text-2xl leading-normal my-12 h-300">
              Lloyd’s has deep historic links to slavery. Lloyd’s relatively
              recent past includes historic financial losses for investors and
              in recent years a culture of sexual harassment and alcohol abuse
              in lloyd’s market was widely exposed. Lloyd’s today continues to
              support fossil fuel projects and companies that are driving
              climate destruction. Lloyd’s is happy to sign upto pledges and
              schemes claiming environmental leadership …
              <a href="/" className="pl-2 text-blue-900 primary-semi-bold">
                See more…
              </a>
            </div>
            <a
              href="/solution"
              className="w-64 py-4 mt-8 text-xl bg-blue-900 primary-bold text-white flex justify-center"
            >
              Explore Culture Problem
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black">
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

export default Problem;
