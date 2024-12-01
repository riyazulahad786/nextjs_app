import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1. What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "2. What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      question: "3. What is an FAQ accordion?",
      answer: "An FAQ accordion is a component that toggles between showing and hiding content for a set of questions.",
    },
    {
      question: "4. What is an FAQ accordion?",
      answer: "An FAQ accordion is a component that toggles between showing and hiding content for a set of questions.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container-fluid mx-auto bg-[#F8FAFC]'>
      <div className="container mx-auto p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4  rounded-md">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full border-b text-left p-5 bg-[#F8FAFC] hover:bg-gray-200 font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span className="text-lg text-[#14B8A6]">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700  bg-[#F8FAFC]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
