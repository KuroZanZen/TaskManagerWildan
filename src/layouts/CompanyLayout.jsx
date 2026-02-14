import { Link, Outlet, useLocation } from "react-router-dom";

const CompanyLayout = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/company" },
    { name: "About Us", path: "/company/about" },
    { name: "Our Business", path: "/company/business" },
    { name: "Sustainability", path: "/company/sustainability" },
    { name: "News & Media", path: "/company/news" },
    { name: "Careers", path: "/company/careers" },
    { name: "FAQ", path: "/company/faq" },
    { name: "Contact", path: "/company/contact" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Company Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <Link
              to="/company"
              className="text-2xl font-bold text-yellow-500 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Wildan Energy
            </Link>
            <div className="text-sm text-gray-500">Powering Progress</div>
          </div>

          <nav className="hidden md:flex space-x-6 overflow-x-auto pb-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-yellow-600 border-b-2 border-yellow-500"
                    : "text-gray-600 hover:text-yellow-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Placeholder - For simplicity, hidden on desktop */}
          <div className="md:hidden">
            {/* Creating a simple vertical list for mobile for now if needed, but horizontal scroll handles it above */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">
                Wildan Energy
              </h3>
              <p className="text-gray-400 text-sm">
                Providing sustainable energy solutions for a better tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/company/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/company/business" className="hover:text-white">
                    Our Business
                  </Link>
                </li>
                <li>
                  <Link to="/company/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Wildan Energy Group. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyLayout;
