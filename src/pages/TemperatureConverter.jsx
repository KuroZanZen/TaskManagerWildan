import { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Temperature Converter
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Celsius (°C)
            </label>
            <input
              type="number"
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder="Enter Celsius"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fahrenheit (°F)
            </label>
            <input
              type="number"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder="Enter Fahrenheit"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
