import Footer from "../../src/components/internal/Footer";
import Header from "../../src/components/internal/Header";
import ImageCard from "../../src/components/internal/ImageCard/ImageCard";
import Accordion from "../../src/components/internal/Accordion/Accordion";

function CultureProblems() {
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
          <Accordion />
          <Accordion />
          <Accordion />
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
