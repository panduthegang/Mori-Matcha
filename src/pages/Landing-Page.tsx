import React from 'react';
import Hero from '../components/Hero';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default LandingPage;
