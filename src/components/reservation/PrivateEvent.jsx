import React from 'react';

const PrivateEvents = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Private <span className="text-primary">Dining & Events</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Host your special occasions in our elegant private dining spaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Private dining room" 
              className="rounded-lg shadow-xl w-full h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Host Your Special Event</h3>
            <p className="text-gray-600 mb-6">
              Our private dining room accommodates up to 30 guests for weddings, corporate events, and family gatherings.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Customized menus for your event",
                "Dedicated event coordinator",
                "AV equipment available",
                "Special decor arrangements"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact-form" className="btn btn-primary">
              Inquire About Private Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;