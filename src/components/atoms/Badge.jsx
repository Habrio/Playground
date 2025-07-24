import React from 'react';
import PropTypes from 'prop-types';

/**
 * Badge component for displaying status or labels
 * @param {string} text - The label to show
 * @param {string} type - Visual variant (info, success, warning, error, neutral)
 * @param {string} className - Extra Tailwind classes
 */
export default function Badge({ text, type = 'neutral', className = '' }) {
  const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
  const typeStyles = {
    info: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-700',
    neutral: 'bg-gray-100 text-gray-700',
  };

  const badgeClass = `${base} ${typeStyles[type] || typeStyles.neutral} ${className}`;

  return <span className={badgeClass}>{text}</span>;
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'neutral']),
  className: PropTypes.string,
};
