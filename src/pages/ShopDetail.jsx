// ShopDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import Button from '@/components/atoms/Button';
import Divider from '@/components/atoms/Divider';

export default function ShopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const shop = {
    id,
    name: 'Glow Salon',
    image: '/assets/images/salon1.png',
    category: 'Salon',
    description: 'Expert beauty services at your doorstep.',
    services: [
      { id: 's1', name: 'Haircut', price: 250 },
      { id: 's2', name: 'Facial', price: 600 },
      { id: 's3', name: 'Manicure', price: 300 },
    ],
  };

  const handleAddToCart = (service) => {
    // TODO: Add to cart logic
    console.log('Added to cart:', service);
  };

  return (
    <MobileLayout>
      <div className="mb-4">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-40 object-cover rounded-xl"
        />
        <h1 className="text-xl font-bold text-gray-800 mt-4">{shop.name}</h1>
        <p className="text-sm text-gray-500">{shop.category}</p>
        <p className="text-sm text-gray-600 mt-2">{shop.description}</p>
      </div>

      <Divider />

      <div className="space-y-4">
        {shop.services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 shadow-sm"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">{service.name}</p>
              <p className="text-xs text-gray-500">₹{service.price}</p>
            </div>
            <Button size="sm" onClick={() => handleAddToCart(service)}>
              Add
            </Button>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
}
