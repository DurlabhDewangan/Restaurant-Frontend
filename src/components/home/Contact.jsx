import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet marker icon issues in React (default icon fix)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Contact() {
  // Coordinates for Kawardha, Chhattisgarh
  const position = [22.0107, 81.2467];

  return (
    <>
      {/* Contact Hero Section */}
      <section className="pt-10  px-6 bg-gray-50">
   
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg max-w-2xl mx-auto">
           We'd love to hear from you. Reach out for reservations, events, or any
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white mt-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">
                123 Your Street
                <br />
                Kawardha, Chhattisgarh 491995
              </p>
              <a href="#restaurant-map" className="text-primary font-medium hover:underline">
                View on map
              </a>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-phone-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p className="text-gray-600 mb-2">+91 98765 43210</p>
              <p className="text-gray-600 mb-4">contact@yourrestaurant.com</p>
              <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                Call us
              </a>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-clock text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Thursday: 11AM - 10:30PM</p>
              <p className="text-gray-600 mb-2">Friday - Saturday: 11AM - 11:30PM</p>
              <p className="text-gray-600">Sunday: 11AM - 10PM</p>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Map */}
            <div 
              id="restaurant-map"
              className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm z-0" 
            >
              <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    Your Restaurant Name <br /> 123 Your Street, Kawardha
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
           <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="private-dining">Private Dining/Events</option>
                    <option value="feedback">Feedback/Suggestions</option>
                    <option value="careers">Careers/Employment</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
const response = await fetch("https://restaurant-backend-uztu.onrender.com/send-contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});


    if (!response.ok) throw new Error("Network response was not ok");

    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message. Please try again later.");
  }
};
