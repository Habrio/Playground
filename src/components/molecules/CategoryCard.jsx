// CategoryCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard({ title, image, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition"
    >
      <img
        src={image}
        alt={title}
        className="w-14 h-14 object-contain mb-2"
      />
      <span className="text-sm text-gray-700 font-medium text-center">{title}</span>
    </button>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
