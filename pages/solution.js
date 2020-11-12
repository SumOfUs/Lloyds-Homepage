import Footer from "../src/components/internal/Footer";
import Header from "../src/components/internal/Header";

function Solution() {
  return (
    <div className="bg-white lg:bg-gray-150">
      <Header />
      <div className="h-screen bg-gray-900 flex justify-center pt-12 text-6xl text-white primary-extra-bold">
        Solution
      </div>
      <Footer />
    </div>
  );
}

export default Solution;
