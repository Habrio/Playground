// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import HomeTemplate from '@/components/templates/HomeTemplate';
import WalletCard from '@/components/molecules/WalletCard';
import FeaturedShopSlider from '@/components/organisms/FeaturedShopSlider';
import CategoryCard from '@/components/molecules/CategoryCard';
import SearchBar from '@/components/molecules/SearchBar';

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { title: 'Salons', image: '/assets/images/salon.png' },
    { title: 'Cleaning', image: '/assets/images/cleaning.png' },
    { title: 'Appliances', image: '/assets/images/appliance.png' },
    { title: 'Plumbing', image: '/assets/images/plumbing.png' },
  ];

  const featuredShops = [
    { id: '1', name: 'Glow Salon', image: '/assets/images/salon1.png', category: 'Salon' },
    { id: '2', name: 'FixIt Services', image: '/assets/images/cleaner1.png', category: 'Cleaning' },
  ];

  const handleCategoryClick = (title) => {
    navigate(`/shops?category=${title.toLowerCase()}`);
  };

  const handleShopSelect = (shopId) => {
    navigate(`/shop/${shopId}`);
  };

  return (
    <MobileLayout>
      <HomeTemplate
        header={<SearchBar value="" onChange={() => {}} placeholder="Search services or shops..." />}
      >
        <WalletCard balance={300} />
        
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              image={cat.image}
              onClick={() => handleCategoryClick(cat.title)}
            />
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Featured Shops</h2>
          <FeaturedShopSlider shops={featuredShops} onSelect={handleShopSelect} />
        </div>
      </HomeTemplate>
    </MobileLayout>
  );
}
