import React from 'react';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as CartIcon } from '@/assets/icons/cart.svg';
import { ReactComponent as ShopIcon } from '@/assets/icons/shop.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as WalletIcon } from '@/assets/icons/wallet.svg';

// Centralized icon map
const icons = {
  home: HomeIcon,
  cart: CartIcon,
  shop: ShopIcon,
  user: UserIcon,
  search: SearchIcon,
  wallet: WalletIcon,
  // Add more here...
};

/**
 * Icon Component
 * @param {string} name - The icon name (key from icons map)
 * @param {number} size - Icon size in px (default: 24)
 * @param {string} className - Additional Tailwind classes
 */
export default function Icon({ name, size = 24, className = '' }) {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`[Icon] Unknown icon name: "${name}"`);
    return null;
  }

  return <SvgIcon width={size} height={size} className={className} />;
}
