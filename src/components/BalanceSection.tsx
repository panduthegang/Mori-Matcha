import React from 'react';
import { motion } from 'motion/react';

export const BalanceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-14 sm:py-18 md:py-22 lg:py-26 overflow-x-clip select-none">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-14 2xl:gap-18">
        
        {/* ==============================================================
            LEFT COLUMN:
            - Rounded Matcha Shot Card (Ceremonial matcha latte with latte art in sunlight)
            - Editorial narrative paragraph below card
            - Matching padding and font size metrics with PureByNatureSection
           ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[46%] xl:w-[44%] 2xl:w-[42%] flex flex-col items-start text-left px-5 sm:px-8 md:px-12 lg:pl-12 lg:pr-6 xl:pl-16 xl:pr-8 2xl:pl-24 max-w-xl lg:max-w-none"
        >
          {/* Matcha Shot Card (Top) */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px] lg:w-[290px] lg:h-[290px] xl:w-[310px] xl:h-[310px] rounded-2xl sm:rounded-3xl md:rounded-[28px] overflow-hidden shadow-md shadow-black/8 shrink-0 bg-[#FCE5EE]"
          >
            <img
              src="https://res.cloudinary.com/dkev7ein3/image/upload/v1791212863/Matcha_shot_ix9w9q.png"
              alt="Ceremonial Matcha Latte Shot with Latte Art in Sunlight"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>

          {/* Narrative Paragraph (Bottom) */}
          <p className="font-sans-flex text-[#555555] text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.65] font-normal max-w-sm sm:max-w-md mt-6 sm:mt-8">
            The result is a ritual that feels as good as it tastes smooth energy, a calmer sense of focus, and an easy way to bring a little more balance into the everyday.
          </p>
        </motion.div>

        {/* ==============================================================
            RIGHT COLUMN:
            - Giant 'balance' headline with Playfair Display and vertical metallic gradient
            - Overlapping transparent Matcha Sieve Cutout (NO BG)
            - Negative right margin pulls the sieve right to the viewport edge (mirroring PureByNature)
           ============================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-[54%] xl:w-[56%] 2xl:w-[58%] flex flex-col items-end justify-center shrink-0 overflow-visible"
        >
          {/* Giant 'balance' Editorial Headline */}
          <h2 className="w-full text-right pr-4 sm:pr-8 lg:pr-10 xl:pr-14 2xl:pr-18 z-0">
            <span className="inline-block overflow-visible font-playfair font-normal text-[66px] xs:text-[80px] sm:text-[102px] md:text-[122px] lg:text-[135px] xl:text-[158px] 2xl:text-[176px] leading-[0.88] tracking-tight bg-gradient-to-b from-[#0A0A0A] via-[#2F3830] via-45% to-[#959A9F] bg-clip-text text-transparent pb-3 sm:pb-5">
              balance
            </span>
          </h2>

          {/* Overlapping Transparent Sieve & Chawan Cutout (NO BG) */}
          <div className="relative -mt-10 sm:-mt-16 md:-mt-22 lg:-mt-26 xl:-mt-32 w-full flex items-center justify-end z-10">
            <img
              src="https://res.cloudinary.com/dkev7ein3/image/upload/v1791093804/Matcha_Sieve_dlagic.png"
              alt="Matcha Sieve and Ceramic Chawan Bowl with Fine Green Tea Powder"
              className="w-full max-w-[460px] xs:max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[740px] xl:max-w-[820px] 2xl:max-w-[900px] h-auto object-contain object-right pointer-events-none drop-shadow-sm select-none -mr-4 sm:-mr-8 md:-mr-10 lg:-mr-8 xl:-mr-12 2xl:-mr-16"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BalanceSection;
