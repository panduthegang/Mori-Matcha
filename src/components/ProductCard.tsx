import React from 'react';
import { motion } from 'motion/react';

export interface ProductCardProps {
  id?: string;
  title: string;
  subtitle: string;
  image: string;
  alt?: string;
  onExplore?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  image,
  alt,
  onExplore,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative w-full max-w-sm md:max-w-none mx-auto bg-[#FFFFFF] rounded-[24px] sm:rounded-[26px] md:rounded-[28px] p-3.5 sm:p-4.5 md:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-[#182319]/8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(0,0,0,0.1)] cursor-pointer select-none"
    >
      {/* Header: Title + Subtitle */}
      <div className="text-center pt-2 sm:pt-2.5 pb-1">
        <h3 className="font-sans-flex font-bold text-[15px] sm:text-[16px] md:text-[17px] tracking-[0.08em] text-[#182319] uppercase">
          {title}
        </h3>
        <p className="font-sans-flex text-[12.5px] sm:text-[13px] md:text-[13.5px] text-[#555555] font-normal mt-0.5">
          {subtitle}
        </p>
      </div>

      {/* Image Container with Soft Pink Background & Curved Corners */}
      <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.7] my-3 sm:my-3.5 rounded-[18px] sm:rounded-[20px] md:rounded-[22px] overflow-hidden bg-[#FCE6EF]">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Bottom Action: EXPLORE Pill Button */}
      <div className="pt-1 pb-1">
        <button
          type="button"
          onClick={onExplore}
          className="w-full py-2.5 sm:py-3 rounded-full border border-[#2F5824]/80 text-[#2F5824] uppercase font-bold text-xs sm:text-[12.5px] tracking-[0.14em] font-sans-flex transition-all duration-300 group-hover:bg-[#2F5824] group-hover:text-white cursor-pointer active:scale-98"
        >
          EXPLORE
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
