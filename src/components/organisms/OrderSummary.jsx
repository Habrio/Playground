// OrderSummary.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../atoms/Divider';

export default function OrderSummary({ subtotal, delivery, total }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
      <div className="flex justify-between text-sm text-gray-700">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-700">
        <span>Delivery</span>
        <span>₹{delivery.toFixed(2)}</span>
      </div>
      <Divider spacing="my-2" />
      <div className="flex justify-between text-base font-semibold text-gray-900">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
