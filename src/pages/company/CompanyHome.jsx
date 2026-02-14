import { Link } from "react-router-dom";
import HeroCarousel from "../../components/company/HeroCarousel";
import AnimatedStat from "../../components/company/AnimatedStat";

const CompanyHome = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* Hero Section */}
      <HeroCarousel />

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-yellow-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Sustainability
              </h3>
              <p className="text-gray-600 mb-6">
                Our target is to become a net-zero emissions energy business by
                2050.
              </p>
              <Link
                to="/company/sustainability"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Read our strategy &rarr;
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Business
              </h3>
              <p className="text-gray-600 mb-6">
                From upstream exploration to downstream retail, we operate
                across the energy value chain.
              </p>
              <Link
                to="/company/business"
                className="text-blue-600 font-semibold hover:underline"
              >
                Explore operations &rarr;
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                Using technology to unlock more efficient and cleaner energy
                solutions.
              </p>
              <Link
                to="/company/news"
                className="text-green-600 font-semibold hover:underline"
              >
                Latest news &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Wildan Energy in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <AnimatedStat end={70} label="Countries" suffix="+" />
            </div>
            <div>
              <AnimatedStat end={80000} label="Employees" suffix="+" />
            </div>
            <div>
              <AnimatedStat end={3.2} label="Barrels/Day" suffix="M" />
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                Net Zero
              </div>
              <div className="text-gray-400">Target 2050</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyHome;
