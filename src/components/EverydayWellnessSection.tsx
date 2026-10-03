import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const EverydayWellnessSection: React.FC = () => {
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
            LOWER CONTENT GRID (Phase 2 & Phase 3 Scaffold)
            - Left: 2x2 Wellness Benefit Cards
            - Right: Media Showcase Carousel Card
           ============================================================== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch pt-2">
          {/* LEFT 5/12 or 6/12: Benefit Cards Slot (Phase 2) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Visual scaffold indicator for Phase 1 */}
            <div className="border border-dashed border-white/20 rounded-2xl p-6 sm:p-8 flex items-center justify-center text-white/50 text-xs uppercase tracking-widest font-sans-flex">
              Phase 2: 2x2 Interactive Benefit Cards
            </div>
          </div>

          {/* RIGHT 7/12 or 6/12: Media Showcase Carousel Slot (Phase 3) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Visual scaffold indicator for Phase 1 */}
            <div className="border border-dashed border-white/20 rounded-2xl p-6 sm:p-8 flex items-center justify-center text-white/50 text-xs uppercase tracking-widest font-sans-flex">
              Phase 3: Visual Media Carousel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverydayWellnessSection;
