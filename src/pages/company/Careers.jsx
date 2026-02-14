import React from "react";

const Careers = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Careers at Wildan Energy
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join us in powering progress. Whether you are an experienced
          professional or a recent graduate, we offer opportunities to make a
          real impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="bg-gray-100 rounded-xl p-8 h-80 flex items-center justify-center text-gray-400 font-bold text-xl">
          [Video: Life at Wildan Energy]
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Why Join Us?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div>
                <strong className="block text-gray-800">Innovation</strong>
                <span className="text-gray-600">
                  Work with cutting-edge technology to solve global energy
                  challenges.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div>
                <strong className="block text-gray-800">Development</strong>
                <span className="text-gray-600">
                  Continuous learning and career progression opportunities.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div>
                <strong className="block text-gray-800">
                  Diversity & Inclusion
                </strong>
                <span className="text-gray-600">
                  An inclusive environment where everyone can thrive.
                </span>
              </div>
            </li>
          </ul>
          <button className="mt-8 bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors">
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
