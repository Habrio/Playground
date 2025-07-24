// CheckoutTemplate.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MobileLayout from '../layout/MobileLayout';

export default function CheckoutTemplate({ children, footer }) {
  return (
    <MobileLayout showNav={false}>
      <div className="space-y-6">
        {children}
      </div>
      {footer && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white border-t border-gray-200">
          {footer}
        </div>
      )}
    </MobileLayout>
  );
}

CheckoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
};
