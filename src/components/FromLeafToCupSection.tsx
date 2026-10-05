import React, { useState } from 'react';
import { motion } from 'motion/react';

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  renderIcon: (isHovered: boolean) => React.ReactNode;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'shade',
    title: 'SHADE GROWN',
    description: 'Carefully shaded to develop a smoother, richer character.',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
        <path d="M12 2a9 9 0 0 1 9 9c0 5-4 9-9 9s-9-4-9-9a9 9 0 0 1 9-9Z" />
        <path d="M12 7v10" />
        <path d="M8 11s2 1 4 0" />
        <path d="M12 14s2 1 4 0" />
      </svg>
    ),
  },
  {
    id: 'harvest',
    title: 'CAREFULLY HARVESTED',
    description: 'Young leaves are selected at their freshest and most vibrant.',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
  },
  {
    id: 'ground',
    title: 'SLOWLY STONE GROUND',
    description: 'Gently milled for a fine, smooth, and silky texture.',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
        <path d="m14 7 3-3a1.5 1.5 0 0 0-2.12-2.12L12 4.75" />
        <path d="M3.5 13h17c.83 0 1.5.67 1.5 1.5 0 4.14-3.58 7.5-8 7.5s-8-3.36-8-7.5c0-.83.67-1.5 1.5-1.5Z" />
        <path d="M7 13c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" />
      </svg>
    ),
  },
  {
    id: 'pure',
    title: 'NOTHING UNNECESSARY',
    description: 'Pure matcha with no added flavours, colours, or extras.',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
        <path d="M10 2v7.31a2 2 0 0 1-.37 1.16L4.14 18.5A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.72-3.5l-5.49-8.03a2 2 0 0 1-.37-1.16V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
];

export const FromLeafToCupSection: React.FC = () => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section className="w-full px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 pb-2.5 sm:pb-3 flex flex-col bg-[#FFFFFF]">
      {/* SECTION CARD CONTAINER
          - Matches border-radius and grid texture of EverydayWellnessSection
          - High-contrast green grid background image on deep forest canvas */}
      <div
        className="relative w-full rounded-xl sm:rounded-2xl md:rounded-[20px] overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-12 pb-6 sm:pb-8 md:pb-12 bg-cover bg-center select-none"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dkev7ein3/image/upload/v1791038905/Green_Grid_doxpoc.png')`,
          backgroundColor: '#0D2411',
        }}
      >
        {/* Subtle radial inner vignette glow for typography depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,27,13,0.45)_100%)] pointer-events-none" />

        {/* ==============================================================
            HEADER AREA:
            - Kicker: 4-petal pink clover + FROM LEAF TO CUP
            - Editorial Two-Line Headline with Word-Anchored Stickers
           ============================================================== */}
        <div className="relative z-10 flex flex-col max-w-4xl text-left">
          {/* KICKER */}
          <div className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4 select-none">
            <div className="w-5 h-5 text-[#F494BE] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full">
                <circle cx="11.5" cy="11.5" r="5" />
                <circle cx="20.5" cy="11.5" r="5" />
                <circle cx="11.5" cy="20.5" r="5" />
                <circle cx="20.5" cy="20.5" r="5" />
                <circle cx="16" cy="16" r="3.2" fill="#0D2411" />
              </svg>
            </div>
            <span className="font-sans-flex font-semibold text-[16px] sm:text-[17px] md:text-[18px] tracking-[0.06em] uppercase text-white/90">
              FROM LEAF TO CUP
            </span>
          </div>

          {/* EDITORIAL TWO-LINE HEADLINE WITH WORD-ANCHORED STICKERS */}
          <h2 className="font-playfair text-[#E2F784] text-[34px] xs:text-[40px] sm:text-[50px] md:text-[58px] lg:text-[62px] xl:text-[66px] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight">
            {/* Line 1: 'grown slowly under careful' with Lime sticker anchored to 'careful' */}
            <div>
              <span>grown slowly under </span>
              <span className="relative inline-block">
                <span>careful</span>

                {/* Sticker 1: NOTHING RUSHED */}
                <motion.div
                  initial={{ rotate: -18, scale: 0.85, opacity: 0 }}
                  whileInView={{ rotate: -12, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 240, damping: 18 }}
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  className="absolute -top-6 xs:-top-7 sm:-top-8 -right-3 xs:-right-4 sm:-right-6 z-20 cursor-pointer select-none"
                  title="Nothing Rushed"
                >
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#72B336] border border-[#8FE045]/60 shadow-md shadow-black/25 flex flex-col items-center justify-center">
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-white text-center whitespace-nowrap">
                      NOTHING
                    </span>
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-white text-center whitespace-nowrap">
                      RUSHED
                    </span>
                  </div>
                </motion.div>
              </span>
            </div>

            {/* Line 2: 'shade, kept simple.' with Pink pillow sticker on top-right */}
            <div className="mt-1 sm:mt-1.5 flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
              <span className="text-[#E2F784]">shade, </span>
              <span className="relative inline-block">
                <span className="font-instrument-serif italic text-white font-normal text-[38px] xs:text-[44px] sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[70px]">
                  kept simple.
                </span>

                {/* Sticker 2: GROWN WITH CARE */}
                <motion.div
                  initial={{ rotate: 18, scale: 0.85, opacity: 0 }}
                  whileInView={{ rotate: 14, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 240, damping: 18 }}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="absolute -top-4 xs:-top-5 sm:-top-6 -right-6 xs:-right-7 sm:-right-9 md:-right-10 z-20 cursor-pointer select-none"
                  title="Grown With Care"
                >
                  <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#FCE5EE] border border-white/70 shadow-md shadow-black/20 flex flex-col items-center justify-center">
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                      GROWN
                    </span>
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                      WITH CARE
                    </span>
                  </div>
                </motion.div>
              </span>
            </div>
          </h2>
        </div>

        {/* ==============================================================
            MIDDLE CONTENT ROW:
            - Left: 3 Bullet Points with lime-green dots
            - Right: Two Editorial Narrative Paragraphs
           ============================================================== */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6">
          {/* Left: 3 Bullets */}
          <div className="flex flex-col gap-4 sm:gap-5 shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2F784] shrink-0" />
              <span className="font-sans-flex text-white/90 text-[15px] sm:text-[16px] md:text-[17px] font-normal">
                Carefully Grown Under Shade
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2F784] shrink-0" />
              <span className="font-sans-flex text-white/90 text-[15px] sm:text-[16px] md:text-[17px] font-normal">
                Made From Whole Leaves
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2F784] shrink-0" />
              <span className="font-sans-flex text-white/90 text-[15px] sm:text-[16px] md:text-[17px] font-normal">
                Slowly Ground Into Powder
              </span>
            </div>
          </div>

          {/* Right: Two Editorial Paragraphs */}
          <div className="flex flex-col gap-4 sm:gap-5 max-w-xl text-left">
            <p className="font-sans-flex text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] font-normal">
              Great matcha begins long before it reaches the bowl. Tea leaves are grown under careful shade, helping develop their vibrant colour, smooth character, and naturally rich flavour.
            </p>
            <p className="font-sans-flex text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] font-normal">
              Once harvested, the leaves are gently processed and slowly ground into a fine powder, keeping matcha close to its simplest form whole, vibrant, and naturally pure.
            </p>
          </div>
        </div>

        {/* ==============================================================
            BOTTOM ROW: 4 HORIZONTAL BENEFIT CARDS
            - Exact color tokens, active state & hover lift as EverydayWellnessSection
            - Dark translucent green when idle, crisp white + pink badge when hovered
            - whileHover={{ y: -6 }} with duration 0.25s easeOut
           ============================================================== */}
        <div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5.5 mt-6 sm:mt-8 md:mt-10"
          onMouseLeave={() => setHoveredCardId(null)}
        >
          {FEATURE_CARDS.map((card) => {
            const isHovered = hoveredCardId === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onClick={() => setHoveredCardId(card.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`relative text-left p-4.5 sm:p-5 md:p-5.5 rounded-[18px] sm:rounded-[22px] md:rounded-[24px] transition-all duration-300 ease-out cursor-pointer select-none flex flex-col justify-between min-h-[160px] sm:min-h-[175px] md:min-h-[185px] ${
                  isHovered
                    ? 'bg-[#FFFFFF] text-[#182319] shadow-[0_16px_40px_rgba(0,0,0,0.28)] border-transparent'
                    : 'bg-[#15341A]/50 hover:bg-[#15341A]/75 text-white backdrop-blur-md border border-white/10 shadow-none'
                }`}
              >
                {/* Top: Icon Badge */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full flex items-center justify-center transition-colors duration-300 ease-out mb-3 sm:mb-4 md:mb-5 shrink-0 ${
                    isHovered
                      ? 'bg-[#FCE5EE] text-[#2F5824]'
                      : 'bg-white/10 text-white/90'
                  }`}
                >
                  {card.renderIcon(isHovered)}
                </div>

                {/* Bottom: Title & Description */}
                <div>
                  <h3
                    className={`font-sans-flex font-bold text-[13px] sm:text-[14px] md:text-[14.5px] uppercase tracking-[0.08em] transition-colors duration-300 ease-out mb-1 sm:mb-1.5 ${
                      isHovered ? 'text-[#182319]' : 'text-white/95'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`font-sans-flex text-[12px] sm:text-[12.5px] md:text-[13px] font-normal leading-snug transition-colors duration-300 ease-out ${
                      isHovered ? 'text-[#555555]' : 'text-white/65'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FromLeafToCupSection;
