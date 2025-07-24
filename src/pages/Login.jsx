// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import TextInput from '@/components/atoms/TextInput';
import Button from '@/components/atoms/Button';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      navigate('/otp', { state: { mobile } });
    }
  };

  return (
    <MobileLayout showNav={false}>
      <div className="flex flex-col items-center text-center py-10">
        <img
          src="/assets/images/login-illustration.png"
          alt="Login"
          className="w-32 h-32 mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        <p className="text-sm text-gray-500 mt-2">Enter your mobile number to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Mobile Number"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter 10-digit number"
          type="tel"
          required
        />
        <Button type="submit" full disabled={mobile.length !== 10}>
          Continue
        </Button>
      </form>
    </MobileLayout>
  );
}
