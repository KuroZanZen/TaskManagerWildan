import React from "react";

const NewsMedia = () => {
  const news = [
    {
      id: 1,
      date: "Oct 12, 2026",
      title: "Wildan Energy announces new offshore discovery",
      excerpt:
        "A significant comprehensive discovery has been made in the North Sea, promising a stable supply for the region.",
    },
    {
      id: 2,
      date: "Sep 28, 2026",
      title: "Partnership with TechGiant for AI-driven grid management",
      excerpt:
        "Leveraging artificial intelligence to optimize renewable energy distribution and reduce waste.",
    },
    {
      id: 3,
      date: "Aug 15, 2026",
      title: "Quarterly Sustainability Report 2026",
      excerpt:
        "We are on track to meet our interim carbon reduction targets, with a 15% reduction in operational emissions.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">
        News & Media
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-sm text-gray-400 mb-2">{item.date}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-red-600 cursor-pointer">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">{item.excerpt}</p>
            <a
              href="#"
              className="text-red-600 font-semibold hover:underline text-sm uppercase tracking-wide"
            >
              Read Press Release &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsMedia;
