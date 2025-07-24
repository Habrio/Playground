// ShopList.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import ShopList from '@/components/organisms/ShopList';

export default function ShopListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  const shops = [
    { id: '1', name: 'Glow Salon', image: '/assets/images/salon1.png', category: 'Salon' },
    { id: '2', name: 'Urban Cleaners', image: '/assets/images/cleaner1.png', category: 'Cleaning' },
    { id: '3', name: 'FixPro Services', image: '/assets/images/appliance1.png', category: 'Appliances' },
  ];

  const filteredShops = selectedCategory
    ? shops.filter((shop) => shop.category.toLowerCase() === selectedCategory.toLowerCase())
    : shops;

  const handleSelectShop = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <MobileLayout>
      <h1 className="text-xl font-semibold mb-4 text-gray-800">
        {selectedCategory ? `${selectedCategory} Services` : 'All Shops'}
      </h1>

      <ShopList shops={filteredShops} onSelect={handleSelectShop} />
    </MobileLayout>
  );
}
