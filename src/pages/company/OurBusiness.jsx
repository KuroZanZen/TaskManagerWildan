import React from "react";

const OurBusiness = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
        Our Business
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Upstream */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="h-48 bg-blue-900 flex items-center justify-center text-white text-xl font-bold">
            Upstream
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Upstream</h3>
            <p className="text-gray-600 text-sm mb-4">
              Focusing on exploration and extraction of crude oil, natural gas,
              and natural gas liquids. We use cutting-edge seismic technology to
              locate resources deep proactively.
            </p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Deep Water Exploration</li>
              <li>Conventional Oil & Gas</li>
              <li>Integrated Gas</li>
            </ul>
          </div>
        </div>

        {/* Downstream */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="h-48 bg-blue-700 flex items-center justify-center text-white text-xl font-bold">
            Downstream
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Downstream</h3>
            <p className="text-gray-600 text-sm mb-4">
              Refining, supply, and trading. We turn crude oil into a range of
              refined products, which are moved and marketed around the world
              for domestic, industrial, and transport use.
            </p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Refining & Chemicals</li>
              <li>Marketing & Lubricants</li>
              <li>Biofuels</li>
            </ul>
          </div>
        </div>

        {/* Integrated Gas & Renewables */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="h-48 bg-green-600 flex items-center justify-center text-white text-xl font-bold">
            Renewables & Energy Solutions
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Renewables</h3>
            <p className="text-gray-600 text-sm mb-4">
              Investing in low-carbon energy solutions such as wind, solar, and
              hydrogen to meet the changing energy needs of the planet.
            </p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Wind & Solar</li>
              <li>Hydrogen</li>
              <li>Electric Mobility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBusiness;
