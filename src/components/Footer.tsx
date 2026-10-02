import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 400);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreLinks = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'Ritual', href: '#ritual' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Journal', href: '#journal' },
  ];

  const aboutLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'From Leaf To Cup', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#182319] font-sans-flex overflow-x-clip selection:bg-[#E4F766] selection:text-[#182319]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 pt-10 sm:pt-14 md:pt-16">
        {/* MAIN TWO-COLUMN SPLIT GRID WITH PROPORTIONAL MIN-HEIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[540px] xl:min-h-[570px]">
          {/* =========================================
              LEFT COLUMN: Headline, Pill CTA, Newsletter
             ========================================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between pb-8 lg:pb-10 lg:pr-8 xl:pr-12 lg:border-r lg:border-[#E5E7EB]">
            {/* Top Group: Editorial Title & GET STARTED Button */}
            <div>
              {/* "matcha, made / part of every day." */}
              <div className="leading-[1.05] tracking-tight">
                <div className="text-[38px] xs:text-[44px] sm:text-[50px] md:text-[54px] lg:text-[48px] xl:text-[56px]">
                  <span className="font-playfair text-[#2F5824] font-medium mr-2">
                    matcha,
                  </span>
                  <span className="font-instrument-serif italic text-[#182319] font-normal">
                    made
                  </span>
                </div>
                <div className="font-instrument-serif italic text-[#182319] font-normal text-[38px] xs:text-[44px] sm:text-[50px] md:text-[54px] lg:text-[48px] xl:text-[56px]">
                  part of every day.
                </div>
              </div>

              {/* GET STARTED Pill Button */}
              <div className="mt-6 sm:mt-7">
                <button
                  type="button"
                  onClick={handleScrollToTop}
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#2F5824]/80 text-[#2F5824] uppercase font-bold text-xs sm:text-[14px] tracking-[0.12em] hover:bg-[#2F5824] hover:text-white transition-all duration-200 cursor-pointer shadow-none"
                >
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Bottom Group: Newsletter Signup with Balanced Spacing */}
            <div className="mt-16 sm:mt-20 lg:mt-24 xl:mt-28">
              <p className="font-outfit text-[#555555] text-[14px] sm:text-[15px] leading-[1.4] max-w-[340px]">
                Simple rituals, matcha notes, and fresh inspiration straight to your inbox.
              </p>

              {/* Embedded Pill Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="mt-4 max-w-[380px]">
                <div className="flex items-center p-1 pl-4 sm:pl-5 rounded-full border border-[#D1D5DB] focus-within:border-[#2F5824] bg-white transition-all">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    required
                    aria-label="Enter Your Email"
                    className="w-full bg-transparent border-none outline-none text-[#182319] text-[13px] sm:text-[14px] placeholder:text-[#9CA3AF] pr-2 font-sans-flex"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-4 sm:px-5 py-2.5 rounded-full bg-[#244E1D] hover:bg-[#1C3E16] text-white font-sans-flex text-[12px] sm:text-[13px] font-medium tracking-normal transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Join the Ritual
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[12px] text-[#2F5824] mt-2 font-medium animate-fadeIn">
                    ✓ Welcome to the ritual. You are now subscribed.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Nav Columns, Pink Socials, Giant 'wellness'
             ========================================= */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between pt-8 lg:pt-0 lg:pl-10 xl:pl-14">
            {/* Top Nav Columns Row: Explore, About, Social Media */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 xl:gap-14">
              {/* Column 1: Explore */}
              <div>
                <h4 className="font-sans-flex font-semibold text-[15px] sm:text-[16px] text-[#182319] mb-4">
                  Explore
                </h4>
                <ul className="space-y-2.5">
                  {exploreLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans-flex text-[14px] sm:text-[15px] text-[#666666] hover:text-[#182319] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: About */}
              <div>
                <h4 className="font-sans-flex font-semibold text-[15px] sm:text-[16px] text-[#182319] mb-4">
                  About
                </h4>
                <ul className="space-y-2.5">
                  {aboutLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans-flex text-[14px] sm:text-[15px] text-[#666666] hover:text-[#182319] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Social Media with Circular Pink Buttons */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-sans-flex font-semibold text-[15px] sm:text-[16px] text-[#182319] mb-4">
                  Social Media
                </h4>
                <div className="flex items-center gap-3">
                  {/* Instagram Pink Circle */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCE6EE] hover:bg-[#F9D2DF] text-[#182319] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* TikTok Pink Circle */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCE6EE] hover:bg-[#F9D2DF] text-[#182319] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V8.58a8.27 8.27 0 0 0 4.77 1.52v-3.41z" />
                    </svg>
                  </a>

                  {/* Pinterest Pink Circle */}
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCE6EE] hover:bg-[#F9D2DF] text-[#182319] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.368-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Giant 'wellness' Display Typography
                - Mobile: Wide and responsive within screen margins (the final 's' stays cleanly inside)
                - Desktop (lg+): Broad editorial scale with right bleed matching the original Dribbble mockup
                - Generous line-height and bottom padding ensure no serifs/descenders are clipped by bg-clip-text */}
            <div className="relative w-full lg:w-[109%] xl:w-[112%] lg:-mr-12 xl:-mr-16 mt-8 sm:mt-10 lg:mt-12 select-none overflow-visible">
              <h1 className="font-playfair font-normal leading-[0.88] tracking-[-0.03em] bg-gradient-to-b from-[#0A0A0A] via-[#242424] via-45% to-[#959A9F] bg-clip-text text-transparent pb-5 sm:pb-7 md:pb-9 lg:pb-12 whitespace-nowrap text-[24vw] sm:text-[19vw] md:text-[16vw] lg:text-[185px] xl:text-[222px] 2xl:text-[252px] inline-block pointer-events-none">
                wellness
              </h1>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR: Copyright, Cookie Preferences, Privacy Policy
           ========================================= */}
        <div className="border-t border-[#E5E7EB] py-6 sm:py-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column Bottom: Copyright */}
            <div className="lg:col-span-5 xl:col-span-4 lg:pr-8 xl:pr-12 text-[13px] sm:text-[14px] text-[#666666] font-sans-flex">
              © 2026 MORI | all rights reserved
            </div>

            {/* Right Column Bottom: Cookie Preferences & Privacy Policy */}
            <div className="lg:col-span-7 xl:col-span-8 lg:pl-10 xl:pl-14 flex items-center justify-between mt-3 lg:mt-0 text-[13px] sm:text-[14px] text-[#666666] font-sans-flex">
              <a
                href="#cookies"
                className="hover:text-[#182319] transition-colors"
              >
                Cookie Preferences
              </a>
              <a
                href="#privacy"
                className="hover:text-[#182319] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
