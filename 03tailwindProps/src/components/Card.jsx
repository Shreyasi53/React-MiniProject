import React from 'react';

function Card({ image, title, description="Default Description" }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-2">
          {description}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
