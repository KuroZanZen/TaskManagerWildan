import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      // Note: using eval is generally discouraged for production apps with user input due to security risks,
      // but for a simple local calculator it's often used for brevity.
      // A better approach would be to write a parser or use a math library.
      // For this specific task, I'll use Function constructor as a slightly safer alternative to direct eval,
      // but still keeping it simple.
      const calculated = new Function("return " + input)();
      setResult(calculated);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Calculator
        </h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-gray-100 text-right text-2xl p-3 rounded-lg focus:outline-none"
            value={input}
            readOnly
          />
          <div className="text-right text-gray-500 mt-2 h-6">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleClick("0")}
            className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-lg font-semibold transition-colors"
          >
            0
          </button>
          <button
            onClick={clearInput}
            className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg text-lg font-semibold transition-colors"
          >
            C
          </button>
          <button
            onClick={calculateResult}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold transition-colors"
          >
            =
          </button>
          <button
            onClick={() => handleClick("+")}
            className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-lg font-semibold transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
