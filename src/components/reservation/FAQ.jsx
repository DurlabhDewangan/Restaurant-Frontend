import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Do you take walk-ins or only reservations?",
      answer: "We welcome both walk-ins and reservations. However, we highly recommend making a reservation, especially on weekends and holidays."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Yes, we're happy to accommodate dietary restrictions including vegetarian, vegan, gluten-free, and allergies."
    },
    {
      question: "What is your cancellation policy?",
      answer: "For regular reservations, we request at least 24 hours notice for cancellations."
    },
    {
      question: "Is there parking available?",
      answer: "We offer valet parking service from 5PM to midnight daily."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg">
            Find answers to common inquiries about dining with us
          </p>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="faq-question w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}></i>
              </button>
              <div className={`faq-answer px-6 pb-6 ${activeIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;