import React from 'react';

const ReservationInfo = () => {
  const infoItems = [
    {
      icon: 'fas fa-clock',
      title: 'Hours',
      content: (
        <>
          <span className="font-medium">Mon-Thu:</span> 11:00 AM - 10:30 PM<br />
          <span className="font-medium">Fri-Sat:</span> 11:00 AM - 11:30 PM<br />
          <span className="font-medium">Sunday:</span> 11:00 AM - 10:00 PM
        </>
      )
    },
    {
      icon: 'fas fa-calendar-times',
      title: 'Cancellation Policy',
      content: 'For parties of 6 or more, please cancel at least 24 hours in advance. Late cancellations may incur a fee of ₹500 per person.'
    },
    {
      icon: 'fas fa-users',
      title: 'Large Parties',
      content: (
        <>
          For groups of 8+ or private dining inquiries, please call us at{' '}
          <a href="tel:+91987654321X" className="text-primary">+91 98765 4321X</a>{' '}
          or email{' '}
          <a href="mailto:events@yourrestaurant.com" className="text-primary">events@yourrestaurant.com</a>
        </>
      )
    }
  ];

  return (
    <section className="py-16 mt-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" >
          <h2 className="text-3xl font-bold mb-4">
            Reservation <span className="text-primary">Information</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            What you need to know before booking
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {infoItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center" 
       
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <i className={`${item.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReservationInfo;