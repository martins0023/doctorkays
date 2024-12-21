import React from 'react';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 md:h-64 object-cover rounded-br-[50px]"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        {/* Uncomment the link below if needed */}
        {/* <a href={link} className="mt-4 inline-block text-primary">Read more</a> */}
      </div>
    </div>
  );
};

export default Card;
