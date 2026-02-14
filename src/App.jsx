import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TaskManager from "./pages/TaskManager";
import Calculator from "./pages/Calculator";
import TemperatureConverter from "./pages/TemperatureConverter";

// Company Profile Components
import CompanyLayout from "./layouts/CompanyLayout";
import CompanyHome from "./pages/company/CompanyHome";
import AboutUs from "./pages/company/AboutUs";
import OurBusiness from "./pages/company/OurBusiness";
import Sustainability from "./pages/company/Sustainability";
import NewsMedia from "./pages/company/NewsMedia";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";
import FAQ from "./pages/company/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Application Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <TaskManager />
            </>
          }
        />
        <Route
          path="/calculator"
          element={
            <>
              <Header />
              <Calculator />
            </>
          }
        />
        <Route
          path="/temperature-converter"
          element={
            <>
              <Header />
              <TemperatureConverter />
            </>
          }
        />

        {/* Company Profile Routes */}
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<CompanyHome />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="business" element={<OurBusiness />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="news" element={<NewsMedia />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
