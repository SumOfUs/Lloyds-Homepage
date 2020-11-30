import Footer from "../src/components/internal/Footer";
import Header from "../src/components/internal/Header";
import ActWrapper from "../src/components/Act";

function Act() {
  return (
    <div className="bg-white lg:bg-gray-150">
      <Header />
      <div className="flex justify-center pt-24 primary-extra-bold">
        <ActWrapper />
      </div>
      <Footer />
    </div>
  );
}

export default Act;
