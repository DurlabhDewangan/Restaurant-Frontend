import React from "react";

const dishes = [
  {
    title: "Butter Chicken",
    description: "Tandoori chicken, tomato butter emulsion, micro cilantro",
    price: "₹320",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Hyderabadi Biryani",
    description: "Basmati rice, sous vide meat, saffron foam",
    price: "₹350",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Masala Dosa",
    description: "Rice crepe, spiced potato foam, coconut chutney gel",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60",
  },
];

const SignatureDishes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Chef&apos;s Signatures</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Modern interpretations of classic dishes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="dish-card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative overflow-hidden h-64 group">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{dish.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
