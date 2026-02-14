import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-yellow-500 pb-2 inline-block">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center text-gray-400">
            [Image: Corporate Headquarters]
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Wildan Energy is a global group of energy and petrochemical
            companies with more than 80,000 employees in more than 70 countries.
            We use advanced technologies and take an innovative approach to help
            build a sustainable energy future.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our purpose is to power progress together with more and cleaner
            energy solutions. We believe that rising standards of living for a
            growing global population are likely to continue to drive demand for
            energy, including oil and gas, for years to come.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4 text-2xl font-bold">
              H
            </div>
            <h3 className="font-bold mb-2">Honesty</h3>
            <p className="text-sm text-gray-500">
              We operate with integrity and transparency in all our dealings.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4 text-2xl font-bold">
              I
            </div>
            <h3 className="font-bold mb-2">Integrity</h3>
            <p className="text-sm text-gray-500">
              We hold ourselves to the highest ethical standards.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4 text-2xl font-bold">
              R
            </div>
            <h3 className="font-bold mb-2">Respect</h3>
            <p className="text-sm text-gray-500">
              We respect our people, our partners, and the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
