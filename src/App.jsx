import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TaskManager from "./pages/TaskManager";
import Calculator from "./pages/Calculator";
import TemperatureConverter from "./pages/TemperatureConverter";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route
            path="/temperature-converter"
            element={<TemperatureConverter />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
