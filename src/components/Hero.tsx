import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Navbar } from './Navbar';

interface HeroProps {
  onStartRitual?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartRitual }) => {
  const [isRitualModalOpen, setIsRitualModalOpen] = useState(false);

  const pillTags = [
    'ceremonial',
    'whisked',
    'seasonal',
    'creamy',
    'smooth',
    'refreshing',
    'floral',
    'bright',
  ];

  const handleCtaClick = () => {
    if (onStartRitual) {
      onStartRitual();
    } else {
      setIsRitualModalOpen(true);
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen flex flex-col font-sans-flex text-[#182319] selection:bg-[#E4F766] selection:text-[#182319] antialiased">
      {/* SEPARATE NAVBAR COMPONENT (Pink ticker, header brand, animated nav pill, CTA, mobile drawer) */}
      <Navbar onStartRitual={handleCtaClick} />

      {/* 3. HERO SECTION CONTAINER (Reduced padding matching OG design) */}
      <section className="flex-1 px-2 sm:px-3 md:px-4 pb-2.5 sm:pb-3 pt-0 flex flex-col bg-[#FFFFFF]">
        <div
          className="relative w-full flex-1 min-h-[540px] sm:min-h-[600px] md:min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] rounded-xl sm:rounded-2xl md:rounded-[20px] overflow-hidden shadow-lg flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 pb-2.5 sm:pb-3.5 md:pb-4 bg-cover bg-center select-none"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1790229947/Hero_i3x2nl.png')`,
            backgroundPosition: 'center 38%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#5C98DB',
          }}
        >
          {/* Bottom vignette gradient to ensure white text & containers are properly visible against bright sky/blossoms on large screens */}
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none rounded-b-[inherit]" />

          {/* TOP SECTION: Headline on Left, Description on Right */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
            {/* Left Headline: "matcha" + STEADY ENERGY badge */}
            <div className="relative inline-block mt-1 sm:mt-2">
              <h1 className="font-playfair text-[#FFFFFF] text-[84px] xs:text-[104px] sm:text-[145px] md:text-[185px] lg:text-[210px] xl:text-[240px] font-medium tracking-tight leading-[0.85] drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
                matcha
              </h1>

              {/* Tilted Scalloped Badge: STEADY ENERGY */}
              <motion.div
                initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: -11, opacity: 1 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 220, damping: 18 }}
                whileHover={{ scale: 1.1, rotate: -6 }}
                className="absolute -top-3 sm:-top-6 md:-top-8 right-2 sm:right-6 md:right-10 z-20 cursor-pointer"
                title="Sustained calm without caffeine crash"
              >
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 flex items-center justify-center">
                  {/* Organic 12-lobed scalloped flower badge matching original screenshot */}
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md text-[#E4F766]"
                  >
                    <path
                      d="M50 0C54.5 0 58.2 4.2 62.4 5.3C66.6 6.4 71.3 4.4 75.1 6.6C78.9 8.8 81.8 13.2 85.1 16.3C88.4 19.4 92.1 22.3 94.3 26.1C96.5 29.9 94.5 34.6 95.6 38.8C96.7 43 100.9 46.7 100.9 51.2C100.9 55.7 96.7 59.4 95.6 63.6C94.5 67.8 96.5 72.5 94.3 76.3C92.1 80.1 88.4 83 85.1 86.1C81.8 89.2 78.9 93.6 75.1 95.8C71.3 98 66.6 96 62.4 97.1C58.2 98.2 54.5 102.4 50 102.4C45.5 102.4 41.8 98.2 37.6 97.1C33.4 96 28.7 98 24.9 95.8C21.1 93.6 18.2 89.2 14.9 86.1C11.6 83 7.9 80.1 5.7 76.3C3.5 72.5 5.5 67.8 4.4 63.6C3.3 59.4 -0.9 55.7 -0.9 51.2C-0.9 46.7 3.3 43 4.4 38.8C5.5 34.6 3.5 29.9 5.7 26.1C7.9 22.3 11.6 19.4 14.9 16.3C18.2 13.2 21.1 8.8 24.9 6.6C28.7 4.4 33.4 6.4 37.6 5.3C41.8 4.2 45.5 0 50 0Z"
                      fill="#E4F766"
                    />
                  </svg>

                  {/* Badge Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-sans-flex font-extrabold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#182319] leading-[1.05] tracking-tight uppercase select-none">
                    <span>STEADY</span>
                    <span>ENERGY</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Stickers + MADE FOR EVERYDAY + Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55 }}
              className="lg:max-w-md xl:max-w-lg lg:pt-8 flex flex-col gap-3"
            >
                {/* Dual Stickers + Tagline */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Pink whisk sticker */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FEE3EE] flex items-center justify-center shadow-md rotate-[-4deg] transition-transform hover:rotate-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#182319"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#182319]"
                  >
                    <path d="M12 2v5" />
                    <rect x="9.5" y="4.5" width="5" height="3" rx="1" fill="#182319" />
                    <path d="M7 10c0 5 2.5 9.5 5 9.5s5-4.5 5-9.5" />
                    <path d="M10 10c0 4 1 7.5 2 7.5s2-3.5 2-7.5" />
                    <path d="M12 10v7.5" />
                  </svg>
                </div>

                {/* Lime sticker */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#E4F766] flex items-center justify-center shadow-md rotate-[4deg] transition-transform hover:rotate-0">
                  <svg viewBox="0 0 24 24" fill="#182319" className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#182319]">
                    <circle cx="8" cy="11" r="2.8" />
                    <path d="M6.5 12.5C6.5 15 8 17.5 9.5 18.5" stroke="#182319" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="16" cy="10.5" r="2.6" />
                  </svg>
                </div>

                {/* Stacked Two-Line Header in Outfit Font matching OG design */}
                <div className="flex uppercase text-[12px] sm:text-[14px] md:text-[16px] leading-[1.1] tracking-[0.06em] text-[#FFFFFF] drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.35)] pl-0.5">
                  <span>MADE FOR EVERYDAY</span>
                </div>
              </div>

              {/* Subheading copy in Outfit with geometric single-storey letterforms */}
              <p className=" text-[#FFFFFF] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[1.38] text-balance drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.3)]">
                A simple matcha ritual designed to bring steadier energy, calmer focus, and a little more balance into <br/> your everyday.
              </p>
            </motion.div>
          </div>

          {/* BOTTOM PILL ATTRIBUTES ROW: Fully responsive grid with clean static pills matching OG design */}
          <div className="relative z-10 w-full pt-3 sm:pt-5">
            {/* Grid layout: 4 columns on small mobile, 8 full columns on tablet & desktop */}
            <div className="w-full grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 items-center">
              {pillTags.map((name) => (
                <div
                  key={name}
                  className="relative w-full inline-flex items-center justify-center px-1.5 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 rounded-full border-[1.5px] border-white/90 bg-black/10 font-playfair text-[14px] xs:text-[15px] sm:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[25px] leading-snug shadow-xs select-none"
                >
                  <span className="font-normal text-[#FFFFFF] tracking-tight drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)] whitespace-nowrap overflow-visible pb-0.5">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL MODAL (Interactive detail when clicking "START YOUR RITUAL") */}
      <AnimatePresence>
        {isRitualModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#FEE3EE] text-[#182319]"
            >
              <button
                onClick={() => setIsRitualModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#182319] transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#E4F766] text-[#182319] text-xs font-bold uppercase tracking-wider">
                  The Morning Ritual
                </span>
                <span className="text-xs font-semibold text-[#182319]/60">3-Minute Ceremony</span>
              </div>

              <h2 className="font-playfair text-2xl sm:text-3xl font-medium mb-3">
                Begin your daily bowl.
              </h2>
              <p className="font-sans-flex text-sm text-[#182319]/80 mb-6 leading-relaxed">
                Experience steadier, calm alertness without caffeine jitters. 100% Ceremonial grade stone-ground in Uji, Kyoto.
              </p>

              <div className="space-y-3 mb-6 font-sans-flex text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FEE3EE]/60">
                  <div className="w-6 h-6 rounded-full bg-[#182319] text-[#FFFFFF] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <span className="font-bold">Sift 2g</span> of vibrant jade ceremonial powder into your ceramic bowl.
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FEE3EE]/60">
                  <div className="w-6 h-6 rounded-full bg-[#182319] text-[#FFFFFF] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <span className="font-bold">Add 60ml</span> of water heated to 80°C (175°F).
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FEE3EE]/60">
                  <div className="w-6 h-6 rounded-full bg-[#182319] text-[#FFFFFF] flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <span className="font-bold">Whisk briskly in a W-pattern</span> with your bamboo chasen until silky microfoam crowns the surface.
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsRitualModalOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#182319] text-[#FFFFFF] font-bold text-sm tracking-wider uppercase hover:bg-[#182319]/90 transition-colors shadow-md"
              >
                Close & Enjoy
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
