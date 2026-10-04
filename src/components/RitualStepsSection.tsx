import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RitualStepItem {
  number: number;
  word: string;
  italicWord: string;
  description: string;
  imageUrl: string;
}

const RITUAL_STEPS: RitualStepItem[] = [
  {
    number: 1,
    word: 'scoop',
    italicWord: 'scoop',
    description: 'Sift 1 to 2 bamboo scoops of pure ceremonial matcha powder into your ceramic chawan.',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1790234034/Scoop_vbac2f.png',
  },
  {
    number: 2,
    word: 'pour',
    italicWord: 'pour',
    description: 'Pour 60 to 70ml of hot water heated gently to 80°C (175°F) directly over the sifted matcha.',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1790234032/Pour_u8dvzr.png',
  },
  {
    number: 3,
    word: 'whisk',
    italicWord: 'whisk',
    description: 'Whisk gently until the texture turns smooth, light, and softly frothy.',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1790234032/Whisk_ytkhpo.png',
  },
  {
    number: 4,
    word: 'enjoy',
    italicWord: 'enjoy',
    description: 'Pause, inhale the vegetal floral aroma, and savor mindful calm in every sip.',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1790234032/Enjoy_jdxbvh.png',
  },
];

export const RitualStepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  return (
    <section className="w-full px-2 sm:px-3 md:px-4 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 flex flex-col bg-[#FFFFFF] overflow-x-clip select-none">
      {/* ==============================================================
          HEADER AREA:
          - Kicker Tag: 4-petal pink clover + KEEP IT SIMPLE (18px font-sans-flex)
          - Two-line Editorial Title with 3 Word-Anchored Stickers
          - Subtitle Paragraph
         ============================================================== */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        {/* TOP KICKER TAG: 4-Petal Clover + KEEP IT SIMPLE */}
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
            KEEP IT SIMPLE
          </span>
        </div>

        {/* EDITORIAL TWO-LINE HEADING WITH 3 WORD-ANCHORED STICKERS */}
        <div className="relative inline-block">
          <h2 className="text-[#182319] leading-[1.12] sm:leading-[1.08] tracking-tight">
            {/* Line 1: 'a better matcha ritual,' with Pink pillow sticker on left & Green wavy sticker on top */}
            <div className="font-playfair text-[34px] xs:text-[40px] sm:text-[50px] md:text-[58px] lg:text-[62px] xl:text-[66px] font-normal">
              {/* 'a better' with Pink Pillow Sticker anchored to its left */}
              <span className="relative inline-block">
                {/* Sticker 1: FOUR STEPS, THAT'S IT */}
                <motion.div
                  initial={{ rotate: -18, scale: 0.85, opacity: 0 }}
                  animate={{ rotate: -14, scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 240, damping: 18 }}
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  className="absolute -top-4 xs:-top-5 sm:-top-6 -left-7 xs:-left-9 sm:-left-12 md:-left-14 z-20 cursor-pointer select-none"
                  title="Four Steps, That's It"
                >
                  <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#FCE5EE] border border-white/70 shadow-md shadow-black/15 flex flex-col items-center justify-center">
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                      FOUR STEPS,
                    </span>
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                      THAT'S IT
                    </span>
                  </div>
                </motion.div>

                <span>a better </span>
              </span>

              {/* 'matcha ritual,' with Green Scalloped Wave Sticker anchored directly above */}
              <span className="relative inline-block">
                <span>matcha ritual,</span>

                {/* Sticker 2: SCOOP, POUR, WHISK */}
                <motion.div
                  initial={{ rotate: 12, scale: 0.85, opacity: 0 }}
                  animate={{ rotate: 6, scale: 1, opacity: 1 }}
                  transition={{ delay: 0.25, type: 'spring', stiffness: 240, damping: 18 }}
                  whileHover={{ rotate: 2, scale: 1.08 }}
                  className="absolute -top-6 xs:-top-7 sm:-top-8 md:-top-9 left-1/2 -translate-x-[40%] z-20 cursor-pointer select-none"
                  title="Scoop, Pour, Whisk"
                >
                  <div className="relative px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#4E9B28] border border-[#63B838]/60 shadow-md shadow-black/20 flex items-center justify-center">
                    {/* Subtle scalloped decorative teeth */}
                    <span className="font-sans-flex font-bold text-[8px] xs:text-[9px] sm:text-[10px] md:text-[10.5px] uppercase tracking-wider text-white whitespace-nowrap">
                      SCOOP, POUR, WHISK
                    </span>
                  </div>
                </motion.div>
              </span>
            </div>

            {/* Line 2: 'in four simple steps' in Instrument Serif Italic with Lime ticket sticker anchored on right */}
            <div className="mt-1 sm:mt-1.5 font-instrument-serif italic text-[#182319] font-normal text-[38px] xs:text-[44px] sm:text-[56px] md:text-[64px] lg:text-[68px] xl:text-[72px]">
              <span>in four simple </span>

              {/* 'steps' with Lime Ticket Sticker anchored on its right */}
              <span className="relative inline-block">
                <span>steps</span>

                {/* Sticker 3: EASY DOES IT */}
                <motion.div
                  initial={{ rotate: 20, scale: 0.85, opacity: 0 }}
                  animate={{ rotate: 14, scale: 1, opacity: 1 }}
                  transition={{ delay: 0.35, type: 'spring', stiffness: 240, damping: 18 }}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="absolute -bottom-2 xs:-bottom-3 sm:-bottom-4 -right-8 xs:-right-10 sm:-right-12 md:-right-14 z-20 cursor-pointer select-none"
                  title="Easy Does It"
                >
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#E4F766] border border-[#182319]/15 shadow-md shadow-black/15 flex flex-col items-center justify-center">
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9px] md:text-[9.5px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                      EASY
                    </span>
                    <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9px] md:text-[9.5px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                      DOES IT
                    </span>
                  </div>
                </motion.div>
              </span>
            </div>
          </h2>
        </div>

        {/* Subtitle Description */}
        <p className="font-sans-flex text-[#555555] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg mt-4 sm:mt-5 font-normal">
          A simple routine for making matcha part of your everyday.
        </p>
      </div>

      {/* ==============================================================
          INTERACTIVE RITUAL STEPS ACCORDION LIST
          - Inactive: Circular step badge + giant Playfair word with hover lift
          - Active: Full-width expanded image banner (rounded-xl sm:rounded-2xl md:rounded-[20px])
         ============================================================== */}
      <div className="w-full max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        {RITUAL_STEPS.map((step) => {
          const isActive = activeStep === step.number;

          if (isActive) {
            {/* ACTIVE STEP: Expanded Full-Width Banner Card with 3:1 aspect ratio matching 2172x724 */}
            return (
              <motion.div
                key={step.number}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[2.6/1] sm:aspect-[3/1] min-h-[220px] sm:min-h-[270px] md:min-h-[310px] lg:min-h-[340px] rounded-xl sm:rounded-2xl md:rounded-[20px] overflow-hidden shadow-xl shadow-black/15 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center cursor-pointer select-none bg-[#FCE5EE]"
                onClick={() => setActiveStep(step.number)}
              >
                {/* 2172x724 High-Resolution Ritual Image */}
                <img
                  src={step.imageUrl}
                  alt={`Step ${step.number}: ${step.word}`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  loading="lazy"
                />

                {/* Subtle contrast overlay to guarantee white typography readability */}
                <div className="absolute inset-0 bg-black/12 pointer-events-none" />

                {/* Step Content */}
                <div className="relative z-10 flex flex-col items-center max-w-2xl px-4">
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-white/80 shadow-md flex items-center justify-center mb-1.5 sm:mb-2">
                    <span className="font-sans-flex font-bold text-xs sm:text-sm text-[#182319]">
                      {step.number}
                    </span>
                  </div>

                  {/* Active Script Heading */}
                  <h3 className="font-instrument-serif italic text-white text-[48px] xs:text-[58px] sm:text-[72px] md:text-[84px] lg:text-[96px] font-normal leading-[0.9] drop-shadow-md">
                    {step.italicWord}
                  </h3>

                  {/* Active Step Description */}
                  <p className="font-sans-flex text-white/95 text-[14px] sm:text-[15px] md:text-[16px] max-w-lg mt-2 sm:mt-3 leading-relaxed font-normal drop-shadow-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          }

          {/* INACTIVE STEP: Circular badge + Giant Editorial Serif Word */}
          return (
            <motion.button
              key={step.number}
              type="button"
              layout
              onClick={() => setActiveStep(step.number)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer select-none transition-opacity duration-300 hover:opacity-85"
            >
              {/* Circular Number Badge */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#182319]/15 shadow-xs flex items-center justify-center transition-colors duration-200 group-hover:border-[#182319]/40">
                <span className="font-sans-flex font-semibold text-xs sm:text-[13px] text-[#555555] group-hover:text-[#182319]">
                  {step.number}
                </span>
              </div>

              {/* Giant Playfair Serif Word */}
              <span className="font-playfair text-[#182319] text-[42px] xs:text-[50px] sm:text-[64px] md:text-[76px] lg:text-[84px] font-normal leading-[1] tracking-tight">
                {step.word}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default RitualStepsSection;
