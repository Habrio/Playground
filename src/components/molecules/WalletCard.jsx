// WalletCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

export default function WalletCard({ balance = 0, currency = '₹' }) {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-xs text-orange-600 font-medium uppercase">Wallet Balance</p>
        <p className="text-xl font-bold text-orange-800">{currency}{balance}</p>
      </div>
      <div className="bg-orange-100 rounded-full p-2">
        <Icon name="wallet" className="w-6 h-6 text-orange-500" />
      </div>
    </div>
  );
}

WalletCard.propTypes = {
  balance: PropTypes.number,
  currency: PropTypes.string,
};
