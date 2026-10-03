import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BenefitCardItem {
  id: string;
  title: string;
  description: string;
  renderIcon: (isActive: boolean) => React.ReactNode;
}

export const EverydayWellnessSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('morning');

  const benefitCards: BenefitCardItem[] = [
    {
      id: 'morning',
      title: 'MORNING ENERGY',
      description: 'A smoother lift to start your day.',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
          <path d="M8 3v3" />
          <path d="M12 2v4" />
          <path d="M16 3v3" />
          <path d="M4 11h16a1 1 0 0 1 1 1c0 5-3.5 9-9 9s-9-4-9-9a1 1 0 0 1 1-1Z" />
          <path d="M8 21h8" strokeWidth="2.2" />
        </svg>
      ),
    },
    {
      id: 'midday',
      title: 'MIDDAY RESET',
      description: 'A refreshing pause to recharge.',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
          <path d="M4 11h13a1 1 0 0 1 1 1c0 4.5-3 8-7.5 8S3 16.5 3 12a1 1 0 0 1 1-1Z" />
          <path d="M18 12h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
          <path d="M8.5 3a4.5 4.5 0 0 1 6.5 2" />
          <polyline points="15 2 15 5 12 5" />
        </svg>
      ),
    },
    {
      id: 'calm',
      title: 'CALM FOCUS',
      description: 'Clearer focus, without the rush.',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
          <path d="M12 2c1 1.5 2 2.5 2 4a2 2 0 0 1-4 0c0-1.5 1-2.5 2-4Z" />
          <path d="M4 11h16a1 1 0 0 1 1 1c0 5-3.5 9-9 9s-9-4-9-9a1 1 0 0 1 1-1Z" />
          <path d="M8 21h8" strokeWidth="2.2" />
        </svg>
      ),
    },
    {
      id: 'balance',
      title: 'DAILY BALANCE',
      description: 'An easy ritual to come back to.',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
          <path d="M12 3v4" />
          <path d="M10 5l2-2 2 2" />
          <circle cx="6.5" cy="5" r="1" fill="currentColor" />
          <circle cx="17.5" cy="5" r="1" fill="currentColor" />
          <path d="M4 11h16a1 1 0 0 1 1 1c0 5-3.5 9-9 9s-9-4-9-9a1 1 0 0 1 1-1Z" />
          <path d="M8 21h8" strokeWidth="2.2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 pb-2.5 sm:pb-3 flex flex-col bg-[#FFFFFF]">
      {/* SECTION CARD CONTAINER
          - Matches border-radius of Hero and ProductsSection: rounded-xl sm:rounded-2xl md:rounded-[20px]
          - Natural white gap between sections is created by the outer padding
          - High-contrast green grid background image with deep forest green canvas */}
      <div
        className="relative w-full rounded-xl sm:rounded-2xl md:rounded-[20px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-14 bg-cover bg-center select-none"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1791038905/Green_Grid_doxpoc.png')`,
          backgroundColor: '#0D2411',
        }}
      >
        {/* Subtle radial inner glow to ensure typography depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,27,13,0.45)_100%)] pointer-events-none" />

        {/* ==============================================================
            TOP HEADER ROW:
            - Left: Kicker + Two-line Editorial Title + Word-Anchored Stickers + Subtitle
            - Right: Frosted Circular Carousel Navigation Arrows (← / →)
           ============================================================== */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 md:pb-14">
          {/* LEFT: Kicker, Heading, Stickers, Paragraph */}
          <div className="max-w-2xl flex flex-col">
            {/* KICKER: Same 4-petal clover logo as THE MORI RITUAL + matching 18px font size */}
            <div className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4 select-none">
              <div className="w-5 h-5 text-white/90 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full">
                  <circle cx="11.5" cy="11.5" r="5" />
                  <circle cx="20.5" cy="11.5" r="5" />
                  <circle cx="11.5" cy="20.5" r="5" />
                  <circle cx="20.5" cy="20.5" r="5" />
                  <circle cx="16" cy="16" r="3.2" fill="#0D2411" />
                </svg>
              </div>
              <span className="font-sans-flex font-semibold text-[16px] sm:text-[17px] md:text-[18px] tracking-[0.06em] uppercase text-white/90">
                EVERYDAY WELLNESS
              </span>
            </div>

            {/* EDITORIAL TWO-LINE HEADLINE WITH WORD-ANCHORED STICKERS */}
            <h2 className="font-playfair text-[#E2F784] text-[34px] xs:text-[40px] sm:text-[50px] md:text-[58px] lg:text-[62px] xl:text-[66px] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight">
              <div>matcha made to feel</div>
              <div className="mt-1 sm:mt-1.5 flex flex-wrap items-baseline gap-x-3 sm:gap-x-4">
                {/* 'good.' with dark green 'CALM IN A CUP' sticker anchored directly beneath */}
                <span className="relative inline-block pb-3 sm:pb-4">
                  <span className="text-[#E2F784]">good.</span>
                  
                  {/* Word-Anchored Green Pill Sticker */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    className="absolute -bottom-1 sm:bottom-0 left-0 sm:left-1 z-20 cursor-pointer select-none"
                    title="Calm in a cup"
                  >
                    <div className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#41862B] border border-[#52A337]/50 shadow-md shadow-black/25 flex items-center justify-center -rotate-2">
                      <span className="font-sans-flex font-bold text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] md:text-[11px] uppercase tracking-wider text-white whitespace-nowrap">
                        CALM IN A CUP
                      </span>
                    </div>
                  </motion.div>
                </span>

                {/* 'every day.' with soft pink puffy 'STEADY, NOT / SPEEDY' sticker tilted on the right */}
                <span className="relative inline-block">
                  <span className="font-instrument-serif italic text-white font-normal text-[38px] xs:text-[44px] sm:text-[56px] md:text-[64px] lg:text-[68px] xl:text-[72px]">
                    every day.
                  </span>

                  {/* Word-Anchored Soft Pink Puffy Sticker */}
                  <motion.div
                    initial={{ rotate: 18, scale: 0.85, opacity: 0 }}
                    animate={{ rotate: 12, scale: 1, opacity: 1 }}
                    transition={{ delay: 0.25, type: 'spring', stiffness: 240, damping: 18 }}
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    className="absolute -top-5 xs:-top-6 sm:-top-7 md:-top-8 -right-3 xs:-right-4 sm:-right-6 md:-right-8 z-20 cursor-pointer select-none"
                    title="Steady, Not Speedy"
                  >
                    <div className="relative px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#FCE5EE] border border-white/60 shadow-lg shadow-black/25 flex flex-col items-center justify-center">
                      {/* Puffy corner visual accents */}
                      <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        STEADY, NOT
                      </span>
                      <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        SPEEDY
                      </span>
                    </div>
                  </motion.div>
                </span>
              </div>
            </h2>

            {/* Subtitle Description */}
            <p className="font-sans-flex text-white/75 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg mt-4 sm:mt-5 font-normal">
              Pure matcha brings smoother energy, calmer focus, and a simple sense of balance into your everyday routine.
            </p>
          </div>

          {/* RIGHT: Frosted Circular Carousel Navigation Arrows (← / →) */}
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0 pt-2 lg:pt-4">
            <button
              type="button"
              aria-label="Previous wellness highlight"
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 border border-white/15 flex items-center justify-center text-white backdrop-blur-md shadow-md cursor-pointer group"
            >
              <ArrowLeft className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              aria-label="Next wellness highlight"
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all duration-200 border border-white/25 flex items-center justify-center text-white backdrop-blur-md shadow-md cursor-pointer group"
            >
              <ArrowRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* ==============================================================
            LOWER CONTENT GRID
            - Left: 2x2 Wellness Benefit Cards (Interactive Active State)
            - Right: Media Showcase Carousel Card (Phase 3 Scaffold)
           ============================================================== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch pt-2">
          {/* LEFT: 2x2 Wellness Benefit Cards */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-4.5">
              {benefitCards.map((card) => {
                const isActive = activeCardId === card.id;

                return (
                  <motion.button
                    key={card.id}
                    type="button"
                    onClick={() => setActiveCardId(card.id)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`relative text-left p-4 sm:p-5 md:p-6 rounded-[18px] sm:rounded-[22px] md:rounded-[24px] transition-all duration-300 cursor-pointer select-none flex flex-col justify-between min-h-[150px] sm:min-h-[170px] md:min-h-[185px] ${
                      isActive
                        ? 'bg-[#FFFFFF] text-[#182319] shadow-xl shadow-black/25 border-transparent'
                        : 'bg-[#15341A]/50 hover:bg-[#15341A]/75 text-white backdrop-blur-md border border-white/10'
                    }`}
                  >
                    {/* Top: Icon Badge */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 mb-3 sm:mb-4 md:mb-5 ${
                        isActive
                          ? 'bg-[#FCE5EE] text-[#2F5824]'
                          : 'bg-white/10 text-white/90'
                      }`}
                    >
                      {card.renderIcon(isActive)}
                    </div>

                    {/* Bottom: Title & Description */}
                    <div>
                      <h3
                        className={`font-sans-flex font-bold text-[13px] sm:text-[14px] md:text-[14.5px] uppercase tracking-[0.08em] transition-colors duration-300 mb-1 sm:mb-1.5 ${
                          isActive ? 'text-[#182319]' : 'text-white/95'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`font-sans-flex text-[12px] sm:text-[12.5px] md:text-[13px] font-normal leading-snug transition-colors duration-300 ${
                          isActive ? 'text-[#555555]' : 'text-white/65'
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT 7/12 or 6/12: Media Showcase Carousel Slot (Phase 3 Scaffold) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Visual scaffold indicator for Phase 3 */}
            <div className="border border-dashed border-white/20 rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center text-white/50 text-xs uppercase tracking-widest font-sans-flex bg-white/5 backdrop-blur-xs">
              Phase 3: Visual Media Carousel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverydayWellnessSection;
