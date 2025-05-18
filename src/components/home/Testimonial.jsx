import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const testimonials = [
  {
    id: 1,
    name: "Kavya Sharma",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    text:
      '"The butter chicken here redefined my expectations. The modern presentation elevates the traditional flavors."',
  },
  {
    id: 2,
    name: "Yash Kumar",
    img: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
    rating: 4.5,
    text:
      '"The biryani is perfection - traditional flavors with contemporary techniques that surprise and delight."',
  },
  {
    id: 3,
    name: "Priya Patel",
    img: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    text:
      '"As an Indian food connoisseur, I\'m amazed by how YourRestaurant balances innovation with authenticity."',
  },
];

function Stars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={solidStar} />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={regularStar} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Guest Experience</h2>
          <p className="text-lg max-w-2xl mx-auto">
           What our diners say about us
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8 text-black">
          {testimonials.map(({ id, name, img, rating, text }) => (
            <div key={id} className="testimonial-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{name}</h4>
                  <Stars rating={rating} />
                </div>
              </div>
              <p className="italic text-black">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
