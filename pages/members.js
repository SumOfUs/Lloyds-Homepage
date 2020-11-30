import Footer from "../src/components/internal/Footer";
import Header from "../src/components/internal/Header";
import MembersContainer from "../src/components/Members";

function Members() {
  return (
    <div className="bg-white lg:bg-gray-150">
      <Header />
      <div className="flex justify-center pt-20 primary-black">
        <MembersContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Members;
