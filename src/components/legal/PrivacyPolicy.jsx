import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="mb-16 text-center pt-10">
      <h2 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h2>
      <div className="prose max-w-3xl mx-auto text-left">
        <p className="mb-4">Last Updated: January 1, 2025</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">1. Information We Collect</h3>
        <p className="mb-4">
          We collect information you provide directly to us when you make a reservation, sign up for our newsletter, or contact us. This may include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 mx-auto max-w-xl">
          <li>Contact information (name, email, phone number)</li>
          <li>Reservation details (date, time, party size)</li>
          <li>Payment information for bookings (processed securely by our payment processor)</li>
          <li>Any preferences or special requests you provide</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">2. How We Use Your Information</h3>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 mx-auto max-w-xl">
          <li>Process and manage your reservations</li>
          <li>Communicate with you about your bookings</li>
          <li>Send you marketing communications (if you've opted in)</li>
          <li>Improve our services and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">3. Data Security</h3>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">4. Your Rights</h3>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 mx-auto max-w-xl">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Withdraw consent for marketing communications</li>
        </ul>
        <p className="mb-6 text-center">
          To exercise these rights, please contact us at privacy@yourrestaurant.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;