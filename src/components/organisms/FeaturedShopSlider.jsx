// FeaturedShopSlider.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function FeaturedShopSlider({ shops = [], onSelect }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4">
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => onSelect(shop.id)}
            className="min-w-[140px] bg-white rounded-xl shadow p-3 flex-shrink-0 hover:shadow-md transition"
          >
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 truncate">{shop.name}</p>
              <p className="text-xs text-gray-500">{shop.category}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

FeaturedShopSlider.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
