import Footer from "../../src/components/internal/Footer";
import Header from "../../src/components/internal/Header";
import ImageCard from "../../src/components/internal/ImageCard/ImageCard";
import Accordion from "../../src/components/internal/Accordion/Accordion";

function OthersDoing() {
  return (
    <div className="w-full">
      <Header />

      {/*  */}
      <div className="bg-white mt-100 py-16">
        <div className="flex max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 flex-row items-center">
          <div className="w-1/2 flex flex-col pr-4">
            <h2 className="text-6xl primary-black tracking-tight">
              What Others are Doing?
            </h2>
            <p className="text-4xl primary-semi-bold pt-8 mb-12">
              Whilst many leading European insurers have in recent years
              withdrawn from insuring and investing in coal and tar sands,
              Lloyd’s says it will not set an underwriting policy unless there
              is a legal or regulatory requirement to do so.
              <br />
              <br />
              Comments restricted to single page To date, at least 22 companies
              have ended or limited their cover for coal projects. This
              represents 12.4% of the primary insurance market and 48.3% of the
              reinsurance market.
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

      {/*  */}

      <div className="bg-gray-1200">
        <div className="max-w-1440 3xl:mx-auto xl:mx-16 mx-12 py-12">
          <h2 className="text-5xl primary-black tracking-tight">
            No Coal Underwriting Policy.
          </h2>
          <p className="my-8 text-2xl primary-semi-bold text-justify">
            In Europe, Lloyd’s is the only major insurer with no coal
            underwriting policy. Swiss Re, AXA, Hannover Re, Zurich, Munich Re,
            Generali, SCOR Re, HDI Global, Allianz, Mapfre, and Aviva have all
            adopted coal policies. With most European and Australian companies
            no longer underwriting coal, coal mining and power companies around
            the world are finding it increasingly difficult to get insurance.
            Premiums have soared 40%, and controversial projects struggle to
            secure the insurance necessary to operate. The shrinking coal market
            provides proof of concept for insurers’ power to reduce fossil
            fuels, and with 10 insurers covering about 70% of the global oil and
            gas market, action by a small number would have a major impact. The
            biggest oil and gas insurers are AIG, Travelers, Zurich and Lloyd’s.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OthersDoing;
