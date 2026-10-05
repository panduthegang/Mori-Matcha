import React from 'react';
import { motion } from 'motion/react';

export const BalanceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-14 sm:py-18 md:py-22 lg:py-26 overflow-x-clip select-none">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start">
        
        {/* ==============================================================
            LEFT COLUMN:
            - Hugs the card width + container padding without dead empty space
            - Rounded Matcha Shot Card (Top)
            - 4-line editorial narrative copy (Bottom)
           ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-full lg:w-auto flex flex-col items-start text-left pl-6 sm:pl-10 md:pl-14 lg:pl-12 xl:pl-16 2xl:pl-20 pr-6 lg:pr-0"
        >
          {/* Matcha Shot Card (Top) */}
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px] 2xl:w-[390px] 2xl:h-[390px] rounded-2xl sm:rounded-3xl md:rounded-[30px] lg:rounded-[34px] overflow-hidden shadow-md shadow-black/8 shrink-0 bg-[#FCE5EE]"
          >
            <img
              src="https://res.cloudinary.com/dkev7ein3/image/upload/v1791212863/Matcha_shot_ix9w9q.png"
              alt="Ceremonial Matcha Latte Shot with Latte Art in Sunlight"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>

          {/* Narrative Paragraph (Bottom, 4 lines cleanly formatted) */}
          <p className="font-sans-flex text-[#555555] text-[13.5px] sm:text-[14px] md:text-[14.5px] lg:text-[15px] xl:text-[15.5px] leading-[1.55] font-normal max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[390px] mt-6 sm:mt-7">
            The result is a ritual that feels as good as it tastes smooth energy, a calmer sense of focus, and an easy way to bring a little more balance into the everyday.
          </p>
        </motion.div>

        {/* ==============================================================
            RIGHT COLUMN:
            - Starts immediately beside the card (tight gap matching OG design)
            - Giant 'balance' headline matching footer 'wellness' scale (185px-252px)
            - Expansive spread with right bleed
            - Overlapping transparent Matcha Sieve Cutout (NO BG)
           ============================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-w-0 w-full flex flex-col items-start justify-start overflow-visible mt-8 lg:mt-0 pl-6 sm:pl-10 md:pl-14 lg:pl-5 xl:pl-8 2xl:pl-10 pr-0"
        >
          {/* Giant 'balance' Editorial Headline (Matching footer 'wellness' scale & metallic gradient) */}
          <div className="relative w-full lg:w-[108%] xl:w-[112%] lg:-mr-10 xl:-mr-16 lg:ml-7 xl:ml-11 2xl:ml-14 select-none overflow-visible z-0 text-left">
            <h1 className="font-playfair font-normal leading-[0.88] tracking-[-0.03em] bg-gradient-to-b from-[#0A0A0A] via-[#242424] via-45% to-[#959A9F] bg-clip-text text-transparent pb-1 sm:pb-2 md:pb-3 lg:pb-4 whitespace-nowrap text-[24vw] sm:text-[19vw] md:text-[16vw] lg:text-[185px] xl:text-[222px] 2xl:text-[252px] inline-block pointer-events-none">
              balance
            </h1>
          </div>

          {/* Overlapping Transparent Sieve & Chawan Cutout (NO BG)
              - Scaled to elegant proportions matching OG design
              - Sits right near the bottom baseline of the letter 'n'
              - Bleeds gracefully to the right edge */}
          <div className="relative -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-14 xl:-mt-18 2xl:-mt-22 w-full flex items-center justify-end z-10 overflow-visible">
            <img
              src="https://res.cloudinary.com/dkev7ein3/image/upload/v1791093804/Matcha_Sieve_dlagic.png"
              alt="Matcha Sieve and Ceramic Chawan Bowl with Fine Green Tea Powder"
              className="w-full max-w-[360px] xs:max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[580px] xl:max-w-[640px] 2xl:max-w-[700px] h-auto object-contain object-right pointer-events-none drop-shadow-sm select-none -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-6 xl:-mr-10 2xl:-mr-14 ml-auto"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BalanceSection;

