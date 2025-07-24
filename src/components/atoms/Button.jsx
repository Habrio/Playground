import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tailwind-based reusable Button component
 * Variants: primary, secondary, ghost, danger
 */
export default function Button({
  children,
  onClick,
  variant = 'primary',
  full = false,
  disabled = false,
  type = 'button',
  className = '',
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    text-sm font-semibold rounded-xl
    px-4 py-2 transition duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variantStyles = {
    primary: 'bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:opacity-90',
    secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50',
    ghost: 'bg-transparent text-orange-500 hover:bg-orange-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const fullWidth = full ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${disabledStyles}
        ${fullWidth}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
};
