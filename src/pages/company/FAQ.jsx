import React from "react";
import Accordion from "../../components/company/Accordion";

const FAQ = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl">
        <p className="text-gray-600 mb-8">
          Find answers to common questions about Wildan Energy's operations,
          sustainability goals, and career opportunities.
        </p>
        <Accordion
          items={[
            {
              title: "How do I apply for a job?",
              content:
                "You can browse our current openings on the Careers page. Applications can be submitted directly through our online portal.",
            },
            {
              title: "Where are your main offices located?",
              content:
                "Our global headquarters is in Jakarta, Indonesia. We also have major operational hubs in Houston, London, and Singapore.",
            },
            {
              title: "What is your Net Zero strategy?",
              content:
                "We aim to be a net-zero emissions energy business by 2050. This means reducing emissions from our operations and the energy products we sell.",
            },
            {
              title: "How can I contact investor relations?",
              content:
                "Please email ir@wildanenergy.com for all investor-related inquiries.",
            },
            {
              title: "Does Wildan Energy invest in renewable energy?",
              content:
                "Yes, we are actively investing in wind, solar, and hydrogen technologies as part of our transition to lower-carbon energy solutions.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FAQ;
