// Otp.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import TextInput from '@/components/atoms/TextInput';
import Button from '@/components/atoms/Button';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = location.state?.mobile || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      navigate('/home');
    }
  };

  return (
    <MobileLayout showNav={false}>
      <div className="flex flex-col items-center text-center py-10">
        <img
          src="/assets/images/otp-verification.png"
          alt="OTP"
          className="w-28 h-28 mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800">Verify OTP</h1>
        <p className="text-sm text-gray-500 mt-2">Enter the 6-digit code sent to <br /><span className="font-medium">{mobile}</span></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6-digit OTP"
          type="number"
          required
        />
        <Button type="submit" full disabled={otp.length !== 6}>
          Verify & Continue
        </Button>
      </form>
    </MobileLayout>
  );
}
