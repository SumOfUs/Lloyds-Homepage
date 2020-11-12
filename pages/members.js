import Footer from "../src/components/internal/Footer";
import Header from "../src/components/internal/Header";

function Members() {
  return (
    <div className="bg-white lg:bg-gray-150">
      <Header />
      <div className="h-screen bg-gray-900 flex justify-center pt-12 text-6xl text-white primary-extra-bold">
        Members
      </div>
      <Footer />
    </div>
  );
}

export default Members;
