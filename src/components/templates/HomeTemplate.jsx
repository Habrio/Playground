// HomeTemplate.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MobileLayout from '../layout/MobileLayout';

export default function HomeTemplate({ header, children }) {
  return (
    <MobileLayout>
      {header && (
        <div className="mb-4">
          {header}
        </div>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </MobileLayout>
  );
}

HomeTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
};
 