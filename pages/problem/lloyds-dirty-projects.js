import Footer from "../../src/components/internal/Footer";
import Header from "../../src/components/internal/Header";
import ImageCard from "../../src/components/internal/ImageCard/ImageCard";
import Accordion from "../../src/components/internal/Accordion/Accordion";

function DirtyProjects() {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-black mt-100 py-16">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-row items-center">
          <div className="w-1/2 text-white flex flex-col pr-8">
            <h2 className="text-6xl text-white primary-black tracking-tight">
              LLoyd’s Dirty Projects
            </h2>
            <p className="text-2xl text-gray-1200 primary-medium pt-8 mb-12">
              Not only is it in our planet’s best interest to transition away
              from climate destroying and polluting coal, oil, gas and tar
              sands, it is in the best interest of the insurance industry to
              stop investing in destructive energy sources that undermine
              investments and destroy reputations. While many insurers have
              started to put in place meaningful policies that exclude insurance
              of high carbon fossil fuel projects and companies, Lloyd’s remains
              an ‘insurer of last resort’ and iscentral to the continued
              operation of some of the world’s dirtiest and most destructive
              fossil fuel projects.
            </p>
          </div>
          <div className="w-1/2 mx-12">
            <ImageCard
              imgBackground="bg-blue-1200"
              image="https://images.unsplash.com/photo-1569060368645-4ab30c8d8b0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex">
        <div className="max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12">
          <h2 className="text-6xl text-white primary-black tracking-tight">
            Project of LLoyd’s
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

export default DirtyProjects;