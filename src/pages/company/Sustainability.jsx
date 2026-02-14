import React from "react";

const Sustainability = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-green-500 pb-2 inline-block">
        Sustainability
      </h1>

      <div className="bg-green-50 p-8 rounded-2xl mb-12 border border-green-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Net-Zero Emissions by 2050
            </h2>
            <p className="text-green-700 leading-relaxed mb-6">
              We are transforming our business to meet our target of becoming a
              net-zero emissions energy business by 2050, in step with society.
              This is a target that covers not just the emissions from our own
              operations but also the emissions from the energy products we sell
              to our customers.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Read Our Strategy
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-xl text-center p-4">
              [Infographic: <br /> Path to Net Zero]
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Respecting Nature
          </h3>
          <p className="text-gray-600 mb-4">
            We are committed to protecting the environment, respecting our
            neighbors, and causing no harm to people. We work to manage our
            impact on biodiversity and water usage responsibly.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Powering Lives
          </h3>
          <p className="text-gray-600 mb-4">
            We are working to provide reliable electricity to emerging
            economies, helping to spur economic growth and improve quality of
            life while moving away from higher-carbon energy sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
