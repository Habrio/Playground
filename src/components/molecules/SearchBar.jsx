import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

export default function SearchBar({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`flex items-center px-3 py-2 rounded-lg bg-gray-100 ${className}`}>
      <Icon name="search" className="w-5 h-5 text-gray-400 mr-2" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent flex-grow outline-none text-sm text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
