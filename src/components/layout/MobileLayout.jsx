import React from 'react';
import PropTypes from 'prop-types';
import BottomNav from './BottomNav';

/**
 * MobileLayout - wraps all pages inside a mobile container
 * @param {ReactNode} children - Page content
 * @param {boolean} showNav - Whether to show BottomNav
 * @param {string} className - Additional classes for the wrapper
 */
export default function MobileLayout({ children, showNav = true, className = '' }) {
  return (
    <div className={`min-h-screen max-w-md mx-auto flex flex-col bg-white shadow-md ${className}`}>
      <div className="flex-grow px-4 pt-4 pb-16">{children}</div>
      {showNav && <BottomNav />}
    </div>
  );
}

MobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showNav: PropTypes.bool,
  className: PropTypes.string,
};
