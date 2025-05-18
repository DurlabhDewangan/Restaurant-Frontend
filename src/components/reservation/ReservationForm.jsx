import React, { useState, useEffect, useRef } from 'react';

const ReservationForm = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const dateInputRef = useRef(null);

  useEffect(() => {
    const slots = [
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
      '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
      '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
      '9:00 PM', '9:30 PM'
    ];
    setTimeSlots(slots);

    const today = new Date().toISOString().split('T')[0];
    if (dateInputRef.current) {
      dateInputRef.current.min = today;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTime) {
      alert('Please select a time slot.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get('reservationName'),
      email: formData.get('reservationEmail'),
      phone: formData.get('reservationPhone'),
      guests: formData.get('reservationGuests'),
      date: formData.get('reservationDate'),
      time: selectedTime,
      notes: formData.get('reservationNotes'),
    };

    try {
 const response = await fetch("https://restaurant-backend-uztu.onrender.com/send-reservation", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

      const result = await response.json();

      if (response.ok) {
        alert('Reservation submitted and email sent!');
        form.reset();
        setSelectedTime('');
      } else {
        alert('Failed to send reservation: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('There was a problem submitting your reservation.');
    }
  };

  return (
    <section className="py bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Book Your <span className="text-primary">Table</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reservationName" className="block mb-2 font-medium">Full Name *</label>
                <input 
                  type="text" 
                  id="reservationName" 
                  name="reservationName"
                  className="w-full px-4 py-3 rounded-lg form-input" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="reservationEmail" className="block mb-2 font-medium">Email *</label>
                <input 
                  type="email" 
                  id="reservationEmail" 
                  name="reservationEmail"
                  className="w-full px-4 py-3 rounded-lg form-input" 
                  required 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reservationPhone" className="block mb-2 font-medium">Phone Number *</label>
                <input 
                  type="tel" 
                  id="reservationPhone" 
                  name="reservationPhone"
                  className="w-full px-4 py-3 rounded-lg form-input" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="reservationGuests" className="block mb-2 font-medium">Number of Guests *</label>
                <select 
                  id="reservationGuests" 
                  name="reservationGuests"
                  className="w-full px-4 py-3 rounded-lg form-input" 
                  required 
                  defaultValue=""
                >
                  <option value="" disabled>Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reservationDate" className="block mb-2 font-medium">Date *</label>
                <input 
                  type="date" 
                  id="reservationDate" 
                  name="reservationDate"
                  ref={dateInputRef}
                  className="w-full px-4 py-3 rounded-lg form-input" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Preferred Time *</label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      className={`time-slot py-2 px-3 rounded border text-sm font-medium ${
                        selectedTime === time 
                          ? 'bg-primary text-white border-primary' 
                          : 'border-gray-300 hover:border-primary hover:text-primary'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="reservationNotes" className="block mb-2 font-medium">Special Requests</label>
              <textarea 
                id="reservationNotes" 
                name="reservationNotes"
                rows={3} 
                className="w-full px-4 py-3 rounded-lg form-input" 
                placeholder="Dietary restrictions, allergies, celebrations, etc."
              />
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="reservationAgree" 
                className="rounded text-primary focus:ring-primary" 
                required 
              />
              <label htmlFor="reservationAgree" className="ml-2 text-sm">
                I agree to the terms and conditions and privacy policy
              </label>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn btn-primary w-full md:w-auto px-12">
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
