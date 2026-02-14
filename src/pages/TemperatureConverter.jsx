import { useState, useEffect } from "react";

const TemperatureConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState("C");
  const [toUnit, setToUnit] = useState("F");
  const [result, setResult] = useState("");

  const units = [
    { value: "C", label: "Celsius (°C)" },
    { value: "F", label: "Fahrenheit (°F)" },
    { value: "K", label: "Kelvin (K)" },
    { value: "R", label: "Reamur (°R)" },
  ];

  const convert = () => {
    if (amount === "") {
      setResult("");
      return;
    }

    const val = parseFloat(amount);
    if (isNaN(val)) {
      setResult("Invalid input");
      return;
    }

    // Convert everything to Celsius first
    let celsiusDetails;
    switch (fromUnit) {
      case "C":
        celsiusDetails = val;
        break;
      case "F":
        celsiusDetails = ((val - 32) * 5) / 9;
        break;
      case "K":
        celsiusDetails = val - 273.15;
        break;
      case "R":
        celsiusDetails = (val * 5) / 4;
        break;
      default:
        celsiusDetails = val;
    }

    // Convert from Celsius to target unit
    let finalResult;
    switch (toUnit) {
      case "C":
        finalResult = celsiusDetails;
        break;
      case "F":
        finalResult = (celsiusDetails * 9) / 5 + 32;
        break;
      case "K":
        finalResult = celsiusDetails + 273.15;
        break;
      case "R":
        finalResult = (celsiusDetails * 4) / 5;
        break;
      default:
        finalResult = celsiusDetails;
    }

    setResult(finalResult.toFixed(2));
  };

  // Auto-convert when any value changes
  useEffect(() => {
    convert();
  }, [amount, fromUnit, toUnit]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Temperature Converter
        </h2>

        <div className="space-y-6">
          {/* Input Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter value"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex space-x-4 items-center">
            {/* From Unit */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-3 bg-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Icon */}
            <button
              onClick={() => {
                const temp = fromUnit;
                setFromUnit(toUnit);
                setToUnit(temp);
              }}
              className="mt-6 text-gray-500 hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>

            {/* To Unit */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-3 bg-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result Section */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <h3 className="text-gray-500 text-sm uppercase tracking-wide font-semibold">
              Result
            </h3>
            <div className="text-4xl font-bold text-blue-600 mt-2 min-h-[40px]">
              {result !== ""
                ? `${result} ${units.find((u) => u.value === toUnit)?.label}`
                : "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
