import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export interface NavbarProps {
  onStartRitual?: () => void;
  activeNav?: string;
  onNavChange?: (item: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartRitual,
  activeNav: controlledActiveNav,
  onNavChange,
}) => {
  const [internalActiveNav, setInternalActiveNav] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Smart buttery scroll state
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Small threshold to ignore micro-jitters
      if (Math.abs(scrollDelta) > 5) {
        if (currentScrollY <= 46) {
          // At the very top: dock back in natural place below pink banner
          setIsVisible(true);
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
          if (scrollDelta < 0) {
            // Scrolling UP: slide down white navbar like butter
            setIsVisible(true);
          } else if (scrollDelta > 0 && !mobileMenuOpen) {
            // Scrolling DOWN: slide up out of sight
            setIsVisible(false);
          }
        }
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  const activeNav = controlledActiveNav ?? internalActiveNav;

  const handleNavSelect = (item: string) => {
    setInternalActiveNav(item);
    if (onNavChange) {
      onNavChange(item);
    }
  };

  const navItems = ['HOME', 'BENEFITS', 'RITUAL', 'RECIPES', 'JOURNAL'];

  return (
    <div className="w-full flex flex-col font-sans-flex text-[#182319] selection:bg-[#E4F766] selection:text-[#182319] antialiased">
      {/* 1. TOP ANNOUNCEMENT TICKER (PINK) */}
      <div className="w-full bg-[#FEE3EE] py-3 px-4 overflow-hidden border-b border-[#182319]/10 select-none">
        {/* Desktop Centered Static Row */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[14px] xl:text-[15px] font-semibold tracking-[0.14em] text-[#182319] uppercase">
          <span>PURE MATCHA</span>
          <span className="text-[#182319]/60 text-lg leading-none">•</span>
          <span>STEADY ENERGY</span>
          <span className="text-[#182319]/60 text-lg leading-none">•</span>
          <span>CALM FOCUS</span>
          <span className="text-[#182319]/60 text-lg leading-none">•</span>
          <span>DAILY BALANCE</span>
          <span className="text-[#182319]/60 text-lg leading-none">•</span>
          <span>CLEAN RITUAL</span>
          <span className="text-[#182319]/60 text-lg leading-none">•</span>
          <span>EVERYDAY WELLNESS</span>
        </div>

        {/* Mobile / Tablet Marquee */}
        <div className="flex lg:hidden overflow-hidden w-full whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-6 text-[12px] sm:text-[13px] font-semibold tracking-[0.15em] text-[#182319] uppercase">
            <span>PURE MATCHA</span>
            <span>•</span>
            <span>STEADY ENERGY</span>
            <span>•</span>
            <span>CALM FOCUS</span>
            <span>•</span>
            <span>DAILY BALANCE</span>
            <span>•</span>
            <span>CLEAN RITUAL</span>
            <span>•</span>
            <span>EVERYDAY WELLNESS</span>
            <span className="mx-3">•</span>
            <span>PURE MATCHA</span>
            <span>•</span>
            <span>STEADY ENERGY</span>
            <span>•</span>
            <span>CALM FOCUS</span>
            <span>•</span>
            <span>DAILY BALANCE</span>
            <span>•</span>
            <span>CLEAN RITUAL</span>
            <span>•</span>
            <span>EVERYDAY WELLNESS</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION (WHITE) */}
      {/* Wrapper to maintain height in page flow preventing any layout shifts or hero image clipping */}
      <div className="w-full h-[58px] sm:h-[64px] md:h-[70px] relative">
        <motion.div
          initial={false}
          animate={{
            y: isScrolled ? (isVisible ? 0 : -100) : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1], // Butter-smooth Apple-grade ease
          }}
          className={`transition-[border-radius,box-shadow,background-color,border-color,inset] duration-300 ${
            isScrolled
              ? 'fixed top-2.5 sm:top-3.5 inset-x-3 sm:inset-x-5 md:inset-x-8 max-w-[1400px] mx-auto z-50 bg-[#FFFFFF]/92 backdrop-blur-md shadow-md shadow-black/8 border border-[#182319]/15 rounded-full'
              : 'relative z-20 bg-[#FFFFFF] w-full rounded-none border-none shadow-none'
          }`}
        >
          <header className={`w-full flex items-center justify-between gap-3 transition-all duration-300 ${
            isScrolled
              ? 'px-4 sm:px-6 md:px-7 py-1.5 sm:py-2'
              : 'px-3.5 sm:px-5 md:px-6 py-2.5 sm:py-3'
          }`}>
            {/* Brand Logo: clover icon + MORI in #3A5523 */}
            <div 
              onClick={() => handleNavSelect('HOME')} 
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#3A5523] transition-transform duration-300 group-hover:scale-105 shrink-0">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full">
                  <circle cx="11.5" cy="11.5" r="5" />
                  <circle cx="20.5" cy="11.5" r="5" />
                  <circle cx="11.5" cy="20.5" r="5" />
                  <circle cx="20.5" cy="20.5" r="5" />
                  <circle cx="16" cy="16" r="3.2" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="font-sans-flex font-black text-2xl sm:text-[28px] md:text-[30px] tracking-[-0.03em] text-[#3A5523] uppercase leading-none select-none">
                MORI
              </span>
            </div>

            {/* Center Nav Links with Animated Active Pill Indicator */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3.5 xl:gap-5">
              {navItems.map((item) => {
                const isActive = activeNav === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleNavSelect(item)}
                    className={`relative h-[38px] inline-flex items-center justify-center cursor-pointer transition-all duration-200 select-none focus:outline-none ${
                      isActive
                        ? 'pl-[46px] pr-[28px] text-[#223824] font-bold'
                        : 'px-3 sm:px-3.5 text-[#182319] hover:text-[#182319]/70 font-semibold'
                    }`}
                    aria-label={item}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 w-full h-[36px] my-auto pointer-events-none"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 30,
                          mass: 0.8,
                        }}
                      >
                        <div className="w-full h-full flex items-center">
                          {/* Left bulb and neck (fixed aspect ratio, stays a perfect circle without distortion) */}
                          <svg width="34" height="36" viewBox="0 0 34 36" fill="none" className="shrink-0 block">
                            <path
                              d="M 34 4
                                 C 27 4, 23 16, 20.5 16
                                 C 16.5 16, 15 11, 10 11
                                 C 5.58 11, 2 14.14, 2 18
                                 C 2 21.86, 5.58 25, 10 25
                                 C 15 25, 16.5 20, 20.5 20
                                 C 23 20, 27 32, 34 32"
                              stroke="#223824"
                              strokeWidth="1.3"
                              fill="none"
                            />
                          </svg>
                          {/* Middle horizontal lines (dynamically expands to fit any word length) */}
                          <svg className="flex-1 h-[36px] min-w-0 block" preserveAspectRatio="none" viewBox="0 0 10 36" fill="none">
                            <line x1="0" y1="4" x2="10" y2="4" stroke="#223824" strokeWidth="1.3" />
                            <line x1="0" y1="32" x2="10" y2="32" stroke="#223824" strokeWidth="1.3" />
                          </svg>
                          {/* Right rounded capsule cap (fixed aspect ratio, stays a pure semicircle) */}
                          <svg width="16" height="36" viewBox="0 0 16 36" fill="none" className="shrink-0 block">
                            <path
                              d="M 0 4
                                 C 8 4, 14 10, 14 18
                                 C 14 26, 8 32, 0 32"
                              stroke="#223824"
                              strokeWidth="1.3"
                              fill="none"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    )}
                    <span className="relative z-10 text-[14px] lg:text-[15px] tracking-[0.05em] uppercase">
                      {item}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action: START YOUR RITUAL & Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onStartRitual}
                className="hidden sm:inline-flex group relative items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full border-[1.5px] border-[#182319] text-xs sm:text-[13px] md:text-[14px] font-bold tracking-[0.14em] text-[#182319] bg-transparent transition-all duration-300 hover:bg-[#182319] hover:text-[#FFFFFF] cursor-pointer active:scale-95 shadow-xs whitespace-nowrap shrink-0"
              >
                <span>START YOUR RITUAL</span>
              </button>

              {/* Mobile hamburger menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full border border-[#182319]/25 text-[#182319] hover:bg-black/5 active:scale-95 transition-all flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </header>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -4 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -4 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className={`md:hidden px-4 sm:px-6 py-4 bg-[#FFFFFF] flex flex-col gap-2 z-30 shadow-lg ${
                  isScrolled
                    ? 'mt-2 rounded-2xl border border-[#182319]/15'
                    : 'border-b border-[#182319]/15 rounded-none'
                }`}
              >
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      handleNavSelect(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2.5 px-4 text-left text-xs font-bold tracking-[0.14em] rounded-full transition-colors ${
                      activeNav === item
                        ? 'bg-[#182319] text-[#FFFFFF]'
                        : 'text-[#182319] hover:bg-black/5'
                    }`}
                  >
                    {item}
                  </button>
                ))}

                {/* Prominent Mobile CTA */}
                <div className="pt-2 mt-1 border-t border-[#182319]/10">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onStartRitual) onStartRitual();
                    }}
                    className="w-full py-3 rounded-full bg-[#182319] hover:bg-[#2A3B2B] text-white font-sans-flex font-bold text-xs uppercase tracking-[0.14em] transition-all cursor-pointer active:scale-98 shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>START YOUR RITUAL</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
