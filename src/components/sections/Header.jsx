import React, { useState } from 'react';
import { Terminal, ArrowRight, Menu, X, Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { developer, navLinks } = portfolioData;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header class="sticky top-0 z-50 bg-neutral/95 backdrop-blur-md border-b border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-neutral-card border border-primary/40 flex items-center justify-center text-primary shadow-neon-cyan group-hover:border-primary transition duration-300">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-white flex items-center space-x-1.5">
              <span>დეველოპერი</span>
              <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse-slow"></span>
            </div>
            <p className="text-xs text-neutral-textMuted tracking-wider font-mono">
              {developer.title}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links (Centered Pills) */}
        <nav className="hidden md:flex items-center space-x-1.5 bg-neutral-card p-1.5 rounded-full border border-neutral-border shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-5 py-2 rounded-full text-xs font-medium transition duration-200 ${
                link.id === 'about'
                  ? 'bg-primary text-neutral font-semibold shadow-neon-cyan'
                  : 'text-gray-300 hover:text-white hover:bg-neutral-surface'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action & Avatar */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-neutral hover:bg-primary-hover hover:shadow-neon-cyan transition duration-300"
          >
            <span>დამიკავშირდით</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* User Avatar with Status indicator */}
          <div className="relative">
            <img
              src={developer.avatar}
              alt={developer.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-primary border-opacity-60 p-0.5"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-neutral shadow-neon-green"></span>
          </div>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-card border border-neutral-border text-gray-300 hover:text-primary hover:border-primary/50 cursor-pointer transition select-none shadow-card-glow"
          aria-label="მენიუს გახსნა"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-border bg-neutral-card px-5 py-6 space-y-6 shadow-2xl animate-fadeIn">
          {/* Profile Header in Mobile Menu */}
          <div className="flex items-center space-x-3.5 pb-4 border-b border-neutral-border">
            <div className="relative">
              <img
                src={developer.avatar}
                alt={developer.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary border-opacity-70 p-0.5 shadow-neon-cyan"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-secondary rounded-full border-2 border-neutral shadow-neon-green"></span>
            </div>
            <div>
              <div className="text-base font-bold text-white">{developer.name}</div>
              <div className="text-xs text-secondary font-medium flex items-center space-x-1.5 mt-0.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse-slow"></span>
                <span>{developer.title}</span>
              </div>
            </div>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-2 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-neutral-surface border border-neutral-border hover:border-primary/40 flex items-center justify-between transition"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary text-neutral hover:bg-primary-hover shadow-neon-cyan transition duration-200"
            >
              <span>დამიკავშირდით</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

