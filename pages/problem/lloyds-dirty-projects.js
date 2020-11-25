import Footer from "../../src/components/internal/Footer";
import Header from "../../src/components/internal/Header";
import ImageCard from "../../src/components/internal/ImageCard/ImageCard";

function DirtyProjects() {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-black mt-100 py-16">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-row items-center">
          <div className="w-1/2 text-white flex flex-col">
            <div className="text-6xl text-white primary-black">
              LLoyd’s Dirty Projects
            </div>
            <div className="text-2xl text-gray-1200 primary-medium pt-8 mb-40">
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
            </div>
          </div>
          <div className="w-1/2 mx-12">
            <ImageCard
              imgBackground="bg-blue-1200"
              image="https://images.unsplash.com/photo-1558793670-71d192b6a8b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DirtyProjects;
