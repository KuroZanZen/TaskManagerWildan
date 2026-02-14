import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Powering Progress",
      description:
        "Delivering the energy the world needs today while building the energy system of tomorrow.",
      cta: "Discover More",
      link: "/company/about",
      bgColor: "bg-gray-900", // Placeholder for image
      overlayColor: "bg-yellow-600",
    },
    {
      id: 2,
      title: "Net-Zero by 2050",
      description:
        "Transforming our business to meet our target of becoming a net-zero emissions energy business.",
      cta: "Our Strategy",
      link: "/company/sustainability",
      bgColor: "bg-green-900",
      overlayColor: "bg-green-600",
    },
    {
      id: 3,
      title: "Innovation in Energy",
      description:
        "Using advanced technologies to unlock more efficient and cleaner energy solutions.",
      cta: "Latest News",
      link: "/company/news",
      bgColor: "bg-blue-900",
      overlayColor: "bg-blue-600",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${slide.bgColor} flex items-center justify-center`}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <div
            className={`absolute inset-0 ${slide.overlayColor} opacity-20 z-10`}
          ></div>

          <div className="container mx-auto px-6 relative z-20 text-white text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up delay-100">
              {slide.description}
            </p>
            <Link
              to={slide.link}
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors inline-block animate-fade-in-up delay-200"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-yellow-500"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
