import React from 'react';
import { motion } from 'motion/react';

export const ProductsSection: React.FC = () => {
  return (
    <section className="w-full px-2 sm:px-3 md:px-4 pt-2 sm:pt-4 pb-2.5 sm:pb-3 flex flex-col bg-[#FFFFFF]">
      {/* SECTION BACKGROUND CONTAINER
          - Top is flat (rounded-t-none) where white fog blends seamlessly from the top
          - Bottom has matching border-radius as hero (rounded-b-xl sm:rounded-b-2xl md:rounded-b-[20px])
          - Increased height with smooth top fog gradient before matcha image emerges */}
      <div
        className="relative w-full flex-1 min-h-[640px] sm:min-h-[720px] md:min-h-[800px] lg:min-h-[880px] xl:min-h-[920px] rounded-t-none rounded-b-xl sm:rounded-b-2xl md:rounded-b-[20px] overflow-hidden flex flex-col items-center justify-between pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 px-3 sm:px-6 bg-cover bg-bottom bg-no-repeat select-none"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1790230389/Hero-2_ni72bb.png')`,
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* TOP FOG OVERLAY: Extends the misty pure white haze down from the top before revealing the matcha foam */}
        <div className="absolute inset-x-0 top-0 h-48 sm:h-64 md:h-80 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/95 via-30% to-transparent pointer-events-none z-0" />

        {/* HEADER AREA: Kicker Tag + Editorial Heading + Pixel-Perfect Stickers */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Kicker Tag: 4-Petal Pink Clover + THE MORI RITUAL (16px minimum matching Hero 'MADE FOR EVERYDAY') */}
          <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5 select-none">
            <div className="w-5 h-5 text-[#F494BE] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full">
                <circle cx="11.5" cy="11.5" r="5" />
                <circle cx="20.5" cy="11.5" r="5" />
                <circle cx="11.5" cy="20.5" r="5" />
                <circle cx="20.5" cy="20.5" r="5" />
                <circle cx="16" cy="16" r="3.2" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="font-sans-flex font-semibold text-[16px] sm:text-[17px] md:text-[18px] tracking-[0.06em] uppercase text-[#182319]">
              THE MORI RITUAL
            </span>
          </div>

          {/* Editorial Two-Line Heading with Tilted Stickers Anchored directly to words */}
          <div className="relative inline-block px-3 sm:px-4">
            {/* Line 1: 'a small ritual for slower,' in Green Playfair */}
            <div>
              <h2 className="font-playfair text-[#2F5824] text-[28px] xs:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[72px] font-normal leading-[1.3] sm:leading-[1.14] tracking-tight">
                <span>a </span>

                {/* 'small' with pink pillow sticker anchored cleanly above it */}
                <span className="relative inline-block">
                  <span>small</span>
                  <motion.div
                    initial={{ rotate: -24, scale: 0.85, opacity: 0 }}
                    animate={{ rotate: -18, scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 240, damping: 18 }}
                    whileHover={{ rotate: -10, scale: 1.08 }}
                    className="absolute -top-7 xs:-top-8 sm:-top-9 md:-top-11 left-1/2 -translate-x-[45%] z-20 cursor-pointer select-none pointer-events-auto"
                    title="Sip, Don't Rush"
                  >
                    <div className="relative w-11 h-11 xs:w-12 xs:h-12 sm:w-15 sm:h-15 md:w-17 md:h-17 flex items-center justify-center">
                      {/* Organic 4-corner flared pillow badge */}
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                      >
                        <path
                          d="M 22 14
                             C 38 21, 62 21, 78 14
                             C 86 16, 88 22, 86 30
                             C 79 46, 79 54, 86 70
                             C 88 78, 86 84, 78 86
                             C 62 79, 38 79, 22 86
                             C 14 84, 12 78, 14 70
                             C 21 54, 21 46, 14 30
                             C 12 22, 14 16, 22 14 Z"
                          fill="#FCE5EE"
                        />
                      </svg>
                      {/* Sticker 2-line text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-sans-flex font-extrabold text-[6.5px] xs:text-[7px] sm:text-[8.5px] md:text-[9.5px] text-[#182319] leading-[1.08] tracking-tight uppercase select-none">
                        <span>SIP, DON'T</span>
                        <span>RUSH</span>
                      </div>
                    </div>
                  </motion.div>
                </span>

                <span> ritual for </span>

                {/* 'slower,' with lime arch dome sticker anchored cleanly above it */}
                <span className="relative inline-block">
                  <span>slower,</span>
                  <motion.div
                    initial={{ rotate: 22, scale: 0.85, opacity: 0 }}
                    animate={{ rotate: 18, scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 240, damping: 18 }}
                    whileHover={{ rotate: 10, scale: 1.08 }}
                    className="absolute -top-9 xs:-top-11 sm:-top-13 md:-top-15 -right-1 sm:right-0 md:right-1 z-20 cursor-pointer select-none pointer-events-auto"
                    title="Take It Slow"
                  >
                    {/* Tombstone / Dome tab */}
                    <div className="w-10 h-12 xs:w-11 xs:h-13 sm:w-14 sm:h-16 md:w-16 md:h-18 rounded-t-full rounded-b-[5px] sm:rounded-b-[6px] bg-[#E4F766] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center pt-2 xs:pt-2.5 sm:pt-3 pb-1 sm:pb-1.5 px-1 sm:px-1.5 text-center">
                      <span className="font-sans-flex font-extrabold text-[7px] xs:text-[7.5px] sm:text-[9px] md:text-[10px] leading-[1.08] tracking-tight text-[#182319] uppercase block">
                        TAKE IT
                      </span>
                      <span className="font-sans-flex font-extrabold text-[7px] xs:text-[7.5px] sm:text-[9px] md:text-[10px] leading-[1.08] tracking-tight text-[#182319] uppercase block">
                        SLOW
                      </span>
                    </div>
                  </motion.div>
                </span>
              </h2>
            </div>

            {/* Line 2: 'better days.' in Charcoal Instrument Serif Italic */}
            <div className="font-instrument-serif italic text-[#182319] text-[32px] xs:text-[38px] sm:text-[50px] md:text-[62px] lg:text-[70px] xl:text-[74px] font-normal leading-[1.05] tracking-normal mt-1 sm:mt-1.5">
              better days.
            </div>
          </div>
        </div>

        {/* CARDS CONTAINER PLACEHOLDER
            - Reserved area ready for the 3 product ritual cards (Pure, Creamy, Bright) */}
        <div className="w-full max-w-5xl mx-auto mt-12 sm:mt-16 flex-1 flex items-center justify-center">
          {/* Cards will be added here in the next step */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
