import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
