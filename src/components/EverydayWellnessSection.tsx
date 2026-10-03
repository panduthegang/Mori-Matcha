import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BenefitCardItem {
  id: string;
  title: string;
  description: string;
  renderIcon: (isActive: boolean) => React.ReactNode;
}

interface CarouselSlideItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const carouselSlides: CarouselSlideItem[] = [
  {
    id: 'whisk',
    title: 'Ceremonial Whisking',
    subtitle: 'Bamboo chasen frothing vibrant green matcha',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1791039730/Whisk-1_fimcde.png',
  },
  {
    id: 'iced',
    title: 'Pure Iced Matcha',
    subtitle: 'Refreshing clarity over crystal ice cubes',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1791039731/Ice_Matcha_wyv5qa.png',
  },
  {
    id: 'latte',
    title: 'Silky Matcha Latte',
    subtitle: 'Velvety botanical calm for mindful pauses',
    imageUrl: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1791039732/Matcha_Latte_ziffdm.png',
  },
];

export const EverydayWellnessSection: React.FC = () => {
  const [hoveredCardId, setHoveredCardId] = useState<string>('morning');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  };

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
        className="relative w-full rounded-xl sm:rounded-2xl md:rounded-[20px] overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-10 pb-6 sm:pb-8 md:pb-10 bg-cover bg-center select-none"
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
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-7 pb-5 sm:pb-7 md:pb-8">
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

          {/* RIGHT: Large Circular Carousel Navigation Arrows (← / →) matching design */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 pt-1 lg:pt-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous wellness highlight"
              className="w-13 h-13 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full bg-[#526853]/85 hover:bg-[#526853] active:scale-95 transition-all duration-200 flex items-center justify-center text-white backdrop-blur-md shadow-lg shadow-black/25 cursor-pointer group"
            >
              <ArrowLeft className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next wellness highlight"
              className="w-13 h-13 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full bg-[#95A596] hover:bg-[#A3B4A4] active:scale-95 transition-all duration-200 flex items-center justify-center text-[#182319] backdrop-blur-md shadow-lg shadow-black/25 cursor-pointer group"
            >
              <ArrowRight className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* ==============================================================
            LOWER CONTENT GRID
            - Left: 2x2 Wellness Benefit Cards (Interactive Active State)
            - Right: Media Showcase Carousel Card (Tall Long Portrait Cards)
           ============================================================== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pt-2 sm:pt-4">
          {/* LEFT: 2x2 Wellness Benefit Cards */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end">
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-4.5"
              onMouseLeave={() => setHoveredCardId('morning')}
            >
              {benefitCards.map((card) => {
                const isHovered = hoveredCardId === card.id;

                return (
                  <motion.div
                    key={card.id}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onClick={() => setHoveredCardId(card.id)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`relative text-left p-4 sm:p-4.5 md:p-5 rounded-[18px] sm:rounded-[22px] md:rounded-[24px] transition-all duration-300 ease-out cursor-pointer select-none flex flex-col justify-between min-h-[145px] sm:min-h-[160px] md:min-h-[175px] ${
                      isHovered
                        ? 'bg-[#FFFFFF] text-[#182319] shadow-[0_16px_40px_rgba(0,0,0,0.28)] border-transparent'
                        : 'bg-[#15341A]/50 hover:bg-[#15341A]/75 text-white backdrop-blur-md border border-white/10 shadow-none'
                    }`}
                  >
                    {/* Top: Icon Badge */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full flex items-center justify-center transition-colors duration-300 ease-out mb-3 sm:mb-4 md:mb-5 ${
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

          {/* RIGHT: Media Showcase Carousel with buttery smooth pan/swipe */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-end overflow-hidden">
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[490px] lg:h-[520px] xl:h-[540px] rounded-[24px] sm:rounded-[28px] md:rounded-[34px] overflow-hidden touch-pan-y">
              <motion.div
                className="flex h-full gap-3.5 sm:gap-5 md:gap-6 cursor-grab active:cursor-grabbing select-none"
                animate={{
                  x: isMobile
                    ? `calc(-${currentSlide} * (84% + 14px))`
                    : `calc(-${currentSlide} * (64% + 20px))`,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onPanEnd={(_, info) => {
                  const swipeThreshold = 35;
                  if (info.offset.x < -swipeThreshold) {
                    handleNext();
                  } else if (info.offset.x > swipeThreshold) {
                    handlePrev();
                  }
                }}
              >
                {carouselSlides.map((slide, index) => {
                  const isCurrent = currentSlide === index;

                  return (
                    <div
                      key={slide.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative w-[84%] sm:w-[74%] md:w-[68%] lg:w-[64%] h-full shrink-0 rounded-[24px] sm:rounded-[28px] md:rounded-[34px] overflow-hidden transition-all duration-500 cursor-pointer shadow-2xl shadow-black/50 group touch-pan-y ${
                        isCurrent
                          ? 'opacity-100 ring-2 ring-white/20'
                          : 'opacity-70 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                        loading="lazy"
                        draggable={false}
                      />
                      {/* Subtle bottom shadow vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B0D]/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverydayWellnessSection;
