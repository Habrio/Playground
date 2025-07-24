// CartItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Divider from '../atoms/Divider';

export default function CartItem({ name, price, quantity, image, onIncrease, onDecrease }) {
  return (
    <div className="flex items-start py-3">
      <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover mr-4" />
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">{name}</p>
        <p className="text-sm text-gray-500 mt-1">₹{price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={onDecrease}
            className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-600"
          >
            −
          </button>
          <span className="mx-3 text-sm font-semibold">{quantity}</span>
          <button
            onClick={onIncrease}
            className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};
