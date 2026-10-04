import React from 'react';
import { motion } from 'motion/react';

export const PureByNatureSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-14 sm:py-18 md:py-22 lg:py-26 overflow-x-clip select-none">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-14 2xl:gap-18">
        
        {/* ==============================================================
            LEFT COLUMN:
            - Not containerized: Sits boldly on the left edge (matches OG image-1)
            - Large scale: bamboo whisk & wide circular spilled matcha powder
            - Cutout transparent PNG (NO BG)
            - Negative left margin pulls the handle right to the viewport edge
           ============================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[48%] xl:w-[50%] flex items-center justify-start shrink-0 overflow-visible"
        >
          <img
            src="https://res.cloudinary.com/dkev7ein3/image/upload/v1791040482/Whisk_Matcha_Powder_mefsa2.png"
            alt="Bamboo Matcha Whisk and Spilled Pure Matcha Powder"
            className="w-full max-w-[520px] xs:max-w-[580px] sm:max-w-[650px] md:max-w-[720px] lg:max-w-[780px] xl:max-w-[880px] 2xl:max-w-[960px] h-auto object-contain object-left pointer-events-none drop-shadow-sm select-none -ml-4 sm:-ml-8 md:-ml-10 lg:-ml-8 xl:-ml-12 2xl:-ml-16"
            loading="lazy"
          />
        </motion.div>

        {/* ==============================================================
            RIGHT COLUMN:
            - Top Kicker: 4-petal clover icon + PURE BY NATURE
            - Editorial Two-Line Heading with 3 Word-Anchored Stickers
            - Bottom Row: Rounded Iced Matcha Card + Narrative Paragraph
           ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[52%] xl:w-[50%] flex flex-col items-start text-left px-5 sm:px-8 md:px-12 lg:px-6 xl:px-12 2xl:px-16 max-w-2xl lg:max-w-none"
        >
          {/* TOP KICKER TAG: 4-Petal Clover + PURE BY NATURE */}
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
              PURE BY NATURE
            </span>
          </div>

          {/* EDITORIAL TWO-LINE HEADING WITH 3 WORD-ANCHORED STICKERS */}
          <div className="relative inline-block w-full">
            <h2 className="text-[#182319] leading-[1.12] sm:leading-[1.08] tracking-tight">
              {/* Line 1: 'simple by nature,' with Pink Pillow Sticker on top right */}
              <div className="font-playfair text-[34px] xs:text-[40px] sm:text-[48px] md:text-[54px] lg:text-[58px] xl:text-[64px] font-normal">
                <span>simple by </span>

                {/* 'nature,' with Pink Pillow Sticker anchored to its top-right */}
                <span className="relative inline-block">
                  <span>nature,</span>

                  {/* Sticker 1: NOTHING EXTRA */}
                  <motion.div
                    initial={{ rotate: 18, scale: 0.85, opacity: 0 }}
                    whileInView={{ rotate: 14, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 240, damping: 18 }}
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="absolute -top-4 sm:-top-5 md:-top-6 -right-6 sm:-right-8 md:-right-9 z-20 cursor-pointer select-none"
                    title="Nothing Extra"
                  >
                    <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#FCE5EE] border border-white/70 shadow-md shadow-black/15 flex flex-col items-center justify-center">
                      <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        NOTHING
                      </span>
                      <span className="font-sans-flex font-extrabold text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        EXTRA
                      </span>
                    </div>
                  </motion.div>
                </span>
              </div>

              {/* Line 2: 'powerful in every cup.' in Instrument Serif Italic */}
              <div className="mt-1 sm:mt-1.5 font-instrument-serif italic text-[#182319] font-normal text-[38px] xs:text-[44px] sm:text-[54px] md:text-[60px] lg:text-[64px] xl:text-[70px] leading-[1.05]">
                {/* 'powerful' with Lime Ticket Sticker on left */}
                <span className="relative inline-block">
                  {/* Sticker 2: JUST THE GOOD STUFF */}
                  <motion.div
                    initial={{ rotate: -16, scale: 0.85, opacity: 0 }}
                    whileInView={{ rotate: -12, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 240, damping: 18 }}
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    className="absolute -top-3 sm:-top-4 -left-7 xs:-left-8 sm:-left-9 md:-left-11 z-20 cursor-pointer select-none"
                    title="Just The Good Stuff"
                  >
                    <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#E4F766] border border-[#182319]/15 shadow-md shadow-black/15 flex flex-col items-center justify-center">
                      <span className="font-sans-flex font-extrabold text-[7px] xs:text-[8px] sm:text-[8.5px] md:text-[9px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        JUST THE
                      </span>
                      <span className="font-sans-flex font-extrabold text-[7px] xs:text-[8px] sm:text-[8.5px] md:text-[9px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        GOOD
                      </span>
                      <span className="font-sans-flex font-extrabold text-[7px] xs:text-[8px] sm:text-[8.5px] md:text-[9px] uppercase leading-[1.05] tracking-tight text-[#182319] text-center whitespace-nowrap">
                        STUFF
                      </span>
                    </div>
                  </motion.div>

                  <span>powerful</span>
                </span>

                {/* Explicit space between 'powerful' and 'in every' */}
                <span> in every </span>

                {/* 'cup.' with Green Wave Sticker underneath */}
                <span className="relative inline-block">
                  <span>cup.</span>

                  {/* Sticker 3: NATURALLY VIBRANT */}
                  <motion.div
                    initial={{ rotate: -10, scale: 0.85, opacity: 0 }}
                    whileInView={{ rotate: -5, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 240, damping: 18 }}
                    whileHover={{ rotate: 0, scale: 1.08 }}
                    className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-[45%] z-20 cursor-pointer select-none"
                    title="Naturally Vibrant"
                  >
                    <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#4E9B28] border border-[#63B838]/60 shadow-md shadow-black/20 flex items-center justify-center">
                      <span className="font-sans-flex font-bold text-[8px] xs:text-[9px] sm:text-[10px] md:text-[10.5px] uppercase tracking-wider text-white whitespace-nowrap">
                        NATURALLY VIBRANT
                      </span>
                    </div>
                  </motion.div>
                </span>
              </div>
            </h2>
          </div>

          {/* BOTTOM NARRATIVE ROW: Iced Matcha Card + Copy Paragraph */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 md:gap-7">
            {/* Small Image Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-[140px] h-[140px] xs:w-[155px] xs:h-[155px] sm:w-[170px] sm:h-[170px] md:w-[180px] md:h-[180px] rounded-2xl md:rounded-[22px] overflow-hidden shadow-md shadow-black/10 shrink-0 bg-[#FCE5EE]"
            >
              <img
                src="https://res.cloudinary.com/dkev7ein3/image/upload/v1791093803/Iced_Matcha_with_Sakura_Blooms_gegq8r.png"
                alt="Iced Matcha with Sakura Blooms"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </motion.div>

            {/* Narrative Paragraph */}
            <p className="font-sans-flex text-[#555555] text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.65] font-normal max-w-sm sm:max-w-md">
              Pure matcha keeps things refreshingly simple. Whole tea leaves are finely ground into a vibrant powder, bringing their naturally occurring caffeine, L-theanine, and plant compounds directly into every cup.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default PureByNatureSection;

