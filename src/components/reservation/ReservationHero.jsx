import React from 'react';

const ReservationHero = () => {
  return (
    <section className="reservation-hero min-h-[30vh] flex items-center justify-center pt-16">
      <div className="relative z-20 text-center px-6 mt-[50px] max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray mb-4">
          Table <span className="text-primary">Reservations</span>
        </h1>
        <p className="text-xl text-gray mb-6 max-w-2xl mx-auto">
          Reserve your dining experience at YourRestaurant
        </p>
      </div>
    </section>
  );
};

export default ReservationHero;