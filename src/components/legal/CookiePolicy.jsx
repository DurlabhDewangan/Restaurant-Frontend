import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-primary">Cookie Policy</h2>
      <div className="prose max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">1. What Are Cookies</h3>
        <p className="mb-6">
          Cookies are small text files stored on your device when you visit our website. 
          They help us provide a better user experience and understand how visitors use our site.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">2. How We Use Cookies</h3>
        <p className="mb-4">
          We use cookies for:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 mx-auto max-w-xl">
          <li>Essential website functionality (e.g., reservation system)</li>
          <li>Performance tracking (e.g., analytics)</li>
          <li>Marketing purposes (with your consent)</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-center">3. Managing Cookies</h3>
        <p className="mb-6">
          You can control cookies through your browser settings. Please note that disabling 
          essential cookies may affect website functionality.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;