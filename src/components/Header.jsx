import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Wildan Apps</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Task Manager
            </Link>
          </li>
          <li>
            <Link
              to="/calculator"
              className="hover:text-gray-300 transition-colors"
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/temperature-converter"
              className="hover:text-gray-300 transition-colors"
            >
              Temperature Converter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
