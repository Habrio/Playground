import React from 'react';
import PropTypes from 'prop-types';

/**
 * Divider component — horizontal line to separate content
 * @param {string} spacing - Margin spacing (e.g. "my-4")
 * @param {string} color - Tailwind border color (e.g. "border-gray-200")
 * @param {string} className - Additional Tailwind classes
 */
export default function Divider({
  spacing = 'my-4',
  color = 'border-gray-200',
  className = '',
}) {
  return <hr className={`border-t ${color} ${spacing} ${className}`} />;
}

Divider.propTypes = {
  spacing: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
