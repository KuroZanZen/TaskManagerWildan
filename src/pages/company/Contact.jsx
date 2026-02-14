import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-gray-500 pb-2 inline-block">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question about our operations, investors relations, or
            sustainability initiatives? We are here to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Headquarters</h3>
                <p className="text-gray-600">
                  Wildan Energy Tower
                  <br />
                  Jl. Jendral Sudirman No. 1<br />
                  Jakarta, Indonesia 10220
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">
                  info@wildanenergy.com
                  <br />
                  media@wildanenergy.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">+62 21 555 0199</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Send us a message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
