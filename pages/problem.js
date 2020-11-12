import Footer from "../src/components/internal/Footer";
import Header from "../src/components/internal/Header";

function Problem() {
  return (
    <div className="w-full">
      <Header />
      <div className="h-screen bg-gray-800 flex justify-center pt-12 text-6xl text-white primary-extra-bold">
        Problem
      </div>
      <Footer />
    </div>
  );
}

export default Problem;
