import React from "react";
import { reviews } from "../assets";
import { jerry } from "../assets";
import { miracle } from "../assets";
import { yungs } from "../assets";

// Dummy data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Jerry",
    feedback:
      "Excellent service and very professional staff. Highly recommended!",
    image: jerry, // Placeholder image, replace with actual image
  },
  {
    id: 2,
    name: "Miracle",
    feedback:
      "The doctors are very knowledgeable and the environment is clean and welcoming.",
    image: miracle, // Placeholder image, replace with actual image
  },
  {
    id: 3,
    name: "Oreoluwa",
    feedback:
      "Great experience from start to finish. Will definitely come back again.",
    image: yungs, // Placeholder image, replace with actual image
  },
];
const Testimonials = () => {
  return (
    <div className="">
      <div className="mb-5 flex items-center mt-10 justify-center">
        <img src={reviews} alt="revies" />
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-600 text-center italic mb-4">
              "{testimonial.feedback}"
            </p>
            <h3 className="text-lg font-semibold text-center">
              {testimonial.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
