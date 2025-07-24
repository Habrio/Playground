// ShopList.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function ShopList({ shops = [], onSelect }) {
  return (
    <div className="space-y-4">
      {shops.map((shop) => (
        <div
          key={shop.id}
          onClick={() => onSelect(shop.id)}
          className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-md cursor-pointer transition"
        >
          <img
            src={shop.image}
            alt={shop.name}
            className="w-16 h-16 rounded-lg object-cover mr-4"
          />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-800">{shop.name}</h3>
            <p className="text-sm text-gray-500">{shop.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

ShopList.propTypes = {
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
