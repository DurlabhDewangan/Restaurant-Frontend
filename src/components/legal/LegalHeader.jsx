import React from 'react';

const LegalHeader = () => {
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" >
          Legal <span className="text-primary">Information</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto" >
          Transparency and trust are at the heart of our operations
        </p>
      </div>
    </section>
  );
};

export default LegalHeader;