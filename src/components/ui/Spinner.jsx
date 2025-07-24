// Spinner.jsx
import React from 'react';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
