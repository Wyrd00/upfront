import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-paper/90 backdrop-blur-md py-4 border-b border-ink/10' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-sans text-sm tracking-wide uppercase">
          <a href="#process" className="hover:text-accent transition-colors">The Process</a>
          <a href="#vibe-check" className="hover:text-accent transition-colors">Digital Demo</a>
          <a href="#booking" className="bg-ink text-paper px-6 py-2 rounded-full hover:bg-accent transition-colors duration-300">
            Join Waitlist
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-paper border-b border-ink/10 p-6 flex flex-col gap-4 md:hidden shadow-xl">
           <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">The Process</a>
           <a href="#vibe-check" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Digital Demo</a>
           <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="text-accent font-bold font-serif">Join Waitlist</a>
        </div>
      )}
    </nav>
  );
};

export default Header;