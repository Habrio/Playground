// PaymentMethodSelector.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

export default function PaymentMethodSelector({ methods = [], selected, onChange }) {
  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <label
          key={method.id}
          className={`flex items-center p-3 border rounded-xl cursor-pointer transition
            ${selected === method.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}
          `}
        >
          <input
            type="radio"
            name="payment"
            value={method.id}
            checked={selected === method.id}
            onChange={() => onChange(method.id)}
            className="form-radio text-orange-500 mr-3"
          />
          <Icon name={method.icon} className="w-5 h-5 mr-3 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">{method.label}</span>
        </label>
      ))}
    </div>
  );
}

PaymentMethodSelector.propTypes = {
  methods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
