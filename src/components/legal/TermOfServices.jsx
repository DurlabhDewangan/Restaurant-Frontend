import React from 'react';

const TermsOfService = () => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h2>
      <div className="prose max-w-none mx-auto">
        <h3 className="text-xl font-bold mt-6 mb-3">1. Reservations</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Reservations are subject to availability. We reserve the right to cancel reservations if we believe they have been made fraudulently or in violation of these terms.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">2. Cancellation Policy</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          For reservations of 6 or more guests, we require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">3. Conduct</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          We reserve the right to refuse service to anyone for any reason, including disruptive behavior, intoxication, or violation of restaurant policies.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-3">4. Liability</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          YourRestaurant is not liable for any loss or damage to personal property while on our premises, except where such liability cannot be excluded by law.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;