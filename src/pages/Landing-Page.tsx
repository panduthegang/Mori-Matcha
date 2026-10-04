import React from 'react';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import EverydayWellnessSection from '../components/EverydayWellnessSection';
import RitualStepsSection from '../components/RitualStepsSection';
import PureByNatureSection from '../components/PureByNatureSection';
import Footer from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Products Display Section (The MORI Ritual) */}
      <ProductsSection />

      {/* Everyday Wellness Section */}
      <EverydayWellnessSection />

      {/* Four Simple Steps Ritual Section */}
      <RitualStepsSection />

      {/* Pure By Nature Section */}
      <PureByNatureSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
