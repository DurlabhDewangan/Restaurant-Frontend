import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center" >
        <h2 className="text-3xl font-bold mb-6">Questions About Our Policies?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us for any clarification regarding our legal terms and policies.
        </p>
        <a href="contact.html" className="btn btn-primary">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;