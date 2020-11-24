import Footer from "../src/components/internal/Footer";
import Header from "../src/components/internal/Header";
import MembersContainer from "../src/components/internal/MembersContainer";

function Members() {
  return (
    <div className="bg-white lg:bg-gray-150">
      <Header />
      <div className="bg-gray-900 flex justify-center pt-20 text-6xl text-white primary-extra-bold">
        <MembersContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Members;
