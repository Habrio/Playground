import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../atoms/Icon';

const navItems = [
  { name: 'home', label: 'Home', path: '/home' },
  { name: 'shop', label: 'Shops', path: '/shops' },
  { name: 'cart', label: 'Cart', path: '/cart' },
  { name: 'orders', label: 'Orders', path: '/orders' },
  { name: 'user', label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 bg-white border-t border-gray-200 shadow-sm">
      <div className="flex justify-between px-4 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center text-xs text-gray-500 hover:text-orange-500 transition"
            >
              <Icon
                name={item.name}
                size={24}
                className={`mb-1 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}
              />
              <span className={isActive ? 'text-orange-500 font-medium' : ''}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
