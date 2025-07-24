import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import Spinner from '@/components/ui/Spinner';

export default function TitleScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout showNav={false}>
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <img
          src="/assets/images/hero.png"
          alt="Habrio Logo"
          className="w-28 h-28 mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Habrio</h1>
        <p className="text-sm text-gray-500 mt-2">Your trusted local service platform</p>
        <Spinner />
      </div>
    </MobileLayout>
  );
}
