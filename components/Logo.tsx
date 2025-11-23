import React from 'react';

export const Logo: React.FC<{ className?: string, light?: boolean }> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon: Editorial Slashes - representing 'The Cut', 'Side Note' or 'Direct Commentary' */}
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={light ? "text-paper" : "text-accent"}>
        <path d="M8 26L16 6" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
        <path d="M16 26L24 6" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
      </svg>
      <span className={`font-serif font-bold text-3xl tracking-tight lowercase ${light ? "text-paper" : "text-ink"}`}>
        upfront.
      </span>
    </div>
  );
};

export default Logo;